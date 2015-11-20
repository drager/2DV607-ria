/**
 * Created by dav on 2015-11-20.
 */

const fakeUser = {
    email : "fakeEmail@fakemail.com",
    password : "123"

};

const auth = function (user) {
    return user.email == fakeUser.email && user.password == fakeUser.password;
};

export default auth;