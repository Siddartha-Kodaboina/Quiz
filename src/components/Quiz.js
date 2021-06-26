import React,{ useEffect, useState} from 'react';
import Header from './ui/Header';
import styled from 'styled-components';
import QuizBody from './QuizBody';

const Quiz = ({match}) => {

    console.log(match);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    if(loading){
        return <div>Loading...</div>
    }

    return (
        <DivQuiz >
            <Header backColor={'#d6fedb'}/>
            <QuizBody id={match.params.id}/>
        </DivQuiz>
    )
}


const DivQuiz=styled.div`
    position: absolute;
    width:100vw;
    min-height:100vh;
`;

export default Quiz;
