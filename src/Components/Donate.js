import React, {Component, useState} from "react";
import {Switch, Route, NavLink, useRouteMatch, useParams, HashRouter} from "react-router-dom";
import {Card, Col, Image, Nav, Row} from "react-bootstrap";
import ModalWindow from "./ModalWindow";
import Header from "./Header";
import Footer from "./Footer";
import '../Donate.scss';

function GenCards(props) {

    const [loading, setLoading] = useState(true);
    const imageLoaded = () => {setLoading(false)}
    const { privilegeId } = useParams();
    if (props.object !== undefined) {
        function Carrrd(props)  {
            return (
                props.arr.map((variant, idx) => (
                    <Col lg={6} key={idx}>
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
                                    <Col lg={4}>
                                        <div className="lds-ellipsis" style={{display: loading ? "block" : "none"}}>
                                            <div/>
                                            <div/>
                                            <div/>
                                            <div/>
                                        </div>
                                        <div style={{display: loading ? "none" : "block"}}>
                                            <Image
                                                src={variant.iconurl}
                                                height={90}
                                                onLoad={imageLoaded}
                                            />
                                        </div>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                    </Col>
                ))
            )
        }
        function cat() {
            const arrayKey = Object.keys(props.object)
            if (privilegeId === "all" || !privilegeId) {
                const arrayKeyC = arrayKey.map((variant) => {
                    return Object.assign(props.object[variant])
                })
                return [].concat.apply([], arrayKeyC);
            }
            else if (props.object[privilegeId]) {
                    const arrayKeyC = Object.assign(props.object[privilegeId])
                    return [].concat.apply([], arrayKeyC);

            }
            else {
                return {err: "err"}
            }
        }
        if (!cat().err) {
            return (
                <>
                    <Carrrd arr={cat()} />
                </>
            );
        } else {
            return (
                <p>Нет товаров</p>
            )
        }
    }
    else {
        return <p>Нет товаров</p>
    }
}

const url = "https://api.nixsv.ru/sql.php?";

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            server: props.server
        }
    }
    async componentDidMount() {
        console.log(this.state.server)
        const server = this.state.server === "/classic" ? "classic": this.state.server === "/creative" ? "creative" : this.state.server === "/anarchy" ? "anarchy" : "classic"
        async function getGoods(url) {
            try {
                console.log(`Запрос JSON... ${url}action=getgoods&server=${server}`);
                const response = await fetch(`${url}action=getgoods&server=${server}`);
                const data = await response.json();
                if (data.response !== "error") {
                    console.log("Статус ответа: " + data.response + ", данные получены успешно");
                    return data.goods
                }
            } catch (err) {
                console.error('Ошибка:', err);
            }
        }
        await this.setState({data: await getGoods(url)})
    }

    render() {
    return (
        <>
            <GenCards object={this.state.data} />
        </>
    );
 }
}
class Cards2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            server: props.server
        }
    }
    async componentDidMount() {
        console.log(this.state.server)
        const server = this.state.server === "/classic" ? "classic": this.state.server === "/creative" ? "creative" : this.state.server === "/anarchy" ? "anarchy" : "classic"
        async function getGoods(url) {
            try {
                console.log(`Запрос JSON... ${url}action=getgoods&server=${server}`);
                const response = await fetch(`${url}action=getgoods&server=${server}`);
                const data = await response.json();
                if (data.response !== "error") {
                    console.log("Статус ответа: " + data.response + ", данные получены успешно");
                    return data.goods
                }
            } catch (err) {
                console.error('Ошибка:', err);
            }
        }
        await this.setState({data: await getGoods(url)})
    }

    render() {
        return (
            <>
                <p>Ты петуч</p>

            </>
        );
    }
}
function Products() {
    let { path, url } = useRouteMatch();
    return (
        <>
        <div className="mt-2 d-flex mr-auto ml-auto">
            <Nav className="pb-1 mr-auto ml-auto">
                <NavLink className="nav-link category h5 font-weight-light mb-0" activeClassName="black text-white CatButton"  to={`${url}/all`}>ВСЕ</NavLink>
                <NavLink className="nav-link category h5 font-weight-light mb-0" activeClassName="black text-white CatButton" to={`${url}/privilege`}>ПРИВИЛЕГИИ</NavLink>
                <NavLink className="nav-link category h5 font-weight-light mb-0" activeClassName="black text-white CatButton" to={`${url}/key`}>КЛЮЧИ ОТ КЕЙСОВ</NavLink>
                <NavLink className="nav-link category h5 font-weight-light mb-0" activeClassName="black text-white CatButton" to={`${url}/kit`}>КИТ СТАРТЫ</NavLink>
            </Nav>
        </div>
    <Switch>
        <Route exact path={path}>
            <Cards2 server={path} />
        </Route>
        <Route path={`${path}/:privilegeId`}>
            <div className="pr-4 pl-4 pt-2 w-50 h-50 bg1  mb-5 mr-auto ml-auto">
                <Row>
                    <Cards server={path} />
                </Row>
            </div>
        </Route>
    </Switch>
    </>
    )
}
    class Donate extends Component {
    render() {
        return (
            <>
                <HashRouter>
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
                </HashRouter>
            </>
        )
    }
}
export default Donate;
