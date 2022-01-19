import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contato">
      <header>
        <h2>Contact me</h2>
        <p>If you want to contact me send me a message and I will reply as soon as possible</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:ivanoyola07@gmail.com">ivanoyola07@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+34610656170">(+34) 610656170</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}