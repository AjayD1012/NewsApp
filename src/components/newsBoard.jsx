import { useEffect, useState } from "react";
import NewsItem from "./newsItem";

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const fetchNews = async () => {
            try {
                if (!apiKey) {
                    throw new Error("API key is missing");
                }

                const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                
                if (data.articles) {
                    setArticles(data.articles);
                } else {
                    console.error('No articles found in the response:', data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchNews();
    }, [category]);

    return (
        <div>
            <h1 className="text-center">Latest <span className="badge bg-danger text-light">News</span></h1>
            {articles.map((news, index) => (
                <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            ))}
        </div>
    );
};

export default NewsBoard;
