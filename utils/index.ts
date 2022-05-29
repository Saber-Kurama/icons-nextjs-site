export const getGroupIconList = (iconList, groupInfoList) => {
  const obj = {};
  groupInfoList.forEach((groupInfo, index) => {
    obj[groupInfo.id] = {
      group: groupInfo,
      icons: [],
      index,
    };
  });
  obj[-1] = {
    group: {
      id: -1,
      name: "未分组",
    },
    icons: [],
    index: groupInfoList.length,
  };
  iconList.forEach((icon) => {
    const { groupId } = icon;
    obj[groupId] ? obj[groupId].icons.push(icon) : obj[-1].icons.push(icon);
  });
  obj[-1].icons.length || delete obj[-1];
  return Object.values(obj).sort(
    (pre: any, next: any) => pre.index - next.index
  );
};

function V_(e) {
  return new Promise((r) => {
    let n;
    if (((t = e), "[object String]" === B_.call(t))) {
      const r = document.createElement("div");
      (r.style.display = "none"), (r.innerHTML = e), (n = r.firstElementChild);
    } else n = e;
    var t;
    const o = document.createElement("canvas"),
      a = o.getContext("2d"),
      i = new XMLSerializer().serializeToString(n),
      c = "data:image/svg+xml;base64,".concat(
        btoa(unescape(encodeURIComponent(i)))
      ),
      l = new Image();
    (l.onload = () => {
      const e = 200;
      let { width: n, height: t } = U_(i);
      n >= t ? ((t *= e / n), (n = e)) : ((n *= e / n), (t = e)),
        (o.width = n),
        (o.height = t),
        null == a || a.drawImage(l, 0, 0, n, t);
      const c = o.toDataURL();
      o.toBlob((e) => {
        r({
          url: c,
          blob: e,
        });
      });
    }),
      (l.src = c);
  });
}

function strequalRegExp(str) {
  return new RegExp("".concat(str, '="(.*?)"'))
}

export const svg2png = (svgCode): Promise<any> => {
  return new Promise((resolve, reject) => {
    let svgDom;
    let t = svgCode;
    if ("[object String]" === Object.prototype.toString.call(svgCode)) {
      const divDom = document.createElement("div");
      divDom.style.display = "none";
      divDom.innerHTML = svgCode;
      svgDom = divDom.firstElementChild;
    } else {
      svgDom = svgCode;
    }
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const svgDomXml = new XMLSerializer().serializeToString(svgDom);
    const base64Str = "data:image/svg+xml;base64,".concat(
      btoa(unescape(encodeURIComponent(svgDomXml)))
    );
    const ImageObj = new Image();
    ImageObj.onload = () => {
      const defaultWidth = 200;
      let { width, height } = getWH(svgDomXml);
      width >= height ? ((height *= 200 / width), (width = defaultWidth)) : ((width *= defaultWidth / width),
      (height = defaultWidth));
      canvas.width = width;
      canvas.height = height;
      context?.drawImage(ImageObj, 0, 0, width, height);
      const url = canvas.toDataURL();
      canvas.toBlob((blob) => {
        resolve({
          url,
          blob,
        });
      });
    };
    ImageObj.src = base64Str;
  });
};

function getWH(xml) {
  const wh = function(e) {
      const r = expMatch(e, "viewBox");
      let n = 0,
          t = 0;
      if (r) {
          const e = r.trim().replace(/\s+/, " ").split(" ");
          4 === (null == e ? void 0 : e.length) && (t = parseFloat(e[2]), n = parseFloat(e[3]))
      }
      return {
          height: n,
          width: t
      }
  }(xml);
  return {
      width: parseFloat(expMatch(xml, "width") || "0") || wh.width,
      height: parseFloat(expMatch(xml, "height") || "0") || wh.height
  }
}

function expMatch(str, expstr) {
  const exp = strequalRegExp(expstr);
  const matchs = str.match(exp);
  return null == matchs ? void 0 : matchs[1]
}


