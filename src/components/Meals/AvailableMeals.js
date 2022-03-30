import React, { useEffect, useState } from 'react';
import style from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(`https://react-http-4a5c5-default-rtdb.firebaseio.com/meals.json`);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          // ...responseData[key],
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

      fetchMeals().catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
  }, []);


  if (isLoading) {
    return (
      <section className={style.MealsIsLoading}>
        <h4>Loading...</h4>
      </section>
    )
  }

  if (httpError) {
    return (
      <section className={style.MealsHasError}>
        <h4>{httpError}</h4>
      </section>
    )
  }

  const mealsList = meals.map(meal => <MealItem
    id={meal.id}
    key={meal.id} 
    name={meal.name}
    description={meal.description}
    price={meal.price}
  />);

  return (
    <section className={style.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  )
}
