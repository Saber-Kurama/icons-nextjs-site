import { Spin } from "@arco-design/web-react";
import { useState } from "react";
import styles from "../styles/DetailContent.module.css";
import GroupTitle from "./GroupTitle";
import IconCard from "./IconCard";

export default function DetailContent() {
  const groupIconList = [
    {
      group: {
        id: 416,
        name: "通用类图标",
      },
      icons: [{}],
      index: 0,
    },
  ];
  return (
    <Spin loading={false} style={{ display: "block" }}>
      <div className={styles["iconbox-wrapper"]}>
        {groupIconList.map((data) => {
          const { group, icons } = data;
          if (!icons.length) return null;
          return <div key={data.index} className={styles['iconbox-group']}>
            <GroupTitle />
            <div className={styles['iconbox-group-icon-list']}>
              {
                icons.map((icon, index) => {
                  return <IconCard key={index} />
                })
              }
            </div>
          </div>;
        })}
      </div>
    </Spin>
  );
}
