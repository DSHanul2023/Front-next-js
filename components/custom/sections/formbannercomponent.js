import React from "react";
import { Row, Col, Container, Form } from "reactstrap";
import Image from "next/image";
import banner from "../../../assets/images/form-banners/banner1/banner-img.png";

const FormBannerComponent = () => {
  return (
    <div>
      <div className="bg-light">
        <section>
          <div id="banner1" className="banner spacer">
            <Container>
              <Row>
                <Col lg="5" md="7" className="align-self-center">
                  <h2 className="title font-bold">
                    AI 챗봇 기반 상담 서비스
                  </h2>
                  <p className="m-t-40 m-b-30">
                    로그인 후 서비스를 이용해 보세요!
                  </p>
                  <Form className="m-t-40">
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter Email Address"
                      className="font-16"
                    />
                  </Form>
                  <Form className="m-t-40">
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      className="font-16"
                    />
                    <input
                      type="submit"
                      value="회원가입"
                      className="bg-info font-semibold font-16 btn-rounded text-uppercase text-white text-center"
                    />
                  </Form>
                </Col>
                <Col lg="6" md="5" className="align-self-center ml-auto">
                  <Image
                    src={banner}
                    alt="We are Digital Agency"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FormBannerComponent;
