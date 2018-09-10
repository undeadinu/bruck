/* Components */
import Image from './components/Image.js';
import Text from './components/Text.js';
import Stack from './components/Stack.js';
import Grid from './components/Grid.js';
import Box from './components/Box.js';
import Spread from './components/Spread.js';
import Center from './components/Center.js';
import Repeat from './components/Repeat.js';
import Comment from './components/Comment.js';

/* Paint worker properties */
if ('registerProperty' in CSS) {
  CSS.registerProperty({
    name: '--border-thin',
    syntax: '<length>',
    initialValue: getComputedStyle(document.documentElement).getPropertyValue("--border-thin")
  });

  CSS.registerProperty({
    name: '--color-dark',
    syntax: '<color>',
    initialValue: getComputedStyle(document.documentElement).getPropertyValue("--color-dark")
  });
}

/* Register paint workers */
if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule('js/houdini/image-cross.js');
}