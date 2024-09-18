"use client";
import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = ({}) => {
  return (
    <div className="container">
      <h1>Página no encontrada :(</h1>
        <Link to="/inicio">Ir al inicio!</Link>
    </div>
  )
};

export default NotFoundPage;
