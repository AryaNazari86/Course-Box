import React from "react";
import md5 from 'md5';

export function SignUp(values) {
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
    fetch('http://192.168.110.22:5000/User/Register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(user) })
        .then(response => {
            result.response = response.statusText;
            if (response.status == 200) {
                result.successful = true;
            }
        });
    return result;
}