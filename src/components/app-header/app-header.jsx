import header from './app-header.module.css';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <header className={header.header}>
      <div className={header.content}>
        <nav className={header.navigation}>
          <a className={header.wrapper}>
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default ml-2">Конструктор</p>
          </a>
          <a className={header.wrapper}>
            <ListIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive ml-2">Лента заказов</p>
          </a>
        </nav>
        <Logo />
        <div className={header.wrapperProfile}>
          <ProfileIcon type="secondary" />
          <a className="text text_type_main-default text_color_inactive ml-2">Личный кабинет</a>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
