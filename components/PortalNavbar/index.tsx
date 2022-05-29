import { Avatar, Space } from "@arco-design/web-react";
import styles from "./style.module.css";

export default function PortalNavbarBase() {
  return (
    <div className={styles["iconbox-header"]}>
      <div className={styles["iconbox-header-left"]}>
        <img src="https://image.parligerly.com/protal-svg/logo-hom.svg" />
      </div>
      <div className={styles["iconbox-header-right"]}>
        <div className={styles["iconbox-header-content"]}>
          <div className={styles["iconbox-header-content-left"]}></div>
          <div className={styles["iconbox-header-content-right"]}>
            <Space>
              <Avatar>
                <img
                  alt="avatar"
                  src="https://avatars.githubusercontent.com/u/4177028?v=4"
                />
              </Avatar>
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
}
