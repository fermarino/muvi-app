import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MaterialCommunityIcons } from '@expo/vector-icons'

import Movies from '../pages/Movies';
import StackRoutes from './stackRoute';

const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,

        drawerStyle:{
          backgroundColor: '#010D22',
          paddingTop: 25,
        },

        drawerActiveBackgroundColor: '#142036',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff'
      }}
    >
      <Drawer.Screen
        name="HomeDrawer"
        component={StackRoutes}
        options={{
          title: 'Home',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? 'movie-open' : 'movie-outline' }
              size={size}
              color={color}
             
            />
          )
        }} />
      <Drawer.Screen
      name="Movies"
      component={Movies}
      options={{
        title: 'Meus filmes',
        drawerIcon: ({ focused, size, color }) => (
          <MaterialCommunityIcons
            name={focused ? 'archive-star' : 'archive-outline'}
            size={size}
            color={color}
          />
        )
      }}
      />
    </Drawer.Navigator>
  )
}

export default Routes;