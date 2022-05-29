import { Button, Dropdown, Menu, Message, Spin } from "@arco-design/web-react";
import { IconDown } from "@arco-design/web-react/icon";
import { useRef } from "react";
import copy from 'copy-to-clipboard';
import styles from "../styles/IconCard.module.css";

export default function IconCard(props) {
  const { iconInfo, selectable, actions, onExportClick } = props;
  const iconBoxRef = useRef(null);
  //   m = function(e) {
  //     for (var r = 1; r < arguments.length; r++) {
  //         var n = null != arguments[r] ? arguments[r] : {};
  //         r % 2 ? Q_(Object(n), !0).forEach((function(r) {
  //             fi(e, r, n[r])
  //         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Q_(Object(n)).forEach((function(r) {
  //             Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
  //         }))
  //     }
  //     return e
  // }({
  //     downloadSvg: !0,
  //     downloadPng: !0,
  //     copySvg: !0,
  //     copyPng: !0,
  //     copyReact: !0,
  //     copyVue: !0
  // }, u),
  const svgHtml = iconInfo.src;
  const handlerList: any[] = [
    {
      key: "copyReact",
      name: "复制 React 代码",
      handler: () => {
      },
    },
    {
      key: "copyVue",
      name: "复制 Vue 代码",
      handler: () => {
        const str = "<".concat(iconInfo.name.trim().replace(/[^a-zA-Z0-9]/g, "-").replace(/(?=!\b)([A-Z])/g, ((e, r) => "-".concat(r))).toLowerCase(), " />");
        copy(str);
        Message.success({
            content: "Vue 代码: ".concat(str, " 复制成功")
        })
      },
    },
    {
      key: "copySvg",
      name: "复制 SVG",
      handler: () => {
      },
    },
    {
      key: "copyPng",
      name: "复制 PNG",
      handler: () => {
      },
    },
    {
      key: "downloadSvg",
      name: "下载 SVG",
      handler: () => {
      },
    },
    {
      key: "downloadPng",
      name: "下载 PNG",
      handler: () => {
      },
    },
  ];
  const menus = handlerList.filter((item) => !item.horizontal) 
  const dropList = (
    <Menu
      style={{
        maxHeight: "unset",
      }}
    >
      {menus.map((menu) => {
        return <Menu.Item key={menu.key} onClick={(e) => {
          e.stopPropagation(); 
          menu.handler()
        }}>{menu.name}</Menu.Item>
      })}
    </Menu>
  );
  return (
    <div>
      <Dropdown
        droplist={dropList}
        triggerProps={{
          position: "rt",
          mouseEnterDelay: 80,
          mouseLeaveDelay: 80,
        }}
      >
        <div className={styles["iconbox-icon-box"]} ref={iconBoxRef}>
          <Spin loading={false} size={46}>
            <div className={styles["iconbox-icon-box-icon"]} dangerouslySetInnerHTML={{__html: svgHtml}}></div>
          </Spin>
          <div className={styles["iconbox-icon-box-text"]} style={{bottom: '22px'}}>{iconInfo.name}</div>
          <div className={styles["iconbox-icon-box-text"]}>{iconInfo.nameCn}</div>
        </div>
      </Dropdown>
    </div>
  );
}
