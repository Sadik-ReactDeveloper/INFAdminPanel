import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  //   CustomInput,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
// import { history } from "../../../history";
import { Route } from "react-router-dom";
import swal from "sweetalert";
export default class EditAgent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // status: "",
      agentName: "",
      agentCode: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      phone: "",
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/getOneAgent/${id}`)
      .then((response) => {
        const agent = response.data.data.agent;
        this.setState({
          // status: response.data.data.status,
          agentName: agent.agentName,
          agentCode: agent.agentCode,
          email: agent.email,
          address: agent.address,
          city: agent.city,
          state: agent.state,
          zipcode: agent.zipcode,
          phone: agent.phone,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // changeHandler1 = (e) => {
  //   this.setState({ status: e.target.value });
  // };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/admin/editEquityScript/${id}`, this.state)
      .then((response) => {
        this.setState({ scriptName: "" });
        swal("Success!", "Submitted SuccessFull!", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/analyticsDashboard" tag="a">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem href="/app/scripts/fnoOption" tag="a">
                  Agent List
                </BreadcrumbItem>
                <BreadcrumbItem active> Edit Agent</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Agent
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/agent/AgentList")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Agent Name</Label>
                  <Input
                    required
                    type="text"
                    name="scriptName"
                    placeholder="Agent Name"
                    value={this.state.agentName}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Address</Label>
                  <Input
                    required
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={this.state.address}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>City</Label>
                  <Input
                    required
                    type="text"
                    name="city"
                    placeholder="City"
                    value={this.state.city}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>State</Label>
                  <Input
                    required
                    type="text"
                    name="state"
                    placeholder="State"
                    value={this.state.state}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Zipcode</Label>
                  <Input
                    required
                    type="text"
                    name="zipcode"
                    placeholder="Zipcode"
                    value={this.state.zipcode}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Mobile</Label>
                  <Input
                    required
                    type="text"
                    name="phone"
                    placeholder="Mobile"
                    value={this.state.phone}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Email</Label>
                  <Input
                    required
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="mb-1">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler1(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Inactive"
                    />
                    <span style={{ marginRight: "3px" }}>Inactive</span>
                  </div>
                </Col>   */}
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
