import auth from '../utils/auth'
export default {
  submitUser(user) {
    return async (dispatch) => {
      if(await auth(user)){
        dispatch({type: 'successValidation'});
      } else {
        console.log('not authenticated');
        dispatch({type: 'failedValidation'});
      }
    }
  }
}
