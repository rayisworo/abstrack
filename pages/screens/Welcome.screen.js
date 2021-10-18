import React, {Component} from 'react';
import WelcomeComponent from '../components/Welcome.component';
import { connect } from 'react-redux';

class WelcomePage extends Component {
    handleLogin = () =>{
        // console.log('im logging in');
    }
    handleRegister = () =>{
        const {navigation} = this.props;
        navigation.navigate('register');
        // console.log('im registering');
    }
    render(){
        const {country} = this.props;
        return(
            <WelcomeComponent
                country={country}
                handleLogin={this.handleLogin}
                handleRegister={this.handleRegister}
            />
        )
    }
}

const mapStateToProps = state => ({
    country: state,
});

export default connect(mapStateToProps,null)(WelcomePage);