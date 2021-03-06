import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: []
    };
  }
  // image_url
  //  description
  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(response => {
        this.setState({ beer: response.data });
      });
  }
  render() {
    return (
      <div className="RandomBeer">
        {/* {this.state.beers.map(beer => ( */}
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={this.state.beer.image_url}
            style={{ width: "auto", height: "20%" }}
          />

          <Card.Body>
            <Card.Title>{this.state.beer.name}</Card.Title>
            <Card.Text>{this.state.beer.description}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        {/* ))} */}
      </div>
    );
  }
}

export default RandomBeer;
