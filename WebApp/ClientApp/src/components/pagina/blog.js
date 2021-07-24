import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Carousel, Row, Col, Image } from 'react-bootstrap';
import Footer from '../footer';
import Header from '../header';
import { loader } from '../helpers/loader';
import { connect } from 'react-redux';
import { HeaderActions } from '../header/actions';
import { withRouter } from "react-router-dom";

class Blog extends Component {

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
                                    <Col sm={12} md={5} >
                                        
                                            <Image src="https://i.imgur.com/UvcCoFi.jpg" fluid />
                                    </Col>
                                    <Col sm={12} md={7} className="justify-content-center ">
                                        <h5> ¿PORQUE VIAJAR AL DEPARTAMENTO DEL HUILA?</h5>
                                            <p className="text-justify "><h6>Cuando hablamos de viajar por Colombia dentro de nuestra selección escogemos al Departamento del Huila quien cuenta con una gran variedad de destinos turísticos los cuales valen la pena visitar.</h6></p>
                                            <p className="text-justify "><h6>Dentro de la gran variedad que podremos encontrar vamos desde turismo de cultura con el Parque Arqueológico de San Agustín, con su cultura plasmada en las estatuas que consagran una gran historia de nuestros antepasados.</h6></p>
                                            <p className="text-justify "><h6>Luego pasamos por las ardidas tierras del Desierto de la Tatacoa en el municipio de Villavieja, donde encontraremos hermosos paisajes con la variedad de colores de la tierra de este magnífico destino que en las noches contrasta su belleza sin igual resaltando con un cielo estrellado catalogado por muchos turistas como el sitio predilecto para el turismo astronómico. </h6></p>
                                            <p className="text-justify "><h6>Continuando con este viaje de atractivos sitios encontraremos en el municipio de Paicol donde encontraremos la Caja de Agua una cueva donde las aguas del imponente Río Páez bañan sus pintorescos paisajes, en los que profundas cavernas y centenarios caminos reales cruzan el maravilloso escenario donde el pueblo de Paicol fue construido; seguramente sin que sus fundadores imaginaran que la confluencia de tantos atractivos naturales lo convertirían en un punto de encuentro de aventureros amantes del rafting, la espeleología, el rappel y el senderismo.</h6></p>
                                            <p className="text-justify "><h6>Y si lo tuyo es la Aventura Extrema en el Municipio de Pitalito encontraremos el lugar perfecto para realizar actividades desde la altura del municipio de Isnos pasando por las imponentes cascada el Mortiño, Salto de Bordones y el Rio Magdalena, donde suspendidos de una hamaca, cuerda, columpio entre otros elementos que harán de tu visita una experiencia inolvidable. </h6></p>

                                        </Col>
                                        </Row>
                                </ListGroupItem>

                                <ListGroupItem>
                                    <Row>
                                    <Col sm={12} md={7} className="justify-content-center ">
                                        <h5> QUE VISITATAR EN COLOMBIA </h5>
                                            <p className="text-justify "> <h6>Si de viajar se trata y estás buscando a donde viajar por Colombia, acampar en el desierto con los planes y precios ajustándose a la comodidad del aventurero. </h6></p>
                                            <p className="text-justify "> <h6>El desierto de la tatacoa se ubica en el departamento del Huila, y la segunda zona desértica más extensa de Colombia. para poder llegar al desierto la tatacoa desde la capital bambuquera de Colombia a 38 kilómetros al NORTE.</h6></p>
                                            <p className="text-justify "> <h6>Lo más curioso de este desierto, es que al principio era una zona vegetal muy poblada, sin embargo, con los cambios climáticos se convirtió en lo que es hoy en día. Aquí priman los colores cafés, ocres y grises, lo que le da un aspecto muy exótico, con sus montañas de tierra; entre los 50 centímetros y 4 metros de altura, que forman curiosos laberintos que invitan a perderse en ellos.</h6></p>
                                            <p className="text-justify "> <h6>La Tatacoa tiene dos colores característicos: ocre en el sector del Cuzco y gris en la zona de Los Hoyos. </h6></p>
                                            <p className="text-justify "> <h6>Constituye un paisaje geográfico compuesto por formaciones geológicas. Su área comprende una extensión de 330 km². Está ubicado cerca de la zona urbana del municipio de Villavieja. </h6></p>
                                            <p className="text-justify "> <h6>Con un cálido clima la tatacoa ha logrado posicionarse como uno de los principales atractivos turísticos del Huila no solo por la cercanía a la capital huilense si no por destacarse con su flora y fauna. </h6></p>
                                            <p className="text-justify "> <h6>Para los amantes de la aventura campar una noche en medio del desierto de la tatacoa es una experiencia mágica e inolvidable por la conexión con los cielos estrellados las cuales se pueden visualizar a simple vista. </h6></p>
                                            <p className="text-justify "> <h6>Para los amantes de la astronomía este desierto es un lugar perfecto para ver estrellas en Colombia debido a su baja contaminación sonora y lumínica. Desde aquí se pueden observar 88 constelaciones, lluvias de meteoros y diferentes eventos astronómicos.</h6></p>

                                    </Col>
                                    <Col sm={12} md={5} >

                                            <Image src="https://i.imgur.com/BKsinds.jpg" fluid />
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




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Blog));