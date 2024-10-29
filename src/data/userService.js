// ToDo update user service with user identity by project requirments (username/email, password...)

import { api } from "./api.js"
import { clearUserData, setUserData } from "../util.js";

const endPoints = {
    'login': '/users/login',
    'register': '/users/register',
    'logout': '/users/logout'
}

export async function login(email, password){
    const result = await api.post(endPoints.login, {email, password});

    setUserData({
        _id: result._id,
        email: result.email,
        accessToken: result.accessToken
    });
}

export async function register(email, password){
    const result = await api.post(endPoints.register, {email, password});

    setUserData({
        _id: result._id,
        email: result.email,
        accessToken: result.accessToken
    });
}

export async function logout(){
    const promise = api.get(endPoints.logout);
    clearUserData();

    await promise;
}