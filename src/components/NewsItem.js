import React from "react";
import { Link } from "react-router-dom";

const NewsItem = (props) => {
  let { title, description, image } = props;
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={
            !image
              ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
              : image
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to="#" className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
