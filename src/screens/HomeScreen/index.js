import React, { Component } from "react";
//import PropTypes from "prop-types";
import CryptoContainer from '../../containers/CryptoListingContainer';

class AppContainer extends Component{
    
    componentDidMount(){
    }
    render(){
        return (
          <CryptoContainer {...this.props} />
        )
    }
}


export default AppContainer;