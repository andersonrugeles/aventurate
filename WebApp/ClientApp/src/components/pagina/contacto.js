import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Row, Col, Form} from 'react-bootstrap';
import Footer from '../footer';
import Header from '../header';
import { loader } from '../helpers/loader';
import { connect } from 'react-redux';
import { HeaderActions } from '../header/actions';
import { withRouter } from "react-router-dom";
import { usuarioActions } from '../users/actions';
import translate from "../helpers/translate";

class Contacto extends Component {

    constructor(props) {
        super(props);

        this.state = {
            datos: {
               
                Nombre: '',
                Telefono: '',
                Correo: '',
                Mensaje: '',
            },
            lblSiguenos: '',
            btnIrMapa: '',
            lblText1: '',
            lblText2: '',
            lblText3: '',
            lblNombre: '',
            lblTelefono: '',
            lblCorreo: '',
            lblMensaje: '',
            btnEnviar:''
        };


        this.InputChange = this.InputChange.bind(this);
        this.Enviar = this.Enviar.bind(this);
        this.traducir = this.traducir.bind(this); 


    }
    async traducir() {
        loader.show();
        if (localStorage.getItem('lenguaje') === 'español') {
            this.setState({
                lblSiguenos: await translate('Siguenos en nuestras redes', { to: "es", engine: "libre" }),
                btnIrMapa: await translate('Ir al mapa', { to: "es", engine: "libre" }),
                lblText1: await translate(' Si eres un turista y necesitas alguna asesoría en tu viaje por el departamento del Huila, no dudes en dejarnos tu inquietud o contáctanos por medios de nuestras redes sociales, para tener el gusto de asesorarte, y vivas la mejor experiencia.', { to: "es", engine: "libre" }),
                lblText2: await translate(' Si eres un empresario y deseas que tu negocio o empresa se visualice con nosotros, déjanos tus datos, que con gusto nos pondremos en contacto contigo', { to: "es", engine: "libre" }),
                lblText3: await translate('Contáctanos', { to: "es", engine: "libre" }),
                lblNombre: await translate('Nombre', { to: "es", engine: "libre" }),
                lblTelefono: await translate('Telefono', { to: "es", engine: "libre" }),
                lblCorreo: await translate('Correo', { to: "es", engine: "libre" }),
                lblMensaje: await translate('Mensaje', { to: "es", engine: "libre" }),
                btnEnviar: await translate('Enviar', { to: "es", engine: "libre" }),
            });
        } else if (localStorage.getItem('lenguaje') === 'ingles') {
            this.setState({
                lblSiguenos: await translate('Siguenos en nuestras redes', { to: "en", engine: "libre" }),
                btnIrMapa: await translate('Ir al mapa', { to: "en", engine: "libre" }),
                lblText1: await translate(' Si eres un turista y necesitas alguna asesoría en tu viaje por el departamento del Huila, no dudes en dejarnos tu inquietud o contáctanos por medios de nuestras redes sociales, para tener el gusto de asesorarte, y vivas la mejor experiencia.', { to: "en", engine: "libre" }),
                lblText2: await translate(' Si eres un empresario y deseas que tu negocio o empresa se visualice con nosotros, déjanos tus datos, que con gusto nos pondremos en contacto contigo', { to: "en", engine: "libre" }),
                lblText3: await translate('Contáctanos', { to: "en", engine: "libre" }),
                lblNombre: await translate('Nombre', { to: "en", engine: "libre" }),
                lblTelefono: await translate('Telefono', { to: "en", engine: "libre" }),
                lblCorreo: await translate('Correo', { to: "en", engine: "libre" }),
                lblMensaje: await translate('Mensaje', { to: "en", engine: "libre" }),
                btnEnviar: await translate('Enviar', { to: "en", engine: "libre" }),
            });
        }
        loader.hide();
    }
    

    Enviar(e) {
        e.preventDefault();
        const {
            datos
        } = this.state;
        loader.show();
        this.props.enviar_contacto(datos,this);
       
    }

    InputChange(e) {
        const { name, value } = e.target;
        const { datos } = this.state;
        this.setState({
            datos: {
                ...datos,
                [name]: value
            }
        });
    }

    componentDidMount() {
        loader.hide();
        window.scrollTo(0, 0);
        this.traducir();
    }

    volver() {
        this.props.history.push("/");
        localStorage.setItem('item_menu_header', 'inicio');
        this.props.seleccionar_id_item('inicio');
    }

