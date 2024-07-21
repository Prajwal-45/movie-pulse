import React from "react";

export default function SeriesList(props) {

  const {id,img_url,name,rating,genre,cast,watch_url,description}=props.data;

    
  return (
    <>
      <li key={id}>
        <div width="20%" height="20%">
          <img
            src={img_url}
            alt={id}
            width="30%"
            height="40%"
          />
          <h2>Name : {name}</h2>
          <h3>Rating : {rating}</h3>
          <p>Genre : {genre + " "}</p>
          <p>Cast : {cast + " "}</p>
          <p>Summary : {description}</p>

          <a href={watch_url} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
        <br />
      </li>
    </>
  );
}
