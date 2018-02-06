function loop(state) {
  // Wipe out BG
  state.context.fillStyle = "black";
  state.context.fillRect(0, 0, state.canvas.width, state.canvas.height);

  // Start from the logical top of the screen and paint
  for(var y = 0; y < 100; ++y) { // TODO: 100 should be screen height / tile height
    for(var x = 0; x < 100; ++x) { // TODO: same deal as previous
      var xOffset = (y % 2 == 0) ? 0 : -64; // half offset to stagger the rows

      // TODO: Z
      // TODO: culling
      state.tiles.draw(
        state.context,
        state.map[y][x].tile,
        x * 128 + xOffset - state.scroll.x,
        y * 32 - state.scroll.y,
        128,
        128
      );
    }
  }

  // Poll keyboard to update scroll
  var dv = state.keyboard.getCursorKeyVector(true);
  state.scroll.x += dv.x * 50;
  state.scroll.y += dv.y * 25;
}

function setup() {
  var state = {
    updateInterval: 1000 / 30,
    keyboard: new Keyboard(),
    map: generateTileMap(),
    tiles: new SpriteSheet("basic_ground_tiles.png", 128, 128),
    scroll: { x: 128 * 50, y: 128 * 12 }
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
