import React from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
    const {
        signInUsingGoogle,
        user,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        error,
        toggleLogin,
        isLogin
    } = useAuth();
    return (
        <div className="p-5 mx-5">
            {user.email ? (
                <div className="pt-5">
                    <img src={user.photoURL} alt="" />
                    <h2>Welcome {user.displayName}</h2>
                    <p>
                        You are signed in with{" "}
                        <span>
                            <h5>{user.email}</h5>
                        </span>
                    </p>
                </div>
            ) : (
                <div className="pt-5">
                    <h2>You are not Logged-In!</h2>
                    <h4>Please {isLogin ? "Login" : "Register"}</h4>

                    <form
                        onSubmit={handleRegistration}
                        className="w-75 m-auto mt-4 border border-2 border-warning rounded p-4 bg-light"
                    >
                        <div className="row mb-3">
                            <label
                                htmlFor="inputEmail3"
                                className="col-sm-2 col-form-label"
                            >
                                Email
                            </label>
                            <div className="col-sm-10">
                                <input
                                    onBlur={handleEmailChange}
                                    type="email"
                                    className="form-control"
                                    id="inputEmail3"
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                htmlFor="inputPassword3"
                                className="col-sm-2 col-form-label"
                            >
                                Password
                            </label>
                            <div className="col-sm-10">
                                <input
                                    onBlur={handlePasswordChange}
                                    type="password"
                                    className="form-control"
                                    id="inputPassword3"
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mb-3 text-danger ms-3">
                            <div className="fw-bold">{error}</div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check user-checkbox-container">
                                    <input
                                        onChange={toggleLogin}
                                        className="form-check-input"
                                        type="checkbox"
                                        id="gridCheck1"
                                    />
                                    <label
                                        className="form-check-label new-user-checkbox ms-2"
                                        htmlFor="gridCheck1"
                                    >
                                        Already have an account?
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-warning">
                            {isLogin ? "Login" : "Register"}
                        </button>
                    </form>

                    <br />
                    <div className="mt-3 border border-2 border-warning rounded p-4 bg-light w-75 mx-auto mb-5">
                        <h3 className="mb-4">
                            You can also sign in with Google
                        </h3>
                        <Button
                            onClick={signInUsingGoogle}
                            variant="warning"
                            size="md"
                        >
                            Google Sign-In
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
