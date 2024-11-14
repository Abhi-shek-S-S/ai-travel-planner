import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { Colors } from '@/constants/Colors'
import moment from 'moment'
import FlightInfo from '../../components/TripDetails/FlightInfo'
import HotelList from '../../components/TripDetails/HotelList'
import PlannedTrip from '../../components/TripDetails/PlannedTrip'


const TripDetails = () => {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams()
  const [tripDetails, setTripDetails] = useState([])

  const formatData = (data) => {
    return JSON.parse(data)
  }

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    })
    setTripDetails(JSON.parse(trip))
  }, [])

  return tripDetails && (
    <ScrollView>
      <Image
        source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + formatData(tripDetails.tripData).locationInfo?.photoRef + '&key=' + process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY }}
        style={{
          width: '100%',
          height: 330,
          objectFit: 'cover',
        }}
      />
      <View style={{
        padding: 15,
        backgroundColor: Colors.WHITE,
        height: '100%',
        marginTop: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
      }}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'outfit-bold'
          }}
        >{tripDetails?.tripPlan.travelPlan.location}</Text>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 5,
          marginTop: 5
        }}>
          <Text
            style={{
              fontFamily: 'outfit',
              fontSize: 18,
              color: Colors.GREY
            }}
          >{moment(formatData(tripDetails.tripData).startDate).format('DD MMM yyyy')}
          </Text>
          <Text
            style={{
              fontFamily: 'outfit',
              fontSize: 18,
              color: Colors.GREY
            }}
          >- {moment(formatData(tripDetails.tripData).endDate).format('DD MMM yyyy')}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'outfit',
            fontSize: 17,
            color: Colors.GREY
          }}>
          {formatData(tripDetails.tripData)?.traveler.tittle}
        </Text>

        {/* flight info */}
        <FlightInfo flightData={tripDetails?.tripPlan?.travelPlan?.flight} />

        {/* hotels list */}
        <HotelList hotelList={tripDetails?.tripPlan?.travelPlan?.hotels} />

        {/* trip planner days */}
        <PlannedTrip plannedTripDetails={tripDetails?.tripPlan?.travelPlan?.itinerary} />
      </View>
      <View>

      </View>
    </ScrollView>
  )
}

export default TripDetails