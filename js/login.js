var provider = new firebase.auth.FacebookAuthProvider();
function loginFb(){
	console.log('click')
	
	provider.addScope('public_profile');
	firebase.auth().signInWithPopup(provider).then(function(result) {
		var token = result.credential.accessToken;
		var user = result.user;
		alert(user)
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
}
document.getElementById('authFB').addEventListener('click', loginFb, false)





