import React, { useState } from "react";
import {
  Modal,
  Button,
  InputGroup,
  Form,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import reactLogo from "../assets/react.svg";
import "./ModalBase.css";

const ModalBase = ({ show, onClose, title, data, children, footer }) => {
  const [cliente, setCliente] = useState("");
  const [formaPago, setFormaPago] = useState("");
  const [mensaje, setMensaje] = useState(null);
  const [error, setError] = useState(false);

  const handlePay = async () => {
    const payload = {
      cliente,
      formaPago,
      equipo: data,
    };

    try {
      const response = await fetch("/api/pago", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setMensaje(result.message || "Pago procesado correctamente.");
        setError(false);
        setCliente("");
        setFormaPago("");
        setTimeout(() => {
          setMensaje(null);
        }, 1500);
      } else {
        setMensaje(result.error || "Error al procesar el pago.");
        setError(true);
      }
    } catch (err) {
      setMensaje("Error de conexión con el servidor.");
      setError(true);
      setCliente("");
      setFormaPago("");
      setTimeout(() => {
        setMensaje(null);
      }, 1500);
      console.log(payload);
    }
  };

  const handleClose = () => {
    setCliente("");
    setFormaPago("");
    setMensaje(null);
    onClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{title || "Título"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {mensaje && (
          <Alert variant={error ? "danger" : "success"}>{mensaje}</Alert>
        )}

        {children ? (
          children
        ) : data ? (
          <Form>
            <Form.Group controlId="datosCliente" className="mb-3">
              <Row>
                <Col xs={3}>
                  <Form.Label>
                    <strong>Datos del Cliente</strong>
                  </Form.Label>
                </Col>
                <Col>
                  <InputGroup size="sm">
                    <Form.Control
                      placeholder="Nombre del cliente"
                      aria-label="Datos del Cliente"
                      value={cliente}
                      onChange={(e) => setCliente(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>
            </Form.Group>

            <div className="details-wrapper mb-3 p-3 border rounded position-relative">
              <span className="floating-label bg-white px-2 position-absolute top-0 start-0 translate-middle-y ms-3">
                Información
              </span>

              <Row className="align-items-center">
                <Col xs={4} md={3}>
                  <img
                    src={
                      data.photo ||
                      reactLogo ||
                      "https://via.placeholder.com/100"
                    }
                    alt="Equipo"
                    width="200"
                    height="300"
                    className="img-fluid rounded"
                  />
                </Col>
                <Col>
                  <p>
                    <strong>Modelo:</strong> {data.model}
                  </p>
                  <p>
                    <strong>Marca:</strong> {data.marc}
                  </p>
                  <p>
                    <strong>Especificaciones:</strong> {data.specs}
                  </p>
                </Col>
              </Row>
            </div>

            <div className="payment d-flex justify-content-end">
              <Form.Group controlId="formaPago" className="mb-3">
                <Form.Label>
                  <strong>Forma de Pago:</strong>
                </Form.Label>
                <Form.Select
                  aria-label="Seleccione forma de pago"
                  value={formaPago || "Efectivo"}
                  onChange={(e) => setFormaPago(e.target.value)}
                >
                  <option value="">Seleccione forma de pago</option>
                  <option value="Efectivo">Efectivo Bs</option>
                  <option value="QR">Transferencia Bancaria / QR</option>
                </Form.Select>
              </Form.Group>
            </div>

            <hr />
            <div className="precio mt-3 text-end">
              <p>
                <strong>Total a pagar:</strong> {data.price} Bs
              </p>
            </div>
          </Form>
        ) : (
          <p>No hay datos para mostrar.</p>
        )}
      </Modal.Body>

      <Modal.Footer>
        {footer ? (
          footer
        ) : (
          <>
            <Button variant="secondary" onClick={handleClose}>
              Salir
            </Button>
            {data && (
              <Button variant="primary" onClick={handlePay}>
                Pagar
              </Button>
            )}
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ModalBase;
