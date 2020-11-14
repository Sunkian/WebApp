import React from 'react';
import { Fragment } from 'react';
import "../Sass/Components/_navbar.scss"
// import { Link } from 'react-scroll'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    FormGroup,
    Form
}
from 'reactstrap';
import logo from "../logo.svg";

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
//https://github.com/reactstrap/reactstrap
    render() {
        return <div>
            <Navbar color="lightgrey" light expand="md">
                <NavbarBrand href="/" >
                    <img src={logo} className="App-logo" alt="logo" />
                    Alice Pagnoux
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </NavItem>
                        <NavItem>
                            <a className="nav-link" href="../Components/About.js">About me</a>
                        </NavItem>

                        <NavItem>
                            <NavLink href="https://www.linkedin.com/in/alice-pagnoux-4a174216b/">Linkedin</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/Sunkian">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Contact
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Report an issue
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>

        </div>

    }
}