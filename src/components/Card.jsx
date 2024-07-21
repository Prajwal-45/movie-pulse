import React from "react";
import SeriesData from "../api/SeriesData.json";
import SeriesList from "./SeriesList";
import '../App.css'


export default function Card() {
  return (
    <>
      <ul>
        {SeriesData.map((currElement) => {
          return <SeriesList key={currElement.id} data={currElement} />;
        })}
      </ul>
    </>
  );
}
