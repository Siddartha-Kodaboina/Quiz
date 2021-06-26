import React,{ useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const QuizBody = ({id}) => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ctr, setCtr] = useState(0);
    const [options, setOptions] = useState([]);
    const [answers,setAnswers]=useState([]);
    const [checked,setChecked]=useState([]);
    const [submit, setSubmit] = useState(false);
    const [idArr, setIdArr] = useState(id.split('_'));

    console.log('array is',idArr);

    const getOptions=(questions) => {
        var opt=[];
        var ans=[];
        var check=[];
        const m=questions.length;
        for(let i=0;i<m;i++){
            var arr=[];
            check.push(-1);
            arr.push(...questions[i].incorrect_answers);
            arr.push(questions[i].correct_answer);
            const n=arr.length;
            const rand=Math.ceil(Math.random()*1000)%n;
            ans.push((rand+(n-1))%n);
            var ret=new Array(n);
            for(let i=0;i<n;i++){
                // console.log(arr[(rand+i)%n]);
                ret[(rand+i)%n]=arr[i];
            }
            opt.push(ret);
            // console.log(arr,ret,ans[i],questions[i].correct_answer,rand);
        }
        setAnswers(ans);
        setChecked(check);
        return opt;
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData=async()=>{
        const response=await fetch(`https://opentdb.com/api.php?amount=10&category=${idArr[0]}&type=multiple`);//&difficulty=medium&type=multiple
        const res=await response.json();
        console.log(res);
        setQuestions(res.results);
        setOptions(getOptions(res.results));
        setLoading(false);
    }
    if(loading){
        return <div>Loading...</div>
    }


    const styleBox=(num,dec)=>{
        if(dec) return { background:'purple',color:'white'};
        if(num>=0) {
            return { background:'green',color:'white'};
        }
        return { background:'lightgrey'};
    }

    const checkmarkStyle=(num)=>{
        if(num>=0) return { display:'green',color:'white'};
        return { background:'lightgrey'};
    }

    
    console.log(options);
    console.log(answers);
    console.log('out',checked);
    return (
        <DivQuizBody >
            <div className="topic">
                    <h1>Quiz on <span style={{color:'green'}}>{idArr[1]}</span></h1>
            </div>
            <div className='container'>
                
                <div className='questions'>
                    <div className='question'>
                        <div className='Qno'><h3>Question {ctr+1}</h3></div>
                        <div className="title">
                            {(questions[ctr].question)}
                        </div>
                        <div className="options">
                           {
                                options[ctr].map((item,idx)=>(
                                    <label class="radioC" 
                                        onClick={submit?console.log('cannot edit'):()=>setChecked((checked)=>
                                            checked.map((checkedItem,checkedIdx)=>
                                                (checkedIdx==ctr)?idx:checkedItem
                                        ))}>
                                            {item}
                                            {console.log(checked)}
                                        <input type="radio" name="radio" checked={idx==checked[ctr]}/>
                                        <span class="checkmark"></span>
                                    </label>
                                ))
                           }
                        </div>
                    </div>
                    <div className='buttons'>
                        <div className="pn">
                            <button disabled={ctr===0} onClick={()=>setCtr(ctr-1)}>Previous</button>
                            <button disabled={ctr===9} onClick={()=>setCtr(ctr+1)}>Next</button>
                        </div>
                        <div className="s">
                            <button onClick={()=>setSubmit(true)}>Submit</button>
                        </div>
                    </div>
                    
                </div>
                <div className='statusParent'>
                {submit && <h4 style={{color:'red'}}>Note : Submitted cannot change options</h4> }
                    {
                        submit && <div className='result'>
                            <h1>Results</h1>

                            <h2>Total : 10</h2>
                            <h2>Attempted : {checked.reduce((attempted,val)=>(val!=-1?attempted+=1:attempted),0)}</h2>
                            <h3>Correct : {checked.reduce((attempted,val,idx)=>(val==answers[idx]?attempted+=1:attempted),0)}</h3>
                            <Link to='../topics'>
                                <button>Back</button>
                            </Link>
                        </div>
                    }
                    <div class='status'>
                        {
                            questions.map((item,idx)=>(
                                <Box key={idx} style={styleBox(checked[idx],idx==ctr)} onClick={()=>setCtr(idx)}>
                                    <div  >
                                        <h1>{idx+1}</h1>
                                    </div>
                                </Box>
                            ))
                        }
                    </div>
                    
                </div>
            </div>
        </DivQuizBody>
    )
}


