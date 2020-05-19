import React,{useState,useEffect} from 'react';
import ReactMarkdown from 'react-markdown';

import * as S from './S-Note';
export default function Note (props){

    const [content, setContent]= useState(' ');
    const [condition,setCondition] = useState(true);
    

     useEffect(()=>{
            //change the div's z-index attribute
            console.log(`start Condition = ${condition}`);
            const markdown = document.querySelector('.wrap>div');
            const textarea = document.querySelector('textarea');
            
            if(condition){
                //if textarea is disabled
                markdown.classList.add('visible');
                textarea.classList.add('hidden');
                
            }else{
                markdown.classList.remove('visible');
                textarea.classList.remove('hidden');

            }

        },[condition]);


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

    function saveContent(){
        console.log('clicou');

        //saves the content of the textarea tag
        const text = document.querySelector('textarea').value;
        setContent(text);
        
        //changes conditio's value
        setCondition(!condition);
    }

    return(
        <S.Paper>
            <div className="date">
                <p>DAte teste</p> 
                <div>
                    <input id="editar" type='checkbox' onClick={()=>saveContent()}></input> 
                    <label htmlFor="editar" >{condition?'Editar':'Salvar'}</label>
                </div>
            </div>

            <div className="wrap">
                
                <S.Markdown>
                    <ReactMarkdown source={content}/>
                </S.Markdown>
                
               <div>
                    <textarea name="" disabled={condition} id="" cols="30" rows="10" onKeyDown={(e)=>userButtonTab(e)} >
                    </textarea> 
               </div> 
                
            </div>

        </S.Paper>
    );
}