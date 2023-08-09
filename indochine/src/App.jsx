import { Header } from "./Header.jsx";
import { Main } from "./Main-content.jsx";
import { Footer } from "./Footer.jsx";
import data from "./data.json";
import './App.css';

export function App() {
  return (
    <>
      <Header artists={ data.artists }></Header>
      <Main
        albums={data.albums}>
      </Main>
      <Footer></Footer>
    </>
  )
}
