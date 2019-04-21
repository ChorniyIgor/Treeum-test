import React from "react";
import "./PosterScreen.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import BackBtn from "../../hoc/BackBtn/BackBtn";

const PosterScreen = props => {
  const id = props.match.params.id;
  if (props.filmsList.length === 0) {
    return <Redirect to="/" />;
  } else {
    const filmInfo = props.filmsList[id];
    return (
      <div className="PosterScreen">
        <BackBtn path="/searchResult" />
        <h1>{filmInfo.show.name}</h1>
        <div className="PosterScreen__film_container">
          <img
            src={filmInfo.show.image ? filmInfo.show.image.original : ""}
            alt={`${filmInfo.show.name} img`}
          />
          <div className="PosterScreen__film_info">
            <span>Рейтинг: {filmInfo.show.rating.average}/10</span>
            <div dangerouslySetInnerHTML={{ __html: filmInfo.show.summary }} />
            <span>Язык: {filmInfo.show.language}</span>
            <br />
            <span>Длительность: {filmInfo.show.runtime} мин</span>
          </div>
        </div>
      </div>
    );
  }
};
function mapStateToProps(state) {
  return {
    filmsList: state.resultScreen.filmsList
  };
}
export default connect(mapStateToProps)(PosterScreen);
