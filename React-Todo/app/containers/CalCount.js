import React from 'react';
import { connect } from 'react-redux';
import Calculator from '../components/Calculator';
import {numberClick} from '../actions';
import {evalCount} from '../actions';
import {clearClick} from '../actions';

const mapStateToProps = (state, ownProps) => {
	console.log("entered mapStateToProps");
	console.log(state);
  return {
    lists: state.showHistory,
    enteredValue : state.numberClick
  }
}

const mapDispatchToProps	=	(dispatch)	=>{
	return {
		onDigitClick : (id)	=>{
			console.log("entered onDigitClick");
			dispatch(numberClick(id));
			//ReactDOM.findDOMNode(this.refs.chasaweriveli).value+= id;
		},	
		evalCount : (total)	=>{
			console.log("entered evalCount");
			console.log(total);
			dispatch(evalCount(total));
			//ReactDOM.findDOMNode(this.refs.chasaweriveli).value+= id;
		},
		clearClick: () => {
			dispatch(clearClick());
		}
	}
}
const CalCount = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);
export default CalCount;