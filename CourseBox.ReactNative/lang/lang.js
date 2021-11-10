import en from './en.js';
import AsyncStorage from "@react-native-async-storage/async-storage";
let langs = {
    'en': en
}

const getLang = async function () {
    try {
        await AsyncStorage.getItem("lang").then(data => {
            result = JSON.parse(data);
            return result;
        });

    }
    catch {
        await AsyncStorage.setItem('lang', en);
        await AsyncStorage.getItem("lang").then(data => {
            result = data;
            return result;
        });
    }
};

export default async function useLang() {
    const currentlanguage = await getLang();
    console.log(currentlanguage);
    if (currentlanguage == 'en') {
        return langs.en;
    }
}

