import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventDemo from './button-events/EventDemo';
import { simpleAction } from './redux/actions/simpleAction';
import Nav from './nav/Nav';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props);
    return (

      <div className="App">
          <div> {this.props.simpleReducer.reduxName} </div>
          <Nav></Nav>
       <EventDemo
        myName = 'Jason'
       />
      </div>
    );
  }
}

const mapStateToProps = state => ({
    simpleReducer: state.simpleReducer.reduxName
})


const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);
