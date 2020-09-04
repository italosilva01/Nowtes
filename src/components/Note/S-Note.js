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
            margin: 1% 1%;
        };

        #title-note{
            margin-left:15%;
            text-overflow:"...";
            width:25%;

        };

        #title-note,#button-save{


        };

        #button-save{

            text-align:center;
            box-sizing:content-box;
        };

        #day{
            display:none;
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
            /* margin-bottom:1%; */

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

        .date{
            label{
                margin: 0 5%;

            };

            
           #button-save{
            width:5%;
            margin-left:-7%;
            
        };

            #day{
                display:initial;
            }
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

    display:grid;
    width:30%;
    div{

        border:1px solid black;
        padding:5px 4px;
        margin:0 0.5rem

    }
    @media(min-width:800px){
        ul{
        

        li{
            margin-right:2%;
        }
    }
    }
    
  
`;

export const Container = styled.div`
    display:grid;
    header{
        background-color:gray;
        margin-bottom:2%;
        text-align:center;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    };

    @media(min-width:800px){

        header{

        };

        .wrap-2{
            width:900px;
            margin:auto;
        };
    
    }
`