import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setCountry} from './store/thunks/common';
import * as RNLocal from 'react-native-localize';
import Routes from './routes/routes';

class App extends Component{
  componentDidMount(){
    const {setCountry} = this.props;
    setCountry(RNLocal.getLocales());
  }
  render(){
    return(
      <Routes/>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCountry:(payload)=>dispatch(setCountry(payload)),
});

export default connect(null,mapDispatchToProps)(App);