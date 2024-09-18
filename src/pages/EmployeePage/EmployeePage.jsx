"use client";
import { useNavigate, useParams } from 'react-router-dom';
import styles from './EmployeePage.module.css';
import { useEffect, useState } from 'react';

const EmployeePage = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`http://localhost:3000/employees/${id}`);
        const data = await response.json();
        setEmployee(data);
      } catch (error) {
        console.error("Error fetching employee:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!employee) {
    return <div>Empleado no encontrado</div>;
  }

  return (
    <div className="container">
      <h1 className={styles.title}>Detalle Empleado</h1>
      <form className={styles.formemployeedetail}>
        <div className="formGroup">
          <label className={styles.label}>Nombre</label>
          <label>{employee.name}</label>
        </div>
        <div className="formGroup">
          <label className={styles.label}>Correo</label>
          <label>{employee.email}</label>
        </div>
        <div className="formGroup">
          <label className={styles.label}>Tel</label>
          <label>{employee.phone}</label>
        </div>
      </form>
    </div>
  );
};

export default EmployeePage;
