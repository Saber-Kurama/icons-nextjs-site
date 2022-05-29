import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Spin } from "@arco-design/web-react";
import GroupTitle from "../components/GroupTitle";
import IconCard from "../components/IconCard";
import LeftMenu from "../components/LeftMenu";

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>saber-icons</title>
        <meta name="description" content="所有图标" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>这是一个头部</div>
        <Spin style={{ display: "block" }} loading={false}>
         <div className={styles['iconbox-lib-detail-content']}>
           <div className={styles['iconbox-lib-detail-content-sider']}>
             <div style={{maxWidth: 180}}>
               <LeftMenu></LeftMenu>
             </div>
           </div>
           <div className={styles['iconbox-lib-detail-content-body']}></div>
         </div>
        </Spin>
      </main>
    </div>
  );
}

{/* <div className={styles["iconbox-wrapper"]}>
<div className={styles["iconbox-group"]}>
  <GroupTitle />
  <div className={styles["iconbox-group-icon-list"]}>
    <IconCard />
  </div>
</div>
</div> */}