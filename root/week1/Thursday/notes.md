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

In regards to the API, Joel mentioned covering

* EditorState
* ContentState

I also found that SelectionState may be useful

Will research more of the API before diving into the drag and drop plugin.

## From Charmaine

# React DnD

* HTML5 backend
* DragDropContext
* DragSource
  * type
  * spec
  * collection
* DropTarget
  * monitor

# from Joel

* figure out how to move a block in draft.js

```
Bio.js

moveUp() {
  // how we move one paragraph up?
}

moveDown() {
  // how do we move one paragraph down?
}

render () {


<button id="up-button" onClick={this.moveUp}>
<button id="down-button" onClick={this.moveDown>

<DraftEditor ... />

// document.getElementById("up-button").addEventListener("click", function (evt) {
  // your code here
// })


}
```

to-do:

* research the following:
  * [EditorState](https://draftjs.org/docs/api-reference-editor-state.html#content)
  * [ContentState](https://draftjs.org/docs/api-reference-content-state.html#content)
  * [SelectionState](https://draftjs.org/docs/api-reference-selection-state.html#content)
* review Loom's components
* add Draft.js DnD plugin to message-editor-app example for additional practice
