This is the main directory for the Hibachi HTML5 game library.

Unlike other libraries, the intent of Hibachi is to provide a series of highly-reusable utility types so that game developers can build their games their way without having to conform to using "magic" heavyweight modules.

Right now the library only features a few modules:

* <tt>Animation.js</tt> - Converts between time and frames for an infinitely looping animation (such as a sprite running).
* <tt>DataStructures.js</tt> - Utility functions for handling arrays
* <tt>Keyboard.js</tt> - Abstracts away keyboard event listening so that the consumer can just ask "is the key currently down?"
* <tt>StreamedImage.js</tt> - Provides a placeholder if an image is not fully loaded yet.

There's also a partial example in <tt>example</tt> and some Jasmine BDD tests in <tt>tests</tt>.

Please let me know if you end up using the library - I'm always interested to see what people do with the building blocks I provide.
