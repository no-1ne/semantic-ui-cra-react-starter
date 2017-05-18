/*eslint-disable*/
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button,Icon} from 'semantic-ui-react';
import * as firebase from 'firebase';
import firebaseHelper from './constants.js';

class Login extends Component{
    
    
    constructor(props){
        super(props);
        this.facebookLogin=this.facebookLogin.bind(this);
        this.googleLogin=this.googleLogin.bind(this);
        this.authHandler = this.authHandler.bind(this);
    }
    authHandler(error) {
    if(error) {
        console.log(error);
    }
    }
    componentDidMount(){
        //firebase.auth().getRedirectResult();
    }
    facebookLogin(){
        //let provider=new firebase.auth.FacebookAuthProvider();
        //firebase.auth().signInWithRedirect(provider);
        firebaseHelper.authWithOAuthRedirect('facebook', this.authHandler);
     
    }
    googleLogin()
    {
        //let provider=new firebase.auth.GoogleAuthProvider();
        //firebase.auth().signInWithRedirect(provider);
        firebaseHelper.authWithOAuthRedirect('google', authHandler);
    }
    render(){
     return(
       <div>
       <Button color='facebook' fluid onClick={this.facebookLogin}>
      <Icon name='facebook' /> Login With Facebook
    </Button>
    <br/><br/>
    <Button color='google plus' fluid onClick={this.googleLogin}>
      <Icon name='google plus' />Login With Google
    </Button>
       </div>
    );
    }
}
export default Login;