import { dataPropTypes } from '../utils/prop-types';
import styles from './burger-ingredient-item.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import Modal from '../modal/modal';
import IngredientDetail from '../ingredient-detail/ingredient-detail';

function BurgerIngredientItem({ item }) {

    const [show, setShow] = React.useState(false);

    function closeModal(e) {
      setShow(false);
      e.stopPropagation();
    }
  
    function openModal() {
      setShow(true);
    }

  return (
    <li className={`${styles.card} mt-6 mb-8 ml-3 mr-2`} onClick={openModal}>
      <div className={styles.count}>
        <Counter count={1} size="default" />
      </div>
      <img className={`${styles['image']} ml-4 mr-4 mb-1`} src={item.image} alt={item.name} />
      <div className={`${styles['price']} mb-1`}>
        <span className="text text_type_digits-default mr-2">{item.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <div className={`${styles['title']} text text_type_main-default`}>{item.name}</div>

      {show && (
        <Modal heading={'Детали ингредиента'} onClose={closeModal}>
          <IngredientDetail item={item} />
        </Modal>
      )}
    </li>
  );
}

BurgerIngredientItem.propTypes = {
  item: dataPropTypes.isRequired,
};

export default BurgerIngredientItem;
