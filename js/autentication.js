function loginFb(){
  if(!firebase.auth().currentUser){
    var provider = new firebase.auth.FacebookAuthProvider();
    //provider.addScope('public_profile')
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      var user = result.user;
      console.log(user)
      window.location = '/views/dashboard.html';
      M.toast(`¡¡Hola, ${result.user.displayName} !!`, 4000)
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  } else {
    console.log('OUT!')
    firebase.auth().signOut();
  }
}
 document.getElementById('authFB').addEventListener('click', loginFb(), false)






