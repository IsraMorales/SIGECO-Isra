import React from 'react';
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
    { id: 1, departamento: "1", fecha: "05/09/2022", concepto: "Cambio de lamparas", descripción: "Se pagó por el cambio de lamparas", importe: "300.00" },
    { id: 2, departamento: "3", fecha: "15/09/2022", concepto: "Pago Agosto", descripción: "Se cubrió cuota del mes de agosto", importe: "400.00" },
    { id: 3, departamento: "7", fecha: "18/09/2022", concepto: "Pago Septiembre", descripción: "Se cubrió cuota del mes de septiembre", importe: "400.00" },
];


class App extends React.Component {
    state = {
        data: data,
        form: {
            id: '',
            departamento: '',
            concepto: '',
            descripción: '',
            importe: ''
        },
        modalInsertar: false,
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }

    mostrarModalInsertar = () => {
        this.setState({ modalInsertar: true });
    }

    ocultarModalInsertar = () => {
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
                <h1>Ingresos</h1>
                <Container>
                    <br />
                    <Button color="success" onClick={() => this.mostrarModalInsertar()}>Agregar</Button>
                    <br /><br />

                    <Table>
                        <thead><tr><th>Id</th>
                            <th>No. de Casa/<p>Departamento</p></th>
                            <th>Fecha</th>
                            <th>Concepto</th>
                            <th>Descripción</th>
                            <th>Importe</th></tr></thead>
                        <tbody>
                            {this.state.data.map((elemento) => (
                                <tr>
                                    <td>{elemento.id}</td>
                                    <td>{elemento.departamento}</td>
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
                            <h3>Ingresar Ingreso</h3>
                        </div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <label>Id</label>
                            <input className="form-control" readOnly type="text" value={this.state.data.length + 1} />
                        </FormGroup>

                        <FormGroup>
                            <label>Departamento</label>
                            <input className="form-control" name="departamento" type="text" onChange={this.handleChange} />
                        </FormGroup>

                        <FormGroup>
                            <label>Fecha</label>
                            <input className="form-control" name="fecha" type="text" onChange={this.handleChange} />
                        </FormGroup>

                        <FormGroup>
                            <label>Concepto</label>
                            <input className="form-control" name="concepto" type="text" onChange={this.handleChange} />
                        </FormGroup>

                        <FormGroup>
                            <label>Descripción</label>
                            <input className="form-control" name="descripción" type="text" onChange={this.handleChange} />
                        </FormGroup>

                        <FormGroup>
                            <label>Importe</label>
                            <input className="form-control" name="importe" type="text" onChange={this.handleChange} />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="success" onClick={() => this.insertar()}>Confirmar</Button>
                        <Button color="dark" onClick={() => this.ocultarModalInsertar()}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}


export default App;