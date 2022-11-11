import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import navigationStrings from './src/constants/navigationStrings';
import { ProductDetails } from './src/Screens/ProductDetails/ProductDetails';
import TabRoutes from './TabRoutes';

const Drawer = createDrawerNavigator();


function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Drawer.Screen component={TabRoutes} name={navigationStrings.HOME} />
                <Drawer.Screen component={ProductDetails} name={navigationStrings.PRODUCT_DETAILS} />
                
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default App