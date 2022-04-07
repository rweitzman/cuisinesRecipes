import { useContext, useLayoutEffect } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { Video } from "expo-av";
import { MEALS } from "../data/dummy-data";

import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import IconButton from "../components/IconButton";

import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen({ route, navigation }) {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const mealId = route.params.mealId;
  const { imageUrl } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.container}>
        <View style={styles.videoContainer}>
          <Video
            source={{
              uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            useNativeControls
            resizeMode="cover"
            style={{  width: 360, height: 300 }}
          />
        </View>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />

        <Subtitle>Ingredients</Subtitle>
        {selectedMeal.ingredients.map((ingredient) => {
          return (
            <View style={styles.listItem} key={ingredient}>
              <Text style={styles.itemText}>{ingredient}</Text>
            </View>
          );
        })}

        <Subtitle>Steps</Subtitle>
        {selectedMeal.steps.map((step) => {
          return (
            <View style={styles.listItem} key={step}>
              <Text style={styles.itemText}>{step}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 36,
  },
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 24,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
  
});
