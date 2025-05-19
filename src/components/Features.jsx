import { useState } from "react";
import feature1 from "../assets/images/illustration-features-tab-1.svg";
import feature2 from "../assets/images/illustration-features-tab-2.svg";
import feature3 from "../assets/images/illustration-features-tab-3.svg";
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

const Features = () => {
  const [currentCategory, setCurrentCategory] = useState("simple bookmarking");

  const handleCategoryChange = (categoryTitle) => {
    const category = categoryTitle.toLowerCase();
    setCurrentCategory(category);

    if (category === "simple bookmarking") {
    } else if (category === "speedy researching") {
    } else if (category === "easy sharing") {
    }
  };

  return (
    <section className="features">
      <h3>Features</h3>
      <p>
        Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your
        devices so you can access them on the go.
      </p>
      <ul className="features__categories">
        {categories.map((cat, i) => (
          <li key={i} onClick={() => handleCategoryChange(cat.title)}>
            <div className={currentCategory === cat.title ? "active" : ""}>{cat.title}</div>
          </li>
        ))}
      </ul>

      {categories.slice(0, 1).map((cat, i) => (
        <div key={i} className="features__category-extended">
          <div className="features__category-extended__image">
            <img src={cat.img} alt="feature img" />
          </div>
          <h3>{cat.heading}</h3>
          <p>{cat.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
