import React, { Component } from "react";
import RootNavigator from "../../navigators/root-navigator";



class AppContainer extends Component{
    
    componentDidMount(){
        const { initializeApp } = this.props;
        initializeApp();
    }
    render(){
        return (<RootNavigator/>);
    }
}

export default AppContainer;