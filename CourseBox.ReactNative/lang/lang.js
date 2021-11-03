import en from '.en';
import AsyncStorage from "@react-native-async-storage/async-storage";
let langs = {
    'en': en
}
export default function useLang() {
    const getLang = async function () {
        try {
            await AsyncStorage.getItem("lang").then(data => {
                result = JSON.parse(data);
            });
            return result;
        }
        catch {
            await AsyncStorage.setItem('lang', en);
            getLang();
        }
    };
    return langs[getLang()];
}
