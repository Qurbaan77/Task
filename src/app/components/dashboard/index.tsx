import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppContent from "../content/index";
import AppSideBar from "../sidebar/index";
import "./index.css";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col xs={3} id="sidebar-wrapper">
            <AppSideBar />
          </Col>
          <Col xs={9} id="page-content-wrapper">
            <AppContent />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default Dashboard;
