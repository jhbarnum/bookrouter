import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import Panel from "../../components/Panel";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Bookmarks extends Component {
  state = {
    bookmarks: [],
    title: "",
    artist: "",
    link: "",
    youtubelink: "",
    image: ""
  };


  componentDidMount() {
    this.loadBookmarks();
  }

 


  
  loadBookmarks = () => {
    API.getBookmarks()
      .then(res =>
        this.setState({ bookmarks: res.data, title: "", artist: "", link: "" ,youtubelink: "", image: ""})
      )
      .catch(err => console.log(err));
  };

  deleteBookmark = id => {
    API.deleteBookmark(id)
      .then(res => this.loadBookmarks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    
  };

  handleFormSubmit = event => {
    event.preventDefault();

    var search = require('youtube-search');
  

    var opts = {
      maxResults: 10,
      key: 'AIzaSyBE7pmW9Pc60kwAB4f7UK12QTI8svWwV7Q'
    };
    var searchTopic = this.state.artist + this.state.title;
    //var searchTopic = this.state.link;
    var me = this;

    search(searchTopic, opts, function (err, results) {
      if (err) return console.log(err);

      var link = "https://www.youtube.com/embed/" + results[0].id;
     
      var resultTitle = results[0].title;
      var resultPic = results[0].thumbnails.default.url;
      console.log(results[0])
      me.setState({ link: results[0].id });
      //me.setState({ youtubelink: results[0].youtubelink });
      if (me.state.title && me.state.artist) {
         console.log(me.state.link)
         console.log(me.state.youtubelink)

        API.saveBookmark({
          title: me.state.title,
          artist: me.state.artist,
          link: link,
          // link: me.state.link,
          youtubelink: results[0].link, 
          image: results[0].thumbnails.default.url
        })
          .then(res => me.loadBookmarks())
          .catch(err => console.log(err));
      }
      
    });

    

  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron><h1>Find your Groove</h1></Jumbotron>
          </Col>
          <Col size="md-12">
            <Panel>
              <h4>For the Record?</h4>
            </Panel>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title"
              />
              <Input
                value={this.state.artist}
                onChange={this.handleInputChange}
                name="artist"
                placeholder="artist"
              />
              {/* <TextArea
                value={this.state.link}
                onChange={this.handleInputChange}
                name="link"
                placeholder="Search Topic"
              /> */}
              <FormBtn
                disabled={!(this.state.artist && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Song
              </FormBtn>
            </form>
          </Col>
          <Col size="md-12 sm-12">
            <Panel>
              <h4>On the Record</h4>
            </Panel>
            {this.state.bookmarks.length ? (
              <List>
                {this.state.bookmarks.map(bookmark => (
                  <ListItem key={bookmark._id}>
                    <Link to={"/bookmarks/" + bookmark._id}>
                      <strong>
                        {bookmark.title} by {bookmark.artist}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBookmark(bookmark._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results Empty</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Bookmarks;
