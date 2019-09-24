import React from 'react';
import {ContactSection, Contacttitle, Span, Form, FormInput, InputText, InputEmail, InputExp, TextArea, InputSubmit} from './contact'
import Footer from './../Footer'
const Contact = () => {
  return (
      <React.Fragment>
        <ContactSection>
          <div className="container">
            <Contacttitle><Span>Drop </Span>Me A line</Contacttitle>
            <Form>
                <FormInput>
                    <InputText type="text" placeholder="Your Name"/>
                    <InputEmail type="email" placeholder="Your Email"/>
                </FormInput>
                <InputExp type="text" class="sub" placeholder="Your Subject"/>
                <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                <InputSubmit type="submit" value="Send Message"/>
            </Form>
          </div>
        </ContactSection>
        <Footer />
      </React.Fragment>
  )
};

export default Contact;
