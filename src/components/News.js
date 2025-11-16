import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    setarticles(parsedata.articles);
    setLoading(false);
  };

  useEffect(() => {
    updateNews();
  }, []);

  return (
    <>
      <h1 className="text-center" style={{ margin: "35px 0px" }}>
        News Monkey
      </h1>
      {loading && <Spinner />}
      <div className="container">
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4">
                <NewsItem
                  title={element.title}
                  description={element.description}
                  image={element.urlToImage}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default News;
