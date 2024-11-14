import { View, Text, TouchableOpacity, FlatList, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigation, useRouter } from 'expo-router'
import { SelectBudgetOptions } from '../../constants/Options'
import OptionCard from '../../components/CreateTrip/OptionCard'
import { Colors } from '@/constants/Colors'
import { CreateTripContext } from '../../context/CreateTripContext'


const SelectBudget = () => {
    const navigation = useNavigation()
    const router = useRouter()
    const [selectedBudget, setSelectedBudget] = useState()
    const { tripData, setTripData } = useContext(CreateTripContext)

    const onClickContinue = () => {
        if(!selectedBudget){
            ToastAndroid.show('Select Your Budget', ToastAndroid.LONG)
            return
        }
        router.push('/create-trip/review-trip')
    }


    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        })
    }, [])

    useEffect(() => {
        selectedBudget && setTripData({
            ...tripData,
            budget: selectedBudget
        })
    }, [selectedBudget])


    return (
        <View style={{
            paddingTop: 75,
            padding: 25,
            backgroundColor: Colors.WHITE,
            height: '100%'
        }}>
            <Text
                style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 35,
                    marginTop: 20
                }}
            >Budget</Text>

            <View style={{
                marginTop: 20
            }}>
                <Text
                    style={{
                        fontFamily: 'outfit-bold',
                        fontSize: 20
                    }}
                >Choose spending habits for you trip</Text>
            </View>

            <FlatList
                data={SelectBudgetOptions}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => setSelectedBudget(item)}
                        style={{
                            marginVertical: 10
                        }}>
                        <OptionCard
                            option={item}
                            selectedOption={selectedBudget}
                        />
                    </TouchableOpacity>
                )}
            />

            <TouchableOpacity 
            onPress={() => onClickContinue()}
            style={{
                padding: 15,
                backgroundColor: Colors.BLACK,
                borderRadius: 15,
                marginTop: 20
            }}>

                <Text style={{
                    textAlign: 'center',
                    color: Colors.WHITE,
                    fontFamily: 'outfit-medium',
                    fontSize: 20
                }}>
                    Continue
                </Text>

            </TouchableOpacity>

        </View>

    )
}

export default SelectBudget