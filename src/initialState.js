/**
 * initialState.js Created by dav on 2015-11-16.
 */
export default () => {
    return {
        loginState: {isLoggedIn: false},
        userState: {
            email: "youAreNotLoggedIn@clulesss.com",
            password: "secret"
        },
        spinner: {
            spinning: false
        }
    }
};
