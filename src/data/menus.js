import { reactive } from "vue";
const headerMenu = reactive([
    {
      href: '#',
      text: 'HOME',
      icon: ''
    },
    {
      href: '#',
      text: 'SHOP',
      icon: ''
    },
    {
      href: '#',
      text: 'ABOUT',
      icon: ''
    },
    {
      href: '#',
      text: 'GALLERY',
      icon: ''
    },
    {
      href: '#',
      text: 'LOCATION',
      icon: ''
    },
    {
      href: '#',
      text: 'JOURNAL',
      icon: ''
    },
    {
      href: '#',
      text: 'CONTACT',
      icon: ''
    },
    {
      href: '#',
      text: 'MY ACCOUNT',
      icon: ''
    },
    {
      href: '#',
      text: '',
      icon: 'fa-solid fa-cart-shopping',
    },
  ]);

  const footerMenu = reactive([
    {
      href: '#',
      text: 'Shop',
      icon: ''
    },
    {
      href: '#',
      text: 'About',
      icon: ''
    },
    {
      href: '#',
      text: 'Gallery',
      icon: ''
    },
    {
      href: '#',
      text: 'Locations',
      icon: ''
    },
    {
      href: '#',
      text: 'Journal',
      icon: ''
    },
    {
      href: '#',
      text: 'Contact',
      icon: ''
    },
    {
      href: '#',
      text: 'Orders',
      icon: ''
    },
    {
      href: '#',
      text: '',
      icon: 'fa-solid fa-cart-shopping',
      counter: 0
    },
  ]);

  export { headerMenu, footerMenu };