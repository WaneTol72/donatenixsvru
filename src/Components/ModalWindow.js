import {Modal, Button, Image, Row, Col, Accordion, Card} from 'react-bootstrap';
import { slides } from "../description.js"
import {Component} from "react";


class ModalWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 40,
            show: false,
            nickname: '',
            mail: 'wanetols@gmail.com',
            id: 3,
            picture: slides[3].picture,
            title: slides[3].title,
            titleColor:  slides[3].titleColor,
            description: slides[3].description,
            perks: slides[3].perks,
            commands: slides[3].commands,
            pets: slides[3].pets
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeNick = this.handleChangeNick.bind(this);
    }
    handleChangeNick(event) {
        this.setState({nickname: event.target.value});
    }
    handleChange(event) {
        const idChanger = (num) => {
            this.setState({
                id: num,
                picture: slides[this.state.id].picture,
                title: slides[this.state.id].title,
                titleColor: slides[this.state.id].titleColor,
                description: slides[this.state.id].description,
                perks: slides[this.state.id].perks,
                commands: slides[this.state.id].commands,
                pets: slides[this.state.id].pets
            })
        }
        this.setState({value: event.target.value});
        event.target.value < slides[3].price ? idChanger(3) :
            event.target.value < slides[2].price ? idChanger(2) :
                event.target.value < slides[1].price ? idChanger(1) :
                    event.target.value < slides[0].price ? idChanger(0) :
                console.log(event.target.value);
    }
    handleClick = e => {
        if (this.state.nickname !== '' && this.state.value !== '') {
            let response =  fetch("https://api.nixsv.ru/generatelink.php?nickname=" + this.state.nickname + "&sum=" + this.state.value + "&email=" + this.state.mail);
            let text = response.text;
            if (response.ok && text !== "Error") {
                document.location.href = text;
            } else {
                alert("Ошибка, возможно вы не заполнили все поля правильно!");
            }
        } else {
            alert("пидарок, заполни никнейм или сумму")
        }
    }
    handleShow = e => this.setState({show: true});
    handleClose = e => this.setState({show: false});
    render() {
        return (
            <>
                <Button size="lg" variant="primary" onClick={this.handleShow}>НАЖМИ НА МЕНЯ!</Button>
                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Покупка</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center">
                        <Image
                            src={this.state.picture}
                            height={200}
                        />
                        <h2 style={{color: this.state.titleColor}}>{this.state.title}</h2>

                        <h5>Описание:</h5>
                        <p className="text-monospace">{this.state.description}</p>
                        <Accordion>
                            <Card className="bg-dark">
                                <Card.Header className="text-center">
                                    <Accordion.Toggle className="text-white font-weight-bold" as={Button} variant="link" eventKey="0">
                                        Перки:
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="text-left">
                                        <p style={{whiteSpace: "pre-line"}}>{this.state.perks}</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="bg-dark">
                                <Card.Header className="text-center">
                                    <Accordion.Toggle className="text-white font-weight-bold" as={Button} variant="link" eventKey="1">
                                        Команды:
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body className="text-left">
                                        <p style={{whiteSpace: "pre-line"}}>{this.state.commands}</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="bg-dark">
                                <Card.Header className="text-center">
                                    <Accordion.Toggle className="text-white font-weight-bold" as={Button} variant="link" eventKey="2">
                                        Петы:
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body className="text-left">
                                        <p style={{whiteSpace: "pre-line"}}>{this.state.pets}</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        <Row className="mt-4 mb-4 mr-auto ml-auto w-75">
                            <Col lg={6}><h5>Сумма: <input className="text-center" id="price" min="40" max="10000" type="textarea" placeholder="40" value={this.state.value} onChange={this.handleChange} /> Руб.</h5></Col>
                            <Col lg={6}><h5>Никнейм: <input className="text-center"  id="nickname" type="textarea" placeholder="JereZoff" name="nick" onChange={this.handleChangeNick}/></h5></Col>
                        </Row>
                        <input id="slider" type="range" min="40" max="500" value={this.state.value} onChange={this.handleChange} className="w-75"/>
                    </Modal.Body>
                    <Modal.Footer className="d-block text-center">
                        <Button size="lg" onClick={this.handleClick}  type="submit" variant="primary">Оплатить</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
export default ModalWindow;