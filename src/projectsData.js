/* eslint-disable import/no-anonymous-default-export */
import {nanoid} from 'nanoid'
import mui from './images/mui.png'
import crypto from './images/crypto.png'
import login from './images/login.png'
import mytones from './images/mytones.png'
import notes from './images/notes.png'
import passgenerator from './images/passgenerator.png'
import counter from './images/counter.png'
import clock from './images/clock.png'
import portfolio from './images/portfolio.png'
import budget from './images/budget.png'
import youtube from './images/youtube.png'

export default [
  {
    id:nanoid(),
    image: youtube,
    title: "YouTube Clone",
    description: "YouTube Clone using Rapid-API",
    githubLink: "https://github.com/sajadzshoki/Youtube-Clone",
    projectDemo: "https://youtube-clone-sajad.vercel.app",
    Technologies:"ReactJS , Material UI , Rapid-API"
  },
  {
    id:nanoid(),
    image: budget,
    title: "Budget Manager",
    description: "A Budget Manager App Which I made to practice useContext Hook in React and I used bootstrap for the first time",
    githubLink: "https://github.com/sajadzshoki/budget-manager",
    projectDemo: "https://sajadzshoki.github.io/budget-manager/",
    Technologies:"ReactJS , Bootstrap"
  },
  {
    id:nanoid(),
    image: mui,
    title: "Social Media",
    description: "A simple Responsive social media app UI which I made with ReactJS and Material UI just to test and show my skills in using different libraries ",
    githubLink: "https://github.com/sajadzshoki/social-media-react-mui",
    projectDemo: "https://socialmedia-react-materialui.netlify.app/",
    Technologies:"ReactJS , Material UI"
  },
  {
    id:nanoid(),
    image: mytones,
    title: "Mytones",
    description: `The first website I made with pure "Html , Css" .
    it's a Music stream app UI `,
    githubLink: "https://github.com/sajadzshoki/Mytones",
    projectDemo: "https://sajadzshoki.github.io/Mytones/",
    Technologies:"Html , Css"
  },
  {
    id:nanoid(),
    image: crypto,
    title: "Crypto Prices",
    description: "A ReactJS crypto price tracker App using a free Api.",
    githubLink: "https://github.com/sajadzshoki/React-Crypto-Prices",
    projectDemo: "https://crypto-prices-react-sajad.netlify.app/",
    Technologies:"ReactJS , Css"
  },
  {
    id:nanoid(),
    image: login,
    title: "SignUp & LogIn Page",
    description: `I used this page in the "Mytones" project . it has a quite attractive animation which switch the the panels when you click on signup and signin button`,
    githubLink: "https://github.com/sajadzshoki/Mytones",
    projectDemo: "https://sajadzshoki.github.io/Mytones/",
    Technologies:"Html , Css"
  },
  {
    id:nanoid(),
    image: notes,
    title: "Notes App",
    description: "A simple notes app that you can Add and Remove your notes and it stores in your local storage . I made this app to master my skills while I was learning React states ",
    githubLink: "https://github.com/sajadzshoki/React-Notes_App",
    projectDemo: "https://636e5ac3d88dad2c53e2917d--react-notes-app-sajad.netlify.app/",
    Technologies:"ReactJS  ,Css"
  },
  {
    id:nanoid(),
    image: passgenerator,
    title: "Password Generator",
    description: "A full password generator that you can choose what things you want to include in your password and it's length. Made with ReactJS",
    githubLink: "https://github.com/sajadzshoki/React-Password-Generator",
    projectDemo: "https://reactjs-password-generator.netlify.app/",
    Technologies:"ReactJS  ,Css"
  },
  {
    id:nanoid(),
    image: clock,
    title: "Digital Clock ",
    description: "A simple Clock which I made for practice when I  started to learn JavaScript ",
    githubLink: "https://github.com/sajadzshoki/digital-clock",
    projectDemo: "https://sajadzshoki.github.io/digital-clock/",
    Technologies:"Html , Css , JavaScript"
  },
  {
    id:nanoid(),
    image: counter,
    title: "Counter",
    description: "My first Project with Javascript ",
    githubLink: "https://github.com/sajadzshoki/Easy-Counter-js",
    projectDemo: "https://sajadzshoki.github.io/Easy-Counter-js/",
    Technologies:"Html , Css , JavaScript"
  },
  {
    id:nanoid(),
    image: portfolio,
    title: "Portfolio",
    description: "The website you are currently watching :)",
    githubLink: "https://github.com/sajadzshoki/Sajad-portfolio",
    projectDemo: "https://sajad-portfolio.vercel.app/",
    Technologies:"ReactJs , Css "
  },

];
