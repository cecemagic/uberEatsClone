import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../components/Categories';
import HeaderTabs from "../components/HeaderTabs"
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';
import SearchBar from '../components/SearchBar';

const YELP_API_KEY = "6vbA2ruVv0LvSfqcmkKrdrb6Mxd3T-TuQg0-30aGtkDWafuHZahuO4LS6Yt2KbvkGqXJzExYOp-RkqXmgSYFHR7u-xBA44nHVD-tBttdhQ07pd4wmfe2GFZZB5ipYXYx";

export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState('LosAngeles');

    const getRestaurantFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
        headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
        },
    };

    return fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then(json =>
            setRestaurantData(
                json.businesses
            ));
    };

    useEffect(() => {
        getRestaurantFromYelp();
    }, [city]);

return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
        <View style={{ backgroundColor: "white", padding: 15 }}>
            <HeaderTabs />
            <SearchBar cityHandler={setCity} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Categories />
            <RestaurantItems 
                restaurantData={restaurantData} 
            />
        </ScrollView>
    </SafeAreaView>
);
};
