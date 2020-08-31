import styled from 'styled-components';

export const Paper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
    margin:auto;
    width:90%;
    height:50vh;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    
    input[type='checkbox']{
        display:none;
    }
    .visible{
        z-index:1 !important;
        visibility:visible;
    }
    
    .hidden{
        z-index:100000 !important;
        display:none;
    }
   
    .date{
        display:flex;
        justify-content:space-between;
        width:100%;
        padding:2%;

        label{
            margin: 0 1%;
        }
    }
    
    .wrap{
        position:relative;
        display:grid;
        grid-template-columns:1fr;
        grid-template-areas:
        'a a a'
        'a a a'
        'a a a';

        width:100%;
        align-items:center;

        div + div{
                grid-area:a;
               

        }

   

    }

    input[type ='button'],#title{
            width: 30%;
            margin-bottom:1%;

        }

    textarea{
        grid-area:a;
        resize:none;
        width:100%;
        height:100%;
        outline:none;
        font-size:1.0rem;
    }

    @media (min-width:800px){
        width:60%;
        
        .wrap{
            div + div{
                padding-left:10%;
                padding-right:10%;
            }
        }
        textarea{
            width:100%;
        }
    }

    @media (min-width:1000px){
        width:800px;
    }
`;

export const Markdown = styled.div`
    /* z-index:2; */
    grid-area:a;
    visibility:hidden;
    width:100%;

    @media (min-width:800px) {
        padding-left:10%;
        padding-right:10%;
    }

`;

export const Listsaves = styled.div`

    overflow-x:scroll;
    display:flex;
    
    div{

        border:1px solid black;
        padding:5px 4px;
        margin:0 0.5rem

    }
`;