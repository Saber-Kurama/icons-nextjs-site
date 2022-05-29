import { Spin } from "@arco-design/web-react";
import { useState } from "react";
import styles from "../styles/DetailContent.module.css";
import GroupTitle from "./GroupTitle";
import IconCard from "./IconCard";

export default function DetailContent(props) {
  const { groupIconList } = props;
  console.log('groupIconList', groupIconList);
  return (
    <Spin loading={false} style={{ display: "block" }}>
      <div className={styles["iconbox-wrapper"]}>
        {groupIconList.map((data) => {
          const { group, icons } = data;
          if (!icons.length) return null;
          return (
            <div id={`${group.id}-${group.name}`} key={data.index} className={styles["iconbox-group"]}>
              <GroupTitle groupIconInfo={data}/>
              <div className={styles["iconbox-group-icon-list"]}>
                {icons.map((icon, index) => {
                  return <IconCard key={index} iconInfo={icon} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Spin>
  );
}
