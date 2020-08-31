import React,{useState,useEffect} from 'react';
import ReactMarkdown from 'react-markdown';

import * as S from './S-Note';
export default function Note (props){

    const [content, setContent]= useState(' ');
    const [condition,setCondition] = useState(true);
    

     useEffect(()=>{
            //change the div's z-index attribute
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
        //saves the content of the textarea tag
        const text = document.querySelector('textarea').value;
        setContent(text);
        //changes conditio's value
        setCondition(!condition);
    }

    function saveNote(){
        let component =document.querySelector('.markdown'); 
        let title = document.querySelector("#title").value;
        let value = component.textContent;
        localStorage.setItem(title,value);
        
      

        let noteSaved = document.createElement("div");
        let ListSaves = document.querySelector("#listsaves");

        noteSaved.innerText = title;
        ListSaves.appendChild(noteSaved);
    
        component.textContent = "";
        title = ""; 
    }

    function loadNotes(){

       for (const iterator of localStorage) {
           console.log(iterator);
       }

    }

    
    function showButtonSaveNote(condition){
        if(condition){
            return ( <>
            
                <input id="title" placeholder="Digite o titulo da nota"></input>
                <input value="Salvar" type="button" onClick={()=>saveNote()}></input>
            
            </>
            );
        }
    }

    function currentDate(condition){
        
        let date = new Date();
        return date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
    }

    return(
        <>
   
            <S.Paper>
            
                <div className="date">
                    <label>{currentDate()}</label>
                    <input id="editar" type='checkbox' onClick={()=>saveContent()}></input> 
                    {showButtonSaveNote(condition)}
                    <label htmlFor="editar" >{condition?'Editar':'Terminar Edição'}</label>

                </div>

                <div className="wrap">
                    
                    <S.Markdown>
                        <ReactMarkdown className="markdown" source={content}/>
                    </S.Markdown>
                    
                <div>
                        <textarea name="" maxlength="360" disabled={condition} id="" cols="30" rows="10" onKeyDown={(e)=>userButtonTab(e)} >
                        </textarea> 
                </div> 

                </div>

            </S.Paper>
            <S.Listsaves id="listsaves">

                <button onClick={()=>loadNotes()} value="Teste"></button>
            </S.Listsaves>
        </>
    );
}