const DivQuizBody=styled.div`
    /* border:1px solid blue; */
    position:relative;
    width:100vw;
    min-height:90vh;
    background:#eaffee;
    .topic{
        display:flex;
        width:100%;
        position:relative;
        height: 10vh;
        justify-content: center;
        align-items:center;
    }
    .container{
        /* border:1px solid red; */
        position:relative;
        width:90%;
        /* min-height:90vh;  */
        left:5%;
        display:flex;
        justify-content:flex-start;
        align-items:flex-start;
        @media(max-width: 658px) {
            flex-direction:column;
        }
        .questions{
            /* border:1px solid black; */
            position: relative;
            flex:4;
            padding:10px 100px 10px 0px;
            /* margin-top:30px; */
            height:65vh;
            display:flex;
            justify-content:space-between;
            align-items:flex-start;
            flex-direction:column;
            .Qno{
                display: flex;
                position:relative;

                /* border:1px solid red; */
                justify-content: flex-start;
                align-items:center;
                margin-bottom:5vh;
            }
            .question{
                position:relative;
                width:100%;
                display: flex;
                flex-direction: column;
                
                .title{
                    margin-bottom:5vh;
                    font-weight: 600;
                    width:100%;
                }
                .options{
                    display:flex;
                    flex-direction:column;
                    width:fit-content;
                    /* padding-left:5vh; */
                    .radioC {
                        display: inline-flexbox;
                        position: relative;
                        padding-left: 35px;
                        margin-bottom: 12px;
                        cursor: pointer;
                        font-size: 22px;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                        /* border:1px solid red; */
                    }

                    /* Hide the browser's default checkbox */
                    .radioC input {
                        position: relative;
                        opacity: 0;
                        cursor: pointer;
                        height: 0;
                        width: 0;
                    }

                    /* Create a custom checkbox */
                    .checkmark {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 25px;
                        width: 25px;
                        background-color: white;
                        border:1px solid grey;
                        border-radius:50%;
                    
                    }

                    /* On mouse-over, add a grey background color */
                    .radioC:hover input ~ .checkmark {
                        background-color: #ccc;
                    
                    }

                    /* When the checkbox is checked, add a blue background */
                    .radioC input:checked ~ .checkmark {
                        background-color: white;
                        border:1px solid green;
                    }

                    /* Create the checkmark/indicator (hidden when not checked) */
                    .checkmark:after {
                        content: "";
                        position: relative;
                        display: none;
                    }

                    /* Show the checkmark when checked */
                    .radioC input:checked ~ .checkmark:after {
                        display: block;
                    }

                    /* Style the checkmark/indicator */
                    .radioC .checkmark:after {
                        left: 9px;
                        top: 5px;
                        width: 5px;
                        height: 10px;
                        border: solid rgb(50, 168, 82);
                        border-width: 0 3px 3px 0;
                        -webkit-transform: rotate(45deg);
                        -ms-transform: rotate(45deg);
                        transform: rotate(45deg);
                    }
                }
                
            }
            @media(max-width: 658px) {
                /* margin-top: 30px; */
                width:100%;
                /* flex:2;
                padding:30px;
                display:grid;
                grid-template-columns:repeat(auto-fill, minmax(50px,1fr));
                grid-gap:20px; */
            }
            .buttons{
                /* border:1px solid red; */
                position:relative;
                margin-bottom:-13px; 
                width:100%;
                display:flex;
                justify-content: space-between;
                align-items: center;
                .pn{
                    /* padding: 10px 20px; */
                    button {
                        padding:5px 10px;
                        margin-right:10px;
                        cursor: pointer;
                    }
                }
                
                .s{
                    padding: 10px 20px;
                    margin-right:200px;
                    button {
                        padding:5px 10px;
                        cursor: pointer;
                    }
                }
                /* justify-self: flex-end; */
            }
        }
        .statusParent{
            flex:2;
            /* padding:30px; */
            margin-top: 10px;
            h4{
                margin-bottom:20px;
            }
            .result{
                /* margin-bottom: 25px; */
                
                h1{
                    margin-bottom:7px;
                }
                h2,h3{
                    margin-left: 20px;
                    margin-bottom: 5px;
                }
                button{
                    margin-top:25px;
                    padding:5px 10px;   
                }
            }
            .status{
                display:grid;
                grid-template-columns:repeat(auto-fill, minmax(50px,1fr));
                grid-gap:20px;
                margin-top:50px;
                /* border:1px solid green; */
                
                @media(max-width: 658px) {
                    margin-top: 0px;
                    width:100%;
                    flex:2;
                    padding:30px;
                    display:grid;
                    grid-template-columns:repeat(auto-fill, minmax(50px,1fr));
                    grid-gap:20px;
                }
            }
            @media(max-width: 658px) {
                margin-top: 30px;
                width:100%;
            }
            
        }
    }
`;

const Box=styled.div`
    /* display: flex; */
    height:40px;
    display:flex;
    justify-content: center;
    align-items:center;
    width:40px;
    cursor: pointer;
    box-shadow: 1px 1px 2px lightgrey;
    border-radius: 4px;
`;
export default QuizBody
