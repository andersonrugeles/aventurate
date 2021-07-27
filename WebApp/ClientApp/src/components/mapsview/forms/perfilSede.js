import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import '../style.css';
import { loader } from '../../helpers/loader';
import { ListGroup, ListGroupItem, Carousel, Row, Col, Image, Tabs, Tab } from 'react-bootstrap';
import { mapsActions } from '../actions';
import { Icon } from '@material-ui/core';
import Header from '../../header';
import Footer from '../../footer';
import translate from "../../helpers/translate";

class PerfilSede extends Component {


    constructor(props) {
        super(props);
        this.volver = this.volver.bind(this);
      

        this.state = {
            sede: {
                Nombre: '',
                Horarios: '',
                FechaRegistro: '',
                Celular: 0,
                CategoriaSubcategoria: '',
                Activa: '',
                IdCategoriaSubcategoria: '',
                IdEmpresa: '',
                IdMunicipio: '',
                IdSede: '',
                IdTipoSede: '',
                Imagen: '',
                Telefono: 0,
                ImagenesEmpresa: [],
                Latitud: '',
                Longitud: '',
                Descripcion: '',
                Precio: '',
                InstagramUrl: '',
                NombreInstagram: '',
                FacebookUrl: '',
                NombreFacebook: '',
                Correo: '',
                Tips: '',
                Direccion: '',
                SubCategoria: null,
                TwitterUrl: '',
                NombreTwitter: '',
                Pagina: '',
                btnIrMapa: '',
                lblInformacion: '',
                lblDetalle: '',
                lblContacto: '',
                btnLlegar: '',
                lblTips: '',
                sedeTips:''
            },
            lblDescripcion:""

        }


    }

    volver() {
        this.props.history.goBack();
    }

    componentDidMount() {
        loader.show();
        window.scrollTo(0, 0);
        this.props.obtener_sede(parseInt(localStorage.getItem('IdSede')), this);
        this.traducir();
    }

  


    async traducir() {
        loader.show();
        if (localStorage.getItem('lenguaje') === 'español') {
            this.setState({
                btnIrMapa: await translate('Ir al mapa', { to: "es", engine: "libre" }),
                lblInformacion: await translate('Informacion', { to: "es", engine: "libre" }),
                lblDetalle: await translate('Detalles', { to: "es", engine: "libre" }),
                lblContacto: await translate('Datos de contacto', { to: "es", engine: "libre" }),
                btnLlegar: await translate('Como llegar', { to: "es", engine: "libre" }),
                lblTips: await translate('Tips y recomendaciones', { to: "es", engine: "libre" }),
                sedeTips: await translate(this.state.sede.Tips, { to: "es", engine: "libre" })
            });
        } else if (localStorage.getItem('lenguaje') === 'ingles') {
            this.setState({
                btnIrMapa: await translate('Ir al mapa', { to: "en", engine: "libre" }),
                lblInformacion: await translate('Informacion', { to: "en", engine: "libre" }),
                lblDetalle: await translate('Detalles', { to: "en", engine: "libre" }),
                lblContacto: await translate('Datos de contacto', { to: "en", engine: "libre" }),
                btnLlegar: await translate('Como llegar', { to: "en", engine: "libre" }),
                lblTips: await translate('Tips y recomendaciones', { to: "en", engine: "libre" }),
                sedeTips: await translate(this.state.sede.Tips, { to: "en", engine: "libre" })
            });
        }
        loader.hide();
    }

