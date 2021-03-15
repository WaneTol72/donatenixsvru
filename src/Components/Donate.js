import '../Donate.scss';
import {Card, Col, Image, Nav, Row} from "react-bootstrap";
import { products } from "../description.js"
import ModalWindow from "./ModalWindow";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useParams,
    useRouteMatch
} from "react-router-dom";

function Card1(props) {
    let array
    let Cards
    console.log(props.server)
    console.log(props.cat)
    switch(props.server) {
        case "/classic":
            switch(props.cat) {
                case "resources":
                    array = products.Classic.goods
                    break
                case "privilege":
                    array = products.Classic.privilege
                    break
                default:
                    array = products.Classic.privilege.concat(products.Classic.goods);
            }
            break
        case "/anarchy":
            switch(props.cat) {
                case "resources":
                    array = products.Anarchy.goods
                    break
                case "privilege":
                    array = products.Anarchy.privilege
                    break
                default:
                    array = products.Anarchy.privilege.concat(products.Anarchy.goods);
            }
            break
        case "/creative":
            switch(props.cat) {
                case "resources":
                    array = products.Creative.goods
                    break
                case "privilege":
                    array = products.Creative.privilege
                    break
                default:
                    array = products.Creative.privilege.concat(products.Creative.goods);
            }
            break
        default:
            array = products.Classic.goods
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
function Magaz(props) {
    let { privilegeId } = useParams();
    return (
            <div className="pr-4 pl-4 pt-2 w-50 h-50 bg1  mb-5 mr-auto ml-auto">
                <Row>
                    <Card1 server={props.server} cat={privilegeId}/>
                </Row>
            </div>
    )
}

function Products() {
    let { path, url } = useRouteMatch();
    console.log("Path ", path, "url ", url)
    return (
        <>
        <div className="mt-2 d-flex mr-auto ml-auto">
            <Nav className="pb-1 mr-auto ml-auto">
                <NavLink className="nav-link category h5 font-weight-light mb-0" activeClassName="black text-white NavButton1"  to={`${url}/all`}>ВСЕ</NavLink>
                <NavLink className="nav-link category h5 font-weight-light mb-0" activeClassName="black text-white NavButton1" to={`${url}/resources`}>РЕСУРСЫ</NavLink>
                <NavLink className="nav-link category h5 font-weight-light mb-0" activeClassName="black text-white NavButton1" to={`${url}/privilege`}>ПРИВИЛЕГИИ</NavLink>
            </Nav>
        </div>
    <Switch>
        <Route path={`${path}/:privilegeId`}>
            <Magaz server={url}/>
        </Route>
    </Switch>
    </>
    )
}
function Donate() {

        return (
            <>
                <Router>
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
                </Router>
            </>
);
}
export default Donate;
