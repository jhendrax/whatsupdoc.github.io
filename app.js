(function(){
  const config = {
    apiKey: "AIzaSyBEPq8H-JQQo4t6zbeWG9mskb6-Pcm5BVc",
    authDomain: "the-good-doc.firebaseapp.com",
    databaseURL: "https://the-good-doc.firebaseio.com",
    storageBucket: "the-good-doc.appspot.com",
  };
  firebase.initializeApp(config);
  
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignup = document.getElementById('btnSignup');
  const btnLogout = document.getElementById('btnLogout');
  
  btnLogin.addEventListener('click', e => {
	const email= txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();
	const promise = auth.signInWithEmailAndPassword(email,pass);
	promise.catch(e=> console.log(e.message));
  });
  
  btnSignup.addEventListener('click', e => {
	const email= txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();
	const promise = auth.createUserWithEmailAndPassword(email,pass);
	promise
	.catch(e=> console.log(e.message));
  });
  
  btnLogout.addEventListener('click', e=>{
	 firebase.auth().signOut(); 
  });
  firebase.auth().onAuthStateChanged(firebaseUser=>{
	  if(firebaseUser){
		  console.log(firebaseUser);
		  btnLogout.classList.remove('hide');
	  }
	  else{
		  console.log('not logged in');
		  btnLogout.classList.add('hide');
	  }
  });
}());