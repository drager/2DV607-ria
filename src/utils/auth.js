const fakeUser = {
    email : "fake@fakemail.com",
    password : "123"

};

const auth = function(user) {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(user.email == fakeUser.email && user.password == fakeUser.password);
      }, 2000);
  });
};

export default auth;
