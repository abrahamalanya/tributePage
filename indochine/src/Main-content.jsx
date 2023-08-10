import { HeaderSection } from "./HeaderSection.jsx";
import { AlbumCard } from "./AlbumCard.jsx";
import { MemberCard } from "./MemberCard.jsx";
import "./Main-content.css";

export function Main({ albums, members }) {
  return (
    <main className="container">
      <section id="home">
        <img
          src="https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="frontpage"
          alt="indochine"
        />
        <h2>Indochine Banda Musical</h2>
        <p>Creamos una web, como tributo a la banda</p>
        <a href="#">
          <img
            height="32"
            width="32"
            src="https://cdn.simpleicons.org/github/white"
          />
        </a>
      </section>
      <section className="section" id="about">
        <section className="about-col-2">
          <article className="about-description">
            <h3>INDOCHINE</h3>
            <p>
              'CENTRAL TOUR, LE FILM' : disponible en CD / DVD / BLU-RAY / Livre
              Collector et Digital ! En savoir plus
              https://indochine.lnk.to/CentralTourLeFilm
            </p>
          </article>
          <article className="about-gallery">
            <div className="card-image">
              <img src="https://mutationmedia.net/OUMAILA/img/3.jpg" />
            </div>
            <div className="card-image">
              <img src="https://mutationmedia.net/OUMAILA/img/4.jpg" />
            </div>
          </article>
        </section>
        <section className="about-col-2">
          <article className="about-gallery">
            <div className="card-image">
              <img src="https://mutationmedia.net/OUMAILA/img/5.jpg" />
            </div>
            <div className="card-image">
              <img src="https://mutationmedia.net/OUMAILA/img/6-1.jpg" />
            </div>
          </article>
          <article className="about-description">
            <h3>OPEN TOUR</h3>
            <p>Coliseo Wanka</p>
            <p>Huancayo-Junin-Perú</p>
            <p>HORARIO</p>
            <p>28 de Setiembre</p>
          </article>
        </section>
        <article className="links">
          <h3>REDES SOCIALES</h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Spotify</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
            <li>
              <a href="#">Snapchat</a>
            </li>
          </ul>
        </article>
      </section>
      <div className="oneline"></div>
      <section className="section" id="latestAlbum">
        <HeaderSection
          image={"https://cdn.simpleicons.org/github/white"}
          title={"LATEST ALBUM"}
          subtitle={"RELEASED ALBUM"}>
        </HeaderSection>
        <section className="latestAlbum-col-2">
          <article className="latestAlbum-gallery">
            <img src="https://mutationmedia.net/OUMAILA/img/vinyl.png" />
          </article>
          <article className="latestAlbum-description">
            <p>LABEL: Limitles</p>
            <p>RELEASED: March 23/3/18</p>
            <p>GENERO: Rock/Pop</p>
            <p>STYLES: Indie Rock</p>
            <div className="links">
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Spotify</a>
                </li>
                <li>
                  <a href="#">Youtube</a>
                </li>
                <li>
                  <a href="#">Snapchat</a>
                </li>
              </ul>
            </div>
          </article>
        </section>
        <section className="latestAlbum-col">
          <article className="latestAlbum-top">
            <div>
              <div className="top-name">
                <img src="https://cdn.simpleicons.org/github/gray" />
                <div>
                  <h3>LATEST ALBUM</h3>
                  <p>INDOCHINE</p>
                </div>
              </div>
              <div className="top-link">
                <img src="https://cdn.simpleicons.org/github/white" />
              </div>
            </div>
            <div>
              <div className="top-name">
                <img src="https://cdn.simpleicons.org/github/gray" />
                <div>
                  <h3>LATEST ALBUM</h3>
                  <p>INDOCHINE</p>
                </div>
              </div>
              <div className="top-link">
                <img src="https://cdn.simpleicons.org/github/white" />
              </div>
            </div>
            <div>
              <div className="top-name">
                <img src="https://cdn.simpleicons.org/github/gray" />
                <div>
                  <h3>LATEST ALBUM</h3>
                  <p>INDOCHINE</p>
                </div>
              </div>
              <div className="top-link">
                <img src="https://cdn.simpleicons.org/github/white" />
              </div>
            </div>
          </article>
        </section>
      </section>
      <div className="oneline"></div>
      <section className="section" id="discography">
        <HeaderSection
          image={"https://cdn.simpleicons.org/github/white"}
          title={"ALBUMS"}
          subtitle={"ALL COMPLETE ALBUMS"}>
        </HeaderSection>
        <article className="albumGallery">
          {
            albums.map((album) => (
              <AlbumCard
                key={ album.id }
                image={ "https://mutationmedia.net/OUMAILA/img/6.jpg" }
                title={ album.title } />
            ))
          }
        </article>
      </section>
      <div className="oneline"></div>
      <section className="section" id="band">
        <HeaderSection
          image={"https://cdn.simpleicons.org/github/white"}
          title={"BAND MEMBERS"}
          subtitle={"THE BAND MEMBERS"}>
        </HeaderSection>
        <article className="memberGallery">
          {
            members.map((member) => (
              <MemberCard
                key={ member.id }
                image={"https://mutationmedia.net/OUMAILA/img/6.jpg"}
                name={ member.name }
                lastName={ member.last_name } />
            ))
          }
        </article>
      </section>
      <section className="section" id="contact">
        <HeaderSection
          image={"https://cdn.simpleicons.org/github/white"}
          title={"STAY IN TOUCH"}
          subtitle={"CONTACT WITH US"}>
        </HeaderSection>
        <article className="links">
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Spotify</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
            <li>
              <a href="#">Snapchat</a>
            </li>
          </ul>
        </article>
      </section>
    </main>
  )
}