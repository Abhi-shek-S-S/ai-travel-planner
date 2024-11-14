export const SelectTravelerList = [
    {
        id: 1,
        title: 'Just Me',
        desc: "Solo travel option for individual.",
        icon: "🧍",
        people: '1'
    },

    {
        id: 2,
        title: 'Friends',
        desc:  "Traveling with a friend.",
        icon: "👫",
        people: '5 to 10'
    },

    {
        id: 3,
        title: 'Family',
        desc: "Travelling with family",
        icon: "👥",
        people: "3 to 5"
    },

    {
        id: 4,
        title: 'Couple',
        desc:  "Traveling with a partner or spouse.",
        icon: "🧍",
        people: '2'
    }

]

export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stay conscious of costs',
        icon: '💸',
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Balanced between affordability and comfort',
        icon: '💵',
    },
    {
        id: 3,
        title: 'Expensive',
        desc: 'Enjoy premium comfort and experiences',
        icon: '💰',
    },
]

export const AI_PROMPT='Generate Travel Plan for Location: {location}, for {totalNoofDays} Days and {totalNoofNights} Night for {traveler} with a {budget} budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel PlaceName, Place details, Place Image Url, Geo Coordinates, tickets price, Time travel for each of the location for {totalNoofDays} days and {totalNoofNights} night with each day plan with best time to vist in JSON format.'