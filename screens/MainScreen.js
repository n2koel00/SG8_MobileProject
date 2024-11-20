// screens/MainScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/style';

import bookImg from '../images/logos/book.png';
import crRecipeImg from '../images/logos/createRecipe.png';
import recListImg from '../images/logos/recipelist.png';


const MainScreen = ({ navigation }) => {
  const [foodOfTheDay, setFoodOfTheDay] = useState(null);
  const [drinkOfTheDay, setDrinkOfTheDay] = useState(null);

  const fetchFoodOfTheDay = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setFoodOfTheDay(data.meals[0]);
    } catch (error) {
      console.error('Error fetching Food of the Day:', error);
    }
  };

  const fetchDrinkOfTheDay = async () => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const data = await response.json();
      if (data.drinks && data.drinks.length > 0) {
        setDrinkOfTheDay(data.drinks[0]);
      } else {
        console.error("No drinks found in the API response");
      }
    } catch (error) {
      console.error('Error fetching Drink of the Day:', error);
    }
  };

  useEffect(() => {
    fetchFoodOfTheDay();
    fetchDrinkOfTheDay();
  }, []);

  const exampleArticles = [
    {
      title: 'The Health Benefits of Mediterranean Diet',
      content: 'Discover how the Mediterranean diet can improve your health with fresh fruits, vegetables, and healthy fats...',
      imageUrl: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Top 5 Superfoods You Should Try',
      content: 'Learn about superfoods like kale, quinoa, and blueberries that pack a powerful nutritional punch...',
      imageUrl: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: '10 Quick and Easy Healthy Recipes',
      content: 'Save time while eating healthy with these quick and delicious recipes for breakfast, lunch, and dinner...',
      imageUrl: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'How to Stay Hydrated During Summer',
      content: 'Learn creative and refreshing ways to stay hydrated and beat the summer heat...',
      imageUrl: 'https://images.unsplash.com/photo-1560717614-2c6c832ccf94?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'The Best Plant-Based Protein Sources',
      content: 'Explore protein-rich options like lentils, chickpeas, and tofu for a balanced plant-based diet...',
      imageUrl: 'https://images.unsplash.com/photo-1518656305677-0b6b0a6e208b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'The Secret to Perfectly Cooked Pasta',
      content: 'Master the art of cooking pasta with these simple yet essential tips from Italian chefs...',
      imageUrl: 'https://images.unsplash.com/photo-1572448862528-1b4f9594e713?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'The Benefits of Drinking Green Tea',
      content: 'From boosting metabolism to reducing stress, discover why green tea should be part of your daily routine...',
      imageUrl: 'https://images.unsplash.com/photo-1598511728794-271b681f37e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Understanding Organic vs Non-Organic Foods',
      content: 'Find out the differences between organic and non-organic foods to make informed choices...',
      imageUrl: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <View style={styles.container}>
    <ScrollView>
      <Image source={require('../images/succlyLogo.png')} style={styles.logo} />

      {/* Food and Drink of the Day Section */}
      <View style={styles.foodDrinkContainer}>
        {foodOfTheDay && (
          <View style={styles.ofTheDayContainer}>
             <Text style={styles.ofTheDayTitle}>Food of the Day</Text>
            <TouchableOpacity 
              onPress={() => navigation.navigate('MealDetailScreen', { idMeal: foodOfTheDay.idMeal })}
              style={styles.otdNavigation}>
              <Image source={{ uri: foodOfTheDay.strMealThumb }} style={styles.ofTheDayImage} />
              <Text style={styles.otdRecipe}>{foodOfTheDay.strMeal}</Text>
            </TouchableOpacity>
          </View>
        )}

        {drinkOfTheDay ? (
          <View style={styles.ofTheDayContainer}>
            <Text style={styles.ofTheDayTitle}>Drink of the Day</Text>
            <TouchableOpacity 
              onPress={() => navigation.navigate('CocktailDetail', { idDrink: drinkOfTheDay.idDrink })}
              style={styles.otdNavigation}>
              
              <Image source={{ uri: drinkOfTheDay.strDrinkThumb }} style={styles.ofTheDayImage} />
              <Text style={styles.otdRecipe}>{drinkOfTheDay.strDrink}</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text>Loading Drink of the Day...</Text>
        )}
      </View>

      {/* RecipeBook Section */}
      <View style={styles.bookContainer}>
        {/* Book Image Background */}
        <View style={styles.bookBackgroundContainer}>
          <Image
            source={require('../images/logos/book.png')}
            style={styles.bookImage}
          />

          {/* Buttons Overlay */}
          <View style={styles.buttonOverlay}>
            <TouchableOpacity
              style={styles.RecipeButton}
              onPress={() => navigation.navigate('CreateRecipe')}
            >
              <Image
                source={require('../images/logos/createRecipe.png')}
                style={styles.recipeImage} />
              <Text style={styles.recipeButtonText}>New recipe</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.RecipeButton}
              onPress={() => navigation.navigate('RecipeList')}
            >
              <Image
                source={require('../images/logos/recipelist.png')}
                style={styles.recipeImage}
              />
              <Text style={styles.recipeButtonText}>Your recipes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>


      {/* Article Section */}
      <Text style={styles.sectionTitle}>Food Articles</Text>
      <ScrollView horizontal style={styles.articleCarousel}
      showsHorizontalScrollIndicator={false}>
        {exampleArticles.map((article, index) => (
          <View key={index} style={styles.articleContainer}>
            <Image source={{ uri: article.imageUrl }} style={styles.articleImage} />
            <Text style={styles.articleTitle}>{article.title}</Text>
            <Text style={styles.articleContent}>{article.content}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
    </View>
  );
};


export default MainScreen;
