import React from 'react';
import './index.css';
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
  { NúmeroDepartamento: 1, Nombre: "Carlos Francisco Arteaga Peregrina", Correo: "franrtg96@gmail.com", NúmeroTelefónico: "32551037842", EstatusCuota: "No pagado" },
  { NúmeroDepartamento: 2, Nombre: "Aldo Guerrero", Correo: "aldoG@gmail.com", NúmeroTelefónico: "32551037842", EstatusCuota: "Pagado" },
  { NúmeroDepartamento: 3, Nombre: "Leonardo Rivera Carrillo", Correo: "LeoGRiv@gmail.com", NúmeroTelefónico: "32551037842", EstatusCuota: "Pagado" },
];

class index extends React.Component {
  state = {
    data: data,
    form: {
      NúmeroDepartamento: '',
      Nombre: '',
      Correo: '',
      NúmeroTelefónico: ''
    },
    modalInsert: false,
    modalEditar: false,
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  mostrarModalInsert = () => {
    this.setState({ modalInsert: true });
  }

  ocultarModalInsert = () => {
    this.setState({ modalInsert: false });
  }

  mostrarModalEditar = (registro) => {
    this.setState({ modalEditar: true, form: registro});
  }

  ocultarModalEditar = () => {
    this.setState({ modalEditar: false });
  }

  insertar=()=>{
    var valorNuevo={...this.state.form};
    var lista=this.state.data;
    lista.push(valorNuevo);
    this.setState({data: lista, modalInsert: false});
  }

  editar=(dato)=>{
    var contador=0;
    var lista=this.state.data;
    lista.map((registro)=>{
      if(dato.NúmeroDepartamento===registro.NúmeroDepartamento){
        lista[contador].Nombre=dato.Nombre;
        lista[contador].Correo=dato.Correo;
        lista[contador].NúmeroTelefónico=dato.NúmeroTelefónico;
        lista[contador].EstatusCuota=dato.EstatusCuota;
      }
      contador++;
    });
    this.setState({data: lista, modalEditar: false});
  }

  eliminar=(dato)=>{
    var opcion=window.confirm("Realmente desea eliminar el registro"+dato.NúmeroDepartamento);
    if(opcion){
      var contador=0;
      var lista = this.state.data;
      lista.map((registro)=>{
        if(registro.NúmeroDepartamento===dato.NúmeroDepartamento){
          lista.splice(contador, 1);
        }
        contador++;
      })
      this.setState({data: lista});
    }
  }

  render() {
    return (
      <>
        <h1>Registro de inquilinos</h1>
        <Container>
          <br />
          <Button color="success" onClick={() => this.mostrarModalInsert()}>Agregar Inquilino</Button>
          <br /><br />

          <Table>
            <thead><tr><th>No. de Casa/<p>Departamento</p></th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Número<p>Telefónico</p></th>
              <th>Estatus<p>de Cuota</p></th>
              <th>Acciones</th></tr></thead>
            <tbody>
              {this.state.data.map((elemento) => (
                <tr>
                  <td>{elemento.NúmeroDepartamento}</td>
                  <td>{elemento.Nombre}</td>
                  <td>{elemento.Correo}</td>
                  <td>{elemento.NúmeroTelefónico}</td>
                  <td>{elemento.EstatusCuota}</td>
                  <td><Button color="dark" onClick={()=>this.mostrarModalEditar(elemento)}>Editar</Button>{"  "}
                    <Button color="danger" onClick={()=>this.eliminar(elemento)}>Eliminar</Button></td>
                </tr>
              ))}

            </tbody>

          </Table>


        </Container>


        <Modal className='bg-dark border rounded p-4' isOpen={this.state.modalInsert}>
          <ModalHeader>
            <div><h3>Insertar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Número Departamento</label>
              <input className="form-control" name='NúmeroDepartamento' type="text" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
              <label>Nombre</label>
              <input className="form-control" name='Nombre' type="text" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <label>Correo</label>
              <input className="form-control" name='Correo' type="mail" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <label>Número Telefónico</label>
              <input className="form-control" name='NúmeroTelefónico' type="number" onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <label>Estatus Cuota</label>
              <input className="form-control" name='EstatusCuota' type="option" onChange={this.handleChange} />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="success" onClick={() => this.insertar()}>Insertar</Button>
            <Button color="dark" onClick={() => this.ocultarModalInsert()}>Cancelar</Button>
          </ModalFooter>
        </Modal>


        <Modal className='bg-dark border rounded p-4' isOpen={this.state.modalEditar}>
          <ModalHeader>
            <div>
              <h3>Editar Registro</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Número Departamento:</label>
              <input className='form-control' name='NúmeroDepartamento' type='text' onChange={this.handleChange} value={this.state.form.NúmeroDepartamento}/>
            </FormGroup>

            <FormGroup>
              <label>Nombre:</label>
              <input className='form-control' name='Nombre' type='text' onChange={this.handleChange} value={this.state.form.Nombre}/>
            </FormGroup>

            <FormGroup>
              <label>Correo:</label>
              <input className='form-control' name='Correo' type='text' onChange={this.handleChange} value={this.state.form.Correo}/>
            </FormGroup>

            <FormGroup>
              <label>Número Telefónico:</label>
              <input className='form-control' name='NúmeroTelefónico' type='text' onChange={this.handleChange} value={this.state.form.NúmeroTelefónico}/>
            </FormGroup>

            <FormGroup>
              <label>Estatus Cuota:</label>
              <input className='form-control' name='EstatusCuota' type='text' onChange={this.handleChange} value={this.state.form.EstatusCuota}/>
            </FormGroup>
            </ModalBody>

            <ModalFooter>
              <Button color='success' onClick={()=>this.editar(this.state.form)} >Editar</Button>
              <Button color='dark' onClick={()=>this.ocultarModalEditar()}>Cancelar</Button>
            </ModalFooter>
          </Modal>
      </>
    );
  }
}

export default index;