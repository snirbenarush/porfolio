import gym from "../../Imgs/Gym.png";
import Disney from "../../Imgs/Disneyplus.png";
import Tiktok from "../../Imgs/tiktoklogo.jpg";
import Tinder from "../../Imgs/Tinder.jpg";

export const projectData = [
  {
    title: "Tinder Clone",
    about:
      "A tinder swipe clone where u can swipe left or right on the profiles I've added.You can customise the profiles in the Mongodb atlas which I have access to",
    languages:
      "HTML,CSS,ReactJS,react-tinder-card,MongoDB Atlas,Node.js,express,MUI",
    url: "https://tinderswiperclone.netlify.app/",
    image: <img src={Tinder} />,
    github: "https://github.com/snirbenarush/Tinder-clone",
  },
  {
    title: "Disney+ Clone",
    about:
      "A Disney+ design Clone ONLY, no data inserted,used netflix for image urls for the laugh of it",
    languages: "HTML,CSS,ReactJS,Styled-Components",
    url: "https://disney-p-clone.netlify.app/",
    image: <img src={Disney} />,
    github: "https://github.com/snirbenarush/disney-plus-clone",
  },
  {
    title: "Gym membership Website",
    about:
      "A Gym Website concept for purchasing a membership purchasing,trainers,training programs for clients",
    languages: "HTML,CSS,ReactJS,react-scroll",
    url: "https://gym-clone.netlify.app/",
    image: <img src={gym} />,
    github: "https://github.com/snirbenarush/Gym-membership-Clone",
  },
  {
    title: "TikTok Clone",
    about:
      "When taking a URL from a Tiktok website and pastig it in another page,u will get a seperate page that is hosting the Video.This is a Clone of that.NOTE-need to change dimension for it to work(ipad air) :)",
    languages: "HTML,CSS,ReactJS,MUI,Axios,MongoDB atlas,Node.js,Express",
    url: "https://tikt0k-clone.netlify.app/",
    image: <img src={Tiktok} />,
    github: "https://github.com/snirbenarush/TikTok-clone",
  },
];
