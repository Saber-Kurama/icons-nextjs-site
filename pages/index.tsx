import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Spin } from "@arco-design/web-react";
import GroupTitle from "../components/GroupTitle";
import IconCard from "../components/IconCard";

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>saber-icons</title>
        <meta name="description" content="所有图标" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        图标界面2
        <Spin style={{ display: "block" }} loading={false}>
          <div className={styles["iconbox-wrapper"]}>
            <div className={styles["iconbox-group"]}>
              <GroupTitle />
              <div className={styles["iconbox-group-icon-list"]}>
                <IconCard />
              </div>
            </div>
          </div>
        </Spin>
      </main>
    </div>
  );
}
