import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const ScreensZero = () => {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%"
      }}
    >
      <div className="card" style={{ height: 400, width: 700 }}>
        <header className="card-header">
          <p className="card-header-title">Initialize Demo</p>
        </header>
        <div className="card-content">
          <div className="content">
            <form
              onSubmit={async e => {
                e.preventDefault();
                console.log("Submitted", token);
                if (email && token) {
                  const url = `${process.env.REACT_APP_SERVER_IP}/demo/token`;
                  const options = { "Content-Type": "application/json" };
                  const postData = { token };
                  await axios.post(url, postData, options);
                  sessionStorage.setItem("token", token);
                  sessionStorage.setItem("email", email);
                  history.push("/step-1");
                }
              }}
            >
              <div className="field" style={{ marginBottom: 10 }}>
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="jseow@cisco.com"
                    style={{ borderColor: "#dbdbdb" }}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <p className="help">Please key in your email.</p>
              </div>
              <div className="field" style={{ marginBottom: 50 }}>
                <label className="label">Access Token</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="ZDMzNzkwMzEtODU2Yi00MjA2LWJjNmQtZDQwNjUzNTRlMWQwNjdjMWE3MjAtMjU2_PF84_1eb65fdf-9643-417f-9974-ad72cae0e10f"
                    style={{ borderColor: "#dbdbdb" }}
                    value={token}
                    onChange={e => setToken(e.target.value)}
                  />
                </div>
                <p className="help">
                  Please go to&nbsp;
                  <a
                    href="https://developer.webex.com/docs/api/getting-started"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Webex Developer
                  </a>
                  &nbsp;to get your access token.
                </p>
              </div>
              <div className="control">
                <button className="button is-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreensZero;
