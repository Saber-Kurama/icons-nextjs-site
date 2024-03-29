import { Button, Dropdown, Menu, Message, Spin } from "@arco-design/web-react";
import { IconDown } from "@arco-design/web-react/icon";
import { useRef } from "react";
import copy from 'copy-to-clipboard';
import styles from "../styles/IconCard.module.css";
import { svg2png } from "../utils";

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
  async function copySvg(e, name) {
    const n = await copy(e);
    Message.success({
        content: "复制 ".concat(name, " SVG ").concat(n ? "成功" : "失败"),
        type: n ? "success" : "error"
    })
}
  const handlerList: any[] = [
    {
      key: "copyReact",
      name: "复制 React 代码",
      handler: () => {
        const str = "<".concat(iconInfo.name.trim().replace(/[^a-zA-Z0-9]/g, "-").replace(/(?<=\b)([a-z])/g, ((e, r) => r.toUpperCase())).replace(/-/g, ""), " />");
        copy(str);
        Message.success({
            content: "React 代码: ".concat(str, " 复制成功")
        })
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
        copySvg(svgHtml, iconInfo.nameCn)
      },
    },
    {
      key: "copyPng",
      name: "复制 PNG",
      handler: () => {
        (async (e: any) => {
          let imgBlob = null;
          if (e.imageBlob) {
             imgBlob = e.imageBlob;
          }else if (e.svgCode) {
            const {
                blob
            } = await svg2png(e.svgCode);
            imgBlob = blob;
          }
          if (imgBlob) {
            try {
              const clipboardItem = new ClipboardItem({
                  "image/png": imgBlob
              });
              await navigator.clipboard.write([clipboardItem]),
              Message.success({
                  content: "复制 ".concat(e.name, " PNG 成功"),
              })
          } catch (err) {
              Message.error({
                  content: "复制 ".concat(e.name, " PNG 失败"),
              })
          }
          }
        })({
          svgCode: svgHtml,
          name: iconInfo.nameCn
      })
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
          {/* <Spin loading={false} size={46}> */}
            <div className={styles["iconbox-icon-box-icon"]} dangerouslySetInnerHTML={{__html: svgHtml}}></div>
          {/* </Spin> */}
          <div style={{flex: 1, marginLeft: '12px'}}>
            <div className={styles["iconbox-icon-box-text"]} style={{fontSize: '14px', color: '#333', marginBottom: '3px'}}>{iconInfo.nameCn}</div>
            <div className={styles["iconbox-icon-box-text"]}>{iconInfo.name}</div>
          </div>
        </div>
      </Dropdown>
    </div>
  );
}
