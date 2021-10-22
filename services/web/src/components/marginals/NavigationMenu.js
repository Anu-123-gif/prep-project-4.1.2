import React from 'react';

// Components
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const navigation = [
  {
    href: '/',
    src: 'https://img.icons8.com/color/48/000000/clouds.png',
    text: 'Weather',
  },
  {
    href: '/news',
    src: 'https://img.icons8.com/color/48/000000/newspaper-.png',
    text: 'News',
  },
  {
    href: '/toptens',
    src: 'https://img.icons8.com/color/50/000000/around-the-globe.png',
    text: 'Top Tens',
  },
  {
    href: '/notifications',
    src: 'https://img.icons8.com/color/48/000000/appointment-reminders--v1.png',
    text: 'Notifs',
  },
];

function NavigationMenu() {
  return (
    <>
      <DesktopMenu navigation={navigation} />
      <MobileMenu navigation={navigation} />
    </>
  );
}

export default NavigationMenu;
