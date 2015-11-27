/**
 * Created by dav on 2015-11-20.
 */

const fakeUser = {
    email : "fakeEmail@fakemail.com",
    password : "123"

};

const auth = function (user) {
    //Setting Timeout making it an asynchronous request.
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(user.email == fakeUser.email && user.password == fakeUser.password);
        }, 2000);
    });
};

export default auth;