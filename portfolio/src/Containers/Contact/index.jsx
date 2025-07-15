import React from "react";
import PageHeaderContent from "../../Components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./style.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={24} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(-200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <form
            className="contact__content__form"
            action="https://formsubmit.co/shebafernandes5@gmail.com"
            method="POST"
          >
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <textarea
                  required
                  name="message"
                  className="inputDescription"
                  rows="5"
                  placeholder="Description"
                />
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