    render() {
        const { datos } = this.state;
        return (

            <div className="container-menu ">
                <div id="content" >
                    <div className="table-responsive">
                        <Header iconMenuVisible="1" align="text-right" />
                        <div className="jumbotron">

                            <ListGroup className="list-group-flush  ">
                                <ListGroupItem>


                                    <p className="text-justify "> <h6> - {this.state.lblText1 === "" ? "Si eres un turista y necesitas alguna asesoría en tu viaje por el departamento del Huila, no dudes en dejarnos tu inquietud o contáctanos por medios de nuestras redes sociales, para tener el gusto de asesorarte, y vivas la mejor experiencia." : this.state.lblText1} </h6></p>
                                    <p className="text-justify "> <h6> -  {this.state.lblText2 === "" ? "Si eres un empresario y deseas que tu negocio o empresa se visualice con nosotros, déjanos tus datos, que con gusto nos pondremos en contacto con tigo" : this.state.lblText2}</h6> </p>


                                </ListGroupItem>

                                <ListGroupItem>
                                    <Row>
                                        <Col className="justify-content-center pr-0" sm={12} md={8} >
                                            <ListGroup className="list-group-flush  ">
                                                <Form onSubmit={this.Enviar} >
                                                           
                                                    <Form.Row >
                                                        <Form.Group as={Col} sm={5} md={5} >
                                                            <h5>{this.state.lblText3 === "" ? "Contáctanos" : this.state.lblText3}</h5>  
                                                        </Form.Group>
                                                    </Form.Row>
                                                    <Form.Row >
                                                        <Form.Group as={Col} sm={5} md={5} >
                                                            <Form.Label>{this.state.lblNombre === "" ? "Nombre" : this.state.lblNombre} :</Form.Label>
                                                            <Form.Control type="text" name="Nombre" value={datos.Nombre} maxLength={30} className="pz-input" onChange={this.InputChange}  />
                                                        </Form.Group>
                                                    </Form.Row>
                                                    <Form.Row >
                                                        <Form.Group as={Col} sm={5} md={5} >
                                                            <Form.Label>{this.state.lblTelefono === "" ? "Telefono" : this.state.lblTelefono} :</Form.Label>
                                                            <Form.Control type="number" name="Telefono" onChange={this.InputChange} value={datos.Telefono} onInput={(e) => { e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10) }}
                                                                onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()} className="pz-input"  />
                                                        </Form.Group>
                                                    </Form.Row>
                                                    <Form.Row >
                                                        <Form.Group as={Col} sm={5} md={5} >
                                                            <Form.Label>{this.state.lblCorreo === "" ? "Correo" : this.state.lblCorreo} :</Form.Label>
                                                            <Form.Control  type="email"  name="Correo" value={datos.Correo} maxLength={144} className="pz-input" onChange={this.InputChange} />
                                                         
                                                        </Form.Group>
                                                    </Form.Row>

                                                    <Form.Row sm={10}>
                                                        <Form.Group as={Col} >
                                                            <Form.Label>{this.state.lblMensaje === "" ? "Mensaje" : this.state.lblMensaje} :</Form.Label>
                                                            <Form.Control as="textarea" name="Mensaje" value={datos.Mensaje} rows={5} onChange={this.InputChange}  />

                             
                                                        </Form.Group>
                                                    </Form.Row>
                                                   


                                                   

                                                    <Form.Row sm={10}>
                                                        <Form.Group as={Col} sm={5} md={5} >
                                                            <button type="submit" className="btn btn-default btn-3d-style  btn-block">{this.state.btnEnviar === "" ? "Enviar" : this.state.btnEnviar} </button>
                                                        </Form.Group>
                                                       
                                                    </Form.Row>
                                                </Form>
                                            </ListGroup>

                                        </Col>
                                        <Col sm={12} md={4} className="justify-content-center ">
                                            <ListGroup variant="flush">
                                                <ListGroup.Item><h5><u>  {this.state.lblSiguenos === "" ? "Siguenos en nuestras redes" : this.state.lblSiguenos}</u></h5></ListGroup.Item>
                                                
                                                <ListGroup.Item>
                                                    <Row className="justify-content-md-center ">
                                                        <Col sm={12} md={2} ><h4><i className="fa fa-facebook" aria-hidden="true" /></h4></Col>
                                                        <Col sm={12} md={10} ><a target="_blank" href="https://www.facebook.com/coaventurate/"> Coaventurate</a></Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <Row className="justify-content-md-center ">
                                                        <Col sm={12} md={2} ><h4><i className="fa fa-instagram" aria-hidden="true" /></h4></Col>
                                                        <Col sm={12} md={10} ><a target="_blank" href="https://www.instagram.com/coaventurate/"> Coaventurate</a></Col>
                                                    </Row>
                                                </ListGroup.Item>

                                                <ListGroup.Item>
                                                    <Row className="justify-content-md-center ">
                                                        <Col sm={12} md={2} ><h4><i className="fa fa-twitter" aria-hidden="true" /></h4></Col>
                                                        <Col sm={12} md={10} ><a target="_blank" href="https://www.twitter.com/coaventurate/"> Coaventurate</a></Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item>

                                                    <Row className="justify-content-md-center ">
                                                        <Col sm={12} md={2} ><h4><i className="fa fa-phone" aria-hidden="true" /></h4></Col>
                                                        <Col sm={12} md={10} > 3227052777</Col>
                                                    </Row>


                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                              
                                                    <Row className="justify-content-md-center ">
                                                        <Col sm={12} md={2} ><h4><i className="fa fa-whatsapp" aria-hidden="true" /></h4></Col>
                                                        <Col sm={12} md={10} > <a target="_blank" href={"https://api.whatsapp.com/send?phone=57" + "3227052777" + "&text= Hola!%20Quiero%20mas%20información!"}> 3227052777</a></Col>
                                                    </Row>
                                                 
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <Row className="justify-content-md-center ">
                                                        <Col sm={12} md={2} ><h4><i className="fa fa-envelope" aria-hidden="true" /></h4></Col>
                                                        <Col sm={12} md={10} > contacto@tandori.co</Col>
                                                    </Row>
                                                </ListGroup.Item>
                                             
                                                <ListGroup.Item>
                                                    <Row className="justify-content-md-center ">
                                                        <button className="btn btn-default btn-3d-style  btn-block" onClick={() => this.volver()} >{this.state.btnIrMapa === "" ? "Ir al Mapa" : this.state.btnIrMapa}</button>
                                                    </Row>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                    </Row>
                                </ListGroupItem>


                            </ListGroup>


                        </div>
                    </div>


                </div>
                <Footer />
            </div>

        );
    }
}

//-------------------------------Redux------------------------

const mapStateToProps = (state) => {

    const { id_item_menu } = state.HeaderReducer;

    return {
        id_item_menu
    };

};

const mapDispatchToProps = {

    seleccionar_id_item: HeaderActions.seleccionar_id_item,
    enviar_contacto: usuarioActions.enviar_contacto,

    

};




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Contacto));