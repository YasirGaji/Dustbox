import React, { useEffect, useState } from 'react';
import style from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(`https://react-http-4a5c5-default-rtdb.firebaseio.com/meals.json`);
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
    }

    fetchMeals();
  }, []);

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
