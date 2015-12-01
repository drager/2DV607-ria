import Firebase from 'firebase';
const fireBaseRef = new Firebase('portfoliodavidg.firebaseIO.com');

const auth = (user) => {
  return new Promise((resolve, reject) => {
    fireBaseRef.authWithPassword({
      email: user.email,
      password: user.password
    }, (error, data) => {
      if (error) {
        reject({data: error, isSuccessful: false});
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
          dispatch({type: 'SET_LOGIN_USER', email: authData.password.email});
          dispatch({type: 'LOGIN'});
        }
        else {
          console.log('listen action says logged out.');
          dispatch({type: 'LOGOUT'});
        }
      });
    }
  },

  loginUser(user) {
    return async (dispatch) => {
      let validation = await auth(user);
      if (validation.isSuccessful) {
        let email = validation.data.password.email;
        dispatch({type: 'LOGIN'});
        dispatch({type: 'SET_LOGIN_USER', email});
      } else {
        console.log('not authenticated');
        dispatch({type: 'FAILED_VALIDATION'});
      }
    }
  },

  logoutUser() {
    return async (dispatch) => {
      dispatch({type: 'LOGOUT'});
      fireBaseRef.unauth();
    }
  }
}
