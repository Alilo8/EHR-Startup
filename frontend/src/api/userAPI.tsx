import { API_URL } from "./config";

const createUserRequest = async (user:any) => {
    const {
        username,
        name,
        email,
        phone,
        gender,
        dob,
        country,
        city,
        password,
        confirm_password,
    } = user;
    const response = await fetch(`${API_URL}/`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            username,
            name,
            email,
            phone,
            gender,
            dob,
            country,
            city,
            password,
            confirm_password,
        })
    })
    return await response.json();
}

export {
    createUserRequest
}