import React, { Component } from 'react'
import { Route, BrowserRouter, Switch, history } from 'react-router-dom'
import firebaseHelper from './constants.js'
import { Modal, Header} from 'semantic-ui-react';

import Home from './Home.js';
import Login from './Login.js';


/*export class PrivateRoute extends Component {
    render() {
        console.log('I am hete');
     if (this.props.authed !== true) {
        return (
        <Modal 
            defaultOpen={true} closeOnDocumentClick={true} 
              closeIcon='close' onClose={this.closeLoginModal}>
           <Header content='Please Login to Continue' />
             <Modal.Content>
             <Login loginSucessPath={this.props.location.pathname}/>
             </Modal.Content>
               </Modal>);
        //show login modal
    } else {
        return (
            <Route {...this.props.rest} render={(props) => {<Component {...props} />}}/>
            )
    }
    }
}*/
const PrivateRoute = ({component: Component, authed, locationHistory, ...rest}) => {
 console.log('I am here');
 if (authed !== true) {
        return (
        <Modal 
            defaultOpen={true} closeOnDocumentClick={true} 
              closeIcon='close' onClose={()=>{debugger;history.back()}}>
           <Header content='Please Login to Continue' />
             <Modal.Content>
             <Login loginSucessPath={rest.path}/>
             </Modal.Content>
               </Modal>);
        //show login modal
    } else {
        return (
            <Route {...rest} render={(props) => {<Component {...props} />}}/>
            )
    }
}

export default class MyRoutes extends Component {

   render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <PrivateRoute path='/dashboard' exact
                            authed={this.props.UserAuthed}  
                                component={Home} locationHistory={this.history}/>
                        <Route render={() => <h3>No Match</h3>} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}