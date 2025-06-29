import { Stack } from 'expo-router';
import React from 'react';

export default function TabLayout() {

  return (
    <Stack screenOptions={{ navigationBarHidden: true }}>
      <Stack.Screen
        name="mealsCategories"
        options={{ title: "Meals Categories" }}
      />
      <Stack.Screen
        name="mealsOverview"
        options={{ title: "Meals Overview" }}
      />
    </Stack>
  );
}
