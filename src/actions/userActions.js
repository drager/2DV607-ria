import Firebase from 'firebase';
let fireBaseRef = new Firebase('portfoliodavidg.firebaseIO.com');

const auth = function(user) {
  return new Promise((resolve) => {
    fireBaseRef.authWithPassword({
      email : user.email,
      password : user.password
    }, (error, data) => {
      if(error)  {
        resolve({data: error, isSuccessful: false})
      }
      resolve({data, isSuccessful: true});
    });
  });
};

export default {

  listenToAuthState() {
    return (dispatch) => {
      fireBaseRef.onAuth((authData) => {
        if (authData) {
          console.log('listen action says logged in.');
          dispatch({type: 'successValidation'});
        }
        else {
          console.log('listen action says logged out.');
          dispatch({type: 'logout'});
        }
      });
    }
  },

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
  },

  logoutUser() {
    return async (dispatch) => {
      console.log('in logout user action creator');
      dispatch({type: 'logout'})
      fireBaseRef.unauth();
    }
  }
}
