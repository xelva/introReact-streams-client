import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StreamCreate from './StreamCreate';
import StreamDelete from './StreamDelete';
import StreamEdit from './StreamEdit';
import StreamList from './StreamList';
import StreamShow from './StreamShow';
import Header from './Header';


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/new" component={StreamCreate}/>
                    <Route path="/edit" component={StreamEdit}/>
                    <Route path="/delete" component={StreamDelete}/>
                    <Route path="/show" component={StreamShow}/>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;