import initialState from './../initialState'

let submitUser = function(state, action) {
    const newState = Object.assign({}, state);
    switch(action.type){
        case 'successValidation':
            console.log("Succes?");
            console.log(state.email);
            newState.email = state.email;
            newState.password = state.password;
            return newState;
        default:
            return state || initialState().userState;
    }
};

export default submitUser
