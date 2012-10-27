# Shell Example
This is a quick set of generic code designed to get you up and running quickly with hibachi.

## Usage instructions
1. Copy the html and js files from this directory into a new git repository.
2. Add the hibachi git as a submodule (using `git submodule add`)
3. Adjust paths in the html file to point to the hibachi library files you're planning on using.
4. Update the `game.js` file to do whatever it is your game wants you to do.

## Overview
Every frame, the `step` function is invoked with the current game state. Any changes to the game state object will get passed onto the next frame.

The time interval between frames (in milliseconds) is controlled by the `state.interval` parameter. If you want to increase or decrease the time between frames, you should modify it _before_ `setInterval` is called in the game setup function.