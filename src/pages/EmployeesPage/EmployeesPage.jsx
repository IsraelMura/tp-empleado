"use client";
import { useEffect, useState } from 'react';
import styles from './EmployeesPage.module.css';
import { useNavigate } from 'react-router-dom';

const EmployeesPage = () => {
  const navigate = useNavigate(); // Mover useNavigate al principio

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch(`http://localhost:3000/employees`);
      const employees = await response.json();
      setEmployees(employees);
      setLoading(false);
    };
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:3000/employees/${id}`, {
      method: 'DELETE',
    });
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const handleAdd = () => {
    navigate('/empleado/agregar');
  };

  const handleView = (id) => {
    navigate(`/empleado/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/empleado/editar/${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <section className={styles.section}>
        <h1 className={styles.title}>Empleados</h1>
        <button type="button" onClick={handleAdd}>
          Agregar Empleado
        </button>
      </section>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Tel</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td className="actions">
                <button onClick={() => handleView(employee.id)}>Ver</button>
                <button onClick={() => handleEdit(employee.id)}>Editar</button>
                <button onClick={() => handleDelete(employee.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesPage;
