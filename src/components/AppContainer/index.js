import { connect } from "react-redux";
import AppContainer from "./presenter";
import { fetchLatestListing } from "../../redux/actions/fetch-listing";

const mapStateToProps = state =>({
    listing : state,
})
const mapDispatchToProps = dispatch =>({
    initializeApp : () => dispatch(fetchLatestListing())
})
export default connect(mapStateToProps,mapDispatchToProps)(AppContainer);