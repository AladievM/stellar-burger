import React from 'react';
import PropTypes from 'prop-types';
import { dataPropTypes } from '../utils/prop-types';
import styles from './burger-ingredients.module.css';
import BurgerIngredientsItem from '../burger-ingredient-item/burger-ingredient-item';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients({ data }) {
  const BunsItems = data.filter((item) => item.type === 'bun');
  const SauceItems = data.filter((item) => item.type === 'sauce');
  const MainItems = data.filter((item) => item.type === 'main');

  const [current, setCurrent] = React.useState('bun');

  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div className={`${styles.tabs} mb-8`}>
        <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>

      <div className={styles.list}>
        <div>
          <h2 className="text text_type_main-medium mt-2">Булки</h2>
          <ul className={styles.group}>
            {BunsItems.map((item, index) => (
              <BurgerIngredientsItem item={item} key={index} />
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text text_type_main-medium mt-2">Соусы</h2>
          <ul className={styles.group}>
            {SauceItems.map((item, index) => (
              <BurgerIngredientsItem item={item} key={index} />
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text text_type_main-medium mt-2">Начинки</h2>
          <ul className={styles.group}>
            {MainItems.map((item, index) => (
              <BurgerIngredientsItem item={item} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
};

export default BurgerIngredients;
