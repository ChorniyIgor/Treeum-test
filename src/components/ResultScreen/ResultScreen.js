import React from "react";
import "./ResultScreen.css";
import { connect } from "react-redux";
import FilmItem from "./FilmItem/FilmItem";
import BackBtn from "../../hoc/BackBtn/BackBtn";

const ResultScreen = props => {
  return (
    <div>
      <BackBtn path="/" />
      {props.filmsList.length === 0 ? (
        <p>Нет результатов</p>
      ) : (
        <ul className="ResultList">
          {props.filmsList.map((item, i) => {
            return <FilmItem key={i} filmInfo={item} filmId={i} />;
          })}
        </ul>
      )}
    </div>
  );
};
function mapStateToProps(state) {
  return {
    filmsList: state.resultScreen.filmsList
  };
}
export default connect(mapStateToProps)(ResultScreen);
