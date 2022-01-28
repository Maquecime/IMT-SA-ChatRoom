export function login(token, username) {
    return dispath => {
        dispath({
            type: "LOGIN",
            payload: token,
            username: username
        });
    }
}

export function logout() {
    console.log("Logging out");
    return dispath => {
        dispath({
            type: "LOGOUT",
            payload: "",
            username: ""
        });
    };
}