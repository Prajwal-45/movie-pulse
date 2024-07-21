import React from "react";
import "./SeriesList.css";

export default function SeriesList(props) {
  const { id, img_url, name, rating, genre, cast, watch_url, description } =
    props.data;

    const cssAsPerRatings=rating > 8.5 ? "hit" : rating<5?"low":"average";

  return (
    <>
      <li key={id}>
        <div width="20%" height="20%">
          <img src={img_url} alt={id} width="30%" height="40%" />
          <h2>Name : {name}</h2>
          <h3>
            Rating :{" "}
            <span className={`rating ${cssAsPerRatings}`}>
              {rating}
            </span>
          </h3>
          <p>Genre : {genre + " "}</p>
          <p>Cast : {cast + " "}</p>
          <p>Summary : {description}</p>

          <a href={watch_url} target="_self">
            <button className={cssAsPerRatings}>Watch Now</button>
          </a>
        </div>
        <br />
      </li>
    </>
  );
}
