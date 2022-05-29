import { Affix, Anchor, Button } from "@arco-design/web-react";
import styles from "../styles/LeftMenu.module.css";

const AnchorLink = Anchor.Link;
export default function LeftMenu(props) {
  const {
    groupList,
    collapsed,
    onCollapseChange,
    boundary,
    align = "left",
    offsetTop = 0,
    style,
    triggerVisible,
  } = props;
  return (
    <Affix offsetTop={offsetTop}>
      <div
        className={`${styles["iconbox-group-anchor"]} ${styles["iconbox-group-anchor-align-left"]}`}
      >
        <Button type="primary">Primary</Button>
        <Anchor
          affix={false}
          boundary={146}
          lineless={true}
          className={styles["iconbox-group-anchor-anchor"]}
        >
          <AnchorLink href='#Basic' title='Basic'></AnchorLink>
        </Anchor>
      </div>
    </Affix>
  );
}
