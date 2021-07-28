import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import ReactDOM from "react-dom";
import '../style.css';
import { loader } from '../../helpers/loader';
import { ListGroup, ListGroupItem, Carousel, Row, Col, Image, Tabs, Tab } from 'react-bootstrap';
import { mapsActions } from '../actions';
import { Icon } from '@material-ui/core';
import Header from '../../header';
import Footer from '../../footer';
import { FacebookProvider, Comments, ShareButton, Like } from 'react-facebook';
import Parser from 'html-react-parser';
import {
    FacebookShareButton, FacebookIcon, WhatsappShareButton, FacebookMessengerShareButton, FacebookMessengerIcon, WhatsappIcon
} from "react-share";

class PerfilMunicipio extends Component {


    constructor(props) {
        super(props);
        this.volver = this.volver.bind(this);


        this.state = {
            municipio: {
                Nombre: '',
                Clima: '',
                Descripcion: '',
                CategoriaSubcategoria: '',
                Activa: '',
                Latitud: 0,
                Longitud: 0,
                IdMunicipio: '',
                UrlImagen: '',
                ImagenesMunicipio: [],
                Tips: '',
                Festividades: '',
                QueHacer: '',
             
            },

            url:"https://www.w3schools.com/html/"

        }


    }

    volver() {
        this.props.history.goBack();
    }

    async componentDidMount() {
        loader.show();
        window.scrollTo(0, 0);
        let param = this.props.match.params.id;
        const id = param.substring(param.indexOf("_") + 1, param.length)
        await this.props.obtener_municipio(parseInt(id));
       
       

    }

    static getDerivedStateFromProps(props, state) {

        return {
            municipio: props.municipio
        };
     
    }


