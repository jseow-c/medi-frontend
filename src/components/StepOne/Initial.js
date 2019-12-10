import React, { useState, useContext } from "react";
import ciscoLogo from "../../img/cisco.png";
import intercorpLogo from "../../img/intercorp.jpg";
import mohLogo from "../../img/moh-logo.png";
import { StoreContext } from "../../context";
import axios from "axios";

import Select from "react-select";
import { countryOptions } from "./options";

const StepOneInitial = ({ onClick = null, setImageType }) => {
  const {
    countryStore: [, setCountry],
    reasonStore: [, setReason],
    accidentStore: [, setAccident],
    policeStore: [, setPolice]
  } = useContext(StoreContext);
  const [reasonField, setReasonField] = useState("");
  const [countryField, setCountryField] = useState([]);
  const [accidentField, setAccidentField] = useState(false);
  const [policeField, setPoliceField] = useState(false);
  const setupData = async () => {
    const url = `${process.env.REACT_APP_SERVER_IP}/demo/initial`;
    const options = { "Content-Type": "application/json" };
    setReason(reasonField);
    setCountry(countryField);
    setPolice(policeField);
    setAccident(accidentField);
    const postData = {
      reason: reasonField,
      country: countryField,
      accident: accidentField,
      police: policeField
    };
    await axios.post(url, postData, options);
    onClick();
  };
  const normalClick = () => {
    if (reasonField) {
      setImageType("static");
      setupData();
    }
  };
  const merakiClick = () => {
    if (reasonField) {
      setImageType("meraki");
      setupData();
    }
  };
  return (
    <main className="step-one-initial-container">
      <section className="hero is-medium step-one-initial">
        <div className="hero-body step-one-initial-hero">
          <div className="container">
            <img src={mohLogo} alt="MOH" width="200" className="title-logo" />
            <h1 className="title">MOH Patient Registration</h1>
            <h2 className="subtitle">
              Powered by Cisco Meraki & Intercorp Facial Recognition Software -
              BAS
            </h2>
          </div>
          <div className="container mt-1">
            <img src={ciscoLogo} alt="Cisco" width="60" className="mr-2" />
            <img src={intercorpLogo} alt="Intercorp" width="60" />
          </div>
          <div
            className="container is-size-7 is-italic mt-2"
            style={{ marginTop: "10rem" }}
          >
            By clicking here, you acknowledge that you have read and understood
            the mentioned notice, and consent to the collection, use and
            disclosure of my personal data by Cisco for the purposes set out in
            the Notice.
          </div>
        </div>
      </section>
      <section>
        <div className="card" style={{ height: 600, width: 550, margin: 25 }}>
          <header className="card-header">
            <p className="card-header-title">Registration Form</p>
          </header>
          <div className="card-content">
            <div className="content">
              <div>
                <div className="field" style={{ marginBottom: 10 }}>
                  <label className="label">Reason To Visit</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Deep Cut on the Cheek"
                      style={{ borderColor: "#dbdbdb" }}
                      value={reasonField}
                      onChange={e => setReasonField(e.target.value)}
                    />
                  </div>
                  <p className="help">
                    Please key in the reason of your visit.
                  </p>
                </div>
                <div className="field" style={{ marginBottom: 10 }}>
                  <label className="label">Countries Visited</label>
                  <div className="control">
                    <Select
                      isMulti
                      name="countrys"
                      onChange={e => {
                        if (e) setCountryField(e.map(i => i.value));
                        else setCountryField([]);
                      }}
                      options={countryOptions}
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  </div>
                  <p className="help">You may choose multiple countries.</p>
                </div>
                <div className="field" style={{ marginBottom: 10 }}>
                  <label className="label">Accident</label>
                  <div className="control">
                    <Select
                      name="accident"
                      defaultValue={{ value: false, label: "No" }}
                      options={[
                        { value: true, label: "Yes" },
                        { value: false, label: "No" }
                      ]}
                      onChange={e => setAccidentField(e.value)}
                      className="basic-select"
                      classNamePrefix="select"
                    />
                  </div>
                  <p className="help">
                    Please select Yes if this is an accident.
                  </p>
                </div>
                <div className="field" style={{ marginBottom: 50 }}>
                  <label className="label">Police Informed</label>
                  <div className="control">
                    <Select
                      name="police"
                      defaultValue={{ value: false, label: "No" }}
                      options={[
                        { value: true, label: "Yes" },
                        { value: false, label: "No" }
                      ]}
                      onChange={e => setPoliceField(e.value)}
                      className="basic-select"
                      classNamePrefix="select"
                    />
                  </div>
                  <p className="help">
                    Please select Yes if police has been informed.
                  </p>
                </div>
                <div className="control">
                  <button
                    className="button is-primary"
                    type="submit"
                    style={{ marginRight: 10 }}
                    onClick={normalClick}
                  >
                    Use Static Image
                  </button>
                  <button className="button is-info" onClick={merakiClick}>
                    Use Meraki Camera
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StepOneInitial;
