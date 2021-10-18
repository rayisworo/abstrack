import React, {Component} from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import RegisterComponent from '../components/Register.component';
import {setCountry} from '../../store/thunks/common';
import {register} from '../../store/thunks/auth.thunks';
import _, { set } from 'lodash';

const formConfig = {
    form:'register',
}

const DecoratedRegisterPage = reduxForm(formConfig)(RegisterComponent);

class RegisterPage extends Component{
    render(){
        const {sendRegistrationData} = this.props;
        return(
            <DecoratedRegisterPage
                sendRegistrationData={sendRegistrationData}
            />
        );
    }
}

const mapDispatchToProps = dispatch =>({
    sendRegistrationData:(data)=>(dispatch(register(data))),
    setCountry:(data)=>(dispatch(setCountry(data))),
})

export default connect(null,mapDispatchToProps)(RegisterPage);