const MAP_HEIGHT = 100;
const MAP_WIDTH = 100;

function loop(state) {
  // Wipe out BG
  state.context.fillStyle = "black";
  state.context.fillRect(0, 0, state.canvas.width, state.canvas.height);

  // Start from the logical top of the screen and paint
  for (var y = 0; y < MAP_HEIGHT; ++y) { // TODO: 100 should be screen height / tile height
    for (var x = 0; x < MAP_WIDTH; ++x) { // TODO: same deal as previous
      var xOffset = (y % 2 == 0) ? 0 : -64; // half offset to stagger the rows
      var zOffset = state.map[y][x].height;
      const PIXELS_PER_HEIGHT_UNIT = 10;

      // TODO: Z
      // TODO: culling
      state.tiles.draw(
        state.context,
        state.map[y][x].tile,
        x * 128 + xOffset - state.scroll.x,
        (y * 32 - state.scroll.y) - (zOffset * PIXELS_PER_HEIGHT_UNIT),
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

function resizeCanvas(state) {
  state.canvas.width = window.innerWidth;
  state.canvas.height = window.innerHeight;
}

function setup() {
  var state = {
    updateInterval: 1000 / 30,
    keyboard: new Keyboard(),
    map: generateTileMap(),
    tiles: new SpriteSheet("basic_ground_tiles.png", 128, 128),
    scroll: {
      x: 128 * 50,
      y: 128 * 12
    }
  };

  state.canvas = document.getElementById('screen');
  state.context = state.canvas.getContext('2d');

  var stepStub = function() {
    loop(state);
  };
  setInterval(stepStub, state.updateInterval);

  var resizeStub = function() {
    resizeCanvas(state);
  };

  window.addEventListener('resize', resizeStub, false);
  resizeCanvas(state);
}

function generateTileMap() {
  const MAX_Z = 4;
  const NUMBER_OF_TILES = 8 * 5;

  var output = [];
  for (var y = 0; y < MAP_HEIGHT; ++y) {
    output.push([]);

    for (var x = 0; x < MAP_WIDTH; ++x) {
      output[y].push({
        height: Math.floor(Math.random() * MAX_Z),
        tile: Math.floor(Math.random() * NUMBER_OF_TILES)
      });
    }
  }

  return output;
}
