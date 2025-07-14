import FavoriteMeals from '@/components/favoriteMeals';
import Mealscategories from '@/components/mealsCategories';
import { AntDesign } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#351401"
                },
                sceneStyle: {
                    backgroundColor: "#3f2f25"
                },
                headerTintColor: "white",
                drawerContentStyle: {
                    backgroundColor: "#351401",
                },
                drawerInactiveTintColor: "white",
                drawerActiveTintColor: "#351401",
                drawerActiveBackgroundColor: "#e4baa1",
            }}
        >
            <Drawer.Screen 
                name="Categories" 
                component={Mealscategories}
                options={{
                    title: "All Categories",
                    drawerIcon: ({ color, size })=> <AntDesign name="home" color={color} size={size} />
                }}
            />
            <Drawer.Screen 
                name="FavoriteMeals" 
                component={FavoriteMeals}
                 options={{
                    title: "Favorite Meals",
                    drawerIcon: ({ color, size })=> <AntDesign name="star" color={color} size={size} />
                }}    
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;