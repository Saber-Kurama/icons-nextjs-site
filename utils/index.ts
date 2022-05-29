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
