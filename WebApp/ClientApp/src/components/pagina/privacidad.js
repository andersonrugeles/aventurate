import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Carousel, Row, Col, Image } from 'react-bootstrap';
import Footer from '../footer';
import Header from '../header';
import { loader } from '../helpers/loader';
import { connect } from 'react-redux';
import { HeaderActions } from '../header/actions';
import { withRouter } from "react-router-dom";
import translate from "../helpers/translate";


class Privacidad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lblSiguenos: '',
            btnIrMapa: '',
            lblTitulo1: '',
            lblText1: '',
            lblTitulo2: '',
            lblText2: '',
            lblTitulo3: '',
            lblText3: '',
            lblText4: '',
            lblTitulo5: '',
            lblText5: '',
            lblTitulo6: '',
            lblText6: '',
            lblTitulo7: '',
            lblText7:''
        };
        this.traducir = this.traducir.bind(this);



    }
    async traducir() {
        loader.show();
        if (localStorage.getItem('lenguaje') === 'español') {
            this.setState({
                lblSiguenos: await translate('Siguenos en nuestras redes', { to: "es", engine: "libre" }),
                btnIrMapa: await translate('Ir al mapa', { to: "es", engine: "libre" }),
                lblTitulo1: await translate('POLÍTICA DE PRIVACIDAD', { to: "es", engine: "libre" }),
                lblText1: await translate('El presente Política de Privacidad establece los términos en que Aventúrate usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.', { to: "es", engine: "libre" }),
                lblTitulo2: await translate('Información que es recogida', { to: "es", engine: "libre" }),
                lblText2: await translate('Nuestro sitio web podrá recoger información personal, por ejemplo: Nombre, información de contacto como su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.', { to: "es", engine: "libre" }),
                lblTitulo3: await translate('Uso de la información recogida', { to: "es", engine: "libre" }),
                lblText3: await translate('Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios. Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.', { to: "es", engine: "libre" }),
                lblText4: await translate('Aventúrate está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.', { to: "es", engine: "libre" }),
                lblTitulo5: await translate('Cookies', { to: "es", engine: "libre" }),
                lblText5: await translate('Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente. Otra función que tienen las cookies es que con ellas la web pueden reconocerte individualmente y por tanto brindarte el mejor servicio personalizado de su web.Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia.Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente.Usted puede eliminar las cookies en cualquier momento desde su ordenador.Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, estás no dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente.Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan cookies automáticamente pues sirve para tener un mejor servicio web.También usted puede cambiar la configuración de su ordenador para declinar las cookies.Si se declinan es posible que no pueda utilizar algunos de nuestros servicios.', { to: "es", engine: "libre" }),
                lblTitulo6: await translate('Enlaces a Terceros', { to: "es", engine: "libre" }),
                lblText6: await translate('Este sitio web pudiera contener en laces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.', { to: "es", engine: "libre" }),
                lblTitulo7: await translate('Control de su información personal', { to: "es", engine: "libre" }),
                lblText7: await translate('En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web. Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico. En caso de que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento. Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial. Aventúrate Se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.', { to: "es", engine: "libre" }),
            });
        } else if (localStorage.getItem('lenguaje') === 'ingles') {
            this.setState({
                lblSiguenos: await translate('Siguenos en nuestras redes', { to: "en", engine: "libre" }),
                btnIrMapa: await translate('Ir al mapa', { to: "en", engine: "libre" }),
                lblTitulo1: await translate('POLÍTICA DE PRIVACIDAD', { to: "en", engine: "libre" }),
                lblText1: await translate('El presente Política de Privacidad establece los términos en que Aventúrate usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.', { to: "en", engine: "libre" }),
                lblTitulo2: await translate('Información que es recogida', { to: "en", engine: "libre" }),
                lblText2: await translate('Nuestro sitio web podrá recoger información personal, por ejemplo: Nombre, información de contacto como su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.', { to: "en", engine: "libre" }),
                lblTitulo3: await translate('Uso de la información recogida', { to: "en", engine: "libre" }),
                lblText3: await translate('Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios. Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.', { to: "en", engine: "libre" }),
                lblText4: await translate('Aventúrate está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.', { to: "en", engine: "libre" }),
                lblTitulo5: await translate('Cookies', { to: "en", engine: "libre" }),
                lblText5: await translate('Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente. Otra función que tienen las cookies es que con ellas la web pueden reconocerte individualmente y por tanto brindarte el mejor servicio personalizado de su web.Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia.Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente.Usted puede eliminar las cookies en cualquier momento desde su ordenador.Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, estás no dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente.Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan cookies automáticamente pues sirve para tener un mejor servicio web.También usted puede cambiar la configuración de su ordenador para declinar las cookies.Si se declinan es posible que no pueda utilizar algunos de nuestros servicios.', { to: "en", engine: "libre" }),
                lblTitulo6: await translate('Enlaces a Terceros', { to: "en", engine: "libre" }),
                lblText6: await translate('Este sitio web pudiera contener en laces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.', { to: "en", engine: "libre" }),
                lblTitulo7: await translate('Control de su información personal', { to: "en", engine: "libre" }),
                lblText7: await translate('En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web. Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico. En caso de que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento. Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial. Aventúrate Se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.', { to: "en", engine: "libre" }),
            });
        }
        loader.hide();
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
                                                    <h5><b>{this.state.lblTitulo1 === "" ? "POLÍTICA DE PRIVACIDAD" : this.state.lblTitulo1}</b> </h5>

                                                    <p className="text-justify "><h6>{this.state.lblText1 === "" ? "El presente Política de Privacidad establece los términos en que Aventúrate usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios." : this.state.lblText1}</h6></p>
                                                    <h5><b>{this.state.lblTitulo2 === "" ? "Información que es recogida" : this.state.lblTitulo2}</b></h5>
                                                    <p className="text-justify "><h6>{this.state.lblText2 === "" ? "Nuestro sitio web podrá recoger información personal, por ejemplo: Nombre, información de contacto como su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación." : this.state.lblText2}</h6></p>
                                                    <h5><b>{this.state.lblTitulo3 === "" ? "Uso de la información recogida" : this.state.lblTitulo3}</b></h5>
                                                    <p className="text-justify "><h6>{this.state.lblText3 === "" ? "Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios. Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento." : this.state.lblText3}</h6></p>
                                                    <p className="text-justify "><h6>Aventúrate {this.state.lblText4 === "" ? "está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado." : this.state.lblText4}</h6></p>
                                                    <h5><b>{this.state.lblTitulo5 === "" ? "Cookies" : this.state.lblTitulo5}</b> </h5>

                                                    <p className="text-justify "><h6>{this.state.lblText5 === "" ? "Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente. Otra función que tienen las cookies es que con ellas la web pueden reconocerte individualmente y por tanto brindarte el mejor servicio personalizado de su web.Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente. Usted puede eliminar las cookies en cualquier momento desde su ordenador. Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, estás no dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente. Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan cookies automáticamente pues sirve para tener un mejor servicio web. También usted puede cambiar la configuración de su ordenador para declinar las cookies. Si se declinan es posible que no pueda utilizar algunos de nuestros servicios." : this.state.lblText5}</h6></p>
                                                  
                                                    <h5><b>{this.state.lblTitulo6 === "" ? "Enlaces a Terceros" : this.state.lblTitulo6}</b> </h5>
                                                    <p className="text-justify "><h6>{this.state.lblText6 === "" ? "Este sitio web pudiera contener en laces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas." : this.state.lblText6}</h6></p>
                                                    <h5><b>{this.state.lblTitulo7 === "" ? "Control de su información personal" : this.state.lblTitulo7}</b> </h5>
                                                    <p className="text-justify "><h6>{this.state.lblText7 === "" ? "En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web. Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico. En caso de que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento. Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial. Aventúrate Se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento." : this.state.lblText7}</h6></p>
                                                      

                                                </ListGroupItem>
                                               

                                            </ListGroup>

                                        </Col>
                                        <Col sm={12} md={4} className="justify-content-center ">
                                            <ListGroup variant="flush">
                                                <ListGroup.Item><h5><u>{this.state.lblSiguenos === "" ? "Siguenos en nuestras redes" : this.state.lblSiguenos}</u></h5></ListGroup.Item>
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
                                                        <button className="btn btn-default btn-3d-style  btn-block" onClick={() => this.volver()} >{this.state.btnIrMapa === "" ? "Ir al mapa" : this.state.btnIrMapa} </button>
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




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Privacidad));