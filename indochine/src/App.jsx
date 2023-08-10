import { Header } from "./Header.jsx";
import { Main } from "./Main-content.jsx";
import { Footer } from "./Footer.jsx";
import data from "./data.json";
import './App.css';

const navLists = [
  {
    name: "home",
    link: "#home"
  },
  {
    name: "about",
    link: "#about"
  },
  {
    name: "discography",
    link: "#discography"
  },
  {
    name: "band",
    link: "#band"
  },
  {
    name: "tours",
    link: "#tours"
  },
  {
    name: "gallery",
    link: "#gallery"
  },
  {
    name: "news",
    link: "#news"
  },
  {
    name: "contact",
    link: "#contact"
  }
]

const indochine = data.artists[0]

export function App() {
  return (
    <>
      <Header
        artist={indochine}
        navLists={navLists}>
      </Header>
      <Main
        albums={data.albums}
        members={data.members}>
      </Main>
      <Footer></Footer>
    </>
  )
}
