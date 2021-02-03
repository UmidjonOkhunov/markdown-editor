import React, { useState } from 'react';
import { CompactPicker  } from 'react-color';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import Editor, { DropList, PluginProps } from 'react-markdown-editor-lite';


const insertColor = (editor:Editor, color:string)=> {
  let selection = editor.getSelection();
  // const decorate = getDecorated(selection.text, type, decorateOption);
  const text= `<span style="color:${color}">
  ${selection.text}
  </span>`;
  // if (selection.text.trim().startsWith(`<span style="color:"`) && selection.text.trim().endsWith("</span>")){ 
  //   var text = 
  // }
  const sel= {
      start: 1,
      end: selection.text.length + 1,
    };
  editor.insertText(text, true, sel);
}

const ColorPicker = (props: PluginProps) => {
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = useState("#000000");

  const handleChangeComplete = (color:any) => {
    insertColor(props.editor,color.hex);
    setColor( color.hex );
  };
  

  return (
    <span
      className="button button-type-table"
      title="Text Color"
      onMouseEnter={()=>setOpen(true)}
      onMouseLeave={()=>setOpen(false)}
    >
      <span className="button button-type-color" title="Text Color"><FormatColorTextIcon style={{ fontSize: 20, marginTop:5, color:color }}/></span>
      <DropList show={open} onClose={()=>setOpen(true)}>
          <CompactPicker 
        color={color}
        onChangeComplete={handleChangeComplete }
        />
      </DropList>
    </span>
  );

}

// Define default config if required
  ColorPicker.align = 'left';
  ColorPicker.pluginName = 'colorPicker';
  
  export default ColorPicker;