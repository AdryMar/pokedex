class Pokemon {
  constructor (data) {
    this.id = data.id;
    this.name = data.name;
    this.ability = data.abilities[0].ability.name;
    this.sprite = data.sprites.front_default;
    this.type = data.types[0].type.name;
    this.stat = data.moves[0].move.name;
  }
}

export default Pokemon;
