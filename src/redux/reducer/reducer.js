let initialState={
    count : 0,
    id: "",
    password: ""
}
function reducer(state=initialState, action){
    console.log("action ??", action)
    if(action.type==="INCREMENT"){
        return {...state, count:state.count + action.payload.num}
    }

    if(action.type==="LOGIN"){
        return {...state, id: action.payload.id, password: action.payload.passworod}
    }

    if(action.type==="DECREMENT"){
        return {...state, count:state.count - 1}
    }

    return {...state}
}

export default reducer