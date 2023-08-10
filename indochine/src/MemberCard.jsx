import "./MemberCard.css"

export function MemberCard({ image, name, lastName }) {
  const nameComplete = `${name} ${lastName}`;
  return (
    <div className="memberCard">
      <img src={ image } alt="" className="memberCard-image" />
      <h4 className="memberCard-title">{nameComplete}</h4>
      <h5 className="memberCard-subtitle">vocalista</h5>
    </div>
  )
}