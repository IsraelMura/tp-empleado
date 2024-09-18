import { LoginContainer } from "../../containers";
import styles from "./LoginPage.module.css";

// LoginPage.js
// LoginPage: Define la estructura general de la página (incluye títulos, headers, etc.)
// y coloca el LoginContainer.
const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <h1>Empleados</h1>
      {/* Aquí se integra el contenedor que maneja la lógica */}
      <LoginContainer />
    </div>
  );
};

export default LoginPage;
