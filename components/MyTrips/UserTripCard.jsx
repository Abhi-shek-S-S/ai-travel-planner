import { View, Text } from 'react-native'
import React from 'react'
import moment from 'moment'
import { Colors } from '@/constants/Colors'

const UserTripCard = ({ trip }) => {
    const formatData = (data) => {
        return JSON.parse(data)
    }
    return (
        <View style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center'
        }}>
            {LastestTrip?.locationInfo?.photoRef ?
                    <Image
                        source={{uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+formatData(trip.tripData).LastestTrip?.locationInfo?.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
                        style={{
                            width: 100,
                            height: 100,
                            objectFit: 'cover',
                            borderRadius: 15
                        }}
                    />
                    :
                    <Image
                        source={require('../../assets/images/3d-travel-icon-with-airplane.jpg')}
                        style={{
                            width: 100,
                            height: 100,
                            objectFit: 'cover',
                            borderRadius: 15
                        }}
                    />
                }
            <View>
                <Text
                    style={{
                        fontFamily: 'outfit-medium',
                        fontSize: 18
                    }}
                >{trip.tripPlan?.travelPlan?.location}</Text>
                <Text
                    style={{
                        fontFamily: 'outfit',
                        fontSize: 14,
                        color: Colors.GREY
                    }}
                >{moment(formatData(trip.tripData).startDate).format('DD MMM yyyy')}</Text>
                <Text
                    style={{
                        fontFamily: 'outfit',
                        fontSize: 14,
                        color: Colors.GREY
                    }}
                >Travelling : {formatData(trip.tripData).traveler.tittle}</Text>
            </View>
        </View>
    )
}

export default UserTripCard