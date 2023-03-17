/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {Searchbar} from 'react-native-paper';
import {StatusBar, StyleSheet, SafeAreaView, Text, View, FlatList} from 'react-native';
import styled from 'styled-components/native';

import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import { Spacer } from '../components/spacer/spacer.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';


const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${props => props.theme.space[3]};
`;
//TO AVOID INLINE STYLING
//attr give us access to give specific props to our default Flatlist
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  //THis is an example of how we can pass information without prop drilling by using context hook
  //whatever change we make in restaurant context it will be seen on this screen
  //in other words the array in restuarant context is controlling the output of this screen
  const {restaurants,isLoading, error} = useContext(RestaurantsContext);
  //console.log(restaurantContext)
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({item}) => {
          return (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};


//OVERALL SUMMARY

//We set up a restaurant card to take in a certain shape, 
//we set up our context to be able to do the request for us to 
//get restuarants and then transorm that information to match the input 
//the restaurant card expects and then in our restaurant screen, 
//all we needed to do was we needed to use the context of the restaurants 
//that alread did the API call for us and give restaurant info to restaurants and at that point everything was hooked up because 
//we gave this prop over here, and so now we're getting real restaurant.

//---------------NEXT TASK-----------

//HOW CAN WE HOOK UP search in order to swap out between different cities