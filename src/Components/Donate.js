import '../Donate.scss';
import {Card, Col, Image, Nav, Row} from "react-bootstrap";
import ModalWindow from "./ModalWindow";
import React, {Component} from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch, BrowserRouter, useParams
} from "react-router-dom";

function Cards(props) {
    let { privilegeId } = useParams();
        function cat() {
            const arrayKey = Object.keys(props.object)
            if (privilegeId === "all") {
                const arrayKeyC = arrayKey.map((variant, idx) => {
                    return Object.assign(props.object[variant])
                })
                return [].concat.apply([], arrayKeyC);
            }
            else {
                if (props.object[privilegeId]) {
                    const arrayKeyC = Object.assign(props.object[privilegeId])
                    return [].concat.apply([], arrayKeyC);
                }
                else {
                    return [{name: "пусто"}]
                }
            }
            }
        return (
            cat().map((variant, idx) => (
                <Col lg={6} key={idx} >
                    <Card
                        className="mb-4 w-100"
                    >
                        <Card.Header className=" font-weight-lighter text-white black h4">{variant.name}</Card.Header>
                        <Card.Body className="text-left">

                            <Row>
                                <Col lg={8}>
                                    <Card.Text className="font-weight-bold">{variant.price}.00 ₽</Card.Text>
                                    <ModalWindow
                                        titleColor={variant.titleColor}
                                        title={variant.name}
                                        description={variant.shortdescr}
                                        descr={variant.descr}
                                        price={variant.price}
                                        picture={variant.iconurl}/>
                                </Col>
                                <Col lg={4}><Image
                                    src={variant.iconurl}
                                    height={90}
                                /></Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
            ))
        )
}
const url = "https://api.nixsv.ru/sql.php?server=";
class Card1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                iconurl: "../logo/GOLD.webp"
            }],
            server: props.server
        }
    }
    async componentDidMount() {
        const server = this.state.server === "/classic" ? "classic": this.state.server === "/creative" ? "creative" : this.state.server === "/anarchy" ? "anarchy" : "classic"
        async function serverStatus(url) {
            try {
                console.log("Запрос JSON... " + url + server);
                const response = await fetch(url + server);
                const data = await response.json();
                console.log(data.goods);
                return data.goods
            } catch (err) {
                console.error('Ошибка:', err);
            }
        }
        await this.setState({data: await serverStatus(url)})
    }

    render() {
    return (
        <Cards object={this.state.data} />
    );
 }
}
function Magaz(props) {
    return (
            <div className="pr-4 pl-4 pt-2 w-50 h-50 bg1  mb-5 mr-auto ml-auto">
                <Row>
                    <Card1 server={props.server} />
                </Row>
            </div>
    )
}

function Products() {
    let { path, url } = useRouteMatch();
    return (
        <>
        <div className="mt-2 d-flex mr-auto ml-auto">
            <Nav className="pb-1 mr-auto ml-auto">
                <NavLink className="nav-link category h5 font-weight-light mb-0" activeClassName="black text-white NavButton1"  to={`${url}/all`}>ВСЕ</NavLink>
                <NavLink className="nav-link category h5 font-weight-light mb-0" activeClassName="black text-white NavButton1" to={`${url}/privilege`}>ПРИВИЛЕГИИ</NavLink>
                <NavLink className="nav-link category h5 font-weight-light mb-0" activeClassName="black text-white NavButton1" to={`${url}/key`}>КЛЮЧИ ОТ КЕЙСОВ</NavLink>
                <NavLink className="nav-link category h5 font-weight-light mb-0" activeClassName="black text-white NavButton1" to={`${url}/kit`}>КИТ СТАРТЫ</NavLink>

            </Nav>
        </div>
    <Switch>
        <Route path={`${path}/:privilegeId`}>
            <Magaz server={path}/>
        </Route>
    </Switch>
    </>
    )
}
function Donate() {

        return (
            <>
                <BrowserRouter>
                <Header />
                    <main className="text-center ">
                    <Switch>
                        <Route path="/classic">
                            <Products/>
                        </Route>
                        <Route path="/creative">
                            <Products/>
                        </Route>
                        <Route path="/anarchy">
                            <Products/>
                        </Route>
                    </Switch>
                    </main>
                <Footer />
                </BrowserRouter>
            </>
);
}
export default Donate;
