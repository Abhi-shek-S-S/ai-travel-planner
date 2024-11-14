import { ScrollView, View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '@/constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard'
import UserTripList from '../../components/MyTrips/UserTripList'
import { collection, getDoc, query } from 'firebase/firestore';
import { auth, db } from '@/config/FirebaseConfig';

export default function MyTrip() {

  const [userTrips, setuserTrips] = useState([])
  const [loading, setLoading] = useState(false)
  const user = auth.currentUser

  const GetMyTrips = async () => {
    setLoading(true)
    setuserTrips([])
    const q = query(collection(db, 'UserTrips'), where('userEmail', '==', user?.email));
    const querySnapshot = await getDoc(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data())
      setuserTrips(prev => [...prev, doc.data()])
    });
    setLoading(false)
  }

  useEffect(() => {
    user && GetMyTrips()
  }, [user])

  return (
    <ScrollView
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.WHITE,
        height: '100%'
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'space-between'
        }}>
        <Text
          style={{
            fontFamily: 'outfit-bold',
            fontSize: 35
          }}
        >My Trips</Text>
        <Ionicons name="add-circle" size={50} color="black" />
      </View>
      {loading && <ActivityIndicator size={'large'} color={Colors.BLACK} />}
      {userTrips?.length == 0 ?
        <StartNewTripCard />
        : <UserTripList userTrips={userTrips} />
      }
    </ScrollView>
  )
}