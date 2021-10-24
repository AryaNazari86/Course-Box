import React from "react";
import md5 from 'md5';
import axios from 'axios';

export async function SignUp(values) {
    try {
        let user = {
            username: values.username,
            name: values.name,
            email: values.email,
            password: md5(values.password)
        };

        let result = {
            successful: false,
            response: ""
        };

        const options = {
            url: 'http://192.168.79.22:5000/User/Register',
            method: 'POST',
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            },
            data: user
        };
        let response = await axios(options);
        if (await (response).status === 200) {
            result.successful = true;
        }
        result.response = await (response).data;
        return result
    } catch (error) {
        return {
            successful: false,
            response: "Sign up unsuccessful."
        };
    }
}

export async function Login(values) {
    let user = {
        email: values.email,
        password: md5(values.password)
    };

    let result = {
        successful: false,
        response: ""
    };

    const options = {
        url: 'http://192.168.79.22:5000/User/Login',
        method: 'POST',
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json'
        },
        data: user
    };
    let response = await axios(options);
    if (await (response).status === 200) {
        result.successful = true;
    }
    result.response = (await response).data;
    return result;

}

export async function GetUserDetails(token) {
    try {
        let result = {
            successful: false,
            response: ""
        };

        const options = {
            url: 'http://192.168.79.22:5000/User/Details',
            method: 'POST',
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
                'x-access-tokens': token
            }
        };
        let response = await axios(options);
        if (await (response).status === 200) {
            result.successful = true;
        }
        result.response = (await response).data;
        return result
    } catch (error) {
        return {
            successful: false,
            response: "Error..."
        };
    }
}