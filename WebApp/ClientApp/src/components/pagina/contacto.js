import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Row, Col, Form} from 'react-bootstrap';
import Footer from '../footer';
import Header from '../header';
import { loader } from '../helpers/loader';
import { connect } from 'react-redux';
import { HeaderActions } from '../header/actions';
import { withRouter } from "react-router-dom";
import { usuarioActions } from '../users/actions';

class Contacto extends Component {

    constructor(props) {
        super(props);

        this.state = {
            datos: {
               
                Nombre: '',
                Telefono: '',
                Correo: '',
                Mensaje: '',
            }
        };


        this.InputChange = this.InputChange.bind(this);
        this.Enviar = this.Enviar.bind(this);


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


                                    <p className="text-justify "> <h6> - Si eres un turista y necesitas alguna asesoría en tu viaje por el departamento del Huila, no dudes en dejarnos tu inquietud o contáctanos por medios de nuestras redes sociales, para tener el gusto de asesorarte, y vivas la mejor experiencia. </h6></p>
                                    <p className="text-justify "> <h6> - Si eres un empresario y deseas que tu negocio o empresa se visualice con nosotros, déjanos tus datos, que con gusto nos pondremos en contacto con tigo.</h6> </p>


                                </ListGroupItem>

                                <ListGroupItem>
                                    <Row>
                                        <Col className="justify-content-center pr-0" sm={12} md={8} >
                                            <ListGroup className="list-group-flush  ">
                                                <Form onSubmit={this.Enviar} >
                                                           
                                                    <Form.Row >
                                                        <Form.Group as={Col} sm={5} md={5} >
                                                            <h5>Cont&aacute;ctanos</h5>  
                                                        </Form.Group>
                                                    </Form.Row>
                                                    <Form.Row >
                                                        <Form.Group as={Col} sm={5} md={5} >
                                                            <Form.Label>Nombre:</Form.Label>
                                                            <Form.Control type="text" name="Nombre" value={datos.Nombre} maxLength={30} className="pz-input" onChange={this.InputChange}  />
                                                        </Form.Group>
                                                    </Form.Row>
                                                    <Form.Row >
                                                        <Form.Group as={Col} sm={5} md={5} >
                                                            <Form.Label>Telefono:</Form.Label>
                                                            <Form.Control type="number" name="Telefono" onChange={this.InputChange} value={datos.Telefono} onInput={(e) => { e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10) }}
                                                                onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()} className="pz-input"  />
                                                        </Form.Group>
                                                    </Form.Row>
                                                    <Form.Row >
                                                        <Form.Group as={Col} sm={5} md={5} >
                                                            <Form.Label>Correo:</Form.Label>
                                                            <Form.Control  type="email"  name="Correo" value={datos.Correo} maxLength={144} className="pz-input" onChange={this.InputChange} />
                                                         
                                                        </Form.Group>
                                                    </Form.Row>

                                                    <Form.Row sm={10}>
                                                        <Form.Group as={Col} >
                                                            <Form.Label>Mensaje:</Form.Label>
                                                            <Form.Control as="textarea" name="Mensaje" value={datos.Mensaje} rows={5} onChange={this.InputChange}  />

                             
                                                        </Form.Group>
                                                    </Form.Row>
                                                   


                                                   

                                                    <Form.Row sm={10}>
                                                        <Form.Group as={Col} sm={5} md={5} >
                                                            <button type="submit" className="btn btn-default btn-3d-style  btn-block">Enviar </button>
                                                        </Form.Group>
                                                       
                                                    </Form.Row>
                                                </Form>
                                            </ListGroup>

                                        </Col>
                                        <Col sm={12} md={4} className="justify-content-center ">
                                            <ListGroup variant="flush">
                                                <ListGroup.Item><h5><u> Siguenos en nuestras redes</u></h5></ListGroup.Item>
                                                
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
                                                        <button className="btn btn-default btn-3d-style  btn-block" onClick={() => this.volver()} >Ir al mapa </button>
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