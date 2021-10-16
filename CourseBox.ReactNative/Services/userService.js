import React from "react";
import md5 from 'md5';

export function SignUp(values) {
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
        fetch('http://192.168.169.22:5000/User/Register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(user) })
            .then(response => {
                result.response = response.statusText;
                if (response.status == 200) {
                    result.successful = true;
                }
            });
        return result;
    } catch (error) {
        return {
            successful: false,
            response: "Error..."
        };
    }
}

export function Login(values) {
    try {
        let user = {
            email: values.email,
            password: md5(values.password)
        };
        let result = {
            successful: false,
            response: null
        };
        fetch('http://192.168.169.22:5000/User/Login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(user) })
            .then(response => {
                if (response.status == 200) {
                    result.successful = true;
                    result.response = JSON.parse(response.json()).token;
                }
            });
        return result;
    } catch (error) {
        return {
            successful: false,
            response: "Error..."
        };
    }

}

export function GetUserDetails(token) {
    try {
        fetch('http://192.168.169.22:5000/User/Details', { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-access-tokens': token } })
            .then(response => {
                if (response.status == 200) {
                    result.successful = true;
                    result.response = JSON.parse(response.json());
                }
            });
    } catch (error) {
        return {
            successful: false,
            response: "Error..."
        };
    }
}