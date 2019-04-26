var provider = new firebase.auth.FacebookAuthProvider();
var userPic = document.querySelectorAll('userInfo > div')
var userName = document.querySelectorAll('userInfo > p')

function loginFb(){
	provider.addScope('public_profile');
	firebase.auth().signInWithPopup(provider).then(function(result) {
		var token = result.credential.accessToken;
		var user = result.user;
		alert(user)
		window.location = '/views/dashboard.html';
		window.setTimeout(M.toast(`¡¡Hola, ${result.user.displayName} !!`, 3000), 1500)
		userPic.style.backgroundImage = result.user.photoURL
		userName.style.innerHTML = result.user.displayName
	}).catch(function(error) {
		console.log(error)
		M.toast(`Error al autenticarse con Facebook ${error} !!`)
	});
}
document.getElementById('authFB').addEventListener('click', loginFb, false)





