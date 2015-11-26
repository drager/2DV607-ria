/**
 * Created by dav on 2015-11-20.
 */

const fakeUser = {
    email : "fakeEmail@fakemail.com",
    password : "123"

};

const auth = function (user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Auth responsed: "+user.email == fakeUser.email && user.password == fakeUser.password);
            resolve(user.email == fakeUser.email && user.password == fakeUser.password);
        }, 2000);
    });
};

export default auth;