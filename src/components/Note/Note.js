import React,{useState,useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import Button from 'react-bootstrap/Button';
import { AiTwotoneEdit ,AiOutlineCheck} from "react-icons/ai";
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
        let title = document.querySelector("#title-note").value;
        let value = component.textContent;
        localStorage.setItem(title,value);
        
        document.location.reload();
        component.textContent = "";
        title = ""; 
    }

    function loadNotes(){
        const savednotes = [];

        for(let count = 0; count < localStorage.length; count++){     
    
            savednotes.push(localStorage.key(count));
            
        }
        const notes = savednotes.map((note) => 
        
            <li key={note.toString()} classList>{note}</li>

        );
        return(
            <ul className>{notes}</ul>
        )

    }

    
    function showButtonSaveNote(condition){
        if(condition){
            return ( <>
            
                <input id="title-note" placeholder="Digite o titulo da nota"></input>
                <Button id="button-save" onClick={()=>saveNote()} variant="success">Salvar</Button>
            
            </>
            );
        }
    }

    function currentDate(condition){
        
        let date = new Date();
        return date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
    }

    return(
        <S.Container>
            
            {/* <header >
                <div className="wrap-2">
                    <h1>Nowtes</h1>

                </div>
            </header> */}
            <S.Paper>
            
                <div className="date">
                    <label id="day">{currentDate()}</label>
                    <input id="editar" type='checkbox' onClick={()=>saveContent()}></input> 
                    {showButtonSaveNote(condition)}
                    <label htmlFor="editar" >{condition?<AiTwotoneEdit/> :<AiOutlineCheck/>}</label>

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

        </S.Container>
    );
}