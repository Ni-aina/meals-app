import Icon from '@/components/ui/Icon';
import FavoriteContextProvider from '@/context/FavoriteContext';
import { CATEGORIES } from '@/data/dummy-data';
import { Stack } from 'expo-router';
import React from 'react';

const RootLayout = () => {

  return (
    <FavoriteContextProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#351401"
          },
          contentStyle: {
            backgroundColor: "#3f2f25",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 20
          }
        }}
      >
        <Stack.Screen name="drawerNavigator" options={{ headerShown: false }} />
        <Stack.Screen
          name="mealsOverview"
          options={({ route, navigation }) => {
            const { categoryId } = route.params as { categoryId: string }
            const categoryTitle = CATEGORIES.find(category => category.id === categoryId)?.title;
            return {
              title: categoryTitle || "Meals Overview",
              headerLeft: ({ canGoBack }) => canGoBack &&
                <Icon
                  name="arrow-back"
                  size={25}
                  iconStyle={{
                    marginRight: 10
                  }}
                  onPress={() => navigation.goBack()}
                />
            }
          }
          }
        />
        <Stack.Screen
          name="mealDetails"
          options={({ navigation }) => ({
            title: "Meal Details",
            headerLeft: ({ canGoBack }) => canGoBack &&
              <Icon
                name="arrow-back"
                size={25}
                iconStyle={{
                  marginRight: 10
                }}
                onPress={() => navigation.goBack()}
              />
          })}
        />
      </Stack>
    </FavoriteContextProvider>
  )
}

export default RootLayout;