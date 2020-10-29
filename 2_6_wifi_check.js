function handleOffline(){
    console.log("Bye bye");
}
function handleOnline(){
    console.log("Welcome back");
}
window.addEventListener("offline",handleOffline);
window.addEventListener("online",handleOnline);