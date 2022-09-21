import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap'
import { Routes, Route, Link } from 'react-router-dom'
import Inquilinos from './Pages/Inquilinos'
import Ingresos from './Pages/Ingresos'
import Egresos from './Pages/Egresos'
import Home from './Pages/Home'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <div className='App'>
      <Navbar color='dark' dark expand='md'>
        <NavbarBrand href='/'>SIGECO</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            <NavItem>
              <Link to='/Inquilinos' className="nav-link">Inquilino</Link>
            </NavItem>

            <NavItem>
              <Link to='/Ingresos' className="nav-link">Ingresos</Link>
            </NavItem>

            <NavItem>
              <Link to='/Egresos' className="nav-link">Egresos</Link>
            </NavItem>
          </Nav>

        </Collapse>
      </Navbar>
      <div className='container'>
        <Routes>
          <Route path='Inquilinos' element={<Inquilinos />} />
          <Route path='Ingresos' element={<Ingresos />} />
          <Route path='Egresos' element={<Egresos />} />
          <Route path='/' elemento={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;