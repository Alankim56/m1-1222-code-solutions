/* exported pokedex */

var pokedex = [
  {
    number: '001',
    name: 'Bulbasaur',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png'
  },
  {
    number: '004',
    name: 'Charmander',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png'
  },
  {
    number: '007',
    name: 'Squirtle',
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png'
  },
  {
    number: '002',
    name: 'Ivysaur',
    description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png'
  },
  {
    number: '005',
    name: 'Charmeleon',
    description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png'
  },
  {
    number: '008',
    name: 'Wartortle',
    description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png'
  },
  {
    number: '003',
    name: 'Venusaur',
    description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png'
  },
  {
    number: '006',
    name: 'Charizard',
    description: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png'
  },
  {
    number: '009',
    name: 'Blastoise',
    description: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png'
  }
];

function renderPokemon(pokemon) {
  var outerDiv = document.createElement('div');
  outerDiv.setAttribute('class', 'column-third');

  var innerDiv = document.createElement('div');
  innerDiv.setAttribute('class', 'pokemon-card');
  outerDiv.appendChild(innerDiv);

  var pikachuImg = document.createElement('Img');
  pikachuImg.setAttribute('src', pokemon.imageUrl);
  innerDiv.appendChild(pikachuImg);

  var cardText = document.createElement('div');
  cardText.setAttribute('div', 'pokemon-card-text');
  innerDiv.appendChild(cardText);

  var h2 = document.createElement('h2');
  h2.textContent = pokemon.name;
  cardText.appendChild(h2);

  var h3 = document.createElement('h3');
  h3.textContent = pokemon.number;
  cardText.appendChild(h3);

  var p = document.createElement('p');
  p.textContent = pokemon.description;
  cardText.appendChild(p);

  return outerDiv;
}

var $row = document.querySelector('.row');

for (var i = 0; i < pokedex.length; i++) {
  $row.appendChild(renderPokemon(pokedex[i]));
}
