import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Panel from "../../components/Panel";
import Pager from "../../components/Pager";
import API from "../../utils/API";
//import Hyperlink from 'react-native-hyperlink';


class Detail extends Component {
  state = {
    bookmark: {}
  };
  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  // The book id for this route can be accessed using this.props.match.params.id

  componentDidMount() {
    this.loadDetails();
    //this.loadAPI();
    //console.log(this.state.bookmark.artist + "this.props.match.params.id");
  }
// loadAPI = () => {
//     //////////////////////////////////////////////////////////////////////
//     // npm youtube-search API tool
//     var search = require('youtube-search');


//     var opts = {
//       maxResults: 10,
//       key: 'AIzaSyBE7pmW9Pc60kwAB4f7UK12QTI8svWwV7Q'
//     };
//   var searchTopic = this.props.match.params.id;
  
//     //var searchTopic = "Weezer, Sweater Song";
//     search(searchTopic, opts, function (err, results) {
//       if (err) return console.log(err);

//       var resultId = results[0].id;
//       var resultLink = results[0].link;
//       var resultTitle = results[0].title;
//       var resultPic = results[0].thumbnails.default.url;
//       console.log("##############" + results[0].id);
//       console.dir(results[0].link);
//       console.dir(results[0].title);
//       console.dir(results[0].thumbnails.default.url);



//     });
// ////////////////////////////////////////////////////////////////////////


//   }

  loadDetails = () => {
    
    API.getBookmark(this.props.match.params.id)
  
      .then(res =>
        this.setState({ bookmark: res.data })
        
      )
      .catch(err => console.log( err));
      console.log(this.state.bookmark.youtubelink)
  };
  

// Jumbotron => Panel => revert back to Jumbotron & Panel is now replacing article
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
            <Panel>
              <h1>Details</h1>
              {/* <p><a href={this.state.bookmark.link}> {this.state.bookmark.link}</a></p> */}
              <p><a href={this.state.bookmark.link}> {this.state.bookmark.link}</a></p>
              <iframe width="560" height="315"
                src={this.state.bookmark.link}
                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
              </iframe>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Pager>
              <Link to="/">← Back to Artists</Link>
            </Pager>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;


{/* <iframe width="560" height="315" 
src="https://www.youtube.com/embed/2-afjrhl6ko" 
frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
</iframe> */}