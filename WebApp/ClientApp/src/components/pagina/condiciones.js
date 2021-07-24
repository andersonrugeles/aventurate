import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Carousel, Row, Col, Image } from 'react-bootstrap';
import Footer from '../footer';
import Header from '../header';
import { loader } from '../helpers/loader';
import { connect } from 'react-redux';
import { HeaderActions } from '../header/actions';
import { withRouter } from "react-router-dom";


class Condiciones extends Component {

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

        return (

            <div className="container-menu ">
                <div id="content" >
                    <div className="table-responsive">
                        <Header iconMenuVisible="1" align="text-right" />
                        <div className="jumbotron">

                            <ListGroup className="list-group-flush  ">
                            

                                <ListGroupItem>
                                    <Row>
                                        <Col className="justify-content-center pr-0" sm={12} md={8} >
                                            <ListGroup className="list-group-flush  ">
                                               
                                                <ListGroupItem>
                                                    <h5><b>TERMINOS Y CONDICIONES</b> </h5>
                                                        
                                                    <p className="text-justify "><h6>Bienvenido a Aventúrate. Si continúa navegando y utilizando este sitio web, acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso, que junto con nuestra política de privacidad rigen la relación de Aventúrate con usted en relación con este sitio web.</h6></p>
                                                    <p className="text-justify "><h6>El término Aventúrate o "nosotros" o "nosotras" se refiere al propietario del sitio web. El término "usted" se refiere al usuario o visitante de nuestro sitio web. El uso de este sitio web está sujeto a los siguientes términos de uso:</h6></p>
                                                    <p className="text-justify "><h6>El contenido de las páginas de este sitio web es para su información general y uso exclusivo. Está sujeto a cambios sin previo aviso.</h6></p>
                                                    <p className="text-justify "><h6>Ni nosotros ni terceros ofrecemos garantía alguna en cuanto a la precisión, puntualidad, rendimiento, integridad o idoneidad de la información y los materiales que se encuentran u ofrecen en este sitio web para un propósito en particular. Usted reconoce que dicha información y materiales pueden contener inexactitudes o errores y excluimos expresamente la responsabilidad por tales inexactitudes o errores en la máxima medida permitida por la ley.</h6></p>
                                                    <p className="text-justify "><h6>El uso de cualquier información o material en este sitio web es bajo su propio riesgo, por lo que no seremos responsables. Será su responsabilidad asegurarse de que cualquier producto, servicio o información disponible a través de este sitio web cumpla con sus requisitos específicos.</h6></p>
                                                    <p className="text-justify "><h6>Este sitio web contiene material que es de nuestra propiedad o que tenemos licencia. Este material incluye, pero no se limita a, el diseño, disposición, apariencia, apariencia y gráficos. La reproducción está prohibida excepto de acuerdo con el aviso de derechos de autor, que forma parte de estos términos y condiciones.</h6></p>
                                                    <p className="text-justify "><h6>Todas las marcas comerciales reproducidas en este sitio web, que no son propiedad ni están autorizadas al operador, se reconocen en el sitio web.</h6></p>
                                                    <p className="text-justify "><h6>El uso no autorizado de este sitio web puede dar lugar a una reclamación por daños y / o constituir un delito.</h6></p>
                                                    <p className="text-justify "><h6>De vez en cuando, este sitio web también puede incluir enlaces a otros sitios web. Estos enlaces se proporcionan para su conveniencia para proporcionar más información. No significan que respaldamos los sitios web. No tenemos ninguna responsabilidad por el contenido de los sitios web vinculados.</h6></p>
                                                    <p className="text-justify "><h6>No puede crear un enlace a este sitio web desde otro sitio web o documento sin el consentimiento previo por escrito de Aventúrate.</h6></p>




                                                        <h5><b>DESCARGO DE RESPONSABILIDAD</b> </h5>
                                                    <p className="text-justify "><h6>La información contenida en este sitio web es solo para fines de información general. La información es proporcionada por Aventúrate y aunque nos esforzamos por mantener la información actualizada y correcta, no hacemos declaraciones ni garantías de ningún tipo, expresas o implícitas, sobre la integridad, precisión, confiabilidad, idoneidad o disponibilidad con respecto a el sitio web o la información, productos, servicios o gráficos relacionados contenidos en el sitio web para cualquier propósito. Por lo tanto, cualquier confianza que deposite en dicha información es estrictamente bajo su propio riesgo.</h6></p>
                                                    <p className="text-justify "><h6>En ningún caso seremos responsables de ninguna pérdida o daño, incluidos, entre otros, pérdidas o daños indirectos o consecuentes, o cualquier pérdida o daño que surja de la pérdida de datos o ganancias que surjan de, o en conexión con, el uso de este sitio web. </h6></p>
                                                    <p className="text-justify "><h6>A través de este sitio web, puede vincular a otros sitios web que no están bajo el control de Aventúrate. No tenemos control sobre la naturaleza, el contenido y la disponibilidad de esos sitios. La inclusión de cualquier enlace no implica necesariamente una recomendación ni respalda las opiniones expresadas en ellos.</h6></p>
                                                    <p className="text-justify "><h6>Se hace todo lo posible para mantener el sitio web en funcionamiento sin problemas. Sin embargo, Aventúrate no se hace responsable ni será responsable de que el sitio web no esté disponible temporalmente debido a problemas técnicos fuera de nuestro control.</h6></p>


                                                        <h5><b>AVISO DE COPYRIGHT</b> </h5>
                                                    <p className="text-justify "><h6>Este sitio web y su contenido son propiedad de Aventúrate - © Aventúrate 2021. Todos los derechos reservados.</h6></p>
                                                    <p className="text-justify "><h6>Se prohíbe cualquier redistribución o reproducción de parte o la totalidad del contenido en cualquier forma que no sea la siguiente:</h6></p>
                                                    <p className="text-justify "><h6>Puede imprimir o descargar en un disco duro local extractos para su uso personal y no comercial únicamente</h6></p>
                                                    <p className="text-justify "><h6>Puede copiar el contenido a terceros individuales para su uso personal, pero solo si reconoce que el sitio web es la fuente del material</h6></p>
                                                    <p className="text-justify "><h6>No puede, excepto con nuestro permiso expreso por escrito, distribuir o explotar comercialmente el contenido. Tampoco puede transmitirlo o almacenarlo en ningún otro sitio web u otra forma de sistema de recuperación electrónica.</h6></p>





                                               
                                                </ListGroupItem>
                                               
                                                
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

};




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Condiciones));