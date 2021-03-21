import {Col, Image, Row} from "react-bootstrap";
import VICTOR from '../logo/VITEK.webp';
import WANE from '../logo/WANE.webp';
import BARA from '../logo/BARA.webp';
import INST from '../logo/INST.webp';
import VK from '../logo/VK.webp';
import DIS from '../logo/DIS.webp';

function Contacts(props) {
    return (
        <div className="d-block">
            <Image
                roundedCircle
                src={props.img}
                height="60"
                width="60"
                className="link-img d-inline-block mr-2"
                style={{cursor: "pointer", verticalAlign: "sub"}}
                alt="Logo"
                onClick={function () {
                    open(props.href)
                }}
            />
            <div className="d-inline-block">
                <h4>{props.name}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

function ContactLink(props) {
    return (
        <Image
            className="link-img mr-2 mb-2"
            style={{cursor: "pointer"}}
            src={props.img}
            height="50"
            width="50"
            alt="Logo"
            onClick={function () {
                open(props.href)
            }}
        />
    );
}

function open(url) {
    window.open(
        url,
        '_blank' // <- This is what makes it open in a new window.
    );
}

function Footer() {
        return (
            <footer id="Footer" className="pt-5 pb-2 w-100 text-white mw-100 black">
                <Row className="pr-4 pl-4">
                    <Col lg={2}>
                        <h2 className="mb-3">Контакты:</h2>
                        <Contacts img={VICTOR} href={"https://vk.com/hijerez"} name={"Jerezoff"}
                                  description={"Создатель проекта"}/>
                        <Contacts img={WANE} href={"https://vk.com/panzerkampfwagen6tiger"} name={"WaneTol72"}
                                  description={"Разработчик сайта"}/>
                        <Contacts img={BARA} href={"https://vk.com/mrtofik"} name={"BaRaKaN"}
                                  description={"Группа поддержки"}/>
                    </Col>
                    <Col lg={2}>
                        <h2 className="mb-3">Ссылки:</h2>
                        <div className="mb-2">
                            <ContactLink img={VK} href={"https://vk.com/phoenix_proj"}/>
                            <ContactLink img={INST} href={"https://vk.com/mrtofik"}/>
                            <ContactLink img={DIS} href={"https://discord.com/invite/g2ug2Us"}/>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <iframe title="Discord" src="https://discordapp.com/widget?id=447745228456198155&theme=dark" height="300" className="w-100" frameBorder="0"/>
                    </Col>
                </Row>
                <h5 className="text-center m-0">©2018-2021 <span style={{color:"orange"}}>Phoenix</span> Project</h5>
            </footer>
        );
}

export default Footer;