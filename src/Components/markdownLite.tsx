import * as React from 'react'
import * as ReactDOM from 'react-dom'
import MarkdownIt from 'markdown-it'
import MdEditor,{ Plugins } from 'react-markdown-editor-lite'
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// import TextColor from "./plugins/ColorPicker"
import TextColor from "./plugins/TextColor"
// import MyPlugin from './plugins/plugin';
import {AlignLeft,AlignCenter, AlignRight} from "./plugins/Align";

// MdEditor.use(MyPlugin);
MdEditor.use(TextColor);
MdEditor.use(AlignLeft);
MdEditor.use(AlignCenter);
MdEditor.use(AlignRight);
MdEditor.use(Plugins.TabInsert, {
  tabMapValue: 1,
});

// Initialize a markdown parser
const mdParser = new MarkdownIt({html: true });

// Finish!
// function handleEditorChange({html, text}) {    
//   console.log('handleEditorChange', html, text)
// }
export default () => {
  return (
    <MdEditor
      style={{ height: "500px" }}
      renderHTML={(text) => mdParser.render(text)}
    //   onChange={handleEditorChange}
    />
  )
}