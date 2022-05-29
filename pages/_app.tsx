import '../styles/globals.css'
// import '@dangojs/arco-portal-navbar-webcomponent/css';
// import { useArcoButton } from '@dangojs/arco-button-webcomponent-demo';
// import { useArcoPortalNavbar } from '@dangojs/arco-portal-navbar-webcomponent';

// todo: nextjs 如何使用 webcomponent 组件呢

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
// @ts-ignore
// // eslint-disable-next-line react-hooks/rules-of-hooks
// useArcoPortalNavbar();
export default MyApp
