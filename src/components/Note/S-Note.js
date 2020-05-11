import styled from 'styled-components';

export const Paper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
    margin:auto;
    width:90%;
    height:100%;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);

    .date{
        display:flex;
        justify-content:space-between;
        width:100%;
    }
    

    textarea{
        width:90%;
        font-size:1.2rem;
        border:none;

    }
    @media (min-width:800px){
        width:60%;
    }
    @media (min-width:1000px){
        width:800px;
    }
`;