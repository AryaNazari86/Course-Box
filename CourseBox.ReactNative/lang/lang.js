import en from './en.js';
import AsyncStorage from "@react-native-async-storage/async-storage";
let langs = {
    'en': en
}

export default getLang = async function () {
    try {
        await AsyncStorage.getItem("lang").then(data => {
            result = JSON.parse(data);
            return result;
        });

    }
    catch {
        await AsyncStorage.setItem("lang", "en");
        await AsyncStorage.getItem("lang").then(data => {
            result = data;
            return result;
        });
    }
};

 async function useLang() {
    var currentLang = {Home:{LatestCourses: 'djshfnkjdhn'}};
    await getLang().then(
        (data) => {
            console.log(data);
            if (data == 'en') {
                currentLang = langs.en;
            }
        }
    );
    return currentLang;
}

