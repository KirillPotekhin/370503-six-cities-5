import React, {useState, useCallback} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import applicationPropTypes from "../../application-prop-types";
import {AppRoute} from "../../const";
import {login} from "../../store/api-actions";
import {extend} from "../../utils";

const AuthScreen = (props) => {
  const {city} = props;
  const [loginForm, setLoginForm] = useState({login: ``, password: ``});

  const onChangeField = useCallback((field) => {
    return (evt) => {
      setLoginForm(extend(loginForm, {
        [field]: evt.target.value
      }));
    };
  }, [loginForm.login, loginForm.password]);

  const handleSubmit = useCallback((evt) => {
    const {onSubmit} = props;

    evt.preventDefault();
    onSubmit({
      login: loginForm.login,
      password: loginForm.password,
    });
  }, [loginForm.login, loginForm.password]);

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.ROOT} className="header__logo-link">
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email" name="email"
                  placeholder="Email"
                  required
                  value={loginForm.login}
                  onChange={onChangeField(`login`)}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={loginForm.password}
                  onChange={onChangeField(`password`)}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city.name}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

AuthScreen.propTypes = {
  city: applicationPropTypes.city,
  onSubmit: applicationPropTypes.onSubmit,
};

const mapStateToProps = ({STATE}) => ({
  city: STATE.city,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {AuthScreen};
export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
