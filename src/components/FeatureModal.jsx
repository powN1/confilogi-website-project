import { useEffect, useRef, useState } from "react";
import feature1 from "../assets/images/illustration-features-tab-1.svg";
import feature2 from "../assets/images/illustration-features-tab-2.svg";
import feature3 from "../assets/images/illustration-features-tab-3.svg";
import closeIcon from "../assets/images/icon-close.svg";

const categories = [
  {
    title: "simple bookmarking",
    heading: "Bookmark in one click",
    text: `Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`,
    img: feature1,
  },
  {
    title: "speedy researching",
    heading: "Intelligent research",
    text: `Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.`,
    img: feature2,
  },
  {
    title: "easy sharing",
    heading: "Share your bookmarks",
    text: `Easily share your bookmarks and collections with others. Creat a shareable link that you can send at the click of the button.`,
    img: feature3,
  },
];

const FeatureModal = () => {
  const [showFeatureModal, setShowFeatureModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [manualClose, setManualClose] = useState(false);
  const closeTimestampRef = useRef(null);

  const handleCategoryChange = (categoryTitle) => {
    const category = categories.find((cat) => cat.title === categoryTitle.toLowerCase());
    setCurrentCategory(category);
  };

  const handleShowFeatureModal = () => {
    setShowFeatureModal(false);
    setManualClose(true);
    closeTimestampRef.current = Date.now();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFeatureModal(true);
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const topThreshold = window.innerHeight * 0.1;

      const now = Date.now();
      const justClosed = manualClose && closeTimestampRef.current && now - closeTimestampRef.current < 3000;

      if (e.clientY <= topThreshold && !showFeatureModal && !justClosed) {
        setShowFeatureModal(true);
        setManualClose(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [showFeatureModal, manualClose]);

  useEffect(() => {
    // Disable scrolling when mobile menu is open
    if (showFeatureModal) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "visible";
      document.body.style.position = "";
      document.body.style.width = "";
    }
  }, [showFeatureModal]);

  return (
    showFeatureModal && (
      <section className="feature-modal">
        <button className="feature-modal__close" onClick={handleShowFeatureModal}>
          <img src={closeIcon} alt="closeIcon" />
        </button>
        <div className="feature-modal__container">
          <ul className="features-modal__container__categories">
            {categories.map((cat, i) => (
              <li key={i} onClick={() => handleCategoryChange(cat.title)}>
                <div className={currentCategory.title === cat.title ? "active" : ""}>{cat.title}</div>
              </li>
            ))}
          </ul>

          <div className="feature-modal__container__category-extended">
            <div className="feature-modal__container__category-extended__image">
              <img src={currentCategory.img} alt="feature img" />
            </div>
            <div className="feature-modal__container__category-extended__details">
              <h3>{currentCategory.heading}</h3>
              <p>{currentCategory.text}</p>
              <button>More Info</button>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default FeatureModal;
