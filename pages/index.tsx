import Head from "next/head";
import Image from "next/image";
import { Asul, Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login" style={{backgroundColor: 'white'}}>
      <div
        className={`${styles.login__colored_container} ${
          isLogin
            ? styles.login__colored_container__left
            : styles.login__colored_container__right
        }`}
      ></div>
      <div
        className={`${styles.login__welcome_back} ${
          isLogin
            ? styles.login__welcome_back__active
            : styles.login__welcome_back__inactive
        }`}
      >
        <div className={styles.login__welcome_back__logo_container}>
          <Image
            className={styles.login__welcome_back__logo_container__image}
            src="/logo.png"
            alt="Notebook"
            width={100}
            height={24}
          />
          Notebook
        </div>
        <div className={styles.login__welcome_back__main_container}>
          <div className={styles.login__welcome_back__main_container__text_container}>
            <span className={styles.login__welcome_back__main_container__text_container__title}>
              Welcome Back!
            </span>
            <span className={styles.login__welcome_back__main_container__text_container__secondary}>
              To keep sharing your work with us, please log in.
            </span>
          </div>
          <div
            onClick={() => {
              setIsLogin(!isLogin);
            }}
            className={styles.login__welcome_back__main_container__button_container}
          >
            Sign In
          </div>
        </div>
      </div>
      <div
        className={`${styles.login__create_container} ${
          isLogin
            ? styles.login__create_container__active
            : styles.login__create_container__inactive
        }`}
      >
        Create Account
        <div className={styles.login__create_container__social_container}>
          <Image
            className={styles.login__create_container__social_container__facebook_icon}
            src="/facebook.svg"
            width={100}
            height={100}
            alt=""
          />
          <Image
            className={styles.login__create_container__social_container__google_icon}
            src="/google.svg"
            width={100}
            height={100}
            alt=""
          />          
        </div>
        <span className={styles.login__create_container__info_text}>
          or use email for your registration
        </span>
        <div className={styles.login__create_container__form_container}>
          <form
            className={styles.login__create_container__form_container__form}
            onSubmit={(e) => {
              e.preventDefault();
              // this.signUp();
            }}
          >
            <input
              className={styles.login__create_container__form_container__form__name}
              type="text"
              placeholder="Name"
              // value={this.state.signUpForm.name}
              onChange={
                (value) => {}
                // this.setState({
                //   signUpForm: {
                //     name: value.target.value,
                //     email: this.state.signUpForm.email,
                //     password: this.state.signUpForm.password,
                //   },
                // })
              }
              required
            />
            <input
              className={styles.login__create_container__form_container__form__email}
              type="email"
              placeholder="Email"
              // value={this.state.signUpForm.email}
              onChange={
                (value) => {}
                // this.setState({
                //   signUpForm: {
                //     email: value.target.value,
                //     name: this.state.signUpForm.name,
                //     password: this.state.signUpForm.password,
                //   },
                // })
              }
              required
            />
            <input
              className={styles.login__create_container__form_container__form__password}
              type="password"
              placeholder="Password"
              // value={this.state.signUpForm.password}
              onChange={
                (value) => {}
                // this.setState({
                //   signUpForm: {
                //     password: value.target.value,
                //     name: this.state.signUpForm.name,
                //     email: this.state.signUpForm.email,
                //   },
                // })
              }
              required
            />
            <button className={styles.login__create_container__form_container__form__submit}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div
        className={`${styles.login__login_container} ${
          !isLogin
            ? styles.login__login_container__active
            : styles.login__login_container__inactive
        }`}
      >
        <div className={styles.login__login_container__logo_container}>
          <Image
            className={styles.login__login_container__logo_container__image}
            src="/logo.png"
            width={100}
            height={100}
            alt="Budwriter"
          />
          Notebook
        </div>
        <div className={styles.login__login_container__main_container}>
          <div className={styles.login__login_container__main_container__social_container}>
            <Image
              className={styles.login__login_container__main_container__social_container__facebook_icon}
              src="/facebook.svg"
              width={100}
              height={100}
              alt=""
            />
            <Image
              className={styles.login__login_container__main_container__social_container__google_icon}
              src="/google.svg"
              width={100}
              height={100}
              alt=""
            />            
          </div>
          <span className={styles.login__login_container__main_container__info_text}>
            or use email for your login
          </span>
          <div className={styles.login__login_container__main_container__form_container}>
            <form
              className={styles.login__login_container__main_container__form_container__form}
              onSubmit={(e) => {
                e.preventDefault();
                // this.signIn();
              }}
            >
              <input
                className={styles.login__login_container__main_container__form_container__form__email}
                type="email"
                placeholder="Email"
                // value={this.state.signInForm.email}
                onChange={
                  (value) => {}
                  // this.setState({
                  //   signInForm: {
                  //     email: value.target.value,
                  //     password: this.state.signInForm.password,
                  //   },
                  // })
                }
                required
              />
              <input
                className={styles.login__login_container__main_container__form_container__form__password}
                type="password"
                placeholder="Password"
                // value={this.state.signInForm.password}
                onChange={
                  (value) => {}
                  // this.setState({
                  //   signInForm: {
                  //     password: value.target.value,
                  //     email: this.state.signInForm.email,
                  //   },
                  // })
                }
                required
              />
              <button className={styles.login__login_container__main_container__form_container__form__submit}>
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        className={`${styles.login__hello_container} ${
          !isLogin
            ? styles.login__hello_container__active
            : styles.login__hello_container__inactive
        }`}
      >
        <div className={styles.login__welcome_back__main_container__text_container}>
          <span className={styles.login__welcome_back__main_container__text_container__title}>
            Hello, stranger!
          </span>
          <span className={styles.login__welcome_back__main_container__text_container__secondary}>
            Enter your personal details and start your own portfolio!
          </span>
        </div>
        <div
          onClick={() => {
            setIsLogin(!isLogin);
            // this.setState({
            //   login: !this.state.login,
            // });
          }}
          className={styles.login__welcome_back__main_container__button_container}
        >
          Sign Up
        </div>
      </div>
    </div>
  );
}
