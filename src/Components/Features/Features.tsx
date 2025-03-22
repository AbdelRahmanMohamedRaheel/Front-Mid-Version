import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Features() {
  const [activeCategory, setActiveCategory] = useState("all"); // Track active category
  const allArticles = [
    { id: 1, title: "Science Says the Best Way to Score a Date Is Your Manicure Color—No, Really", author: "Reviewed by Sabrina Romanoff, PsyD", image: "/photo1.webp", category: "Behavioral Psychology" },
    { id: 2, title: "The Fiedler Contingency Model: Matching Leadership Style to the Situation", author: "By Cynthia Vinney, PhD", image: "/photo2.webp", category: "Social Psychology" },
    { id: 3, title: "Science Says the Best Way to Score a Date Is Your Manicure Color—No, Really", author: "Reviewed by Sabrina Romanoff, PsyD", image: "/photo3.webp", category: "Behavioral Psychology" },
    { id: 4, title: "How to Spot and Avoid the Slippery Slope Fallacy in Everyday Conversations", author: "Reviewed by Sabrina Romanoff, PsyD", image: "/photo4.webp", category: "Anxiety" },
    { id: 5, title: "Taking a Closer Look at Sexual Sadism", author: "Medically reviewed by Rachel Goldman, PhD, FTOS", image: "/photo5.webp", category: "Depression" },
    { id: 6, title: "Critical Period in Brain Development: Definition, Importance", author: "By Toketemu Ohwovoriole", image: "/photo6.webp", category: "Behavioral Psychology" },
    { id: 7, title: "Understanding the Biopsychosocial Model of Health and Wellness", author: "Medically reviewed by Steven Gans, MD", image: "/photo7.webp", category: "Anxiety" },
    { id: 8, title: "How the Madonna-Whore Complex Affects Men's and Women's Mental Health", author: "Reviewed by Ivy Kwong, LMFT", image: "/photo8.webp", category: "Depression" },
    { id: 9, title: "Autonomy in Psychology—What It Means and How to Be More Autonomous", author: "Reviewed by Daniel B. Block, MD", image: "/photo9.webp", category: "Behavioral Psychology" },
    { id: 10, title: "Ethnocentrism in Psychology: Definitions, Examples, and How to Combat Biases", author: "Reviewed by Akeem Marsh, MD", image: "/photo10.webp", category: "Social Psychology" },
    { id: 11, title: "Understanding Cultural Relativism and Its Importance", author: "Reviewed by Akeem Marsh, MD", image: "/photo11.webp", category: "Anxiety" },
    { id: 12, title: "Information Processing Theory in Psychology", author: "Reviewed by Daniel B. Block, MD", image: "/photo12.webp", category: "Depression" },
    { id: 13, title: "Temperaments: Which of the 4 Types Are You?", author: "Reviewed by Sabrina Romanoff, PsyD", image: "/photo13.webp", category: "Behavioral Psychology" },
    { id: 14, title: "What Is Objective Morality?", author: "Reviewed by Ivy Kwong, LMFT", image: "/photo14.webp", category: "Social Psychology" },
    { id: 15, title: "Daddy Issues: Psychology, Causes, Signs, Treatment", author: "Reviewed by Daniel B. Block, MD", image: "/photo15.webp", category: "Anxiety" },
    { id: 16, title: "What Is Reaction Formation?", author: "Reviewed by Rachel Goldman, PhD, FTOS", image: "/photo16.webp", category: "Depression" },
    { id: 17, title: "What to Know About The Uncanny Valley", author: "Fact checked by Cara Lustik", image: "/photo17.webp", category: "Behavioral Psychology" },
    { id: 18, title: "Dependent Personality Disorder Signs and Symptoms", author: "Medically reviewed by Daniel B. Block, MD", image: "/photo18.webp", category: "Social Psychology" }
  ];

  // Pre-categorize articles for quick access
  const categorizedArticles = {
    all: allArticles,
    behavioral: allArticles.filter(article => article.category === "Behavioral Psychology").slice(0, 3),
    social: allArticles.filter(article => article.category === "Social Psychology").slice(0, 3),
    anxiety: allArticles.filter(article => article.category === "Anxiety").slice(0, 7),
    depression: allArticles.filter(article => article.category === "Depression").slice(0, 5)
  };

  useEffect(() => {
    document.title = "Awareness & Tips";
  }, []);

  return (
    <>
      <div className='min-h-screen bg-[url("bg-image.jpg")] h-screen bg-cover bg-center'>
        <div className="pt-8 ps-15 ">
          <div>
            <p className="text-[#257f69] uppercase text-[14px] font-bold">
              Psychology
            </p>
            <h1 className="text-[#13404F] text-[52px] font-bold ">
              Explore Theories of Mental Health
            </h1>
          </div>
          {/* buttons */}
          <div className="mt-2.5">
            <button
              type="button"
              className="border font-extrabold rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 border-[#257f69] text-[#257f69] hover:text-white hover:bg-green-600 focus:ring-green-800"
              onClick={() => setActiveCategory("all")}
            >
              All
            </button>
            <button
              type="button"
              className="border font-extrabold rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 border-[#257f69] text-[#257f69] hover:text-white hover:bg-green-600 focus:ring-green-800"
              onClick={() => setActiveCategory("behavioral")}
            >
              Behavioral Psychology
            </button>
            <button
              type="button"
              className="border font-extrabold rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 border-[#257f69] text-[#257f69] hover:text-white hover:bg-green-600 focus:ring-green-800"
              onClick={() => setActiveCategory("social")}
            >
              Social Psychology
            </button>
            <button
              type="button"
              className="border font-extrabold rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 border-[#257f69] text-[#257f69] hover:text-white hover:bg-green-600 focus:ring-green-800"
              onClick={() => setActiveCategory("anxiety")}
            >
              Anxiety
            </button>
            <button
              type="button"
              className="border font-extrabold rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 border-[#257f69] text-[#257f69] hover:text-white hover:bg-green-600 focus:ring-green-800"
              onClick={() => setActiveCategory("depression")}
            >
              Depression
            </button>
          </div>
          {/* cards */}
          <div className="flex flex-wrap gap-4 mt-5 pb-10">
            {categorizedArticles[activeCategory].map(article => (
              <Link to={`/theory${article.id}`} key={article.id} className="max-w-sm w-1/3 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer group overflow-hidden">
                <div className="overflow-hidden">
                  <img className="rounded-t-lg h-55 object-cover w-full transition-transform duration-1000 group-hover:scale-110" src={article.image} alt={article.title} />
                </div>
                <div className="p-3">
                  <p className="uppercase text-[12px] font-extrabold text-[#257F69]">Theories</p>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 group-hover:text-red-500">
                    {article.title}
                  </h5>
                  <p className="text-[12px] font-normal text-gray-700">{article.author}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}