import axiosClient from "../config/axios";

function handleSession() {
    const loggedUserJSON = window.localStorage.getItem('loggedToDoAppUser');

    if (loggedUserJSON) {
        const loggedUser = JSON.parse(loggedUserJSON);

        if (loggedUser) {
            if (loggedUser.user && loggedUser.token) {
                axiosClient.defaults.headers.common["x-token"] = loggedUser.token;
    
                return {
                    auth: true,
                    userLS: loggedUser.user,
                    tokenLS: loggedUser.token
                }
            }
        }
    }

    return {auth: false};
}

export default handleSession;