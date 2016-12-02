// const update = (state, mutations) =>
//   Object.assign({}, state, mutations)

const numberClick	=	(state = "",action) =>{

	switch(action.type){
		case 'NUMBER_CLICK' :
			console.log("number click reducer");
		 	state = state + action.number;
		 	console.log(state);
		 	return state;
		 	break;
	 	case 'NUMBER_TOTAL' :
	 		console.log("NUmber Total reducer");
	 		return action.number;
	 		break;
 		case 'NUMBER_CLEAR' :
	 		console.log("NUmber Total reducer");
	 		return action.number;
	 		break;
		default :
		    return state
	}
}
export default numberClick