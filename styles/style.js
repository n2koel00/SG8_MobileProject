import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    paddingHorizontal: 5,
    flex: 1,
    backgroundColor: '#f2ffffae',
    paddingTop: 80,
  },
  MainContainer: {
    paddingHorizontal: 5,
    flex: 1,
    backgroundColor: '#f2ffffae',
  },
  background: {
    flex: 1,
  },
  logo: {
    width: '100%',
    height: 250,
    marginVertical: 10,
  },

  // Themelayout.js
  ThemeLayoutBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  ThemeLayoutContent: {
    flex: 1,
  },


  //LOGIN SCREEN LoginScreen.js
  containerLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2ffffae',

  },
  buttonLogin: {
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#dbfaEB',
    width: 300,
    height: 55,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 2
  },
  buttonTextLogin: {
    color: '#386641',
    fontWeight: 'bold',
    fontSize: 18,
  },
  welcomeText: {
    fontSize: 20,
    color: '#386641',  // Darker color for readability
    textAlign: 'center',
    marginVertical: 20,
    padding: 20,
    backgroundColor: '#f3fff5ac',
  },

  //MainScreen.js

  //Food/Drink of the DAY  (MainScreen)
  foodDrinkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 5,
    marginBottom: 10,
  },
  ofTheDayContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '49%',
    backgroundColor: '#f3fff5',
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRadius: 15,
    elevation: 4,

  },
  otdNavigation: {
    width: '100%',
    backgroundColor: '#386641ec',
    paddingVertical: 15,
    paddingHorizontal: 7,
    borderRadius: 10,
    height: 240,
  },
  ofTheDayTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#386641',
    padding: 5,
    width: '100%',
    borderBottomWidth: 2,
    borderColor: '#f67b43'
  },
  otdRecipe: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    color: '#ffffff',
    borderTopWidth: 2,
    borderColor: '#f67b43',
    height: 55,
  },
  ofTheDayImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,

  },

  //RECIPE LIST AND CREATE RECIPE RecipeBook Section (MainScreen)
  bookContainer: {
    alignItems: 'center',
  },
  bookBackgroundContainer: {
    width: '100%',
    height: 200,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3fff5ac',
    borderTopEndRadius: 100,
    borderTopStartRadius: 10,
    borderBottomStartRadius: 100,
    borderBottomEndRadius: 10,
  },
  bookImage: {
    width: '100%',
    height: '100%',
    tintColor: '#122215',
    position: 'absolute',
    resizeMode: 'stretch',
  },
  buttonOverlay: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  RecipeButton: {
    backgroundColor: '#6a994e8e',
    padding: 15,
    borderRadius: 60,
    width: '32%',
    alignItems: 'center',
    marginBottom: 20,
  },
  recipeButtonText: {
    color: '#021e01',
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  recipeImage: {
    height: 90,
    width: 90,
  },


  //Article section (MainScreen)
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#386641',
    padding: 5,
    width: '100%',
    borderBottomWidth: 2,
    borderColor: '#f67b43'
  },
  articleCarousel: {
    paddingVertical: 10,
    backgroundColor: '#386641a9',
    elevation: 2,
  },
  articleContainer: {
    width: 200,
    marginRight: 15,
    backgroundColor: '#f3fff5',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginLeft: 8,
  },
  articleImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 3,
  },
  articleTitle: {
    paddingVertical: 3,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#122115',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: '#f67b43'
  },
  articleContent: {
    fontSize: 16,
    color: '#24422a',
  },

  //Article Modal (MainScreen)
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2525257e',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#f3fff5',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalTitle: {
    textAlign: 'center',
    paddingVertical: 3,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#122115',
    width: '100%',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: '#f67b43'
  },
  modalDescription: {
    fontSize: 17,
    color: '#386641',
    textAlign: 'center',
    marginBottom: 20,
  },


  //CREATE RECIPE (CreateRecipeScreen.js)
  recipeContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  recipeTitle: {
    justifyContent: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  recipeName: {
    height: 55,
    width: '80%',
    borderWidth: 2,
    borderColor: '#386641',
    backgroundColor: '#fcf6eb',
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 10,
  },
  recipeTextAreas: {
    width: '90%',
    paddingVertical: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#386641',
    alignItems: 'center',
    backgroundColor: '#fcf6eb'
  },

  recipeInput: {
    height: 50,
    width: 250,
    paddingHorizontal: 8,
  },
  ingredientsinput: {
    width: '85%',
    height: 150,
    borderColor: '#386641',
    borderWidth: 2,
    marginBottom: 5,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
    paddingTop: 8,

  },
  guideinput: {
    width: '85%',
    height: 200,
    borderColor: '#386641',
    borderWidth: 2,
    paddingHorizontal: 8,
    textAlignVertical: 'top',
    paddingTop: 8,
    marginBottom: 15,

  },
  saveRecipeBtn: {
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#dbfaEB',
    width: 100,
    height: 40,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#386641',
    alignItems: 'center',
  },
  photoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  recipePhoto: {
    height: 250,
    elevation: 2,
    borderRadius: 10,
  },
  photoButton: {
    backgroundColor: '#386641',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  

  //OWN RECIPE DETAIL SCREEN (RecipeDetailScreen.js)
  scrollContentRecipeDS: {
    backgroundColor: '#fcf6eba1',
    marginVertical: 20,
  },
  recipeDate: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    fontSize: 12,
    color: '#213b26',
  },
  dateRecipeDS: {
    marginTop: 10,
    alignItems: 'center',
    width: '100%',
    fontSize: 16,
    textAlign: 'center',

  },
  recipeImageThumbnail: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  recipeTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  placeholderPhoto: {
    width: '100%',
    height: 200,
    backgroundColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 16,
},
placeholderText: {
    color: '#777',
    fontSize: 16,
},


  //YOUR RECIPES (RecipeListScreen)
  recipeContainer: {
    justifyContent: 'center',
    height: 55,
    width: 330,
    borderBottomWidth: 3,
    borderTopWidth: 1,
    borderColor: '#386641',
    backgroundColor: '#fcf6eb',
    borderRadius: 5,
    marginVertical: 5,
    elevation: 2,

  },
  recipeListName: {
    justifyContent: 'center',
    color: '#386641',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: '10%',
  },
  emptyText: {
    fontSize: 18,
    color: '#386641',
    textAlign: 'center',
    marginVertical: 20,
  },
  createButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    backgroundColor: '#dbfaEB',
    width: 200,
    height: 40,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#386641',
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonTextRL: {
    color: '#386641',
    fontSize: 16,
    fontWeight: '600',
  },

  //Meal and Cocktail screens (MealScreen.js & CocktailScreen.js)

  //SEARCH INPUT
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafff0f6',
    borderWidth: 3,
    borderColor: '#6A994E',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    height: 50,
  },
  icon: {
    marginRight: 10,
  },


  // CATEGORY
  categoryButton: {
    backgroundColor: '#386641',
    marginHorizontal: 5,
    borderRadius: 15,
    elevation: 10,
    borderWidth: 1,
    width: 140,
    overflow: 'hidden',
  },

  categoryContainer: {
    width: '100%',
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  categoryImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  overlay: {
    backgroundColor: '#386641a5',
    width: '99%',
    borderRadius: 5,
  },

  categoryText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 1,
    padding: 7,
    borderRadius: 5,
  },

  // SELECTED CATEGORY
  selectedCategory: {
    borderColor: '#f67b43',
    borderWidth: 3,
  },

  selectedCategoryText: {
    color: '#FFC6AC',
  },

  // FLATLIST
  foodList: {
    height: '60%',
  },

  categoryList: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 2,
    height: '12%',
  },

  //MEALS AND DRINKS
  mealSelect: {
    alignItems: 'center',
    marginBottom: 20,
  },
  mealImage: {
    width: '99%',
    height: 170,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  mealTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    color: 'white',
    backgroundColor: '#386641', //386641a5
    width: '99%',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },

  //RECIPE SCREENS ((MealDetailScreen.js & CocktailDetailScreen.js))
  innerContainerMealDS: {
    backgroundColor: '#f3fff5e9',
    borderRadius: 10,
  },

  scrollContentMealDS: {
    padding: 10,
  },
  imageDS: {
    height: 250,
    elevation: 2,
    borderRadius: 10,
  },
  titleDS: {
    borderBottomWidth: 2,
    borderColor: '#6A994E',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,

  },
  sectionTitleDS: {
    borderBottomWidth: 2,
    borderColor: '#6A994E',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
    margin: 15,
  },
  ingredientDS: {
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: '#ffc6ac',
    backgroundColor: '#ffeee694',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 26,
    paddingVertical: 5,
    marginHorizontal: 20,

  },
  instructionsDS: {
    fontSize: 16,
    lineHeight: 30,
    marginHorizontal: 15,
    paddingVertical: 5,
  },
  foodDetCat: {
    marginHorizontal: 15,
  },
  foodDetCatTitle: {
    height: 50,
    alignContent: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  //SHOPPING LIST (ShoppingListScreen.js)
  shopListCreation: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f3fff5ac',
  },
  addItem: {
    justifyContent: 'center',
    flexDirection: 'row',
  },

  addShopButton: {
    height: 50,
    width: 50,
    backgroundColor: '#6A994E',
    marginLeft: 20,
    borderRadius: 10,
    justifyContent: 'center',
  },
  inputShopListName: {
    height: 50,
    fontSize: 20,
    paddingLeft: 15,
    width: 360,
  },
  inputShopListItem: {
    height: 50,
    width: '75%',
    paddingLeft: 15,
    borderBottomWidth: 2,
    borderColor: '#6A994E'
  },
  currentListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#386641',
    backgroundColor: '#fcf6eb',
    borderRadius: 5,
    marginVertical: 5,
    elevation: 2,
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#539861',
    width: '95%',
    marginHorizontal: 10,
  },
  itemText: {
    paddingVertical: 8,
    paddingLeft: 16,
    fontSize: 18,
    color: '#386641',
  },
  savedListItem: {
    marginLeft: 20,
  },
  savedListText: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },

  mapContainer: {
    marginTop: 20,
    height: 300,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  errorText: {
    textAlign: 'center',
    color: '#ff6b6b',
    fontSize: 16,
  },

  //PrintListScreen.js
  shoppinglistItem: {
    fontSize: 18,
    marginTop: 10, 
    paddingVertical: 8, 
    paddingHorizontal: 15, 
    borderWidth: 1, 
    borderColor: '#72997a', 
    backgroundColor: '#76da8a1e',
    borderRadius: 8, 
    textAlign: 'center',
    color: '#1c3320', 
    width: '90%',
    alignSelf: 'center',
  },
  innerContainerPrintList: {
    borderRadius: 10,
    backgroundColor: '#f3fff5a9',
    height: '100%',
  },


  //SettingsScreen.js
  settingItem: {
    backgroundColor: '#f2ffff75',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#386641',
    marginBottom: 20,
  },
  settingsLogin: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    marginTop: 20,
    borderWidth: 1,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
    paddingVertical: 10,

  },
  accountInput: {
    width: '90%',
    fontSize: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#386641',
    borderRadius: 5,
    backgroundColor: '#ecffeff5',

  },
  saveButtonText: {
    color: '#386641',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#386641',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 30,
    width: '50%',
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  settingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  settingInfo: {
  },

  //RegisterScreen.js  //LocalLoginScreen.js
  titleLogin: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
  },



  //OLD STYLES.. WORKING ON IT

  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },

  containerDrinkScr: {
    padding: 20,
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  inputDrinkScr: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  pickerDrinkScr: {
    height: 50,
    width: '100%',
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
    borderRadius: 5,
  },
  itemDrinkScr: {
    fontSize: 18,
    padding: 10,
  },

  containerShop: {
    flex: 1,
    padding: 16,
  },
  inputShop: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  itemContainerShop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  itemShop: {
    fontSize: 16,
  },
  removeShop: {
    color: 'red',
  },



  containerMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 16,
  },

  titleMain: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainerMain: {
    marginTop: 20,
    width: '80%',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  filterButton: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: '#4caf50',
  },
  filterText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyMessage: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
    borderRadius: 5,
  },


  //modal style SaveIngredients

  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark semi-transparent background
    padding: 20,
  },
  selectedIngredient: {
    fontSize: 18,
    color: '#444',
    marginVertical: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontStyle: 'italic',
    maxWidth: 300,
  },
  savedIngredientsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 15,
  },
  savedIngredient: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#6C63FF', // Modern button color
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#FF6F61', // Red color for close
  },




});