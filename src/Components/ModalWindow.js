import {Modal, Button, Image, Row, Col, Accordion, Card, Form} from 'react-bootstrap';
import {Component} from "react";


class ModalWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            price: props.price,
            nickname: '',
            email: 'test@gmail.com',
        };
        this.handleChangeNick = this.handleChangeNick.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeEmail(event) {
            this.setState({email: event.target.value});
    }
    handleChangeNick(event) {
            this.setState({nickname: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault()
        if (this.state.nickname !== '') {
            fetch("https://api.nixsv.ru/generatelink.php?nickname=" + this.state.nickname + "&sum=" + this.state.price + "&email=" + this.state.email)
                .then(
                    (response) => {return response.json()})
                .then(
                    (data) => {
                        console.log(data)
                        document.location.href = data.url
                    }).catch((err) => console.log(err));
        } else {
            alert("пидарок, заполни никнейм или сумму")
        }
    }
    handleShow = e => this.setState({show: true});
    handleClose = e => this.setState({show: false});
    render() {
        return (
            <>
                <Button className="mt-2 black" size="md" variant="dark" onClick={this.handleShow}>КУПИТЬ</Button>
                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                <form onSubmit={this.handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Покупка</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center">
                        <Image
                            src={this.props.picture}
                            height={200}
                        />
                        <h5>{this.props.price}.00 ₽</h5>
                        <h2 style={{color: this.props.titleColor}}>{this.props.title}</h2>
                        <h5>Описание:</h5>
                        <p className="text-monospace">{this.props.description}</p>
                        {
                            this.props.descr ?
                            <Accordion>
                                <Card >
                                    <Card.Header className="text-center">
                                        <Accordion.Toggle className="font-weight-bold" as={Button} variant="link" eventKey="0">
                                            Описание
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body className="text-left">
                                            <p style={{whiteSpace: "pre-line"}}>{this.props.descr}</p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion> : <p></p>

                        }
                        <Row className="mt-4 mb-4 mr-auto ml-auto w-75">
                            <Col lg={6}><h5>Email: <Form.Control
                                className="text-center w-50 d-inline-block"
                                id="email"
                                type="email"
                                placeholder="test@mail.ru"
                                size={10}
                                maxLength="32"
                                required
                                onChange={this.handleChangeEmail}
                            />
                            </h5></Col>
                            <Col lg={6}>
                                <h5>Никнейм: <Form.Control
                                            className="text-center w-50 d-inline-block"
                                            id="nickname"
                                            type="text"
                                            placeholder="Ник"
                                            pattern="[A-Za-z0-9]+"
                                            size="md"
                                            maxLength="16"
                                            required
                                            onChange={this.handleChangeNick}
                                        />
                            </h5>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer className="d-block text-center">
                        <Button size="lg"  type="submit" variant="dark">Оплатить</Button>
                        <Form.Check
                            className="d-inline-block"
                            type="checkbox"
                            id="autoSizingCheck"
                            label="Remember me"
                            required
                        />
                    </Modal.Footer>
                </form>
                </Modal>
            </>
        );
    }
}
export default ModalWindow;