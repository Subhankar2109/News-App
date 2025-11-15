import React from "react";
import NewsItem from "./NewsItem";

const News = (props) => {
  //   const updateNews =
  return (
    <>
      <h1 className="text-center" style={{ margin: "35px 0px" }}>
        News Monkey
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <NewsItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
