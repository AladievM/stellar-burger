import styles from './app.module.css';
//import {data} from '../utils/data'
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import React from 'react';
import { baseURL } from '../utils/names';

function App() {
  const [ingredient, setIngredient] = React.useState();
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(null);


  React.useEffect(() => {
    const getIngredientData = async () => {
      try {
        const res = await fetch(`${baseURL}ingredients`);
        if (res.ok) {
          const data = await res.json();
          setLoaded(true);
          setIngredient( data.data);
        } else {
          const error = await res.json();
          throw new Error(error);
        }
      } catch (error) {
        setLoaded(true);
        setError(error);
        console.log(`Error- ${error}`);
      }
    };
    getIngredientData();
  }, []);

  return (
    <>
      <AppHeader />
      {ingredient && (
      <main className={styles.main}>
        <BurgerIngredients data={ingredient} />
        <BurgerConstructor data={ingredient} />
      </main>
      )}
    </>
  );
}

export default App;
