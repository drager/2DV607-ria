import Firebase from 'firebase';
const fireBaseRef = new Firebase('portfoliodavidg.firebaseIO.com');
import history from './../utils/history'


const auth = (user) => {
    return new Promise((resolve, reject) => {
        fireBaseRef.authWithPassword({
            email: user.email,
            password: user.password
        }, (error, data) => {
            if (error) {
                resolve({data: error, isSuccessful: false});
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
            dispatch({type: 'START_SPINNER'});
            let validation = await auth(user);
            if (validation.isSuccessful) {
                let email = validation.data.password.email;
                dispatch({type: 'LOGIN'});
                dispatch({type: 'SET_LOGIN_USER', email});
                dispatch({type: 'STOP_SPINNER'});
                history.go(-1);

            } else {
                console.log('not authenticated');
                dispatch({type: 'FAILED_VALIDATION'});
                dispatch({type: 'STOP_SPINNER'});
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
