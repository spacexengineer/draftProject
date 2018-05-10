## Meeting with Todd

* EditorState

  * SelectionState
  * ContentState
    * BlockMap - Ordered list of content blocks
    * EditingMap

* ContentBlock (immutable data structure)
  * Type
  * Text
  * Character MetaData -> [ ]
    * List of two things:
      _ Entities -> String [ ] ←big change in forked copy
      _ InlineStyles -> “ ”
    * We keep text separate from this because we don’t need to store all of it in memory
  * Key
  * Data - Map
  * Depth

- in the process of turning ContentBlock into a tree model

* To change a block, get the block you want to change and make some mutations
* The idea is to create a chain
* Create a ContentState that removes it and create a content state that adds it
* Use modifier object - collection of utility functions

  * Modifier will reset SelectionState.
  * insertText
  * insertFragment
  * moveFragment
  * It does blockmap manipulation for you. Don’t touch the blockmap!

* Fragment - any number of content blocks. It’s an ordered list of content blocks (an array)

  * Remove fragment
  * Insert fragment

* Checkable list item
  * Each item is a separate block
  * Property - checked -> contentBlock({
    Key: “bcd”,
    Type: “checkable-list-item”,
    Text: “1”,
    Data: {
    Checked: true}
    })
    Character metadata is a list of nulls

Tips on getting started:

* Work on it on a block by block level
* Operate on block map. Get a new blockmap back
* Take that block. Insert it using insert fragment functionality
* Remove fragment to remove
* Insert fragment to move them in the right spot

Forked copy

* In draftjs its a single string
* In the loom copy its a string [ ]

Use modifier

* To insert something in blockmap, its added to the bottom
* Ordered based on insertion
* Grab all the things you want to add, add what you want to add, then add the rest

Keep in mind set of manipulations

* change blockmap
* Set editorstate

Immutable JS
Utility library

* A lot of code in draft now is written to handle tree content state and non-tree content state
  Dont worry about experimental tree node

* Don’t worry about weaving your own modifier
  * Two layers:
    * Data model
    * transaction layer on top of data model
      * Composible operations
    * Modifiers on top of transaction layer
  * Folder >> transaction
    * Useful when you’re making changes to the content state
    * Try to use these!

DnD traditionally mutate the DOM under the drag.
On the OT side when you’re dragging things, people can see you doing that
What we want to see is the snap
You may not want to commit that contentstate stage until it’s been complete
Draftjs plugins - can’t use with loom’s version of draftjs
All dependencies have to point to loom’s version

Worry only about dragging entire block
Look inside table plugin

* Helper method is inside table
  Wrap all checkable list items in a row, wrap them in a

Tables

* Anytime you have table cells in a row, put them in a wrapper component

DOM - UL - LI - DIV

Checkable list item component - for dragging and dropping

Might have to make changes to plugin

* Markdown plugin
* Adding a decorator
