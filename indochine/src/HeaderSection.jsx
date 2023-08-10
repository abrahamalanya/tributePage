import "./HeaderSection.css"

export function HeaderSection({ image, title, subtitle }) {
  return (
    <article className="headerSection">
      <img src={ image } className="headerSection-image" />
      <p className="headerSection-subtitle">{ subtitle }</p>
      <h3 className="headerSection-title">{ title }</h3>
    </article>
  )
}