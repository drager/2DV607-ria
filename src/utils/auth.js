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
export default auth;
