/* eslint-disable prettier/prettier */
import React from 'react';
import {Searchbar} from 'react-native-paper';
import {StatusBar, StyleSheet, SafeAreaView, Text, View, FlatList} from 'react-native';
import styled from 'styled-components/native';

import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import { Spacer } from '../components/spacer/spacer.component';

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

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantList
      data={[{name: 1}, {name: 2}, {name: 3}]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
       />
    </RestaurantListContainer>
  </SafeArea>
);
