import React from 'react';
import './styles/DetailView.css';
import backgroundImage from './pokedex-realistic.jpg';
const DetailView = ({pokemon}) => {
  const {id, name, sprite, type, ability, stat} = pokemon;

  return (
    <section
      className="detail-view"
      style={{background: `url(${backgroundImage})`}}
    >
      <img src={sprite} className="sprite-image" alt="sprite" />
      <div className="data-wrapper">
        <h1 className="data-name">ID: {id} {name}</h1>
        <h2 className="data-char">Tipo: {type}</h2>
        <h2 className="data-char">Abilidad: {ability}</h2>
        <h2 className="data-char">Ataque: {stat}</h2>
      </div>
    </section>
  );
};

export default DetailView;
