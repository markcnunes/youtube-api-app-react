import { Paper, TextField } from "@material-ui/core";
import React from "react";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleChange = (event) => this.setState({ searchTerm: event.target.values });

  hadleSubmit = (event) => {
    event.preventDefault();

    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);
  };

  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.hadleSubmit}>
          <TextField fullWidth label="Search..." onChange={this.handleChange} />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
