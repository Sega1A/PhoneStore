import React from "react";
import {
  Modal,
  Button,
  InputGroup,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const ModalBase = ({ show, onClose, title, data, children, footer }) => {
  return (
    <Modal show={show} onHide={onClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{title || "Título"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {children ??
          (data ? (
            <>
              <InputGroup size="sm" className="mb-3">
                <label htmlFor="" className="p-">
                  <strong>Datos del Cliente</strong>
                </label>
                <Form.Control
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup>
              <div className="details">
                <Row>
                  <Col>
                    <img src="" alt="Equipo" />
                  </Col>
                  <Col>
                    <p>
                      <strong>Modelo:</strong> {data.model}
                    </p>

                    <p>
                      <strong>Marca:</strong> {data.marc}
                    </p>
                    <p>
                      <strong>Especificaiones:</strong> {data.specs}
                    </p>
                  </Col>
                  <Col></Col>
                </Row>
              </div>
              <div className="SLDKNFLKSN">
                <label>Forma de Pago</label>
                <Form.Select aria-label="select-payment">
                  <option>Seleccione forma de pago</option>
                  <option value="1">Efectivo Bs</option>
                  <option value="2">Transaccion Bancaria - QR</option>
                </Form.Select>
              </div>
              <br />
              <hr />
              <div className="precio">
                <p>
                  <strong>Total a pagar:</strong> {data.price} BS
                </p>
              </div>
            </>
          ) : (
            <p>No hay datos para mostrar.</p>
          ))}
      </Modal.Body>

      <Modal.Footer>
        {footer ?? (
          <>
            <Button variant="secondary" onClick={onClose}>
              Salir
            </Button>
            <Button variant="primary" onClick={onClose}>
              Pagar
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ModalBase;
