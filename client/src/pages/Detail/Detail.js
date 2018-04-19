import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    bookmark: {}
  };
  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  // The book id for this route can be accessed using this.props.match.params.id

  componentDidMount() {
    this.loadDetails();
  }

  loadDetails = () => {
    
    API.getBookmark(this.props.match.params.id)
      .then(res =>
        
        this.setState({ bookmark: res.data })
        
      )
      .catch(err => console.log(err));
  };
  


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.bookmark.title} by {this.state.bookmark.artist}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p><a href="{this.state.bookmark.link}"> {this.state.bookmark.link}</a></p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Songs</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
