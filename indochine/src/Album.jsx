import "./Album.css"

export function Album({ album, songs }) {
  return (
    <section className="album">
      <article className="albumHeader">
        <img src="https://mutationmedia.net/OUMAILA/img/vinyl.png" className="albumHeader-image" />
        <div className="albumHeader-description">
          <p>TITLE: { album.title }</p>
          <p>RELEASED: { album.release_date }</p>
        </div>
      </article>
      <section className="albumSongs">
        <article className="albumSongs-table">
          {
            songs.map((song) => (
              <div key={ song.id } className="albumSongs-tableRow">
                <div className="albumSongs-tableColumn">
                  <img src="https://cdn.simpleicons.org/spotify/#1DB954" className="albumSongs-tableImage"/>
                  <div>
                    <h3 className="albumSongs-tableTitle">{ song.title }</h3>
                    <p className="albumSongs-tableSubtitle">{ song.author_name }</p>
                  </div>
                </div>
                <div>
                  <p className="albumSongs-tableTitle">{ song.duration }</p>
                </div>
              </div>
            ))
          }
        </article>
      </section>
    </section>
  )
}