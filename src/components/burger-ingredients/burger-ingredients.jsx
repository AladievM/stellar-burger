import React from 'react';
import PropTypes from 'prop-types';
import { dataPropTypes } from '../utils/prop-types';
import styles from './burger-ingredients.module.css';
import BurgerIngredientsItem from '../burger-ingredient-item/burger-ingredient-item';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients({ data }) {
  const bunsItems = data.filter((item) => item.type === 'bun');
  const sauceItems = data.filter((item) => item.type === 'sauce');
  const mainItems = data.filter((item) => item.type === 'main');

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
            {bunsItems.map((item ) => (
              <BurgerIngredientsItem item={item} key={item._id} />
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text text_type_main-medium mt-2">Соусы</h2>
          <ul className={styles.group}>
            {sauceItems.map((item ) => (
              <BurgerIngredientsItem item={item} key={item._id} />
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text text_type_main-medium mt-2">Начинки</h2>
          <ul className={styles.group}>
            {mainItems.map((item) => (
              <BurgerIngredientsItem item={item} key={item._id} />
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
