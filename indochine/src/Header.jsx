import "./Header.css";

export function Header({artists}) {
  const indochine = artists[0];
  const navLists = [
    {
      name: "Home"
    },
    {
      name: "About"
    },
    {
      name: "Discography"
    },
    {
      name: "Band"
    },
    {
      name: "Tours"
    },
    {
      name: "Gallery"
    },
    {
      name: "News"
    },
    {
      name: "Contact"
    }
  ]

  return (
    <header className="container">
      <nav>
        <h1>{indochine.name}</h1>
        <ul>
          {
            navLists.map(({name}) => (
              <li key={name}>
                <a href="#">{name}</a>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}