import React from "react";
import "./FilmItem.css";
import imgNotFound from "../../../image/imgNotFound.jpg";
import { withRouter } from "react-router-dom";

const FilmItem = props => {
  const onFilmsListItemClick = (evt, i) => {
    props.history.push("/searchResult/" + i);
  };
  return (
    <li
      className="FilmItem"
      onClick={evt => {
        onFilmsListItemClick(evt, props.filmId);
      }}
    >
      <div className="FilmItem__img_container">
        <img
          src={props.filmInfo.show.image ? props.filmInfo.show.image.medium : imgNotFound}
          alt={`${props.filmInfo.show.name} img`}
        />
      </div>
      <div>
        <h3>{props.filmInfo.show.name}</h3>
        <p>
          {props.filmInfo.show.genres.length > 1 ? `Жанры` : `Жанр`}:{" "}
          {props.filmInfo.show.genres.join(", ")}
        </p>
      </div>
    </li>
  );
};

export default withRouter(FilmItem);
