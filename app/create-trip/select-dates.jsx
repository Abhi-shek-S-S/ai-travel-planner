import { View, Text, ToastAndroid,TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'
import CalendarPicker from "react-native-calendar-picker";
import moment from 'moment';
import { CreateTripContext } from '../../context/CreateTripContext';


const SelectDates = () => {
    const { tripData, setTripData } = useContext(CreateTripContext)
    const router = useRouter()
    const navigation = useNavigation()
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        })
    }, [])

    const onDateChange = (date, type) => {
        console.log('dddd')
        if(type == 'START_DATE'){
            setStartDate(moment(date))
        } else{
            setEndDate(moment(date))
        }
    }

    const OnDateSelectionContinue = () => {
        if(!startDate && !endDate){
            ToastAndroid.show('Please select Start and End Date', ToastAndroid.LONG);
            return
        }
        const totalNoofDays = endDate.diff(startDate, 'days')
        setTripData({
            ...tripData,
            startDate: startDate,
            endDate: endDate,
            totalNoofDays: totalNoofDays + 1
        })
        router.push('/create-trip/select-budget')
    }

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
            >Travel Dates
            </Text>

            <View style={{
                marginTop: 30
            }}>
                <CalendarPicker
                    onDateChange={onDateChange}
                    allowRangeSelection={true}
                    minDate={new Date()}
                    selectedRangeStyle={{
                        backgroundColor: Colors.BLACK
                    }}
                    selectedDayTextStyle={{
                        color: Colors.WHITE
                    }}
                />
            </View>

            <TouchableOpacity 
            onPress={OnDateSelectionContinue}
            style={{
                padding: 15,
                backgroundColor: Colors.BLACK,
                borderRadius: 15,
                marginTop: 35
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

export default SelectDates