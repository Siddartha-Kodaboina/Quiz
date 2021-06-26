
import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Home from './components/Home';
import Topics from './components/Topics';
import Quiz from './components/Quiz';
// import Header from './components/ui/Header';

function App() {
    
    const DivApp = styled.div`
        position:relative;
    `;


    return (
        <DivApp>
            <Router>
                {/* <Header /> */}
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/topics' exact component={Topics}></Route>
                    <Route path='/topics/:id' component={Quiz}></Route>
                    <Route path='/' render={()=>{
                        {console.log('thappu undhi')}
                        <div>404</div>}}>
                    </Route>
                </Switch>
            </Router>
        </DivApp> 
    );
}

export default App;