    render() {

        return (
            <div className="container-menu ">
                <div id="content" >
                    <div className="table-responsive">
                        <Header iconMenuVisible="1" align="text-right" />
                         <div className=" jumbotron-form">
               
                  
                   
                            <ListGroup className="list-group-flush  ">
                                <ListGroupItem>
                                    <div className=" p-0 " >
                                        <Row className=" m-0 ">
                                            <Col sm={12} md={2}>
                                                <div className="text-center " >
                                                    {
                                                        this.state.sede.SubCategoria ?
                                                            <img id="item-f-1" style={{ width: "24px", heigth: "24px" }} alt={"image"} src={`/app-images/${this.state.sede.SubCategoria.UrlImagen}`} /> 

                                                          :  ""
                                                    }
                                                 
                                                </div>
                                            </Col>
                                            <Col sm={12} md={8}>
                                                <Row className="font-weight-bold d-flex justify-content-center" >
                                                  
                                                    <h5 className="text-center ">
                                                            {this.state.sede.Nombre}
                                                    </h5>
                                                    {
                                                        this.state.sede.TipoSede ?
                                                            <p className="mr-2" style={{ "fontSize": "1.2vw" }} >
                                                                {this.state.sede.TipoSede.Nombre !== "Unica" ? "( "+ this.state.sede.TipoSede.Nombre+")" :""}
                                                     </p> : ""
                                                           
                                                    }
                                                      -
                                                    {
                                                        this.state.sede.Municipio ?
                                                            <h5 className="ml-2">
                                                                {this.state.sede.Municipio.Nombre}
                                                            </h5> : ""

                                                    }
                                                  
                                                  
                                                </Row>
                                              
                                            </Col>
                                            <Col sm={12} md={2}>
                                                <Row className="font-weight-bold" >
                                                    <button className="btn btn-default btn-3d-style  btn-block" onClick={() => this.volver()} >{this.state.btnIrMapa === "" ? "Ir al mapa" : this.state.btnIrMapa}</button>
                                                </Row>

                                            </Col>

                                        </Row>
                                    </div>
                                </ListGroupItem>    
                                <ListGroupItem>
                                         <Carousel>
                            {
                                this.state.sede.ImagenesEmpresa.map((item, index) => {

                                    return (
                                        <Carousel.Item className="item" key={index} >
                                            <img
                                                className="d-block w-100 rounded img-custom"
                                                src={item.UrlImagen}
                                                alt="slide"
                                            />

                                        </Carousel.Item>
                                    );
                                })

                            }
                        </Carousel>
                                     </ListGroupItem>
                                <ListGroupItem>
                                     <div className="shadow-box p-3 rounded-sm" >
                            <Row className=" m-0 ">
                                <Col sm={12} md={5}>
                                    <div className="text-center ">
                                                    <Image className="perfil-logo rounded-sm" src={this.state.sede.Imagen === "" ? Icon : `/app-images/${this.state.sede.Imagen}`} />
                                    </div>
                                </Col>
                                <Col sm={12} md={7}>
                                  
                                                <Row className="text-justify ">

                                                    {this.state.lblDescripcion}
                                                   
                                      
                                                </Row>
                                </Col>

                            </Row>
                        </div>
                                </ListGroupItem>    
                                <ListGroupItem>
                                    <Tabs defaultActiveKey="info" variant="pills" transition={false} id="noanim-tab-example">
                                        <Tab eventKey="info" title={this.state.lblInformacion === "" ? "Informacion" : this.state.lblInformacion} className="p-3">
                                            <h5><u> {this.state.lblDetalle === "" ? "Detalles" : this.state.lblDetalle}</u></h5>
                                                <ListGroup className="list-group-flush  ">
                                                    <ListGroupItem>
                                                    <Row className="p-1 m-0">
                                                        <Col sm={12} md={6}>
                                                            <Row className="justify-content-md-center text-social ">
                                                                <Col sm={12} md={2} ><h4><i className="fa fa-money" aria-hidden="true" /></h4></Col>
                                                                <Col sm={12} md={10} > {this.state.sede.Precio}</Col>
                                                            </Row>

                                                        </Col>
                                                        <Col sm={12} md={6}>
                                                            <Row className="justify-content-md-center text-social">
                                                                <Col sm={12} md={2} ><h4><i className="fa fa-clock-o" aria-hidden="true" /></h4></Col>
                                                                <Col sm={12} md={10} > {this.state.sede.Horarios}</Col>
                                                            </Row>

                                                        </Col>
                                                    </Row>
                                                    </ListGroupItem>
                                            </ListGroup>
                                            <h5><u>{this.state.lblContacto === "" ? "Datos de contacto" : this.state.lblContacto}</u></h5>
                                            <ListGroup className="list-group-flush  ">
                                                <ListGroupItem>
                                                    {this.state.sede.Direccion !== "" ?
                                                    <Row className="p-2 m-0">
                                                        <Col sm={12} md={4}>
                                                            <Row className="justify-content-md-center text-social">
                                                                    <Col sm={12} md={2} ><h4 className="no-margin-mobile"><i className="fa fa-map-marker" aria-hidden="true" /></h4></Col>
                                                                <Col sm={12} md={10} > {this.state.sede.Direccion}</Col>
                                                            </Row>

                                                        </Col>
                                                        </Row>
                                                        : ""
                                                    }
                                                    <Row className="p-2 m-0">
                                                    {this.state.sede.Telefono !=="" ?
                                                        <Col sm={12} md={4}>
                                                                    <Row className="justify-content-md-center text-social">
                                                                    <Col sm={12} md={2} ><h4 className="no-margin-mobile"><i className="fa fa-phone" aria-hidden="true" /></h4></Col>
                                                                        <Col sm={12} md={10} > {this.state.sede.Telefono}</Col>
                                                            </Row>

                                                            </Col>
                                                            :""
                                                    }

                                                            {this.state.sede.Celular !== "" ?
                                                                <Col sm={12} md={4}>
                                                                    <Row className="justify-content-md-center text-social">
                                                                    <Col sm={12} md={2} ><h4 className="no-margin-mobile"><i className="fa fa-whatsapp" aria-hidden="true" /></h4></Col>
                                                                        <Col sm={12} md={10} > <a target="_blank" href={"https://api.whatsapp.com/send?phone=57" + this.state.sede.Celular + "&text= Hola!%20Quiero%20mas%20información!"}> {this.state.sede.Celular}</a></Col>
                                                                    </Row>
                                                                </Col>
	                                                            :    ""
                                                            }
                                                     

                                                        {this.state.sede.Pagina !== "" ?
                                                                <Col sm={12} md={4}>
                                                                    <Row className="justify-content-md-center text-social">
                                                                    <Col sm={12} md={2} ><h4 className="no-margin-mobile"><i className="fa fa-globe" aria-hidden="true"></i></h4></Col>
                                                                        <Col sm={12} md={10} > <a target="_blank" href={this.state.sede.Pagina}> {this.state.sede.Pagina}</a></Col>
                                                                    </Row>

                                                                </Col>

	                                                            : ""
                                                            }
                                               
                                                
                                                    </Row>
                                                    <Row className="p-2 m-0">

                                                        {this.state.sede.InstagramUrl !== "" ?
                                                            <Col sm={12} md={4}>
                                                                <Row className="justify-content-md-center text-social ">
                                                                    <Col sm={12} md={2} ><h4 className="no-margin-mobile"><i className="fa fa-instagram" aria-hidden="true" /></h4></Col>
                                                                    <Col sm={12} md={10} ><a target="_blank" href={this.state.sede.InstagramUrl}> {this.state.sede.NombreInstagram}</a></Col>
                                                                </Row>

                                                            </Col>

	                                                        : ""
                                                        }

                                                        {this.state.sede.FacebookUrl !== "" ?
                                                            <Col sm={12} md={4}>
                                                                <Row className="justify-content-md-center text-social">
                                                                    <Col sm={12} md={2} ><h4 className="no-margin-mobile"><i className="fa fa-facebook" aria-hidden="true" /></h4></Col>
                                                                    <Col sm={12} md={10} ><a target="_blank" href={this.state.sede.FacebookUrl}> {this.state.sede.NombreFacebook}</a></Col>
                                                                </Row>

                                                            </Col>
	                                                         : ""
                                                        }

                                                       
                                                        {this.state.sede.TwitterUrl !== "" ?
                                                            <Col sm={12} md={4}>
                                                                <Row className="justify-content-md-center text-social">
                                                                    <Col sm={12} md={2} ><h4 className="no-margin-mobile"><i className="fa fa-twitter" aria-hidden="true" /></h4></Col>
                                                                    <Col sm={12} md={10} ><a target="_blank" href={this.state.sede.TwitterUrl}> {this.state.sede.NombreTwitter}</a></Col>
                                                                </Row>

                                                            </Col>
	                                                             : ""
                                                        }
                                                    </Row>
                                                    {this.state.sede.Correo !== "" ?
                                                    <Row className=" p-2 m-0">

                                                        <Col sm={12} md={4}>
                                                            <Row className="justify-content-md-center text-social">
                                                                    <Col sm={12} md={2} ><h4 className="no-margin-mobile"><i className="fa fa-envelope" aria-hidden="true" /></h4></Col>
                                                                <Col sm={12} md={10} > {this.state.sede.Correo}</Col>
                                                            </Row>

                                                        </Col>
                                                        </Row>
                                                        : ""
                                                    }
                                                </ListGroupItem>
                                            </ListGroup>
                                        </Tab>
                                        <Tab eventKey="recom" title={this.state.lblTips === "" ? "Tips y recomendaciones" : this.state.lblTips}>
                                            <ListGroup className="list-group-flush  ">
                                                <ListGroupItem>
                                                    <Row className="p-3 m-0">
                                                        <p> {this.state.sedeTips === "" ? this.state.sede.Tips : this.state.sedeTips}</p>
                                                    </Row>
                                                </ListGroupItem>
                                            </ListGroup>
                                        </Tab>
                                      
                                    </Tabs>
                                </ListGroupItem>
                   
                      
                    </ListGroup>
                            <Row className="p-3 m-0">
                                <Col sm={12} md={6} className="mb-1">
                                    <button className="btn btn-default btn-3d-style  btn-block" onClick={() => this.volver()} >{this.state.btnIrMapa === "" ? "Ir al mapa" : this.state.btnIrMapa}</button>

                                </Col>
                                <Col sm={12} md={6} className="mb-1">

                                    <a target="_blank" href={"https://maps.google.com?q=" + this.state.sede.Latitud + "," + this.state.sede.Longitud} className="btn btn-default btn-3d-style  btn-block" >{this.state.btnLlegar === "" ? "Como llegar" : this.state.btnLlegar}</a>
                                  
                                </Col>
                            </Row>
                           
               
            </div>
                    </div >
                   
                </div>
                <Footer />
            </div>

        );
    }
}


function mapStateToProps(state) {
    const { user_location, empresas, idEmpresaseleccionada,sede } = state.mapsReducer;
    const { menuLateralVisible } = state.lateralMenuReducer;
    return {
        menuLateralVisible,
        user_location,
        empresas,
        idEmpresaseleccionada,
        sede
    };
}


const mapDispatchToProps = {

    obtener_sede: mapsActions.obtener_sede,
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PerfilSede));