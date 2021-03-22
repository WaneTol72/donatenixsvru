import React, {Component, useState} from "react";
import {useParams} from "react-router-dom";
import {Card, Col, Image, Row} from "react-bootstrap";
import ModalWindow from "./ModalWindow";

function GetCards(props) {

    const [loading, setLoading] = useState(true);
    const imageLoaded = () => {setLoading(false)}
    const { privilegeId } = useParams();
    if (props.object !== undefined) {
        function Cards(props)  {
            return (
                props.arr.map((variant, idx) => (
                    <Col lg={6} key={idx}>
                        <Card className="mb-4 w-100">
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
                                            shp_product_id={variant.shp_product_id}
                                            picture={variant.iconurl}/>
                                        <p className="mb-0">{variant.producttype}</p>
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
                                                className="imgCard"
                                                height="auto"
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
                    <Cards arr={cat()} />
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

class CardSpawn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            server: props.server
        }
    }
    async componentDidMount() {
        const server = this.state.server === "/classic" ? "classic": this.state.server === "/creative" ? "creative" : this.state.server === "/anarchy" ? "anarchy" : "classic"
        async function getGoods(url) {
            try {
                console.log(`Запрос JSON... ${url}action=getgoods&server=${server}`);
                const response = await fetch(`${url}action=getgoods&server=${server}`);
                const data = await response.json();
                if (data.response !== "error") {
                    console.log("Статус ответа: " + data.response + ", данные получены успешно");
                    return data.body
                }
            } catch (err) {
                console.error('Ошибка:', err);
            }
        }
        await this.setState({data: await getGoods(url)})
    }

    render() {
        return (<GetCards object={this.state.data} />);
    }
}
export default CardSpawn