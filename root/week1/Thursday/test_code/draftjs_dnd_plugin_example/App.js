// drag n drop plugin added but not used
import React, { Component } from 'react';
import { Editor, EditorState, RichUtils, ContentState } from 'draft-js';
import createBlockDndPlugin from 'draft-js-drag-n-drop-plugin';
import './App.css';

const blockDndPlugin = createBlockDndPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // set initial state to Hello
      editorState: EditorState.createWithContent(
        ContentState.createFromText('Hello!')
      )
    };
    // event listener that fires off when you change the input field
    this.onChange = editorState => {
      console.log(editorState);
      return this.setState({ editorState });
    };
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  render() {
    return (
      <div className="message-editor">
        <h1>The Awesome draft.js Message Editor</h1>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <div className="editor">
          {/* in the editor component, pass in editorState as props and onChange method  */}
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
