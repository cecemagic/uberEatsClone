import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const localRestaurants = [
    {
    name : "Beachside Bar",
    image_url:
      "https://images.pexels.com/photos/3217155/pexels-photo-3217155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
    },
  {
    name : "Benihana",
    image_url :
      "https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews : 1244,
    rating: 3.7,
  },
  {
    name : "India's Grill",
    image_url :
      "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews : 700,
    rating: 4.0,
  },
];

export default function RestaurantItems() {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
            {localRestaurants.map((restaurant, index) => (
            <View 
                key={index}
                style={{marginTop:10, padding: 15, backgroundColor: "white"}}
            >
                <RestaurantImage image={restaurant.image_url}/>
                <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
            </View>
        ))}
        </TouchableOpacity>
    );
}

const RestaurantImage = (props) => (
    <>
        <Image
            source={{
                uri: props.image
            }}
            style={{ width: "100%", height: 180 }}
        />
        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='white' />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
        }}
    >
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                {props.name}
            </Text>
            <Text style={{ fontSize: 13, color: "grey" }}>
                30-45 • min
            </Text>
        </View>
        <View
            style={{
                backgroundColor: "#eee",
                height: 30,
                width: 30, 
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
            }}
        >
            <Text>{props.rating}</Text>
        </View>
    </View>
);
