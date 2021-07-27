import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Carousel, Row, Col, Image } from 'react-bootstrap';
import Footer from '../footer';
import Header from '../header';
import { loader } from '../helpers/loader';
import { connect } from 'react-redux';
import { HeaderActions } from '../header/actions';
import { withRouter } from "react-router-dom";
import translate from "../helpers/translate";

class QuienesSomos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lblSiguenos: '',
            btnIrMapa: '',
            lbltext:''
        };
        this.traducir = this.traducir.bind(this);



    }

    componentDidMount() {
        loader.hide();
        window.scrollTo(0, 0);
        this.traducir();
    }
    async traducir() {
        loader.show();
        if (localStorage.getItem('lenguaje') === 'español') {
            this.setState({
                lblSiguenos: await translate('Siguenos en nuestras redes', { to: "es", engine: "libre" }),
                btnIrMapa: await translate('Ir al mapa', { to: "es", engine: "libre" }),
                lbltext: await translate('podrás encontrar información de los diferentes sitios turísticos que ofrece el departamento del Huila como hoteles, restaurantes, zonas de camping, rutas, museos, actividades a realizar y todo lo que puedas necesitar al momento de emprender una aventura.', { to: "es", engine: "libre" })
            });
        } else if (localStorage.getItem('lenguaje') === 'ingles') {
            this.setState({
                lblSiguenos: await translate('Siguenos en nuestras redes', { to: "en", engine: "libre" }),
                btnIrMapa: await translate('Ir al mapa', { to: "en", engine: "libre" }),
                lbltext: await translate('podrás encontrar información de los diferentes sitios turísticos que ofrece el departamento del Huila como hoteles, restaurantes, zonas de camping, rutas, museos, actividades a realizar y todo lo que puedas necesitar al momento de emprender una aventura.', { to: "en", engine: "libre" })
            });
        }
        loader.hide();
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

                                    
                                    <Carousel>
                                        <Carousel.Item className="item" >
                                            
                                            <img 
                                                //alt="" width="1100px" height="500px"
                                                alt="" width="100%" height="100%"
                                                src="https://i.imgur.com/XzxBZiC.jpg"
                                                alt="First slide"
                                                />
                                                
                                          
                                        </Carousel.Item>
                                       
                                    </Carousel>


                                    </ListGroupItem>

                                <ListGroupItem>
                                    <Row>
                                        <Col className="justify-content-center pr-0" sm={12} md={8} >
                                            <ListGroup className="list-group-flush  ">
                                                <ListGroupItem>
                                                    <p className="text-justify "><h6><strong>Aventúrate </strong>{this.state.lbltext === "" ? "podrás encontrar información de los diferentes sitios turísticos que ofrece el departamento del Huila como hoteles, restaurantes, zonas de camping, rutas, museos, actividades a realizar y todo lo que puedas necesitar al momento de emprender una aventura." : this.state.lbltext}</h6></p>
                                                </ListGroupItem>
                                                <ListGroupItem className="p-4">
                                                    <Image src="https://i.imgur.com/gr9c9QS.jpg" fluid />
                                                </ListGroupItem>



                                             </ListGroup>
                                   
                                    </Col>
                                        <Col sm={12} md={4} className="justify-content-center ">
                                            <ListGroup variant="flush">
                                                <ListGroup.Item><h5><u> {this.state.lblSiguenos === "" ? "Siguenos en nuestras redes" : this.state.lblSiguenos}</u></h5></ListGroup.Item>
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
                                                        <Col sm={12} md={10} ><a target="_blank"href="https://www.twitter.com/coaventurate/"> Coaventurate</a></Col>
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
                                                        <button className="btn btn-default btn-3d-style  btn-block" onClick={() => this.volver()} >{this.state.btnIrMapa === "" ? "Ir al Mapa" : this.state.btnIrMapa} </button>
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




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuienesSomos));