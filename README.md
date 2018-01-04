# login-simultion
Simulation of a website login for BDD exercises

Here's what it does:
- Has username, password field, a message, a reset and a login button
- If no details entered, shows unique message
- If just username, shows unique message
- If just password, shows unique message
- If wrong username password entered, shows unique message
- If reset clicked, clears username and password fields and clears message
- If wrong username and password entered, increases number of attempts
- If more than 3 failed attempts, forwards to Access Denied page
- If correct username and password entered, forwards to Logged In page

Correct username/password is falken/joshua

## BDD Exercises

- Test for page being secure initially
- Test for page going secure when entering insecure URL
- Test that entering just a username and clicking Log In shows a specific message
- Test that entering just a password and clicking Log In shows a specific message
- Test that entering nothing and clicking Log In shows a specific message
- Test that entering incorrect username and password shows a specific message
- Test that on the 4th invalid username/password entry the user is sent to the Access Denied page
- Test that entering empty fields and hitting Log In do not affect the invalid attempts count
- Test that the reset button clears all the fields
- Test that the reset button does not reset the invalid attempts count
- Test that entering the correct username and password sends the user to the Logged In page