function loop(state) {
  // Start from the logical top of the screen and paint
  for(var y = 0; y < 100; ++y) { // TODO: 100 should be screen height / tile height
    for(var x = 0; x < 100; ++x) { // TODO: same deal as previous
      var xOffset = (y % 2 == 0) ? 0 : -64;

      // TODO: Z
      state.tiles.draw(
        state.context,
        state.map[y][x].tile,
        x * 128 + xOffset,
        y * 32,
        128,
        128
      );
    }
  }
}

function setup() {
  var state = {
    updateInterval: 1000 / 30,
    keyboard: new Keyboard(),
    map: generateTileMap(),
    tiles: new SpriteSheet("basic_ground_tiles.png", 128, 128)
  };

  state.canvas = document.getElementById('screen');
  state.context = state.canvas.getContext('2d');

  var stepStub = function() { loop(state); };
  setInterval(stepStub, state.updateInterval);
}

function generateTileMap() {
  const NUMBER_OF_TILES = 8 * 5;

  var output = [];
  for(var y = 0; y < 100; ++y) {
    output.push([]);

    for(var x = 0; x < 100; ++x) {
      output[y].push({
        height: 1,
        tile: Math.floor(Math.random() * (NUMBER_OF_TILES))
      });
    }
  }

  return output;
}
