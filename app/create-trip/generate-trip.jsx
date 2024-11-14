import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import LottieView from 'lottie-react-native';
import { CreateTripContext } from '../../context/CreateTripContext';
import { AI_PROMPT } from '../../constants/Options';
import { chatSession } from '../../config/AiModal';
import { useRouter } from 'expo-router';
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/config/FirebaseConfig.js";




const GenerateTrip = () => {
    const router = useRouter()
    const user = auth.currentUser
    const { width, height } = Dimensions.get('window');
    const { tripData, setTripData } = useContext(CreateTripContext)
    const [loading, setLoading] = useState(false)

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        lottie: {
            width: width * 0.8,
            height: height * 0.4,
        },
    });


    const GenerateAITrip = async () => {
        setLoading(true);
    
        const FINAL_PROMPT = AI_PROMPT
            .replace('{location}', tripData?.locationInfo?.name || "")
            .replace('{totalNoofDays}', tripData?.totalNoofDays || "")
            .replace('{totalNoofNights}', (tripData?.totalNoofDays || 1) - 1)
            .replace('{traveler}', tripData?.traveler?.title || "")
            .replace('{budget}', tripData?.budget?.title || "");
    
        try {
            // Check authentication first
            if (!user?.email) {
                throw new Error("User not authenticated");
            }
    
            // Get AI response
            const result = await chatSession.sendMessage(FINAL_PROMPT);
            if (!result?.response) {
                throw new Error("Invalid AI response");
            }
    
            const resultText = await result.response.text();
            const tripResp = JSON.parse(resultText);
    
            // Prepare the data
            const docData = {
                userEmail: user.email,
                // tripPlan: tripResp,
                tripData: JSON.stringify(tripData),
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
    
            // Generate a unique ID
            const docId = `trip_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
            // Write to Firestore with retry logic
            let retries = 3;
            while (retries > 0) {
                try {
                    await setDoc(doc(db, "UseTrips", docId), docData, {
                        merge: true // This will merge data if document exists
                    });
                    console.log("Document successfully written!");
                    router.push('(tabs)/mytrip');
                    break;
                } catch (writeError) {
                    console.error(`Write attempt failed. Retries left: ${retries-1}`, writeError);
                    retries--;
                    if (retries === 0) throw writeError;
                    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1s before retry
                }
            }
        } catch (error) {
            console.error("Error in GenerateAITrip:", error);
            // Here you might want to show an error message to the user
            // alert("Failed to save trip data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        tripData && GenerateAITrip()
    }, [])


    return (
        <View style={{
            padding: 25,
            paddingTop: 75,
            backgroundColor: Colors.WHITE,
            height: '100%'
        }}>
            <Text
                style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 35,
                    textAlign: 'center'
                }}
            >Please Wait...</Text>
            <Text
                style={{
                    fontFamily: 'outfit-medium',
                    fontSize: 20,
                    textAlign: 'center'
                }}
            >We are working to generate your dream trip</Text>
            <View style={styles.container}>
                <LottieView
                    source={require('../../assets/images/loader-animation.json')} // Path to your Lottie JSON file
                    autoPlay
                    loop
                    style={styles.lottie}
                />
            </View>
            <Text
                style={{
                    fontFamily: 'outfit-medium',
                    fontSize: 15,
                    textAlign: 'center'
                }}
            >Please dont close the app or exit the screen</Text>
        </View>
    )
}

export default GenerateTrip