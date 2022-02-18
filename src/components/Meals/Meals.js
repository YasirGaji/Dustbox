import React from 'react';
import style from './Meals.module.css';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

export default function Meals() {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  )
}
