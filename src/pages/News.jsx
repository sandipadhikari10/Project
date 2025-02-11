import React from "react";

const newsArticles = [
  {
    id: 1,
    title: "NRNACA Hosts Annual Community Event",
    date: "February 10, 2025",
    summary:
      "NRNACA successfully organized its annual community event, bringing together members to discuss future projects and initiatives.",
    image: "src/assets/members/bg2.png",
  },
  {
    id: 2,
    title: "New Initiatives for Nepali Diaspora",
    date: "January 28, 2025",
    summary:
      "A new initiative has been launched to support Nepali entrepreneurs abroad with funding and networking opportunities.",
    image: "src/assets/members/bg2.png",
  },
  {
    id: 3,
    title: "Scholarship Program Announced",
    date: "January 15, 2025",
    summary:
      "NRNACA has introduced a scholarship program to support Nepali students pursuing higher education in North America.",
    image: "src/assets/members/bg2.png",
  },
];

const News = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#0884dc] font-[vollkorn] mb-6 text-center">
        Latest News & Updates
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArticles.map((news) => (
          <div
            key={news.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {news.title}
              </h2>
              <p className="text-sm text-gray-500">{news.date}</p>
              <p className="text-gray-600 mt-2">{news.summary}</p>
              <button className="mt-3 text-[#0884dc] font-semibold hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
