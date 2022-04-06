import { useLayoutEffect } from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).breed;

    navigation.setOptions({
      breed: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />

}

export default MealsOverviewScreen;


