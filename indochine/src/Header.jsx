import "./Header.css";

export function Header({ artist, navLists }) {
  return (
    <header className="container navBar">
      <nav className="navBarContent">
        <h1 className="navBarLogo">{artist.name}</h1>
        <ul className="navBarList">
          {
            navLists.map(({ name, link }) => (
              <li key={name}>
                <a
                  href={link}
                  className="navBarLink">
                  {name}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}