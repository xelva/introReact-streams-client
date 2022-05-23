import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './StreamCreate';
import StreamDelete from './StreamDelete';
import StreamEdit from './StreamEdit';
import StreamList from './StreamList';
import StreamShow from './StreamShow';
import Header from './Header';
import history from '../history';


const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList}/>
                        <Route path="/new" component={StreamCreate}/>
                        <Route path="/edit/:id" component={StreamEdit}/>
                        <Route path="/delete/:id" component={StreamDelete}/>
                        <Route path="/show/:id" component={StreamShow}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;