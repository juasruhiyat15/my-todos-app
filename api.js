const url = "http://165.22.55.164:3000/api/";

function getAccessToken() {
    return localStorage.getItem("accessToken");
}

function putAccessToken(accessToken) {
    return localStorage.setItem("accessToken", accessToken);

}

async function login({ username = "diazagfa", password = "vocasia" }) {
    const request_option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
                "Origin, X-Requested-With, Content-Type, Accept",
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    };

    const response = await fetch(url + 'auth/login', request_option);
    const response_json = await response.json();

    putAccessToken(response_json?.data?.token);
    return response_json?.data?.token;
}

async function register({ username, password }) {
    const response = await fetch(`${url}auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });

    const responseJson = await response.json();

    if (response.status >= 400) {
        alert(responseJson.msg);
        return { error: true, code: response.status };
    }

    return { error: false, code: response.status };
}

export { login, getAccessToken, register };
