/*eslint-disable*/
import React, { Component } from 'react';
import { Menu, Segment, Icon, Header, Button, Modal, Sidebar, img, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Login from './Login';
import './App.css';
import firebaseHelper from './constants.js'
import MyRoutes from './MyRoutes.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LoginModalVisible: false,
            SidebarVisible: true,
            SidebarMenuIconVisible: true,
            UserAuthed: false,
            CurrentUser: null
        }
        this.handleLoginModalShow = this.handleLoginModalShow.bind(this);
        this.handleLoginModalClose = this.handleLoginModalClose.bind(this);
        this.toggleSideBarVisibility = this.toggleSideBarVisibility.bind(this);
        this.getSidebarIcon = this.getSidebarIcon.bind(this);
        this.getSidebarContent = this.getSidebarContent.bind(this);
        this.updateBrowserWindowDimensions = this.updateBrowserWindowDimensions.bind(this);
    }

    componentDidMount() {
        /*
         * Responsive feautures if width < something set a 
         * state so that sidebar behaves accordingly
         */
        this.updateBrowserWindowDimensions();
        window.addEventListener("resize", this.updateBrowserWindowDimensions);

        /*
         * Handle Authentication changes
         */
        this.removeAuthChangeListener = firebaseHelper.onAuth((user) => {
            if (user) {
                this.setState({
                    UserAuthed: true,
                    CurrentUser: user
                })
            } else {
                this.setState({
                    UserAuthed: false,
                    CurrentUser: null
                })
            }
        })

    }
   
   /*
    * Remove event handlers
    */
    componentWillUnmount() {

        window.removeEventListener("resize", this.updateBrowserWindowDimensions);
        this.removeAuthChangeListener();
    }

    /*
     * Handle browser resizes so that sidebar behaves accordingly 
     */
    updateBrowserWindowDimensions() {

        if (window.innerWidth < 500) {
            this.setState({
                SidebarVisible: false
            });
        } else {
            this.setState({
                SidebarVisible: true
            });
        }
    }
    
    handleLoginModalShow() {
        this.setState({
            LoginModalVisible: true
        });
    }
    handleLoginModalClose() {
        console.log('in modal login close');
        this.setState({
            LoginModalVisible: false
        });
    }
    toggleSideBarVisibility() {
        this.setState({
            SidebarVisible: !this.state.SidebarVisible

        });
    }
    getSidebarIcon() {
        if (this.state.SidebarMenuIconVisible == true) {
            if (this.state.SidebarVisible == true) {

                return (
                    <Menu inverted>
              <Menu.Item icon='arrow left'  onClick={this.toggleSideBarVisibility} />
            </Menu>
                );
            } else {
                return (
                    <Menu inverted>
              <Menu.Item icon='sidebar'  onClick={this.toggleSideBarVisibility} />
            </Menu>
                );
            }
        }
    }
    getSidebarContent(content) {
        if (this.state.SidebarVisible == true) {
            return (
                <div>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='profile'>
              <Icon name='user' />
              Profile
            </Menu.Item>
            <Menu.Item name='settings'>
              <Icon name='settings' />
              Settings
            </Menu.Item>
            </div>
            );
        }
    }
 
    render() {
        let sidebarIcon = this.getSidebarIcon();
        let sidebarContent = this.getSidebarContent();
        return (
        <div>
        <Menu  style={{marginBottom: '0px'}} size='massive' inverted>
        {sidebarIcon}
          <Menu.Item position='right' name='LogIn' onClick={this.handleLoginModalShow} />
         </Menu>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='push' width='thin' visible={this.state.SidebarVisible} icon='labeled' vertical inverted>
            {sidebarContent}
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <MyRoutes UserAuthed={this.state.UserAuthed} showLoginModal={this.handleLoginModalShow}/>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
          <Modal 
            open={this.state.LoginModalVisible} closeOnDocumentClick={true} 
              closeIcon='close' onClose={this.handleLoginModalClose}>
           <Header content='Login' />
             <Modal.Content>
             <Login />
             </Modal.Content>
               </Modal>
            </div>
        );
    }
}
export default App;
