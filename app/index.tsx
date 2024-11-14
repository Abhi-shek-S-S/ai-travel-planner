import { Text, View } from "react-native";
import Login from './../components/Login.jsx'
import { auth } from "@/config/FirebaseConfig.js";
import { Redirect } from "expo-router";

export default function Index() {

  const user = auth.currentUser
  console.log(user, 'usee')

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {user ?
        <Redirect href={'/mytrip'} /> :
        <Login />
      }

    </View>
  );
}
