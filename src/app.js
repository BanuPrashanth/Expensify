import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, {history} from './routers/AppRouter';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {firebase} from './firebase/firebase';
import {login, logout} from './actions/auth';

const store = configureStore();

if(process.env.NODE_ENV !== 'production'){
    console.log('development')
}else{
    console.log('Production')
}

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const  renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}
 
firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid));
        renderApp();
        if(history.location.pathname === '/'){
            history.push('dashboard');
        }
    }else {
        store.dispatch(logout());
        renderApp();
        history.push('/')
    }
});


