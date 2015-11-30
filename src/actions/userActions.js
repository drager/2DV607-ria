import auth from '../utils/auth'
export default {
  submitUser(user) {
    return async (dispatch) => {
      let validation = await auth(user);
      if(validation.isSuccessful){
        dispatch({type: 'successValidation'});
      } else {
        console.log('not authenticated');
        dispatch({type: 'failedValidation'});
      }
    }
  }
}
