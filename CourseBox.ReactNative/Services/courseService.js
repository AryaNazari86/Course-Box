import React from "react";
import md5 from 'md5';

const API_ADDRESS = "192.168.6.8";

export async function GetLatestCourses() {
    try {
        let result = {
            successful: false,
            response: "",
            data: ""
        };
        await fetch('http://' + API_ADDRESS + ':5000/LatestCourses', { method: 'GET', headers: { 'Content-Type': 'application/json' } })
            .then(response => {
                if (response.status == 200) {
                    result.successful = true;
                    result.data = response.json();
                }
                else {
                    result.response = "Error...";
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

