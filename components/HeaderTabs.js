import React, {useState} from 'react'
import { View, Text, SafeAreaView, Touchable, TouchableOpacity } from 'react-native'
import HeaderTabs from '../components/HeaderTabs'

export default function Home() {
    const [activeTab, setActiveTab] = useState('Delivery');
    return (
        <SafeAreaView style={{ flexDirection: "row", alignSelf: "center" }}>
            <HeaderButton 
                text="Delivery" 
                btnColor="black" 
                textColor="white" 
                activeTab={activeTab} 
                setActiveTab={setActiveTab}
            />
            <HeaderButton 
                text="Pickup" 
                btnColor="white" 
                textColor="black" 
                activeTab={activeTab} 
                setActiveTab={setActiveTab}
            />

        </SafeAreaView>
    )
}

const HeaderButton = (props) => (
    <TouchableOpacity 
        style={{ 
            backgroundColor: props.activeTab === props.text ? 'black' :'white', 
            paddingVertical: 6, 
            paddingHorizontal: 16, 
            borderRadius: 30,
        }}
        onPress={() => props.setActiveTab(props.text)}    
    >
        <Text style={{ 
            color: props.activeTab === props.text ? 'white' :'black', 
            sizeSize: 15, fontWeight: '900' }}>
            {props.text}
        </Text>
    </TouchableOpacity>
);
