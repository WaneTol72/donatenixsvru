import '../Donate.scss';
import ModalWindow from "./ModalWindow";
import Pic1 from '../assets/pic1.webp';
import {Image} from "react-bootstrap";

function Donate() {
  return (
    <>
      <main id="home" className="text-center text-white d-flex">
          <Image
              className="d-block min-vh-100 vw-100 h-100 overflow-hidden"
              style={{objectFit: 'cover'}}
              src={Pic1}
              alt="Picture-1"
          />
          <div className="DonateWelcome m-auto d-inline-block position-absolute">
              <h1>Привет, мир!</h1>
              <h5>
                  Покупать донат на проекте стало проще! Смело нажимай на кнопку и иди нахуй!
              </h5>
                  <ModalWindow />
          </div>
      </main>
    </>
  );
}
export default Donate;
