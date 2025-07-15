import CustomGoBack from '@/components/customGoBack';
import FavoriteContextProvider from '@/context/favoriteContext';
import { CATEGORIES } from '@/data/dummy-data';
import { Stack } from 'expo-router';
import React from 'react';

const RootLayout = ()=> {

  return (
    <FavoriteContextProvider>
      <Stack screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        contentStyle: {
          backgroundColor: "#3f2f25",
        },
        headerTintColor: "white"
      }}>
        <Stack.Screen name="drawerNavigator" options={{ headerShown: false }}/>
        <Stack.Screen
          name="mealsOverview"
          options={({ route }) => {
            const { categoryId } = route.params as { categoryId: string }
            const categoryTitle = CATEGORIES.find(category => category.id === categoryId)?.title;
            return {
              title: categoryTitle || "Meals Overview",
              headerLeft: ({ canGoBack }) => canGoBack && <CustomGoBack />
            }
          }
          }
        />
        <Stack.Screen
          name="mealDetails"
          options={{
            title: "Meal Details",
            headerLeft: ({ canGoBack }) => canGoBack && <CustomGoBack />
          }}
        />
      </Stack>
    </FavoriteContextProvider>
  )
}

export default RootLayout;