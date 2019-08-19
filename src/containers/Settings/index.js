
import React from 'react';
import { toggleTheme } from '../../redux/actions/actionables';
import { Linking, } from 'react-native';
import { connect } from 'react-redux';
import Settings from '../../components/Settings';
import { properties, deviceInfo, PAGE_SIZE, DEBOUNCE_INTERVAL } from '../../utils/constants';
import { fetchDataOnConversionChange } from '../../redux/actions/action-creators';
//import throttle from '../../utils/helpers/throttle';

class SettingContainer extends React.PureComponent {

    _handleValueChange = () => {
        this.props.changeTheme();
    };

    _onFeedbackPress = async () => {
        if (deviceInfo.isEmulator) {
            return null;
        }
        const url = `mailto:${properties.feedbackEmail.email}?subject=${properties
            .feedbackEmail.subject}`;
        const _canOpen = await Linking.openURL(url);

        if (_canOpen) {
            return Linking.openURL(url);
        }

        return null;
    }

    _handleConversionChange = (item,index) => {   
        this.props.changeConversion(item);
        //throttle(() => this.props.changeConversion.apply(this,item), DEBOUNCE_INTERVAL);
    }
    render() {        
        return (
            <Settings
                _handleValueChange={this._handleValueChange}
                _onFeedbackPress={this._onFeedbackPress}
                _handleConversionChange={this._handleConversionChange}
                {...this.props}
            />
        );
    }
}
const mapDispatchToProps = dispatch =>({
    changeTheme :  () => dispatch(toggleTheme()),
    changeConversion: (conversion) =>dispatch(fetchDataOnConversionChange(1, PAGE_SIZE, conversion))
})
export default connect(null,mapDispatchToProps)(SettingContainer);