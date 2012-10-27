hibachi
===
This is the main directory for the Hibachi HTML5 game library.

Unlike other libraries, the intent of Hibachi is to provide a series of highly-reusable utility types so that game developers can build their games their way without having to conform to using "magic" heavyweight modules.

Right now the library only features a few modules:

* <tt>Animation.js</tt> - Converts between time and frames for an infinitely looping animation (such as a character running)
* <tt>DataStructures.js</tt> - Utility functions for handling arrays
* <tt>Keyboard.js</tt> - Abstracts away keyboard event listening so that the consumer can just ask "is the key currently down?"
* <tt>StreamedImage.js</tt> - Provides a placeholder if an image is not fully loaded yet
* <tt>SpriteSheet.js</tt> - Provides an easy way to draw sprites from a uniformly sized sprite sheet
* <tt>Text.js</tt> - Helper functions for text rendering, including word wrapped text

There's also some partial examples in <tt>example</tt> and some Jasmine BDD tests in <tt>tests</tt>.

If you're ready to start building a game with hibachi, an example game shell is provided in `example/shell` that will allow you to quickly get past what little HTML5 boilerplate exists.

Please let me know if you end up using the library - I'm always interested to see what people do with the building blocks I provide.
