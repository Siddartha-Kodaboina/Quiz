import  Header  from './ui/Header';
import Body from './ui/Body';
import styled from 'styled-components';

const DivHome=styled.div`
    height:100vh;
    width:100vw;
    background: #191919;
`;
const Home = () => {
    return (
        <DivHome>
            <Header />
            <Body />
        </DivHome>
    )
}

export default Home
