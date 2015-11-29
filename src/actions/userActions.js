import auth from '../utils/auth'
export default {
    submitUser(user) {
      return (dispatch) => {
        setTimeout(() => {
          if (auth(user)) {
            dispatch({type: 'successValidation'});
          }
          else {
            dispatch({type: 'failedValidation'});
          }
        }, 2000);
      }
    }
}
