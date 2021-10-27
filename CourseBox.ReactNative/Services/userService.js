import React from "react";
import md5 from 'md5';

const API_ADDRESS = "192.168.186.22";

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
        await fetch('http://' + API_ADDRESS + ':5000/User/Register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(user) })
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

export async function Login(values) {
    try {
        let user = {
            email: values.email,
            password: md5(values.password)
        };
        let result = {
            successful: false,
            response: ""
        };
        await fetch('http://' + API_ADDRESS + ':5000/User/Login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(user) })
            .then(response => {
                if (response.status == 200) {
                    result.successful = true;
                    result.response = response.json();
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

export async function GetUserDetails(token) {
    try {
        let result = {
            successful: false,
            response: ""
        };
        await fetch('http://' + API_ADDRESS + ':5000/User/Details', { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-access-tokens': token } })
            .then(response => {
                if (response.status == 200) {
                    result.successful = true;
                    result.response = response.json();
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