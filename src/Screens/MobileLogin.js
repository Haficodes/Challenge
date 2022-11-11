import React from "react";
import Routes from "../Navigation/Routes";
import { Alert } from "react-native";
import auth from 'react-native-firebase/auth'
import { set } from "react-native-reanimated";
import navigationStrings from "../constants/navigationStrings";


export default function MobileLogin(){

const [confirm,setConfirm] = useState(null);

const mobileLogin = async (phoneNumber)=>{
    const conformation = await auth().signInWithPhoneNumber(phoneNumber)
    setConfirm(conformation);
}

const confirmVerification =async(code)=>{
    try {
await confirm.confirm(code);
setConfirm(null)
    }
    catch(error){
Alert.alert('Invalid Code')
    }
 
}

auth().onAuthStateChanged((user)=>{
    if(user){
        setConfirm(null)
        navigationStrings.navigate('Routes')
    }
})

if(confirm) return <VerifyCode onSubmit={confirmVerification}/>

return <MobileNumber onSubmit={mobileLogin}/>
}