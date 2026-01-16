"use client";

import { useEffect, useState } from "react";
import type { Metadata } from "next";

interface NewsArticle {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  source: string;
  categories: string[];
}

export default function NewsPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('/api/news');
        const data = await response.json();

        if (data.success) {
          setArticles(data.articles);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching news:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getCategoryColor = (categories: string[]) => {
    const categoryStr = categories.join(' ').toLowerCase();

    if (categoryStr.includes('black stars') || categoryStr.includes('national')) {
      return 'bg-green-100 text-green-800';
    }
    if (categoryStr.includes('premier league') || categoryStr.includes('gpl')) {
      return 'bg-blue-100 text-blue-800';
    }
    if (categoryStr.includes('kotoko') || categoryStr.includes('hearts')) {
      return 'bg-red-100 text-red-800';
    }
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <div>
      <section className="bg-primary-600 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'Playfair Display'}}>
              Ghana Football News
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Latest updates from Ghana FA, GPL, and football news across the nation
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {loading && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary-600 border-t-transparent"></div>
                <p className="mt-4 text-gray-600">Loading latest news...</p>
              </div>
            )}

            {error && (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">Unable to load news at the moment. Please try again later.</p>
              </div>
            )}

            {!loading && !error && articles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No news articles found.</p>
              </div>
            )}

            {!loading && !error && articles.length > 0 && (
              <div className="space-y-6">
                {articles.map((article, index) => (
                  <article
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <time className="text-sm text-gray-500 font-medium">
                        {formatDate(article.pubDate)}
                      </time>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs font-semibold text-primary-600">
                        {article.source}
                      </span>
                      {article.categories.length > 0 && (
                        <>
                          <span className="text-xs text-gray-400">•</span>
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(article.categories)}`}>
                            {article.categories[0]}
                          </span>
                        </>
                      )}
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight" style={{fontFamily: 'Playfair Display'}}>
                      {article.title}
                    </h2>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.contentSnippet}
                    </p>

                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center group"
                    >
                      Read Full Article
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </a>
                  </article>
                ))}
              </div>
            )}

            <div className="mt-12 text-center bg-white border border-gray-200 rounded-2xl p-8">
              <p className="text-gray-600 mb-4 text-lg">
                Stay updated with NASSU campaigns and victories
              </p>
              <a href="/membership" className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200">
                Join NASSU Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
