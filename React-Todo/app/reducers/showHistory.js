const showPerHistory	=	(state={},action) =>{
	switch(action.type){
		case 'NUMBER_TOTAL' :
	 		console.log("showPerHistory Total reducer");
	 		console.log(state);
	 		return action.tolEq + "=" + action.number;
	 		break;
		default :
		    return state
    }
}

const showHistory	=	(state=[],action) =>{

	switch(action.type){
		case 'NUMBER_TOTAL' :
	 		console.log("showHistory Total reducer");
	 		console.log(state);
	 		return [
	 			...state,
	 			showPerHistory(undefined,action)
	 		]
	 		return action.tolEq + "=" + action.number;
	 		break;
		default :
		    return state
	}
}

export default showHistory