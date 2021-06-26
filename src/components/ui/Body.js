import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Body = () => {
    return (
        <DivBody>
            <QuizIntro>
                <Box>
                    <Upper>
                        <h1>The QuizAPP includes a wide number of Python questions</h1>
                        <h2>Test your knowledge and learn effectively with the Quiz APP</h2>
                    </Upper>
                    <Lower>
                        <Link to='/topics' style={{textDecoration:'none'}}><Button>Take a Quiz</Button></Link>
                    </Lower>
                </Box>
            </QuizIntro>
            <Image>
                <img src="https://quizapi.io/storage/pages/laptop-quizapi.png" alt="jhgbvjh" />
            </Image>
        </DivBody>
    )
}

const DivBody=styled.div`
    position: relative;
    width:90%;
    left:5%;
    height:70vh;
    top:5vh;
    display: flex;
    flex-direction: row;
    @media(max-width: 658px) {
        flex-direction: column-reverse;
        justify-content:center;
    }
`;

const QuizIntro=styled.div`
    display:flex;
    flex-direction: column;
    flex:1;
    /* border:1px solid black; */
    justify-content: center;
    align-items:center;
    
`;

const Box = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:100%;
    height:60%;
    /* top:10%; */
    /* border:1px solid green; */
    
`;

const Upper=styled.div`
    color:#e7eeef;
    > h1{
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 3vh;
        line-height: 40px;
    }
    > h2{
        font-size: 18px;
        line-height:30px;
        font-weight: 500;
        margin-bottom: 3vh;
    }
`;

const Lower=styled(Upper)`

`;

const Button = styled.a`
    margin-left:1vw;
    text-decoration: none;
    border:3px solid #c92aa1;
    padding:8px 15px;
    border-radius:35px;
    font-size:12px;
    color:white;
    cursor:pointer;
    transition: all 0.2s ease;
    &:hover{
        color:white;
        background:#c92aa1;  
        background-size:400%;
        transition: all 0.2s ease;
    }
`;
const Image=styled(QuizIntro)`
    align-items: flex-start;
    > img {
        width:100%;
        object-fit: cover;
        @media(max-width: 658px) {
            width:80%;
        }
    }
    @media(max-width: 658px) {
        align-items: center;
    }
`;
export default Body
