import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { FlatList } from 'react-native-web'
import { GetPhotoRef } from '../../services/GooglePlaceApi'
import HotelCard from './HotelCard'

const HotelList = ({ hotelList }) => {

   

    return (
        <View style={{
            marginTop: 20
        }}>
            <Text
                style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 20
                }}
            >Hotel Recommendation</Text>

            <FlatList
                data={hotelList}
                style={{
                    marginTop: 8
                }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({ item, index }) => (
                    <HotelCard item={item} />
                )}
            />

        </View>
    )
}

export default HotelList