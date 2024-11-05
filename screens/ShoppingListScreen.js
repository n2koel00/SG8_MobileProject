import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';

const ShoppingListScreen = ({ navigation }) => {
  const [item, setItem] = useState('');
  const [shoppingList, setShoppingList] = useState([]);
  const [savedLists, setSavedLists] = useState([]); // State to hold saved shopping lists

  const addItem = () => {
    if (item) {
      setShoppingList([...shoppingList, item]);
      setItem('');
    }
  };

  const removeItem = (index) => {
    const newList = shoppingList.filter((_, i) => i !== index);
    setShoppingList(newList);
  };

  const saveList = () => {
    if (shoppingList.length > 0) {
      setSavedLists([...savedLists, shoppingList]);
      setShoppingList([]); // Clear the current shopping list
    }
  };

  const navigateToListDetail = (list) => {
    navigation.navigate('ListDetailScreen', { list });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add an item..."
        value={item}
        onChangeText={setItem}
      />
      <Button title="Add to List" onPress={addItem} />

      <View style={styles.currentListContainer}>
        <Text style={styles.sectionTitle}>Current Shopping List</Text>
        <FlatList
          data={shoppingList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item}</Text>
              <TouchableOpacity onPress={() => removeItem(index)}>
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={saveList}>
        <Text style={styles.saveButtonText}>Save List</Text>
      </TouchableOpacity>

      <View style={styles.savedListsContainer}>
        <Text style={styles.sectionTitle}>Saved Shopping Lists</Text>
        <FlatList
          data={savedLists}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.savedListItem}
              onPress={() => navigateToListDetail(item)}
            >
              <Text style={styles.savedListText}>List {index + 1}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  currentListContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e9ecef',
    borderRadius: 8,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#343a40',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 16,
    color: '#495057',
  },
  removeText: {
    color: '#dc3545',
    fontWeight: 'bold',
  },
  saveButton: {
    marginTop: 15,
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  savedListsContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e9ecef',
    borderRadius: 8,
    elevation: 1,
  },
  savedListItem: {
    paddingVertical: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  savedListText: {
    fontSize: 16,
    color: '#007bff',
  },
});

export default ShoppingListScreen;
