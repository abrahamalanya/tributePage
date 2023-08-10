import "./AlbumCard.css";

export function AlbumCard({ image, title }) {
  return (
    <div className="albumCard">
      <img src={ image } alt={title} className="albumCard-image" />
      <h4 className="albumCard-title">{ title }</h4>
    </div>
  )
}