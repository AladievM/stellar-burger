import React from 'react';
import PropTypes from 'prop-types';
import style from './order-details.module.css';
import image from '../../images/done.png';

function OrderDetails({ number}) {
  return (
    <>
      <div className={style.container}>
        <p className="text text_type_digits-large mt-15 mb-4"> {number}</p>
        <p className="text text_type_main-medium mb-15"> Идентификатор заказа</p>
        <img src={image} alt="Заказ" className={style.image} />
        <p className="text text_type_main-small mt-15 mb-2">Ваш закакз начали готовить</p>
        <p className="text text_type_main-small text_color_inactive mb-30">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </>
  );
}

OrderDetails.propTypes = {
  number: PropTypes.string.isRequired,
};

export default OrderDetails;
