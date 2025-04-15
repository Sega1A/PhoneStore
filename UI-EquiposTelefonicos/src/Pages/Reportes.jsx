import React, { useEffect, useState } from "react";
import { Table, Container, Spinner, Alert } from "react-bootstrap";
import "./Reportes.css";

const Reportes = () => {
  const [reportes, setReportes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const datosFalsosReportes = [
    {
      id: 1,
      marca: "Samsung",
      modelo: "Galaxy S21",
      cliente: "Juan Pérez",
      fecha: "2025-04-10",
    },
    {
      id: 2,
      marca: "Apple",
      modelo: "iPhone 13",
      cliente: "Ana Rodríguez",
      fecha: "2025-04-11",
    },
    {
      id: 3,
      marca: "Xiaomi",
      modelo: "Redmi Note 12",
      cliente: "Luis Gómez",
      fecha: "2025-04-12",
    },
    {
      id: 4,
      marca: "Motorola",
      modelo: "Moto G100",
      cliente: "Carlos Martínez",
      fecha: "2025-04-13",
    },
    {
      id: 5,
      marca: "Huawei",
      modelo: "P40 Pro",
      cliente: "Laura Silva",
      fecha: "2025-04-14",
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setReportes(datosFalsosReportes);
      setCargando(false);
    }, 2000);
  }, []);

  // useEffect(() => {
  //   // Simula tu ruta real del backend
  //   fetch("http://localhost:3001/api/reportes")
  //     .then((res) => {
  //       if (!res.ok) throw new Error("Error al cargar reportes");
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setReportes(data);
  //       setCargando(false);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);

  //       setError(err.message);
  //       setCargando(false);
  //     });
  // }, []);

  return (
    <Container className="mt-4">
      <div className="details-wrapper mb-3 p-3">
        <span className="floating-label">Reportes</span>
        <p>Resumen de los reportes por fecha o tipo de equipo.</p>
      </div>

      {cargando ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Cliente</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {reportes.length > 0 ? (
              reportes.map((item, idx) => (
                <tr key={item.id || idx}>
                  <td>{idx + 1}</td>
                  <td>{item.marca}</td>
                  <td>{item.modelo}</td>
                  <td>{item.cliente}</td>
                  <td>{item.fecha}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No hay reportes disponibles.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Reportes;
