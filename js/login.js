var provider = new firebase.auth.FacebookAuthProvider();
function loginFb(){
	provider.addScope('public_profile');
	firebase.auth().signInWithPopup(provider).then(function(result) {
		var token = result.credential.accessToken;
		var user = result.user;
		document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('#loginWelcomeModal');
			var instances = M.Modal.init(elems, options);
		});
		document.querySelectorAll('#loginWelcomeModal h4').innerHTML = `¡¡Hola, ${result.user.displayName} !!`
		window.location = './views/dashboard.html';
	}).catch(function(error) {
		console.log(error)
		M.toast(`Error al autenticarse con Facebook ${error} !!`)
	});
}
document.getElementById('authFB').addEventListener('click', loginFb, false)





