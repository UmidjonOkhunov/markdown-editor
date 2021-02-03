import React from 'react';
import Editor, { PluginProps } from 'react-markdown-editor-lite';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';


 const alignText = (editor:Editor, side:string)=> {
  let selection = editor.getSelection();
  // const decorate = getDecorated(selection.text, type, decorateOption);
  const text= `<div align=${side}>
  ${selection.text}
  </div>`;
  // if (selection.text.trim().startsWith(`<span style="color:"`) && selection.text.trim().endsWith("</span>")){ 
  //   var text = 
  // }
  const sel= {
      start: 1,
      end: selection.text.length + 1,
    };
  editor.insertText(text, true, sel);
}

export const AlignLeft = (props: PluginProps) => {
  return (
      <span className="button button-type-color" title="AlignLeft" onClick={()=>alignText(props.editor,"left")}><FormatAlignLeftIcon style={{ fontSize: 20, marginTop:5 }}/></span>
  );
}
AlignLeft.align = 'left';
AlignLeft.pluginName = 'AlignLeft';


  export const AlignCenter = (props: PluginProps) => {
    return (
        <span className="button button-type-color" title="AlignCenter" onClick={()=>alignText(props.editor,"center")}><FormatAlignCenterIcon style={{ fontSize: 20, marginTop:5 }}/></span>
    );
  }
  AlignCenter.align = 'left';
  AlignCenter.pluginName = 'AlignCenter';

    export const AlignRight = (props: PluginProps) => {
      return (
          <span className="button button-type-color" title="AlignRight" onClick={()=>alignText(props.editor,"right")}><FormatAlignRightIcon style={{ fontSize: 20, marginTop:5 }}/></span>
      );
    }
    AlignRight.align = 'left';
    AlignRight.pluginName = 'AlignRight';