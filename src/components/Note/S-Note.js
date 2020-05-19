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
    }
    
    .wrap{
        position:relative;
        display:grid;
        grid-template-areas:
        'a a a'
        'a a a'
        'a a a';

        width:100%;
        align-items:center;

    }

    textarea{
        position:relative;
        width:100%;
        background-color:rgba(0,0,0,0.2);
        font-size:1.2rem;
        border:none;
        z-index:3;
        grid-area:a;

    }
    @media (min-width:800px){
        width:60%;
        
        .wrap{
        }
        textarea{
            width:90%;
        }
    }
    @media (min-width:1000px){
        width:800px;
    }
`;

export const Markdown = styled.div`
    position:relative;
    width:100%;
    border:none;
    font-size:1.2rem;
    background-color:pink;
    z-index:2;
    grid-area:a;


    visibility:hidden;

`;