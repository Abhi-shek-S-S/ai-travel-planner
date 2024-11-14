import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {
    const router = useRouter()
    return (
        <View style={{ flex: 1 }}>
            <Image
                source={require('../assets/images/3d-travel-icon-with-airplane.jpg')}
                style={{
                    width: '100%',
                    height: 500
                }}
            />
            <View style={styles.container}>
                <Text
                    style={{
                        fontSize: 30,
                        fontFamily: 'outfit-bold',
                        textAlign: 'center',
                    }}
                > AI Travel Planner
                </Text>

                <Text
                    style={{
                        fontFamily: 'outfit-regular',
                        fontSize: 17,
                        textAlign: 'center',
                        color: Colors.GREY,
                        marginTop: 10
                    }}
                >Discover your next adventure effortless. Personalized itineraries at your fingertips. Travel smarter with AI-driven insights </Text>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => router.push('auth/sign-in')}
                >
                    <Text
                        style={{
                            color: Colors.WHITE,
                            textAlign: 'center',
                            fontFamily: 'outfit-regular',
                            fontSize: 17
                        }}
                    >Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginTop: -20,
        height: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 15,
        flex: 1
    },

    button: {
        padding: 15,
        backgroundColor: Colors.BLACK,
        borderRadius: 30,
        marginTop: '25%'
    }
})