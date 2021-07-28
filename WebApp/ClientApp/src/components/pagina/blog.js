import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Carousel, Row, Col, Image } from 'react-bootstrap';
import Footer from '../footer';
import Header from '../header';
import { loader } from '../helpers/loader';
import { connect } from 'react-redux';
import { HeaderActions } from '../header/actions';
import { withRouter } from "react-router-dom";
import translate from "../helpers/translate";

class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lblPregunta1: '',
            lblTexto1: '',
            lblPregunta2: '',
            lblTexto2: '',
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
                lblPregunta1: await translate('¿PORQUE VIAJAR AL DEPARTAMENTO DEL HUILA?', { to: "es", engine: "libre" }),
                lblTexto1: await translate("Cuando hablamos de viajar por Colombia dentro de nuestra selección escogemos al Departamento del Huila quien cuenta con una gran variedad de destinos turísticos los cuales valen la pena visitar.Dentro de la gran variedad que podremos encontrar vamos desde turismo de cultura con el Parque Arqueológico de San Agustín, con su cultura plasmada en las estatuas que consagran una gran historia de nuestros antepasados.Luego pasamos por las ardidas tierras del Desierto de la Tatacoa en el municipio de Villavieja, donde encontraremos hermosos paisajes con la variedad de colores de la tierra de este magnífico destino que en las noches contrasta su belleza sin igual resaltando con un cielo estrellado catalogado por muchos turistas como el sitio predilecto para el turismo astronómico.Continuando con este viaje de atractivos sitios encontraremos en el municipio de Paicol donde encontraremos la Caja de Agua una cueva donde las aguas del imponente Río Páez bañan sus pintorescos paisajes, en los que profundas cavernas y centenarios caminos reales cruzan el maravilloso escenario donde el pueblo de Paicol fue construido; seguramente sin que sus fundadores imaginaran que la confluencia de tantos atractivos naturales lo convertirían en un punto de encuentro de aventureros amantes del rafting, la espeleología, el rappel y el senderismo.Y si lo tuyo es la Aventura Extrema en el Municipio de Pitalito encontraremos el lugar perfecto para realizar actividades desde la altura del municipio de Isnos pasando por las imponentes cascada el Mortiño, Salto de Bordones y el Rio Magdalena, donde suspendidos de una hamaca, cuerda, columpio entre otros elementos que harán de tu visita una experiencia inolvidable.", { to: "es", engine: "libre" }),
                lblPregunta2: await translate('¿QUE VISITAR EN COLOMBIA?', { to: "es", engine: "libre" }),
                lblTexto2: await translate('Si de viajar se trata y estás buscando a donde viajar por Colombia, acampar en el desierto con los planes y precios ajustándose a la comodidad del aventurero.El desierto de la tatacoa se ubica en el departamento del Huila, y la segunda zona desértica más extensa de Colombia. para poder llegar al desierto la tatacoa desde la capital bambuquera de Colombia a 38 kilómetros al NORTE.Lo más curioso de este desierto, es que al principio era una zona vegetal muy poblada, sin embargo, con los cambios climáticos se convirtió en lo que es hoy en día. Aquí priman los colores cafés, ocres y grises, lo que le da un aspecto muy exótico, con sus montañas de tierra; entre los 50 centímetros y 4 metros de altura, que forman curiosos laberintos que invitan a perderse en ellos.La Tatacoa tiene dos colores característicos: ocre en el sector del Cuzco y gris en la zona de Los Hoyos.Constituye un paisaje geográfico compuesto por formaciones geológicas. Su área comprende una extensión de 330 km². Está ubicado cerca de la zona urbana del municipio de Villavieja.Con un cálido clima la tatacoa ha logrado posicionarse como uno de los principales atractivos turísticos del Huila no solo por la cercanía a la capital huilense si no por destacarse con su flora y fauna.Para los amantes de la aventura campar una noche en medio del desierto de la tatacoa es una experiencia mágica e inolvidable por la conexión con los cielos estrellados las cuales se pueden visualizar a simple vista.Para los amantes de la astronomía este desierto es un lugar perfecto para ver estrellas en Colombia debido a su baja contaminación sonora y lumínica. Desde aquí se pueden observar 88 constelaciones, lluvias de meteoros y diferentes eventos astronómicos.', { to: "es", engine: "libre" })
            });


        } else if (localStorage.getItem('lenguaje') === 'ingles') {
            this.setState({
                lblPregunta1: await translate('¿PORQUE VIAJAR AL DEPARTAMENTO DEL HUILA?', { to: "en", engine: "libre" }),
                lblTexto1: await translate("Cuando hablamos de viajar por Colombia dentro de nuestra selección escogemos al Departamento del Huila quien cuenta con una gran variedad de destinos turísticos los cuales valen la pena visitar.Dentro de la gran variedad que podremos encontrar vamos desde turismo de cultura con el Parque Arqueológico de San Agustín, con su cultura plasmada en las estatuas que consagran una gran historia de nuestros antepasados.Luego pasamos por las ardidas tierras del Desierto de la Tatacoa en el municipio de Villavieja, donde encontraremos hermosos paisajes con la variedad de colores de la tierra de este magnífico destino que en las noches contrasta su belleza sin igual resaltando con un cielo estrellado catalogado por muchos turistas como el sitio predilecto para el turismo astronómico.Continuando con este viaje de atractivos sitios encontraremos en el municipio de Paicol donde encontraremos la Caja de Agua una cueva donde las aguas del imponente Río Páez bañan sus pintorescos paisajes, en los que profundas cavernas y centenarios caminos reales cruzan el maravilloso escenario donde el pueblo de Paicol fue construido; seguramente sin que sus fundadores imaginaran que la confluencia de tantos atractivos naturales lo convertirían en un punto de encuentro de aventureros amantes del rafting, la espeleología, el rappel y el senderismo.Y si lo tuyo es la Aventura Extrema en el Municipio de Pitalito encontraremos el lugar perfecto para realizar actividades desde la altura del municipio de Isnos pasando por las imponentes cascada el Mortiño, Salto de Bordones y el Rio Magdalena, donde suspendidos de una hamaca, cuerda, columpio entre otros elementos que harán de tu visita una experiencia inolvidable.", { to: "en", engine: "libre" }),
                lblPregunta2: await translate('¿QUE VISITAR EN COLOMBIA?', { to: "en", engine: "libre" }),
                lblTexto2: await translate('Si de viajar se trata y estás buscando a donde viajar por Colombia, acampar en el desierto con los planes y precios ajustándose a la comodidad del aventurero.El desierto de la tatacoa se ubica en el departamento del Huila, y la segunda zona desértica más extensa de Colombia. para poder llegar al desierto la tatacoa desde la capital bambuquera de Colombia a 38 kilómetros al NORTE.Lo más curioso de este desierto, es que al principio era una zona vegetal muy poblada, sin embargo, con los cambios climáticos se convirtió en lo que es hoy en día. Aquí priman los colores cafés, ocres y grises, lo que le da un aspecto muy exótico, con sus montañas de tierra; entre los 50 centímetros y 4 metros de altura, que forman curiosos laberintos que invitan a perderse en ellos.La Tatacoa tiene dos colores característicos: ocre en el sector del Cuzco y gris en la zona de Los Hoyos.Constituye un paisaje geográfico compuesto por formaciones geológicas. Su área comprende una extensión de 330 km². Está ubicado cerca de la zona urbana del municipio de Villavieja.Con un cálido clima la tatacoa ha logrado posicionarse como uno de los principales atractivos turísticos del Huila no solo por la cercanía a la capital huilense si no por destacarse con su flora y fauna.Para los amantes de la aventura campar una noche en medio del desierto de la tatacoa es una experiencia mágica e inolvidable por la conexión con los cielos estrellados las cuales se pueden visualizar a simple vista.Para los amantes de la astronomía este desierto es un lugar perfecto para ver estrellas en Colombia debido a su baja contaminación sonora y lumínica. Desde aquí se pueden observar 88 constelaciones, lluvias de meteoros y diferentes eventos astronómicos.', { to: "en", engine: "libre" })
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
                                    <Row>
                                    <Col sm={12} md={5} >
                                        
                                            <Image src="https://i.imgur.com/UvcCoFi.jpg" fluid />
                                    </Col>
                                        <Col sm={12} md={7} className="justify-content-center ">
                                            <h5>{this.state.lblPregunta1 === "" ? "¿PORQUE VIAJAR AL DEPARTAMENTO DEL HUILA?"
                                                : this.state.lblPregunta1}</h5>
                                            <p className="text-justify "><h6>
                                                {
                                                    this.state.lblTexto1 === ""
                                                        ? "Cuando hablamos de viajar por Colombia dentro de nuestra selección escogemos al Departamento del Huila quien cuenta con una gran variedad de destinos turísticos los cuales valen la pena visitar.Dentro de la gran variedad que podremos encontrar vamos desde turismo de cultura con el Parque Arqueológico de San Agustín, con su cultura plasmada en las estatuas que consagran una gran historia de nuestros antepasados.Luego pasamos por las ardidas tierras del Desierto de la Tatacoa en el municipio de Villavieja, donde encontraremos hermosos paisajes con la variedad de colores de la tierra de este magnífico destino que en las noches contrasta su belleza sin igual resaltando con un cielo estrellado catalogado por muchos turistas como el sitio predilecto para el turismo astronómico.Continuando con este viaje de atractivos sitios encontraremos en el municipio de Paicol donde encontraremos la Caja de Agua una cueva donde las aguas del imponente Río Páez bañan sus pintorescos paisajes, en los que profundas cavernas y centenarios caminos reales cruzan el maravilloso escenario donde el pueblo de Paicol fue construido; seguramente sin que sus fundadores imaginaran que la confluencia de tantos atractivos naturales lo convertirían en un punto de encuentro de aventureros amantes del rafting, la espeleología, el rappel y el senderismo.Y si lo tuyo es la Aventura Extrema en el Municipio de Pitalito encontraremos el lugar perfecto para realizar actividades desde la altura del municipio de Isnos pasando por las imponentes cascada el Mortiño, Salto de Bordones y el Rio Magdalena, donde suspendidos de una hamaca, cuerda, columpio entre otros elementos que harán de tu visita una experiencia inolvidable."
                                                        : this.state.lblTexto1}
                                                </h6></p>

                                        </Col>
                                        </Row>
                                </ListGroupItem>

                                <ListGroupItem>
                                    <Row>
                                    <Col sm={12} md={7} className="justify-content-center ">
                                            <h5> {this.state.lblPregunta2 === "" ? "¿QUE VISITAR EN COLOMBIA?"
                                                : this.state.lblPregunta2}</h5>
                                            <p className="text-justify "> <h6>{this.state.lblTexto2 === "" ? "Si de viajar se trata y estás buscando a donde viajar por Colombia, acampar en el desierto con los planes y precios ajustándose a la comodidad del aventurero.El desierto de la tatacoa se ubica en el departamento del Huila, y la segunda zona desértica más extensa de Colombia. para poder llegar al desierto la tatacoa desde la capital bambuquera de Colombia a 38 kilómetros al NORTE.Lo más curioso de este desierto, es que al principio era una zona vegetal muy poblada, sin embargo, con los cambios climáticos se convirtió en lo que es hoy en día. Aquí priman los colores cafés, ocres y grises, lo que le da un aspecto muy exótico, con sus montañas de tierra; entre los 50 centímetros y 4 metros de altura, que forman curiosos laberintos que invitan a perderse en ellos.La Tatacoa tiene dos colores característicos: ocre en el sector del Cuzco y gris en la zona de Los Hoyos.Constituye un paisaje geográfico compuesto por formaciones geológicas. Su área comprende una extensión de 330 km². Está ubicado cerca de la zona urbana del municipio de Villavieja.Con un cálido clima la tatacoa ha logrado posicionarse como uno de los principales atractivos turísticos del Huila no solo por la cercanía a la capital huilense si no por destacarse con su flora y fauna.Para los amantes de la aventura campar una noche en medio del desierto de la tatacoa es una experiencia mágica e inolvidable por la conexión con los cielos estrellados las cuales se pueden visualizar a simple vista.Para los amantes de la astronomía este desierto es un lugar perfecto para ver estrellas en Colombia debido a su baja contaminación sonora y lumínica. Desde aquí se pueden observar 88 constelaciones, lluvias de meteoros y diferentes eventos astronómicos."
                                                : this.state.lblTexto2}</h6></p>

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