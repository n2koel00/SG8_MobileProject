import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/style';
import { useTheme } from '../contexts/ThemeContext'; // Import useTheme

// Define the available categories
const categories = ["Select Category", "Cocktail", "Ordinary Drink", "Shot", "Beer", "Punch / Party Drink", "Coffee / Tea"];

const CocktailScreen = () => {
  const [search, setSearch] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const navigation = useNavigation();
  const { isDarkMode } = useTheme(); // Access isDarkMode from the theme context

  // Fetch cocktails by search query or category
  const fetchCocktails = async (query, category) => {
    try {
      let url;
      if (query) {
        url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;
      } else if (category) {
        url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
      } else {
        setCocktails([]);
        return;
      }

      const response = await fetch(url);
      const data = await response.json();
      setCocktails(data.drinks || []);
    } catch (error) {
      console.error('Error fetching cocktails:', error);
    }
  };

  // Handle category selection from dropdown
  const handleCategorySelect = async (category) => {
    setSelectedCategory(category);
    setSearch(''); // Clear the search input when selecting a category
    if (category !== "Select Category") {
      fetchCocktails('', category);
    } else {
      setCocktails([]); // Clear list if no category is selected
    }
  };

  // Fetch cocktails by name when the search input changes
  useEffect(() => {
    if (search) {
      fetchCocktails(search);
    } else if (selectedCategory !== "Select Category") {
      fetchCocktails('', selectedCategory);
    }
  }, [search]);

  // Navigate to the cocktail detail screen
  const goToDetail = (id) => {
    navigation.navigate('CocktailDetail', { id });
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#15202B' : '#ffffff' }]}>
      <TextInput
        style={[styles.inputDrinkScr, { color: isDarkMode ? '#ffffff' : '#000000', backgroundColor: isDarkMode ? '#333333' : '#ffffff' }]}
        placeholder="Search for a cocktail..."
        placeholderTextColor={isDarkMode ? '#aaaaaa' : '#555555'}
        value={search}
        onChangeText={(text) => {
          setSearch(text);
          setSelectedCategory("Select Category"); // Reset selected category when searching by name
        }}
      />

      {/* Category Dropdown Picker */}
      <Picker
        selectedValue={selectedCategory}
        style={styles.picker}
        onValueChange={(itemValue) => handleCategorySelect(itemValue)}
      >
        {categories.map((category) => (
          <Picker.Item label={category} value={category} key={category} />
        ))}
      </Picker>

      <FlatList
        data={cocktails}
        keyExtractor={(item) => item.idDrink}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => goToDetail(item.idDrink)}>
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.strDrinkThumb }} style={styles.image} />
              <Text style={[styles.title, { color: isDarkMode ? '#ffffff' : '#000000' }]}>{item.strDrink}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={[styles.emptyMessage, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
            No cocktails found.
          </Text>
        }
      />
    </View>
  );
};

export default CocktailScreen;