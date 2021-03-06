import 'dotenv/config';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {UserContext} from './Context/User-Context';


//setting up Firebase SEE BELOW
import Firebase, {FirebaseContext} from './Firebase/index';


ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <UserContext>
            <App/>
        </UserContext>
    </FirebaseContext.Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
