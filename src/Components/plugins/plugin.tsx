import * as React from 'react';
import Editor, { getDecorated, PluginProps } from 'react-markdown-editor-lite';

interface CounterState {
  num: number;
}


const insertMarkdown = (editor:Editor, type: string, option: any = {})=> {
  let selection = editor.getSelection();
  let decorateOption = option ? { ...option } : {};

  // const decorate = getDecorated(selection.text, type, decorateOption);
  const text= `<span style="color:#00D084">${selection.text}</span>`;
  const sel= {
      start: 1,
      end: selection.text.length + 1,
    };
  editor.insertText(text, true, sel);
}

const Counter = (props: PluginProps) => {
  const [num, setNum] = React.useState(props.config.start);
  
  const handleClick = () => {
    // Call API, insert number to editor
    // props.editor.insertMarkdown();
    insertMarkdown(props.editor,"");
    // Update itself's state
    setNum(num + 1);
  }

  return (
    <span
      className="button button-type-counter"
      title="Counter"
      onClick={handleClick}
    >
      {num}
    </span>
  );
}
// Define default config if required
Counter.defaultConfig = {
  start: 0
}
Counter.align = 'left';
Counter.pluginName = 'counter';

export default Counter;

// // Usage:
// Editor.use(Counter, {
//   start: 10
// });