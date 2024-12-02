// Check if the user is logged in
if (!localStorage.getItem('loggedInUser')) {
    // Redirect to the login page if not logged in
    window.location.href = 'login.html';
}
