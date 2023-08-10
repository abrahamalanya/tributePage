import "./Header.css";

export function Header({artists}) {
  const indochine = artists[0];
  const navLists = [
    {
      name: "home"
    },
    {
      name: "about"
    },
    {
      name: "discography"
    },
    {
      name: "band"
    },
    {
      name: "tours"
    },
    {
      name: "gallery"
    },
    {
      name: "news"
    },
    {
      name: "contact"
    }
  ]

  return (
    <header className="container">
      <nav>
        <h1>{indochine.name}</h1>
        <ul>
          {
            navLists.map(({ name }) => (
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