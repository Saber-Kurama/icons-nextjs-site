// import chalk from "chalk";
import path from "path";
import fse from "fs-extra"
import axios from "axios";

// process.env.ArcoCookie = "MONITOR_WEB_ID=a21922e3-043b-4e07-8109-fe812a8dd62b; x-arco-token=HMu42i3fmZ9KxNk46k9RjOJmfpg8mCdT; arcodesign_iconbox_sid=2692c4c97a650355b267bce38e2ff9b8"

const fetchInfoData = async () => {
  try {
    const res = await axios.get("https://arco.design/iconbox/api/v2/lib/info/222?type=0", {
      headers: {
        Cookie: process.env.ArcoCookie,
      },
    });
    if(res.data){
      const infoPath = path.join(__dirname, '../data/info.json')
      await fse.writeJson(infoPath, res.data)
      // console.log(JSON.stringify())
    }
  } catch (error) {}
};
const fetchIconJosnData = async () => {
  try {
    const res = await axios.get("https://arco.design/iconbox/api/v2/lib/icons?offset=0&limit=99999&fillColor=currentColor&id=222&type=0&searchKey=", {
      headers: {
        Cookie: process.env.ArcoCookie,
      },
    });
    if(res.data){
      const infoPath = path.join(__dirname, "../data/icons.json");
      await fse.writeJson(infoPath, res.data)
      // console.log(JSON.stringify())
    }
  } catch (error) {}
};

fetchInfoData()
fetchIconJosnData()
