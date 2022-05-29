import { Button, Dropdown, Menu, Spin } from "@arco-design/web-react";
import { IconDown } from "@arco-design/web-react/icon";
import styles from "../styles/IconCard.module.css";

const dropList = (
  <Menu>
    <Menu.Item key="1">Beijing</Menu.Item>
    <Menu.Item key="2">Shanghai</Menu.Item>
    <Menu.Item key="3">Guangzhou</Menu.Item>
  </Menu>
);

export default function IconCard() {
  return (
    <div>
      <Dropdown droplist={dropList} position="bl">
       <div className={styles['iconbox-icon-box']}>
         <Spin loading={false} size={46}>
           <div className={styles['iconbox-icon-box-icon']}>xxx</div>
         </Spin>
         <div className={styles['iconbox-icon-box-text']}>menu-unfold</div>
       </div> 
      </Dropdown>
    </div>
  );
}
