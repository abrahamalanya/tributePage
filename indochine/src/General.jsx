export function General() {
  return (
    <>
      <header className="container">
        <nav>
          <h1>Indochine</h1>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Discography</a>
            </li>
            <li>
              <a href="#">Band</a>
            </li>
            <li>
              <a href="#">Tours</a>
            </li>
            <li>
              <a href="#">Galley</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
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
        <section className="section" id="album">
          <article className="article-header">
            <img src="https://cdn.simpleicons.org/github/white" />
            <p>RELEASED ALBUM</p>
            <h3>LATEST ALBUM</h3>
          </article>
          <section className="album-col-2">
            <article className="album-gallery">
              <img src="https://mutationmedia.net/OUMAILA/img/vinyl.png" />
            </article>
            <article className="album-description">
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
          <section className="album-col">
            <article className="album-top">
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
        <section className="section" id="contact">
          <article className="article-header">
            <img src="https://cdn.simpleicons.org/github/white" />
            <p>CONTACT WITH US</p>
            <h3>STAY IN TOUCH</h3>
          </article>
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
      <footer className="container">
        <section className="section" id="footer">
          <h4>Desarrollador por @abrahamalanya y @ginogalarza</h4>
        </section>
      </footer>
    </>
  )
}