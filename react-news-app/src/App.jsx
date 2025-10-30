import React, { useEffect, useState } from "react";
import axios from "axios";
import CategorySelector from "./components/CategorySelector";
import NewsList from "./components/NewsList";
import Pagination from "./components/Pagination";

const App = () => {
  const [news, setnews] = useState([]);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);
  const [category, setcategory] = useState("general");
  const [currentPage, setcurrentPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  const [totalPages, settotalPages] = useState(1);

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  const PAGE_SIZE = 20; // Number of articles per page

  const fetchNews = async () => {
    setloading(true);
    seterror(null);
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${currentPage}&pageSize=${PAGE_SIZE}&apiKey=${API_KEY}` //this is template literal
      );
      console.log("res =>", res.data);
      const articles = res.data.articles || [];
      setnews(articles);
      settotalResults(res.data.totalResults || 0); // total number of articles
      settotalPages(Math.ceil((res.data.totalResults || 0) / PAGE_SIZE)); // total number of pages // 45/20 = 2.25 => 3
    } catch (error) {
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category, currentPage]); //fetch news when category or currentPage changes

  const handleCategoryChange = (newCategory) => {
    setcategory(newCategory);
    setcurrentPage(1); // Reset to first page when category changes
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      setcurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="min-h-screen bg-base-200">
      <header className="bg-primary text-primary-content p-4 ">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">News App</h1>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <div className="mb-6">
          <CategorySelector
            category={category}
            onCategoryChange={handleCategoryChange}
          />
        </div>
        <div className="mb-6 text-center">
          <p className="text-lg">Total results: {totalResults}</p>
        </div>

        {loading && (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
        {error && <div className="alert alert-error">{error}</div>}
        {!loading && !error && (
          <>
            <NewsList articles={news} />
            {totalPages > 1 && (
              <div className="join flex justify-center mt-4">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPrev={handlePrev}
                  onNext={handleNext}
                />
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default App;
