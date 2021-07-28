import React, { Component } from 'react';
import './style.css';
import {  Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import translate from "../helpers/translate";

class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lblTermino: '',
            lblPolitica: '',
        };

        this.traducir = this.traducir.bind(this);
    }

    componentDidMount() {
        this.traducir();
    }
    async traducir() {
        if (localStorage.getItem('lenguaje') === 'español') {
            this.setState({
                lblTermino: await translate('Términos y Condiciones', { to: "es", engine: "libre" }),
                lblPolitica: await translate('Políticas de Privacidad', { to: "es", engine: "libre" })
            });


        } else if (localStorage.getItem('lenguaje') === 'ingles') {
            this.setState({
                lblTermino: await translate('Términos y Condiciones', { to: "en", engine: "libre" }),
                lblPolitica: await translate('Políticas de Privacidad', { to: "en", engine: "libre" })
            });
        }
    }
    render() {
      
        return (
            <div >
                <Row className="mr-0 ">
                    <Col sm={12} md={8} className="pr-0">
                        <ul className="footernav">

                            <li>   <Link to="/terminos_condiciones"  >{this.state.lblTermino === "" ? "Términos y Condiciones" : this.state.lblTermino}</Link></li>
                            <li> <Link to="/politicas_privacidad"  >{this.state.lblPolitica === "" ? "Políticas de Privacidad" : this.state.lblPolitica}</Link> </li>

                        </ul>

                    </Col>
                    <Col sm={12} md={4} className="justify-content-center footer">
                        <h6 >Aventurate |  Copyright &reg;  {(new Date().getFullYear())}</h6>

                    </Col>
               

                </Row>
            </div>

        );
    }
}

export default Footer;