import React from "react";
import "./SearchScreen.css";
import { connect } from "react-redux";
import { updateFilmsList } from "../../store/actions/resultScreen";
import TVmaze from "../../TVMaze";

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRequestError: false
    };
  }
  onFormSubmitHendler = async evt => {
    evt.preventDefault();
    try {
      const formData = new FormData(evt.target);
      const searchResultsList = await TVmaze.searchFilms(formData.get("searchString"));
      this.setState({
        isRequestError: false
      });
      this.props.updateFilmsList(searchResultsList);
      this.props.history.push("/searchResult");
    } catch {
      this.setState({
        isRequestError: true
      });
    }
  };

  render() {
    return (
      <div className="SearchScreen">
        <h2>Поиск фильмов</h2>
        <form className="SearchScreen__form" onSubmit={this.onFormSubmitHendler}>
          <input className="SearchScreen__form__input" type="text" name="searchString" />
          <input className="SearchScreen__form__submit" type="submit" value="Поиск" />
        </form>
        {this.state.isRequestError ? (
          <span className="SearchScreen__error">Во время выполнения запроса случилась ошибка</span>
        ) : null}
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    updateFilmsList: filmsList => {
      dispatch(updateFilmsList(filmsList));
    }
  };
}
export default connect(
  null,
  mapDispatchToProps
)(SearchScreen);
