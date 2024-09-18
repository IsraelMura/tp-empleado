"use client";

import { useEffect, useState } from "react";
import { useForm } from "../../hooks";
import { useNavigate, useParams } from "react-router-dom";
import styles from './EmployeeFormPage.module.css';

const EmployeeFormPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
  }); // Inicializar employee con valores vacíos
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit, setValues } = useForm({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      if (id) {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/employees/${id}`);
        const data = await response.json();
        setEmployee(data);
        setValues(data); // Llenar los valores del formulario con los datos del empleado
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id, setValues]);

  const submitForm = async () => {
    setLoading(true);
    try {
      if (id) {
        // Actualizar empleado
        await fetch(`http://localhost:3000/employees/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values), // Enviar los valores actualizados del formulario
        });
      } else {
        // Crear nuevo empleado
        await fetch(`http://localhost:3000/employees`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values), // Enviar los valores ingresados en el formulario
        });
      }
      navigate("/empleados");
    } catch (error) {
      console.error("Error saving employee:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className={styles.title}>{id ? "Editar Empleado" : "Agregar Empleado"}</h1>
      <form onSubmit={handleSubmit(submitForm)} noValidate>
        <div className="formGroup">
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label>Correo</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label>Tel</label>
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default EmployeeFormPage;
