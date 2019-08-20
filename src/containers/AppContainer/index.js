import React,{Component} from 'react';
import { connect } from "react-redux";
import { fetchLatestListing } from "../../redux/actions/action-creators";
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

const mapDispatchToProps = dispatch =>({
    initializeApp : () => dispatch(fetchLatestListing())
})
export default connect(null,mapDispatchToProps)(AppContainer);