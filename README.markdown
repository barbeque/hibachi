This is the main directory for the Hibachi HTML5 game library.

Unlike other libraries, the intent of Hibachi is to provide a series of highly-reusable utility types so that game developers can build their games their way without having to conform to using "magic" heavyweight modules.

Right now the library only features a few modules:
* Animation.js - Converts between time and frames for an infinitely looping animation (such as a sprite running).
* DataStructures.js - Utility functions for handling arrays
* Keyboard.js - Abstracts away keyboard event listening so that the consumer can just ask "is the key currently down?"
* StreamedImage.js - Provides a placeholder if an image is not fully loaded yet.
