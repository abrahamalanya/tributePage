import { HeaderSection } from "./HeaderSection.jsx";
import { Album } from "./Album.jsx";
import { AlbumCard } from "./AlbumCard.jsx";
import { MemberCard } from "./MemberCard.jsx";
import "./Main-content.css";

export function Main({ artist, latestAlbum, albums, songs, members }) {
  return (
    <main className="container">
      <section id="home">
        <img
          src="https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="frontpage"
          alt="indochine"
        />
        <h2>{ artist.name }</h2>
        <p>Creamos una web, como tributo a la banda</p>
        <a href="https://github.com/abrahamalanya/tributePage/tree/main/indochine">
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
            <h3>{ artist.name }</h3>
            <p>{  artist.biography }</p>
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
            <h3>MORE DATA</h3>
            <p>Started: { artist.activity_start_date }</p>
            <p>Nationality: { artist.country_origin }</p>
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
        <Album
          album={latestAlbum}
          songs={songs}>
        </Album>
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