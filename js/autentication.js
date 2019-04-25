
const objAuth = new Autentication()
$("#authFB").click(() => objAuth.authCuentaFacebook());



authCuentaFacebook() {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(result => {
    $('#avatar').attr('src',result.user.photoURL),
    $('#modal').modal('close'),
    Materialize.toast(`Bienvenido ${result.user.displayName}!!`,4000)
  })
  .catch(error => {
    console.log(error)
    Materialize.toast(`Error: ${error}!!`,4000)
  })
}
