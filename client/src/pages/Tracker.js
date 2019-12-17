import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";

function Workout() {
  const [workout, setWorkout] = useState([]);
  const [newWrk, setNewWrk] = useState([])

  useEffect(() => {
    loadWorkout();
  }, []);

  function loadWorkout() {
    API.getWorkout()
      .then(res =>
        setWorkout(res.data)
      )
      .catch(err => console.log(err));
  }

  function deleteWorkout(id) {
    API.deleteWorkout(id)
      .then(res => loadWorkout())
  }

  function handleInput(event) {
    const { name, value } = event.target;
    console.log(name + ':' + value)
    setNewWrk({ ...newWrk, [name]: value })
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (newWrk.workout && newWrk.info) {
      API.saveWorkout({
        workout: newWrk.workout,
        info: newWrk.info,
        date: newWrk.date
      })
        .then(res => loadWorkout())
        .catch(err => console.log(err));
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Fitness Workout Planner</h1>
          </Jumbotron>
          <form>
            <Input name="workout" placeholder="Workout Name" onChange={handleInput} />
            <Input name="info" placeholder="info" onChange={handleInput} />
            <Input name="date" placeholder="date" onChange={handleInput} />
            <FormBtn onClick={handleFormSubmit} disabled={!(newWrk.workout && newWrk.info)}>Submit Your Workout</FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>List of Workouts</h1>
          </Jumbotron>
          <List>
            {
              Object.keys(workout).map((i) => {
                return <ListItem key={workout._id}>
                  <a href={"/workout/" + workout._id}>
                    <strong>
                      {workout[i].workout}
                    </strong>
                    <p>{workout[i].info}</p>
                    <p>{workout[i].date}</p>
                  </a>
                  <DeleteBtn onClick={deleteWorkout} />
                </ListItem>
              })}
          </List>
        </Col>
      </Row>
    </Container>
  );
}

export default Workout;
