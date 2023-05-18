import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class TextEditor extends Component {
    state = {
        editorState: EditorState.createEmpty(),
    }
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        })
    }
    render() {
        const { editorState } = this.state;
        return (
            <div className="text-editor">
                <div className="editor">
                    <Editor
                        editorState={editorState}
                        onEditorStateChange={this.onEditorStateChange}
                        placeholder='Enter your text here...'
                    />
                </div>
                <h3 className="text">Drafts to HTML</h3>
                <textarea className="text-area" disabled value={
                    draftToHtml(convertToRaw(editorState.getCurrentContent()))
                }
                ></textarea>
            </div>
        )
    }
}