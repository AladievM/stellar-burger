import React from 'react';
import { dataPropTypes } from '../utils/prop-types';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import styles from './ingredient-detail.module.css';

function IngredientDetail({ item, onClose }) {
  return (
    <Modal heading={'Детали ингредиента'} onClose={onClose}>
      <img src={item.image_large} alt="Изображение ингредиента" />
      <p className="text text_type_main-medium mt-4 mb-8"> {item.name}</p>
      <ul className={`${styles.list} `}>
        <li className={styles.detail}>
          <p className="text text_type_main-default text_color_inactive mb-2">Калории, ккал</p>
          <p className="text text_type_digits-default text_color_inactive mb-15">{item.calories}</p>
        </li>
        <li className={styles.detail}>
          <p className="text text_type_main-default text_color_inactive mb-2">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive mb-15">{item.proteins}</p>
        </li>
        <li className={styles.detail}>
          <p className="text text_type_main-default text_color_inactive mb-2">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive mb-15">{item.fat}</p>
        </li>
        <li className={styles.detail}>
          <p className="text text_type_main-default text_color_inactive mb-2">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive mb-15">
            {item.carbohydrates}
          </p>
        </li>
      </ul>
    </Modal>
  );
}

IngredientDetail.propTypes = {
  item: dataPropTypes.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default IngredientDetail;
