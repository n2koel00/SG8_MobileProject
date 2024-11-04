// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MainScreen from './screens/MainScreen'; // Import MainScreen
import LoginScreen from './screens/LoginScreen';
import CocktailScreen from './screens/CocktailScreen';
import CocktailDetailScreen from './screens/CocktailDetailScreen';
import MealScreen from './screens/MealScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import ShoppingListScreen from './screens/ShoppingListScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CocktailStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="CocktailScreen" component={CocktailScreen} options={{ title: 'Cocktail Search' }} />
    <Stack.Screen name="CocktailDetail" component={CocktailDetailScreen} options={{ title: 'Cocktail Details' }} />
  </Stack.Navigator>
);

const MealStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="MealScreen" component={MealScreen} options={{ title: 'Meal Search' }} />
    <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{ title: 'Meal Details' }} />
  </Stack.Navigator>
);

const MainApp = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Meals') {
          iconName = 'food';
        } else if (route.name === 'Cocktails') {
          iconName = 'glass-cocktail';
        } else if (route.name === 'ShoppingList') {
          iconName = 'shopping';
        } else if (route.name === 'Jokes') {
          iconName = 'emoticon-laugh';
        }
        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'steelblue',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Meals" component={MealStack} options={{ headerShown: false }} />
    <Tab.Screen name="Cocktails" component={CocktailStack} options={{ headerShown: false }} />
    <Tab.Screen name="ShoppingList" component={ShoppingListScreen} options={{ title: 'Shopping List' }} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
