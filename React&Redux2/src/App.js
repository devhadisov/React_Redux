import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import './App.css';
import Room from './components/Room';
import * as actions from './action';

class App extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    var stringVal = localStorage.getItem('adult');
    if (stringVal) {
      var stringArray = JSON.parse(stringVal);
      console.log("stringArray ", stringVal);
      var adult = [];
      for (let i = 0; i < stringArray.length; i++) {
        adult.push(Number(stringArray[i]));
      }
      // console.log("adult storage ", adult);
    }

    stringVal = localStorage.getItem('children');
    if (stringVal){
      stringArray = JSON.parse(stringVal);
      var children = [];
      for (let i = 0; i < stringArray.length; i++) {
        children[i] = Number(stringArray[i]);
      }
      // console.log("children storage ", children);
    }
    stringVal = localStorage.getItem('checked');
    var checked = JSON.parse(stringVal);

    // console.log("checked storage ", checked);

    if (adult && adult.length === 4 &&
        children && children.length === 4 &&
        checked && checked.length === 4) {
      // console.log("start ", adult, children, checked);
      this.props._init_appstate(adult, children, checked);
    }
  }

  onSubmit() {
    localStorage.setItem('adult', JSON.stringify(this.props.adult));
    localStorage.setItem('children', JSON.stringify(this.props.children));
    localStorage.setItem('checked', JSON.stringify(this.props.checked));
  }

  render() {
    console.log("render ", this.props.adult, this.props.children, this.props.checked);
    return (
      <div className="test2" style={{marginTop: '50px'}}>
        <Container>
          <Row>
            <Col lg={3} md={3} > 
              <Room
                rid={1}
                hascheckbox={false}
                title="Room 1"
                checked="true"
                adult={this.props.adult[0]}
                children={this.props.children[0]}
              />
            </Col>

            <Col lg={3} md={3}> 
              <Room
                rid={2}
                hascheckbox={true}
                title="Room 2"
                checked={this.props.checked[1]}
                adult={this.props.adult[1]}
                children={this.props.children[1]}
              />
            </Col>

            <Col lg={3} md={3}> 
              <Room
                rid={3}
                hascheckbox={true}
                title="Room 3"
                checked={this.props.checked[2]}
                adult={this.props.adult[2]}
                children={this.props.children[2]}
              />
            </Col>

            <Col lg={3} md={3}> 
              <Room
                rid={4}
                hascheckbox={true}
                title="Room 4"
                checked={this.props.checked[3]}
                adult={this.props.adult[3]}
                children={this.props.children[3]}
              />
            </Col>
          </Row>
          <Row>
            <Button variant="contained" className="button" onClick={this.onSubmit} style={{top: '20px', left: '20px'}}>
              Submit
            </Button>
          </Row>
        </Container>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return{
      checked: state.app.checked,
      adult: state.app.adult,
      children: state.app.children
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    _init_appstate: (adult, children, checked) => {
      dispatch(actions.initAppState(adult, children, checked))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);