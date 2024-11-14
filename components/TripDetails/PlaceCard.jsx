import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '@/constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { GetPhotoRef } from '../../services/GooglePlaceApi';

const PlaceCard = ({ place }) => {
    const [photoRef, setPhotoRef] = useState()

    const GetGooglePhotoRef = async () => {
        const result = await GetPhotoRef(place.placeName)
        console.log(result)
        setPhotoRef(result)
    }

    useEffect(() => {
        GetGooglePhotoRef()
    }, [])

    return (
        <View style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 15,
            borderColor: Colors.GREY,
            marginTop: 20
        }}>
            <Image
                source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + photoRef + '&key=' + process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY }}
                style={{
                    width: '100%',
                    height: 140,
                    borderRadius: 15
                }}
            />
            <View style={{
                marginTop: 5
            }}>
                <Text
                    style={{
                        fontFamily: 'outfit-bold',
                        fontSize: 20
                    }}
                >{place?.placeName}</Text>
                <Text
                    style={{
                        fontFamily: 'outfit',
                        fontSize: 14,
                        color: Colors.GREY
                    }}
                >{place.placeDetails}</Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View>
                        <Text
                            style={{
                                fontFamily: 'outfit',
                                fontSize: 17,
                                marginTop: 5
                            }}
                        >🎟️ Ticket Price:
                            <Text style={{
                                fontFamily: 'outfit-bold'
                            }}>
                                {place.ticketPricing}
                            </Text>
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'outfit',
                                fontSize: 17,
                                marginTop: 5
                            }}
                        >⏱️ Time to Travel:

                            <Text style={{
                                fontFamily: 'outfit-bold'
                            }}>{place.timeToTravel}</Text>
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{
                            backgroundColor: Colors.BLACK,
                            padding: 8,
                            borderRadius: 7
                        }}>
                            <Ionicons name="navigate" size={24} color="white" />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </View>
    )
}

export default PlaceCard