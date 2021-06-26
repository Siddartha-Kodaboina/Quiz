import styled from 'styled-components';
import HtmlBackground from '../../images/HtmlBackground.jpg';
import {Link } from 'react-router-dom';
const TopicsBody = () => {
    const data=[
        {
            title:'Maths',
            url:'',
            id:19
        },
        {
            title:'Computers',
            url:'',
            id:18
        },
        {
            title:'Board',
            url:'',
            id:16
        },
        {
            title:'Film',
            url:'',
            id:11
        },
        {
            title:'Celebrities',
            url:'',
            id:26
        },
        {
            title:'Vehicles',
            url:'',
            id:28
        },
        {
            title:'Geography',
            url:'',
            id:22
        },
        {
            title:'Video games',
            url:'',
            id:15
        },
        {
            title:'Book',
            url:'',
            id:10
        },
        {
            title:'Nature',
            url:'',
            id:17
        }
    ];
    return (
        <DivTopicsBody>
            <Title>
                <h1>Our top Topics.</h1>
            </Title>
            <SubTitle>
                <h2>Test your skills with our top topics with a variety of questions set for beginners and seniors alike!</h2>
            </SubTitle>
            <DivGrid>
                {
                    data.map((item,idx)=>(
                        <div>
                            <img src={HtmlBackground} />
                            <div className='overlay'></div>
                            <Link to={`/topics/${item.id}_${item.title}`} className='detailes'>
                                <h1 style={{fontSize:"1.5rem"}}>{item.title}</h1>
                            </Link>
                        </div>
                    ))
                }
                
            </DivGrid>
        </DivTopicsBody>
    )
}

const DivTopicsBody=styled.div`
    position:relative;
    width:100vw;
    min-height:90vh;
    color:white;
    background:rgba(25, 25, 25);
`;

const Title=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:10vh 0vh;
`;
const SubTitle=styled(Title)`
    padding:0vh 5vh 10vh 5vh;
    > h2{
        font-weight:1;
    }
`;
const DivGrid=styled.div`
    position:relative;
    display: grid;
    grid-template-columns:repeat(auto-fill, minmax(200px,1fr));
    grid-gap:20px;
    padding:0vh 5vh 10vh 5vh;
    border:1px solid red;
    > div{
        display:flex;
        position: relative;
        justify-content: center;
        align-items:center;
        border:1px solid white;
        height:25vh;
        overflow:hidden;
        cursor: pointer;
        img{
            width:100%;
            object-fit:cover;
        }
        .overlay{
            height:100%;
            width:100%;
            background: rgba(27, 102, 121, 0.712);
            opacity: 0.6;
            position:absolute;
            
        }
        .detailes{
            width:100%;
            height:100%;
            text-decoration:none;
            position:absolute;
            color:white;
            display:flex;
            justify-content: center;
            align-items:center;
            flex-direction:column;
        }
    }
`;
export default TopicsBody
