// Access Internet
import NetInfo from '@react-native-community/netinfo';

export default function CheckConnection(onChange){
    NetInfo.addEventListener(state => {
        onChange(state.isConnected);
    });
}