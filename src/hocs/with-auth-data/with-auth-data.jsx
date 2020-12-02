import React, {PureComponent} from "react";
import {connect} from "react-redux";
import applicationPropTypes from "../../application-prop-types";
import {login} from "../../store/api-actions";

const withAuthData = (Component) => {
  class WithAuthData extends PureComponent {
    constructor(props) {
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
      this.onChangeField = this.onChangeField.bind(this);
      this.state = {
        login: ``,
        password: ``
      };
    }

    handleSubmit(evt) {
      const {onSubmit} = this.props;

      evt.preventDefault();

      onSubmit({
        login: this.state.login,
        password: this.state.password,
      });
    }

    onChangeField(field) {
      return (e) => {
        this.setState({
          [field]: e.target.value
        });
      };
    }

    render() {
      return (
        <Component
          login={this.state.login}
          password={this.state.password}
          onSubmitForm={this.handleSubmit}
          onChangeField={this.onChangeField}
          city={this.props.city}
          {...this.props}
        />
      );
    }
  }

  WithAuthData.propTypes = {
    onSubmit: applicationPropTypes.onSubmit,
    city: applicationPropTypes.city,
  };

  const mapStateToProps = ({STATE}) => ({
    city: STATE.city,
  });

  const mapDispatchToProps = (dispatch) => ({
    onSubmit(authData) {
      dispatch(login(authData));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithAuthData);
};

export default withAuthData;
