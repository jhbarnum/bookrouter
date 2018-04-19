import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
//import Jumbotron from "../../components/Jumbotron";
import Panel from "../../components/Panel";
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
    this.loadAPI();
  }
loadAPI = () => {
    //////////////////////////////////////////////////////////////////////
    // npm youtube-search API tool
    var search = require('youtube-search');


    var opts = {
      maxResults: 10,
      key: 'AIzaSyBE7pmW9Pc60kwAB4f7UK12QTI8svWwV7Q'
    };
    var searchTopic = "Weezer, Sweater Song";

    search(searchTopic, opts, function (err, results) {
      if (err) return console.log(err);

      var resultId = results[0].id;
      var resultLink = results[0].link;
      var resultTitle = results[0].title;
      var resultPic = results[0].thumbnails.default.url;
      console.dir(results[0].id);
      console.dir(results[0].link);
      console.dir(results[0].title);
      console.dir(results[0].thumbnails.default.url);



    });
////////////////////////////////////////////////////////////////////////


  }

  loadDetails = () => {
    
    API.getBookmark(this.props.match.params.id)
      .then(res =>
        
        this.setState({ bookmark: res.data })
        
      )
      .catch(err => console.log(err));
  };
  

// Jumbotron => Panel
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Panel>
              <h1>
                {this.state.bookmark.title} by {this.state.bookmark.artist}
              </h1>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Details</h1>
              <p><a href="{this.state.bookmark.link}"> {this.state.bookmark.link}</a></p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Artists</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
