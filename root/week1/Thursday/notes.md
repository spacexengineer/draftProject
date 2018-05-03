## From Hunter

### React DnD

# React DnD

DragDropContext - lets you specify the backend, and sets up the shared DnD state behind the scenes.

HTML5 backend - uses the HTML5 drag and drop API under the hood and hides its quirks

```
import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Board extends Component {
  /* ... */
}

export default DragDropContext(HTML5Backend)(Board);
```

The DragSource higher-order component accepts three parameters: type, spec, and collect

type - is the knight exported in constants

spec - knightSource, which specifies the draggable object. If there were several draggable objects we may want something like `{ pieceId: props.id }` instead of `{}`.

collect - how the knight knows whether it's being dragged or not

```
export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
```

### Moving the knight onto drop zones

* square = dumb component
* boardSquare = smart component

**DropTarget** - Wrap your component with DropTarget to make it react to the compatible items being dragged, hovered, or dropped on it. DropTarget is a higher-order component.

**monitor** - export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare); **more methods in documentation.**

```
const squareTarget = {
  canDrop(props) {
    return canMoveKnight(props.x, props.y);
  },
  drop(props) {
    moveKnight(props.x, props.y);
  }
};


....

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);
```
