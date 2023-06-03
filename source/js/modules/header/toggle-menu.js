import {clickObserver} from '../../utils/observers';

export const initToggleMenu = (container, button) => {
  if (!container || !button) {
    return;
  }

  let isOpen = false;

  const close = () => {
    container.classList.remove('is-active');
    button.classList.remove('is-active');

    window.scrollLock.enableScrolling();
    isOpen = false;
  };

  const open = () => {
    container.classList.add('is-active');
    button.classList.add('is-active');

    window.scrollLock.disableScrolling();
    isOpen = true;
  };

  const toggle = (event) => {
    const isToggle = event.target.closest('[data-menu="toggle"]');

    if (!isToggle) {
      return;
    }

    if (isOpen) {
      close();
    } else {
      open();
    }
  };

  clickObserver.subscribe(toggle);
};
