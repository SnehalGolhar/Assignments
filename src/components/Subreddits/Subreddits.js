import React, { Component } from "react";

import axios from "../../axios";

import Subpost from "../../containers/SubPost/Subpost";
import "./Subreddits.css";

class Subreddits extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
    display_name_prefixed: "",
  };

  componentDidMount() {
    axios
      .get("/r/politics.json")

      .then((response) => {
        console.log("response", response.data.data.children);
        const posts = response.data.data.children;

        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Max",
          };
        });
        this.setState({ posts: updatedPosts });
        // console.log( response );
      })
      .catch((error) => {
        // console.log(error);
        this.setState({ error: true });
      });
  }

  postSelectedHandler = (id) => {
    this.setState({
      selectedPostId: id,
    });
  };

  render() {
    return (
      <div>
        <Subpost posts={this.state.posts} />;
      </div>
    );
  }
}

export default Subreddits;
