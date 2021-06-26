
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Header = ({backColor}) => {
    console.log(backColor);
    return (
        <DivHeader backColor={backColor}>
            <Logo >
                <H1 backColor={backColor}>QuizAPP</H1>
            </Logo>
            <List>
                <Ul backColor={backColor}>
                    <Link to='/' style={{textDecoration:'none'}}><Li backColor={backColor} >Home</Li></Link>
                    <Link to='/' style={{textDecoration:'none'}}><Li backColor={backColor}>About</Li></Link>
                    <Link to='/' style={{textDecoration:'none'}}><Li backColor={backColor}>Contact</Li></Link>
                </Ul>
            </List>
        </DivHeader>
    )
}

const DivHeader=styled.div`
    position:relative;
    width:100%;
    height:10vh;
    background:${props=>(props.backColor)? '#eaffee' : "rgba(25, 25, 25)"};
    /* color:#e7eeef; */
    display:flex;
    justify-content: space-between;
    padding:3vh 5vw;
    
`;

const Logo=styled.div`
    /* color:logo || "#e7eeef"}; */
    
    display:flex;
    flex:6;
    justify-content: flex-start;
    align-items: center;
`;

const List=styled(Logo)`
    justify-content: flex-end;
    flex:2;
`;

const H1=styled.h1`
    font-size:36px;
    font-family: 'Londrina Shadow', cursive;
    /* color:text || "#c92aa1"}; */
    color:${props=>(props.backColor)? 'green' : "#c92aa1"};
    
`;

const Ul=styled.ul`
    list-style: none;
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items:center;
    color:${props=>(props.backColor)? 'black' : "white"};
`;

const Li=styled.li`
    text-decoration:none;
    margin-left:1vh;
    padding:5px 5px;
    border-radius:20px;
    color:${props=>(props.backColor)? 'black' : "white"};
    cursor: pointer;
    &:hover{
        /* color:pink; */
        color:white;
        font-weight: bold;
        background:${props=>(props.backColor)? 'green' : "#c92aa1"};
    }
`;
export default Header;