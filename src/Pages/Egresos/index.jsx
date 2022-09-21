import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Table,
    Button,
    Container,
    Modal,
    ModalBody,
    ModalHeader,
    FormGroup,
    ModalFooter
}
    from 'reactstrap';

const data = [
    { id: 1, fecha: "24/08/2022", concepto: "cambio de lamparas", descripción: "se pago por el cambio de lamparas", importe: "9,000.00" },
    { id: 2, fecha: "20/08/2022", concepto: "pago agosto", descripción: "se cubrió cuota de mes de agosto", importe: "600.00" },
    { id: 3, fecha: "18/08/2022", concepto: "pago septiembre", descripción: "se cubrió cuota de mes de septiembre", importe: "600.00" },
];

class App extends React.Component {
    state = {
        data: data,
        form: {
            id: '',
            fecha: '',
            concepto: '',
            descripción: '',
            importe: ''
        },
        modalInsertar: false,
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }

    mostrarModalInser = () => {
        this.setState({ modalInsertar: true });
    }

    ocultarModalInser = () => {
        this.setState({ modalInsertar: false });
    }

    insertar = () => {
        var valorNuevo = { ...this.state.form };
        valorNuevo.id = this.state.data.length + 1;
        var lista = this.state.data;
        lista.push(valorNuevo);
        this.setState({ data: lista, modalInsertar: false });
    }

    render() {
        return (
            <>
                <h1>Egresos</h1>
                <Container>
                    <Button color="success" onClick={() => this.mostrarModalInser()}>Ingresar</Button>
                    <br /><br />

                    <Table>
                        <thead><tr><th>Id</th>
                            <th>Fecha</th>
                            <th>Concepto</th>
                            <th>Descripción</th>
                            <th>Importe</th></tr></thead>
                        <tbody>
                            {this.state.data.map((elemento) => (
                                <tr>
                                    <td>{elemento.id}</td>
                                    <td>{elemento.fecha}</td>
                                    <td>{elemento.concepto}</td>
                                    <td>{elemento.descripción}</td>
                                    <td>{elemento.importe}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                </Container>

                <Modal className='bg-dark border rounded p-4' isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div>
                            <h3>Ingresar Egreso</h3>
                        </div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <label>Id:</label>
                            <input className="form-control" readOnly type="text" value={this.state.data.length + 1} />
                        </FormGroup>

                        <FormGroup>
                            <label>Fecha:</label>
                            <input className="form-control" name="fecha" type="text" onChange={this.handleChange} />
                        </FormGroup>

                        <FormGroup>
                            <label>Concepto:</label>
                            <input className="form-control" name="concepto" type="text" onChange={this.handleChange} />
                        </FormGroup>

                        <FormGroup>
                            <label>Descripción:</label>
                            <input className="form-control" name="descripción" type="text" onChange={this.handleChange} />
                        </FormGroup>

                        <FormGroup>
                            <label>Importe:</label>
                            <input className="form-control" name="importe" type="text" onChange={this.handleChange} />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="success" onClick={() => this.insertar()}>Confirmar</Button>
                        <Button color="dark" onClick={() => this.ocultarModalInser()}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </>)
    }
}

export default App;