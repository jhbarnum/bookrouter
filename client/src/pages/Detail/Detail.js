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

  
  componentDidMount() {
    this.loadDetails();

    
  }

  loadDetails = () => {
    
    API.getBookmark(this.props.match.params.id)
  
      .then(res =>
        this.setState({ bookmark: res.data })
        
      )
      .catch(err => console.log( err));
    

    
  };
  

// Jumbotron => Panel => revert back to Jumbotron & Panel is now replacing article
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <p>
                <h1>
                <img src={this.state.bookmark.image} alt="Pic" width="105" height="78"  ></img>
              
                {this.state.bookmark.title} by {this.state.bookmark.artist} 
              </h1>
              
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <Panel>
              <h1>Details</h1>
              <iframe width="420" height="315" src={this.state.bookmark.link} frameborder="0" allowfullscreen></iframe>
              
          
              
              
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


