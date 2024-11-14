const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

export const chatSession = model.startChat({
    generationConfig,
    history: [
        {
          role: "user",
          parts: [
            {text: " Generate Travel Plan for Location: Hong Kong, for 5 Days and 4 Night for Couple with a Expensive budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel PlaceName, Place details, Place Image Url, Geo Coordinates, tickets price, Time travel for each of the location for 5 days and 4 night with each day plan with best time to vist in JSON format.\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"flight\": {\n    \"details\": {\n      \"airline\": \"Cathay Pacific\",\n      \"departureCity\": \"New York\",\n      \"arrivalCity\": \"Hong Kong\",\n      \"departureDate\": \"2024-03-15\",\n      \"arrivalDate\": \"2024-03-16\",\n      \"departureTime\": \"10:00 AM\",\n      \"arrivalTime\": \"5:00 PM\",\n      \"flightNumber\": \"CX888\"\n    },\n    \"price\": \"$1,500\",\n    \"bookingUrl\": \"https://www.cathaypacific.com/\"\n  },\n  \"hotel\": [\n    {\n      \"name\": \"The Ritz-Carlton, Hong Kong\",\n      \"placeName\": \"Kowloon\",\n      \"details\": \"Luxurious hotel with stunning views of Victoria Harbour, world-class dining, and exceptional service.\",\n      \"imageUrl\": \"https://www.ritzcarlton.com/en/hotels/hong-kong/images/hotel-overview/ritz-carlton-hong-kong-exterior.jpg\",\n      \"geoCoordinates\": \"22.3007° N, 114.1688° E\",\n      \"price\": \"$1,000 per night\"\n    },\n    {\n      \"name\": \"The Peninsula Hong Kong\",\n      \"placeName\": \"Tsim Sha Tsui\",\n      \"details\": \"Iconic hotel known for its colonial elegance, fine dining, and unparalleled service.\",\n      \"imageUrl\": \"https://www.peninsula.com/en/hong-kong/images/hotel-overview/the-peninsula-hong-kong-exterior.jpg\",\n      \"geoCoordinates\": \"22.2992° N, 114.1701° E\",\n      \"price\": \"$800 per night\"\n    },\n    {\n      \"name\": \"Four Seasons Hotel Hong Kong\",\n      \"placeName\": \"Central\",\n      \"details\": \"Stylish hotel with breathtaking views of the city, exquisite restaurants, and a serene spa.\",\n      \"imageUrl\": \"https://www.fourseasons.com/hongkong/images/hotel-overview/four-seasons-hotel-hong-kong-exterior.jpg\",\n      \"geoCoordinates\": \"22.2829° N, 114.1591° E\",\n      \"price\": \"$700 per night\"\n    }\n  ],\n  \"travelPlan\": {\n    \"day1\": {\n      \"time\": \"12:00 PM\",\n      \"location\": \"The Peak\",\n      \"activity\": \"Take a scenic Peak Tram ride to enjoy breathtaking views of Victoria Harbour and the city skyline.\",\n      \"details\": \"Enjoy lunch at one of the Peak's renowned restaurants with panoramic vistas.\",\n      \"imageUrl\": \"https://www.peaktram.com/en/media/peak-tram-aerial-view.jpg\",\n      \"geoCoordinates\": \"22.2822° N, 114.1599° E\"\n    },\n    \"day2\": {\n      \"time\": \"10:00 AM\",\n      \"location\": \"Victoria Peak Garden\",\n      \"activity\": \"Explore the tranquil Victoria Peak Garden, home to diverse flora and stunning views.\",\n      \"details\": \"Relax and enjoy the serenity of the garden, a perfect escape from the city's hustle and bustle.\",\n      \"imageUrl\": \"https://www.hk.gov.hk/en/tourism/explore/attraction/victoria-peak-garden.htm\",\n      \"geoCoordinates\": \"22.2831° N, 114.1601° E\"\n    },\n    \"day3\": {\n      \"time\": \"11:00 AM\",\n      \"location\": \"Hong Kong Zoological and Botanical Gardens\",\n      \"activity\": \"Discover the diverse collection of plants and animals at the Hong Kong Zoological and Botanical Gardens.\",\n      \"details\": \"Take a leisurely stroll through the gardens, admire the exotic flora and fauna, and enjoy a relaxing picnic.\",\n      \"imageUrl\": \"https://www.lcsd.gov.hk/en/hkzoo/about.html\",\n      \"geoCoordinates\": \"22.2825° N, 114.1615° E\"\n    },\n    \"day4\": {\n      \"time\": \"1:00 PM\",\n      \"location\": \"Hong Kong Disneyland\",\n      \"activity\": \"Immerse yourself in the magic of Disney at Hong Kong Disneyland, a world-class theme park.\",\n      \"details\": \"Enjoy thrilling rides, enchanting shows, and meet your favorite Disney characters.\",\n      \"imageUrl\": \"https://disneyparks.disney.go.com/hong-kong-disneyland/\",\n      \"geoCoordinates\": \"22.3065° N, 114.0072° E\"\n    },\n    \"day5\": {\n      \"time\": \"10:00 AM\",\n      \"location\": \"Tai O Fishing Village\",\n      \"activity\": \"Experience the unique culture and charm of Tai O Fishing Village, a traditional stilt house village.\",\n      \"details\": \"Take a boat tour through the waterways, sample local delicacies, and witness the village's way of life.\",\n      \"imageUrl\": \"https://www.discoverhongkong.com/eng/see-do/things-to-do/explore-hong-kong-islands/tai-o-fishing-village.html\",\n      \"geoCoordinates\": \"22.2170° N, 113.9425° E\"\n    }\n  }\n}\n```\n\n**Notes:**\n\n- **Flight:** The flight details, price, and booking URL are examples. You can adjust these based on your preferred airline, departure city, and travel dates.\n- **Hotels:** The hotel list provides three options with varying prices. You can explore other luxury hotels in Hong Kong based on your budget and preferences.\n- **Travel Plan:** Each day's plan includes a suggested time, location, activity, details, image URL, and geo coordinates. You can adjust the time and activities based on your interests and preferences.\n- **Tickets:** Ticket prices for attractions may vary depending on the time of year and special events.\n- **Best Time to Visit:** Hong Kong is a year-round destination, but the best time to visit is during the spring (March-May) or autumn (September-November) for pleasant weather and fewer crowds.\n\nThis is a sample travel plan, and you can customize it to fit your preferences and budget. Feel free to adjust the itinerary, add additional activities, or explore other areas of Hong Kong.\n"},
          ],
        },
      ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());


