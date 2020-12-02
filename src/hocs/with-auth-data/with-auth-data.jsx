import React, {useState} from "react";
import {connect} from "react-redux";
import applicationPropTypes from "../../application-prop-types";
import {login} from "../../store/api-actions";

const withAuthData = (Component) => {

  const WithAuthData = (props) => {
    const [loginForm, setLoginForm] = useState({login: ``, password: ``});
    const handleSubmit = (evt) => {
      const {onSubmit} = props;

      evt.preventDefault();

      onSubmit({
        login: loginForm.login,
        password: loginForm.password,
      });
    };

    const onChangeField = (field) => {
      return (e) => {
        setLoginForm({
          [field]: e.target.value
        });
      };
    };
    return (
      <Component
        login={loginForm.login}
        password={loginForm.PureComponentpassword}
        onSubmitForm={handleSubmit}
        onChangeField={onChangeField}
        city={props.city}
        {...props}
      />
    );
  };

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
