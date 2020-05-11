import React,{useState} from 'react';
import ReactMarkdown from 'react-markdown';

import * as S from './S-Note';
export default function Note (props){

    const [content, setContent]= useState();

    function convert(){
        //convert the text from the textarea tag to markdown
        const text = document.querySelector('textarea').value;
        setContent(text);
    }

    function userButtonTab(button){
        const textArea = document.querySelector('textarea')

        if(button.keyCode == 9){
            //keyCode = 9 => TAB

            let posBefore = textArea.selectionStart;
            let posAfter = textArea.selectionEnd;

            button.target.value = button.target.value.substring(0, posBefore)
                                    +'\t'
                                    + button.target.value.substring(posAfter);

            textArea.selectionStart = posBefore +1;
            textArea.selectionEnd = posBefore +1;

            button.preventDefault();
        }
        //
    }

    return(
        <S.Paper>
            <div className="date">
                <p>DAte teste</p> 
                <div>
                    <input id="editar" type='checkbox' onClick={convert}></input> 
                    <label htmlFor="editar" >Editar</label>
                </div>
            </div>
           <textarea name="" id="" cols="30" rows="10" onKeyDown={(e)=>userButtonTab(e)} >
           </textarea>
           
            <ReactMarkdown source={content}/>
        </S.Paper>
    );
}