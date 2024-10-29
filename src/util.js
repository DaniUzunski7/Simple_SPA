export function setUserData(data){
    localStorage.setItem("user", JSON.stringify(data));
}

export function getUserData(){
    return JSON.parse(localStorage.getItem('user'))
}

export function clearUserData(){
    localStorage.clear('user');
}

export function hasOwner(ownerId){
    const userData = getUserData();
    
    if (userData === null || ownerId !== userData._id){
        return false 
    } else {
        return true
    }
}

export function createSubmitHandler(callback){
    return function(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        callback(data, event.target);
    }
}

export function upadateNav(){
    const isUser = getUserData();
    
    const userNav = document.querySelector("div .user");
    const guestNav = document.querySelector("div .guest");

    if (isUser){
        userNav.style.display = "block";
        guestNav.style.display = "none";
    } else {
        userNav.style.display = "none";
        guestNav.style.display = "block";
    }
}