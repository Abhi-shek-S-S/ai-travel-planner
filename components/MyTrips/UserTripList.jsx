import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment'
import { Colors } from '@/constants/Colors'
import UserTripCard from '../MyTrips/UserTripCard'
import { useRouter } from 'expo-router'

const UserTripList = ({ userTrips }) => {
    const LastestTrip = JSON.parse(userTrips[0].tripData)
    const router = useRouter()


    return (
        <View>
            <View style={{
                marginTop: 20
            }}>
                {LastestTrip?.locationInfo?.photoRef ?
                    <Image
                        source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + LastestTrip?.locationInfo?.photoRef + '&key=' + process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY }}
                        style={{
                            width: '100%',
                            height: 240,
                            objectFit: 'cover',
                            borderRadius: 15
                        }}
                    />
                    :
                    <Image
                        source={require('../../assets/images/3d-travel-icon-with-airplane.jpg')}
                        style={{
                            width: '100%',
                            height: 240,
                            objectFit: 'cover',
                            borderRadius: 15
                        }}
                    />
                }
                <View style={{ marginTop: 10 }}>
                    <Text
                        style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20,
                        }}
                    >{userTrips[0]?.tripPlan?.travelPlan.location}</Text>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 5
                    }}>
                        <Text
                            style={{
                                fontFamily: 'outfit',
                                fontSize: 17,
                                color: Colors.GREY
                            }}
                        >{moment(LastestTrip.startDate).format('DD MMM yyyy')}</Text>
                        <Text
                            style={{
                                fontFamily: 'outfit',
                                fontSize: 17,
                                color: Colors.GREY
                            }}>
                            {LastestTrip.traveler.tittle}
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => router.push({
                            pathname: '/trip-details', params: {
                                trip: JSON.stringify(userTrips[0])
                            }
                        })}
                        style={{
                            backgroundColor: Colors.BLACK,
                            padding: 15,
                            borderRadius: 15,
                            marginTop: 10
                        }}>
                        <Text style={{
                            color: Colors.WHITE,
                            textAlign: 'center',
                            fontFamily: 'outfit-medium',
                            fontSize: 15
                        }}>
                            See your plan
                        </Text>
                    </TouchableOpacity>
                </View>

                {userTrips.map((trip, index) => {
                    <UserTripCard trip={trip} key={index} />
                })}

            </View>
        </View>
    )
}

export default UserTripList