import '../Donate.scss';
import { Card, Col, Image, Nav, Row} from "react-bootstrap";
import { privilege, goods } from "../description.js"
import ModalWindow from "./ModalWindow";
import {Component} from "react";

function Card1(props) {
    let array
    let Cards
    switch(props.id) {
        case "#features":
            array = goods
            break
        case "#pricing":
            array = goods
            break
        default:
            array = privilege.concat(goods);
    }
         Cards = array.map((variant, idx) => (
            <Col lg={6} key={idx} >
                <Card
                    className="mb-4 w-100"
                >
                    <Card.Header className=" font-weight-lighter text-white black h4">{variant.title}</Card.Header>
                    <Card.Body className="text-left">

                        <Row>
                            <Col lg={8}>
                                <Card.Text className="font-weight-bold">{variant.price}.00 ₽</Card.Text>
                                <ModalWindow
                                    titleColor={variant.titleColor}
                                    title={variant.title}
                                    description={variant.description}
                                    perks={variant.perks}
                                    commands={variant.commands}
                                    pets={variant.pets}
                                    price={variant.price}
                                    picture={variant.picture}/>
                            </Col>
                            <Col lg={4}><Image
                                src={variant.picture}
                                height={90}
                            /></Col>
                        </Row>

                    </Card.Body>
                </Card>
            </Col>
        ));
        return Cards;
}


class Donate extends Component{
    constructor(props) {
        super(props);
        this.state = {
            page: "#home"
        };
        this.handleChangeCat = this.handleChangeCat.bind(this);
    }
    handleChangeCat(event) {
        this.setState({page: event.target.hash});
        console.log(this.state.page)
    }
    render() {
        return (
            <>
                <main className="text-center ">
                    <div className="mt-2 d-flex mr-auto ml-auto">
                        <Nav className="pb-1 mr-auto ml-auto">
                            <Nav.Link onClick={this.handleChangeCat}
                                      className={
                                          this.state.page === "#all" ? "black text-white h5 font-weight-light mb-0" : "text-dark h5 font-weight-light NavButton1 mb-0"
                                      }
                                      href="#all">ВСЕ</Nav.Link>
                            <Nav.Link onClick={this.handleChangeCat} className={this.state.page === "#features" ? "black text-white h5 font-weight-light mb-0" : "text-dark h5 font-weight-light NavButton1 mb-0"} href="#features">РЕСУРСЫ</Nav.Link>
                            <Nav.Link onClick={this.handleChangeCat} className={this.state.page === "#pricing" ? "black text-white h5 font-weight-light mb-0" : "text-dark h5 font-weight-light NavButton1 mb-0"} href="#pricing">ПЕНИСЫ</Nav.Link>
                        </Nav>
                    </div>
                    <div className="pr-4 pl-4 pt-2 w-50 h-50 bg1  mb-5 mr-auto ml-auto">
                        <Row>
                                <Card1 id={this.state.page}/>
                        </Row>
                    </div>
                </main>
            </>
        );
    }
}
export default Donate;