    render() {
        return (
            <div className="container-menu ">
                <div id="content" >
                    <div className="table-responsive">
                        <Header iconMenuVisible="1" align="text-right" />
                        <div className=" jumbotron-form">
                {   this.state.municipio !== null ?


                <ListGroup className="list-group-flush  ">
                                    <ListGroupItem>
                                        <Row className=" m-0 ">
                                            <Col sm={12} md={2}>
                                               
                                            </Col>
                                            <Col sm={12} md={8}>
                                                <Row className="font-weight-bold d-flex justify-content-center" >

                                                    <h5>Municipio de {Parser(this.state.municipio.Nombre)}  </h5>  

                                                </Row>

                                            </Col>
                                            <Col sm={12} md={2}>
                                                <Row className="font-weight-bold" >
                                                    <button className="btn btn-default btn-3d-style  btn-block" onClick={() => this.volver()} >Ir al mapa </button>
                                                </Row>

                                            </Col>

                                        </Row>
                                   
                        
                      
                    </ListGroupItem>
                    <ListGroupItem>
                        <Carousel>
                            {
                                this.state.municipio.ImagenesMunicipio.map((item, index) => {

                                    return (
                                        <Carousel.Item className="item" >
                                            <img width="200 " align="left"
                                                className="d-block w-100 rounded img-custom"
                                                src={item.UrlImagen}
                                                alt="First slide"
                                            />

                                        </Carousel.Item>
                                    );
                                })

                            }
                        </Carousel>
                    </ListGroupItem>
                        <ListGroupItem>
                                        <Row className=" m-0 ">
                                            <Col sm={12} md={12}>
                                                <Row className="text-justify ">
                                                    {Parser(this.state.municipio.Descripcion)}
                                                 
                                                </Row>
                                             </Col>

                                        </Row>
                                        <Row className=" m-2 " >

                                            <h5 className="mr-1"><u> Clima: </u></h5>   {Parser(this.state.municipio.Clima)}
                                        </Row>

                                    </ListGroupItem>

                                    <ListGroupItem>
                                        <Tabs defaultActiveKey="hacer" variant="pills" transition={false} id="noanim-tab-example">
                                            <Tab eventKey="hacer" title="Que hacer">
                                                <ListGroup className="list-group-flush  ">
                                                    <ListGroupItem>
                                                        <Row className="p-3 m-0 justify-content-center">
                                                            <p>{Parser(this.state.municipio.QueHacer)} </p>
                                                        </Row>
                                                    </ListGroupItem>
                                                </ListGroup>
                                            </Tab>
                                            <Tab eventKey="tips" title="Tips y recomendaciones">
                                                <ListGroup className="list-group-flush  ">
                                                    <ListGroupItem>
                                                        <Row className="p-3 m-0 justify-content-center">
                                                            <p>{Parser(this.state.municipio.Tips)} </p>
                                                        </Row>
                                                    </ListGroupItem>
                                                </ListGroup>
                                            </Tab>
                                            <Tab eventKey="ferias" title="Ferias y fiestas" >
                                                <ListGroup className="list-group-flush  ">
                                                    <ListGroupItem>
                                                        <Row className="p-3 m-0 justify-content-center">
                                                            <p>{Parser(this.state.municipio.Festividades)} </p>
                                                        </Row>
                                                    </ListGroupItem>
                                                </ListGroup>
                                            </Tab>
                                        </Tabs>
                                    </ListGroupItem>

                                    <ListGroupItem>

                                        <Row className="p-0 m-0">
                                            <Col sm={12} md={6} className="mb-1">
                                                <button className="btn btn-default btn-3d-style  btn-block" onClick={() => this.volver()} >Ir al mapa </button>

                                            </Col>
                                            <Col sm={12} md={6} className="mb-1">

                                                <a target="_blank" href={"https://maps.google.com?q=" + this.state.municipio.Latitud + "," + this.state.municipio.Longitud} className="btn btn-default btn-3d-style  btn-block" >Como llegar</a>

                                            </Col>
                                        </Row>

                                    </ListGroupItem>


                                    <ListGroupItem>

                                        <ListGroup>
                                        <ListGroupItem >
                                            <h5><u>Compartir</u></h5>


                                            <div className="d-flex justify-content-center">
                                                <div className="row  w-100">
                                                    <div className="col d-flex justify-content-center">
                                                        <FacebookProvider appId="137904151817325">
                                                            <Like href={"http://www.facebook.com/sharer.php?u=" + window.location.href} />
                                                        </FacebookProvider>
                                                    </div>
                                                        <div className="col d-flex justify-content-center">
                                                            <FacebookShareButton url={this.state.url} >
                                                            <FacebookIcon size={42} round={true} />
                                                        </FacebookShareButton>

                                                            <WhatsappShareButton url={this.state.url} >
                                                            <WhatsappIcon size={42} round={true} />
                                                        </WhatsappShareButton>

                                                            <FacebookMessengerShareButton url={this.state.url} >
                                                            <FacebookMessengerIcon size={42} round={true} />
                                                        </FacebookMessengerShareButton>
                                                    </div>
                                                </div>
                                            </div>

                                        </ListGroupItem>

                                        <ListGroupItem >
                                            <h5><u>Comentarios</u></h5>
                                            <div className="d-flex justify-content-center">
                                                <FacebookProvider appId="137904151817325">

                                                    <Comments href="https://www.facebook.com/Vincent-107918274843518" />

                                                </FacebookProvider>
                                            </div>
                                        </ListGroupItem>


                                        </ListGroup>

                                    </ListGroupItem>
                                </ListGroup>

                    
                               
                    : ""
                }
                            

                   
                        </div>
                    </div >
                </div>
                <Footer />
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { user_location, empresas, idEmpresaseleccionada, municipio } = state.mapsReducer;
    const { menuLateralVisible } = state.lateralMenuReducer;
    return {
        menuLateralVisible,
        user_location,
        empresas,
        idEmpresaseleccionada,
        municipio
    };
}


const mapDispatchToProps = {

    obtener_municipio: mapsActions.obtener_municipio,
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PerfilMunicipio));