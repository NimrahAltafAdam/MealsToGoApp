/* eslint-disable prettier/prettier */
import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantsRequest, restaurantsTransform } from "./restaurants.service";

//SO HERE WE HAVE SET UP RESTAURANT Context Provider so that the data can be passed through the component tree without having to pass props down manually at every level.
//For this we will give the context provider a value of restaurants with a array of 8 items. This array can now be accessed anywhere below app.js using context hook.
//we also have to set the provider on app.js before the navigator tag
//A Demo of its usage can be seen on the restaurant screen. Go to that page >>>


//WHEN THE COMPONENT mounts do something - USEEFFECT()

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      //first check whther data related to the resaurants is available in the requested location or not.
      //if available then restraunttransorm will return a list of restraunts in that location
      //then the results from the previous function will be passed to setRestrauntstate
      //Finally this list of restaurants is passed to the context provider so that it can be used anywhere in the component tree.
      //in this case in the restaurant screen
      //we will also pass the loading and error state so that they both can be displayed as well 
      restaurantsRequest().then(restaurantsTransform).then((results) => {
        setIsLoading(false);
        setRestaurants(results);
      }
      )
      .catch((err) => {
        setIsLoading(false);
        setError(err)
      });
    }, 2000)
  };
  useEffect(() => {
    retrieveRestaurants();
  }, []);
  return (
    <RestaurantsContext.Provider
      value={{
        //restaurants: restaurants,
        restaurants,
        isLoading,
        error
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};