import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger-constructor.module.css';
import { dataPropTypes } from '../utils/prop-types';
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../order-details/order-details';
import Modal from '../modal/modal';
import { useModal } from '../utils/useModal';

function BurgerConstructor({ data }) {
  const list = data.filter((item) => item.type !== 'bun');
  const bun = data.find((item) => item.type === 'bun');
  const sum = bun.price * 2 + list.reduce((sum, item) => (sum += item.price), 0);

  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <section className={styles.section}>
      <div className={`${styles.burger} mt-25 ml-4`}>
        <ConstructorElement
          type="top"
          text={`${bun.name} (верх)`}
          isLocked={true}
          thumbnail={bun.image}
          price={bun.price}
          extraClass=" ml-8"
        />
        <ul className={`${styles.scroll} mt-4 mb-4`}>
          {list.map((item, index) => (
            <li className={`${styles['list-item']} mt-4`} key={index}>
              <span className={styles.draggable}>
                <DragIcon type="primary" />
              </span>
              <ConstructorElement
                text={item.name}
                thumbnail={item.image}
                price={item.price}
                extraClass="ml-2"
              />
            </li>
          ))}
        </ul>
        <ConstructorElement
          type="bottom"
          text={`${bun.name} (низ)`}
          isLocked={true}
          thumbnail={bun.image}
          price={bun.price}
          extraClass=" ml-8"
        />
      </div>

      <div className={`${styles.total} mr-4 mt-10`}>
        <div className="text text_type_digits-medium mr-2 mb-1">{sum}</div>
        <div className={`${styles['total-icon']} mr-10`}>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" onClick={openModal}>
          Оформить заказ
        </Button>
        {isModalOpen && (
          <Modal onClose={closeModal}>
            <OrderDetails number="1234567" />
          </Modal>
        )}
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
};

export default BurgerConstructor;
