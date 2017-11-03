import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class Login extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={this.handleClose}
      />
    ];

    return (
      <div>
        <i onClick={this.handleOpen} className="material-icons md-light">
          person
        </i>
        <br />Login /
        <Dialog
          title="Login"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <TextField hintText="Username" />
          <br />
          <br />
          <TextField hintText="Password" />
        </Dialog>
      </div>
    );
  }
}
