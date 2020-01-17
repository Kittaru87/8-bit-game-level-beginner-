
// We're going to want to store the position of the character in here.
var state = {
  character:{
    x:100,
    y:100,
    direction: 'right',
  }

};

var canvas = document.querySelector("canvas");

function runGame(game) {
  console.log(game);

  // This function should be run repeatedly by a
  // timer so we can have animations
  function animate() {
    console.log('animating'); //for seeing if this are animating
    // map and character get redrawn each frame so character appears only once
    game.drawTileMap("terrain", forestTilemap, 20, 15, 0, 0) // draw before character so character gets drawn over the top
    game.drawTileMap("terrain", treeTilemap, 4, 4, 14, 5)
    game.drawTileMap("terrain", chest, 2, 1, 3, 10);
    game.drawTileMap("terrain", stump, 2, 2, 12, 3);
    game.drawTileToPos("treasure", 3, 210, 240);
    game.drawTileToPos("treasure", 7, 73, 120);
    // game.drawTileToPos("treasure", 9, 505, 307);

    var characterTile = 0;
    if (state.character.direction === 'left'){
      characterTile = 1;
    }
    game.drawTileToPos("character", characterTile, state.character.x, state.character.y);


    // All the drawing to the canvas should happen in here

  }
  setInterval(animate, 50);
}

//Using the arrow keys to move the character

window.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowUp') {
    console.log('The up arrow has been pressed');
  }
});

StartGameEngine(canvas, config, runGame);

window.addEventListener("keydown", function (event) {
  console.log("pressed a key: " + event.key);
  if (event.key === "ArrowUp"){
    state.character.y = state.character.y - 10;
  }
  if (event.key === "ArrowDown"){
    state.character.y = state.character.y + 10;
  }
  if (event.key === "ArrowLeft"){
    state.character.x = state.character.x - 10;
    state.character.direction = 'left' // changes direction left
  }
  if (event.key === "ArrowRight"){
  state.character.x = state.character.x + 10;
  state.character.direction = 'right' // changes direction right
}
});

// Work out when 2 things are colliding

// game.collided = function (
//   characterTileX1, characterTileY1, characterTile(1), characterTile(1),
//   stump12, stump(3), stump(2), stump(2)
// ) {
//   var thing1X2 = thing1X1 + thing1Width;
//   var thing1Y2 = thing1Y1 + thing1Height;
//   var thing2X2 = thing2X1 + thing2Width;
//   var thing2Y2 = thing2Y1 + thing2Height;
//   return (thing1X2 >= thing2X1 && thing1X1 <= thing2X2) &&
//          (thing1Y2 >= thing2Y1 && thing1Y1 <= thing2Y2)
// }


// finding offsetx and y ut place items

window.addEventListener("click", function (event) {
console.log(event)
});
