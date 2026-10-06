import MealCard from './MealCard.jsx';
import styles from './MealList.module.css';

// Recibe el array de recetas y arma una card por cada una
function MealList({ meals }) {
  return (
    <section className={styles.grid}>
      {meals.map((meal) => (
        <MealCard
          key={meal.idMeal}
          titulo={meal.strMeal}
          imagen={meal.strMealThumb}
          categoria={meal.strCategory}
          origen={meal.strArea}
          etiquetas={meal.strTags ? meal.strTags.split(',').filter(Boolean) : []}
        />
      ))}
    </section>
  );
}

export default MealList;
