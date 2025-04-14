import React, { useState } from "react";
import { Form, InputGroup, Row, Col } from "react-bootstrap";
import reactLogo from "../assets/react.svg";

import "./FormDetalleProducto.css";

const FormDetalleProducto = ({ data }) => {
  const [cliente, setCliente] = useState("");
  const [formaPago, setFormaPago] = useState("");

  return (
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

      <div className="details-wrapper position-relative mb-3 p-3 border rounded">
        <span className="floating-label">Información</span>

        <Row className="align-items-center">
          <Col xs={4} md={3}>
            <img
              src={
                data.imageUrl || reactLogo || "https://via.placeholder.com/100"
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
      <div
        className="payment"
        style={{ display: "grid", justifyContent: "end" }}
      >
        <Form.Group controlId="formaPago" className="mb-3">
          <Form.Label>
            <strong>Forma de Pago: </strong>
          </Form.Label>
          <Form.Select
            aria-label="Seleccione forma de pago"
            value={formaPago}
            onChange={(e) => setFormaPago(e.target.value)}
          >
            <option value="">Seleccione forma de pago</option>
            <option value="1">Efectivo Bs</option>
            <option value="2">Transferencia Bancaria / QR</option>
          </Form.Select>
        </Form.Group>
      </div>

      <br />
      <hr />
      <div className="precio mt-3 text-end">
        <p>
          <strong>Total a pagar:</strong> {data.price} Bs
        </p>
      </div>
    </Form>
  );
};

export default FormDetalleProducto;
