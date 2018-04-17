import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
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
    link: ""
  };

  componentDidMount() {
    this.loadBookmarks();
  }

  loadBookmarks = () => {
    API.getBookmarks()
      .then(res =>
        this.setState({ bookmarks: res.data, title: "", artist: "", link: "" })
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
    if (this.state.title && this.state.artist) {
      API.saveBook({
        title: this.state.title,
        artist: this.state.artist,
        link: this.state.link
      })
        .then(res => this.loadBookmarks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.artist}
                onChange={this.handleInputChange}
                name="artist"
                placeholder="artist (required)"
              />
              <TextArea
                value={this.state.link}
                onChange={this.handleInputChange}
                name="link"
                placeholder="link (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
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
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Bookmarks;
