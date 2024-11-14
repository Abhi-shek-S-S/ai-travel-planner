import { View, Text, TextInput, StyleSheet, Pressable, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '.././../../config/FirebaseConfig.js'



export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter()
  
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [fullName, setFullName] = useState('')

  const OnCreateAccount = () => {
    if(email === '' && password === '' && fullName === ''){
      ToastAndroid.show('Please enter all the details', ToastAndroid.BOTTOM)
    }
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            router.replace('/mytrip')
            console.log(user, 'uuuu')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage, 'err')
            // ..
        });

}


  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: '100%'
      }}
    >
      <Pressable onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 30,
          marginTop: 30
        }}

      >Create New Account</Text>

      <View style={{
        marginTop: 30
      }}>
        <Text>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Full Name'
          onChangeText={(value) => setFullName(value)}
        />
      </View>


      <View style={{
        marginTop: 30
      }}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Email'
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      <View style={{
        marginTop: 30
      }}>
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder='Enter Password'
          onChangeText={(value) => setpassword(value)}
        />
      </View>

      <Pressable
        style={{
          backgroundColor: Colors.BLACK,
          padding: 15,
          borderRadius: 15,
          marginTop: 50
        }}
      onPress={() => OnCreateAccount()}
      >
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: 'center',
            fontFamily: 'outfit-regular',
            fontSize: 17,
          }}
        >Create Account</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: Colors.WHITE,
          padding: 15,
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1
        }}
        onPress={() => router.replace('auth/sign-in')}
      >
        <Text
          style={{
            color: Colors.BLACK,
            textAlign: 'center',
            fontFamily: 'outfit-regular',
            fontSize: 17,
          }}
        >Sign In</Text>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GREY
  },
})