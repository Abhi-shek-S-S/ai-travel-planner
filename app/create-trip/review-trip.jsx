import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Link, useNavigation } from 'expo-router'
import { Colors } from '@/constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { CreateTripContext } from '../../context/CreateTripContext';
import moment from 'moment'
import { TouchableOpacity } from 'react-native';


const ReviewTrip = () => {
    const navigation = useNavigation()
    const { tripData, setTripData } = useContext(CreateTripContext)

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        })
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
                    marginTop: 20
                }}
            >Review Your Trip</Text>

            <View style={{
                marginTop: 20,
                display: 'flex',
                flexDirection: 'row',
                gap: 20
            }}>
                <Text
                    style={{
                        fontFamily: 'outfit-bold',
                        fontSize: 20
                    }}
                >Before generating your trip, please review your selection</Text>
            </View>

            {/* Destination Info     */}
            <View style={{
                marginTop: 20,
                display: 'flex',
                flexDirection: 'row',
                gap: 20,
                alignItems: 'center'
            }}>
                <Ionicons name="location-sharp" size={34} color="black" />
                <View>
                    <Text style={{
                        fontFamily: 'outfit',
                        fontSize: 20,
                        color: Colors.GREY
                    }}>Destination</Text>
                    <Text
                        style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20
                        }}
                    >{tripData?.locationInfo?.name}</Text>
                </View>
            </View>

            {/* Date selected Info     */}
            <View style={{
                marginTop: 20,
                display: 'flex',
                flexDirection: 'row',
                gap: 20,
                alignItems: 'center'
            }}>
                <Ionicons name="calendar-clear" size={34} color="black" />
                <View>
                    <Text style={{
                        fontFamily: 'outfit',
                        fontSize: 20,
                        color: Colors.GREY
                    }}>Travel Date
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20
                        }}
                    >
                        {moment(tripData?.startDate).format('DD MMM')} - {moment(tripData?.endDate).format('DD MMM')} ({tripData?.totalNoofDays} days)
                    </Text>

                </View>
            </View>

            {/* Traveller Info     */}
            <View style={{
                marginTop: 20,
                display: 'flex',
                flexDirection: 'row',
                gap: 20,
                alignItems: 'center'
            }}>
                <Ionicons name="bus" size={24} color="black" />
                <View>
                    <Text style={{
                        fontFamily: 'outfit',
                        fontSize: 20,
                        color: Colors.GREY
                    }}>Who is Travelling
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20
                        }}
                    >
                        {tripData?.traveler?.title}
                    </Text>

                </View>
            </View>

            {/* Traveller Info     */}
            <View style={{
                marginTop: 20,
                display: 'flex',
                flexDirection: 'row',
                gap: 20,
                alignItems: 'center'
            }}>
                <Ionicons name="pricetag" size={24} color="black" />
                <View>
                    <Text style={{
                        fontFamily: 'outfit',
                        fontSize: 20,
                        color: Colors.GREY
                    }}>Budget
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20
                        }}
                    >
                        {tripData?.budget?.title}
                    </Text>

                </View>
            </View>
            <TouchableOpacity style={{
                padding: 15,
                backgroundColor: Colors.BLACK,
                borderRadius: 15,
                marginTop: 40
            }}>
                <Link
                    href={'/create-trip/generate-trip'}
                    style={{
                        width: '100%',
                        textAlign: 'center'
                    }}

                >
                    <Text style={{
                        textAlign: 'center',
                        color: Colors.WHITE,
                        fontFamily: 'outfit-medium',
                        fontSize: 20
                    }}>
                        Build My Trip
                    </Text>
                </Link>

            </TouchableOpacity>

        </View>


    )
}

export default ReviewTrip