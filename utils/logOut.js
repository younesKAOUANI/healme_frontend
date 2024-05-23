export function logOut() {
    // Remove the token from localStorage
    localStorage.removeItem("token"); 
    // Redirect to the home page
    window.location.href = "/";
}
