import {initToggleMenu} from './toggle-menu';

const menuHeader = document.querySelector('[data-menu="header"]');
const menuToggle = document.querySelector('[data-menu="toggle"]');

export const initHeader = () => {
  initToggleMenu(menuHeader, menuToggle);
};
