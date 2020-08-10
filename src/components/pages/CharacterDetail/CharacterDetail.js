import React from "react";
import { getCharacter } from "../../../services/RMServices";
import CharacterDetailCard from "../../molecules/CharacterDetailCard/CharacterDetailCard";
import { Link } from "react-router-dom";
import { ROUTE_CHARACTERS } from "../../../utils/constants";
import "./_characterDetail.scss";
import Button from "../../atoms/button/button.js";
import NotFound from "../NotFound/NotFound.js";

class CharacterDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: null,
    };

    this.fetchCharacter = this.fetchCharacter.bind(this);
  }

  componentDidMount() {
    this.fetchCharacter();
  }

  componentDidUpdate() {
    if (
      this.state.character &&
      parseInt(this.props.match.params.id) !== this.state.character.id
    ) {
      this.fetchCharacter();
    }
  }

  fetchCharacter() {
    const characterId = parseInt(this.props.match.params.id);
    getCharacter(characterId).then((data) => {
      this.setState({ character: data });
    });
  }

  render() {
    const characterId = parseInt(this.props.match.params.id);
    const element = this.state.character;

    if (!element) {
      return <NotFound />;
    }

    return (
      <section className="character__detail">
        <CharacterDetailCard
          image={element.image}
          title={element.name}
          species={element.species}
          planet={element.location.name}
          episodes={element.episode.length}
          status={element.status}
        />
        <ul className="character__detail--navigation">
          <li>
            <Link to={`/character/${characterId - 1}`}>
              <Button
                title={<i class="fas fa-arrow-left"></i>}
                size="radius"
                color="tertiary"
              />
            </Link>
          </li>
          <li>
            <Link to={`/character/${characterId + 1}`}>
              <Button
                title={<i class="fas fa-arrow-right"></i>}
                size="radius"
                color="tertiary"
              />
            </Link>
          </li>
        </ul>
        <Link to={ROUTE_CHARACTERS}>
          <Button size="large" title="Buscar otros personajes"></Button>
        </Link>
      </section>
    );
  }
}

export default CharacterDetail;
