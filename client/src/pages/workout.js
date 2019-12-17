import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid/index";
import API from "../utils/API";

function WorkoutInfo(props) {
  const [workout, setWorkout] = useState([]);

  useEffect(() => {
    API.getWorkout(props.match.params.id)
      .then(res => setWorkout(res.data))
      .catch(err => console.log(err));
  }, [])

  return (

    <Container fluid>
      {Object.keys(workout).map((i) => {
        return <div style={{borderBottom: "1px solid black"}}>
          <Row>
            <Col size="md-12">
              <h1>
                {workout[i].name}
              </h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p>
                {workout[i].info}
              </p>
            </Col>
          </Row>
          <Row>
            <Col size="md-10 md-offset-1">
              <p>
                {workout[i].date}
              </p>
            </Col>
          </Row>
        </div>
      })}
      <Row>
        <Col size="md-2">
          <Link to="/">← Main Page</Link>
        </Col>
      </Row>
    </Container>
  );
}


export default WorkoutInfo;
