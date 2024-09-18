"use client";
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useAuth } from '../../../contexts';

const Navbar = () => {

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <nav>
        <NavLink to="/inicio" activeclassname="active">Inicio</NavLink>
        <NavLink to="/empleados" activeclassname="active">Empleados</NavLink>
      </nav>
      <div className={styles.user}>
        <button
          type="button"
          onClick={handleClick}
        >
          Cerrar Sesión
        </button>
      </div>
    </>
  );
};

export default Navbar;
