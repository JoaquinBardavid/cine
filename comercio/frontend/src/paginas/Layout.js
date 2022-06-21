import { Link, Outlet } from "react-router-dom";

export default function Layout () {
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/">Principal</Link>
        <Link to="/peliculas">Peliculas</Link>
        <Link to="/reservas">Reservas</Link>
      </nav>
      <Outlet />
    </>
  );
}