import Head from "next/head";
import Image from "next/image";
import { Spin } from "@arco-design/web-react";
import styles from "../styles/GroupTitle.module.css";

export default function GroupTitle(props) {
  const {groupIconInfo} = props;
  return (<div className={styles['iconbox-group-title']}>
   { `${groupIconInfo.group.name} (${groupIconInfo.icons.length})`} 
  </div>);
}
