import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Spin } from "@arco-design/web-react";
import GroupTitle from "../components/GroupTitle";
import IconCard from "../components/IconCard";
import LeftMenu from "../components/LeftMenu";
import DetailContent from "../components/DetailContent";
import dataInfo from "../data/info.json";
import iconsJson from '../data/icons.json'
import { useState } from "react";
import { getGroupIconList } from "../utils";
import PortalNavbar from "../components/PortalNavbar";

export default function Index() {
 
  const [siderGroupList, setSiderGroupList] = useState(
    dataInfo.data.groupInfoList
  );
  const [collapsed, setCollapsed] = useState(false);
  const [triggerVisible, setTriggerVisible] = useState(false);
  const groupIconList = getGroupIconList(iconsJson.data.list, dataInfo.data.groupInfoList);
  return (
    <div className={styles.container}>
      <Head>
        <title>saber-icons</title>
        <meta name="description" content="所有图标" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <PortalNavbar />
        </div>
        <div className={styles["iconbox-lib-detail-container"]}>
          <div className={styles["iconbox-lib-detail-banner"]}></div>
          <Spin style={{ display: "block" }} loading={false}>
            <div className={styles["iconbox-lib-detail-content"]}>
              <div className={styles["iconbox-lib-detail-content-sider"]}>
                <div style={{ maxWidth: 180 }}>
                  <LeftMenu
                    groupList={siderGroupList}
                    collapsed={collapsed}
                    offsetTop={146}
                    boundary={146}
                    triggerVisible={triggerVisible}
                    onCollapseChange={() => {}}
                  ></LeftMenu>
                </div>
              </div>
              <div className={styles["iconbox-lib-detail-content-body"]}>
                <div
                  style={{ marginLeft: 144, marginRight: 94 }}
                  className={styles["iconbox-lib-detail-content-body-inner"]}
                >
                  <DetailContent groupIconList={groupIconList}></DetailContent>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </main>
    </div>
  );
}
