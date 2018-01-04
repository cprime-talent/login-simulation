// Login.js

var validUsername = "falken";
var validPassword = "joshua"
var maxAttempts = 3;

var loginAttempts = 0;

function clearMessage(){
	$("#messageArea").empty();
}

function showMessage(message){
	$("#messageArea").text(message);
}

function registerListeners(){
	$("#loginButton").click(loginClicked);
}

function getUsername(){
	return $('[name=login-username]').val();
}

function getPassword(){
	return $('[name=login-password]').val();
}

function performSuccessAction(){
	loginAttempts=0;
	clearMessage();
	window.location.href = "welcome.html";
}

function performFailureAction(){
	loginAttempts++;
	showMessage("The details are not correct");	
}

function maxAttemptsExceeded(){
	clearMessage();
	window.location.href = "not-welcome.html";
}

function validateFields(){
	var username = getUsername();
	var password = getPassword();

	if (username.length>0 && password.length==0){
		showMessage("Please enter a password");	
	}
	if (username.length==0 && password.length>0){
		showMessage("Please enter a username");	
	}
	if (username.length==0 && password.length==0){
		showMessage("Please enter both username and password");	
	}

	return (username.length>0 && password.length>0);
}

var loginClicked = function(){
	clearMessage();
	if (validateFields()){
		if (loginAttempts >= maxAttempts){
			maxAttemptsExceeded();
		} else {
			var username = getUsername();
			var password = getPassword();
			if (username==validUsername && password==validPassword){
				performSuccessAction();
			} else {
				performFailureAction();
			}
		}		
	}
}

$(function() {
    clearMessage();
    registerListeners();
    loginAttempts==0;
});
