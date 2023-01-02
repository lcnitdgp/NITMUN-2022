import React from "react";
import "./dashboard.css";
import axios from "axios";
import { Children, useState, useEffect } from "react";

const Dashboard = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  const [name, setName] = useState([{}]);
  const [email, setEmail] = useState([{}]);
  const [phoneNumber, setPhoneNumber] = useState([{}]);
  const [institute, setInstitute] = useState([{}]);
  const [committee1, setComittee1] = useState([{}]);
  const [preference1, setPreferences1] = useState([{}]);
  const [committee2, setComittee2] = useState([{}]);
  const [preference2, setPreferences2] = useState([{}]);
  const [committee3, setComittee3] = useState([{}]);
  const [preference3, setPreferences3] = useState([{}]);
  const [experience, setExperience] = useState([{}]);
  const [committeeAlloted, setCommitteeAlloted] = useState([{}]);

  const data = {
    name,
    email,
    phoneNumber,
    institute,
    committee1,
    preference1,
    committee2,
    preference2,
    committee3,
    preference3,
    experience,
  };

  function getName() {
    axios
      .get("/api/register")
      .then((response) => response.data)
      .then((data) => {
        setName(data);
      });
  }
  useEffect(() => {
    getName();
  }, []);

  function getEmail() {
    axios
      .get("/api/register")
      .then((response) => response.data)
      .then((data) => {
        setEmail(data);
      });
  }
  useEffect(() => {
    getEmail();
  }, []);

  function getName() {
    axios
      .get("/api/register")
      .then((response) => response.data)
      .then((data) => {
        setName(data);
      });
  }
  useEffect(() => {
    getName();
  }, []);

  function getPhone() {
    axios
      .get("/api/register")
      .then((response) => response.data)
      .then((data) => {
        setPhoneNumber(data);
      });
  }
  useEffect(() => {
    getPhone();
  }, []);

  function getInstitute() {
    axios
      .get("/api/register")
      .then((response) => response.data)
      .then((data) => {
        setInstitute(data);
      });
  }
  useEffect(() => {
    getInstitute();
  }, []);

  function getCom1() {
    axios
      .get("/api/register")
      .then((response) => response.data)
      .then((data) => {
        setComittee1(data);
      });
  }
  useEffect(() => {
    getCom1();
  }, []);

  function getPref1() {
    axios
      .get("/api/register")
      .then((response) => response.data)
      .then((data) => {
        setPreferences1(data);
      });
  }
  useEffect(() => {
    getPref1();
  }, []);

  function getCom2() {
    axios
      .get("/api/register")
      .then((response) => response.data)
      .then((data) => {
        setComittee2(data);
      });
  }
  useEffect(() => {
    getCom2();
  }, []);

  function getPref2() {
    axios
      .get("/api/register")
      .then((response) => response.data)
      .then((data) => {
        setPreferences2(data);
      });
  }
  useEffect(() => {
    getPref2();
  }, []);

  function getCom3() {
    axios
      .get("/api/register")
      .then((response) => response.data)
      .then((data) => {
        setComittee3(data);
      });
  }
  useEffect(() => {
    getCom3();
  }, []);

  function getPref3() {
    axios
      .get("/api/register")
      .then((response) => response.data)
      .then((data) => {
        setPreferences3(data);
      });
  }
  useEffect(() => {
    getPref3();
  }, []);

  function getexp() {
    axios
      .get("/api/register")
      .then((response) => response.data)
      .then((data) => {
        setExperience(data);
      });
  }
  useEffect(() => {
    getexp();
  }, []);

  function payFunction() {
    window.location = "/api/payments";
    console.log("Clicked");
  }

  return (
    <div>
      <div class="top">
        <h1>All Participants</h1>
        <button id="myButton" onClick={payFunction}>
          Payment Details
        </button>
        <script src="../public/paydet.js"></script>
      </div>
      <div class="body-wrapper">
        <div class="table-wrapper">
          <table id="emp-table">
            <thead>
              <th>Name</th>
              <th>E-mail</th>
              <th>Phone no.</th>
              <th>
                Institute
                <select class="table-filter">
                  <option value="all"></option>
                </select>
              </th>
              <th>
                Committee 1
                <select class="table-filter">
                  <option value="all"></option>
                </select>
              </th>
              <th>Preferance 1</th>
              <th>
                Committee 2
                <select class="table-filter">
                  <option value="all"></option>
                </select>
              </th>
              <th>Preferance 1</th>
              <th>
                Committee 3
                <select class="table-filter">
                  <option value="all"></option>
                </select>
              </th>
              <th>Preferance 1</th>
              <th>
                Committee Alloted
                <select class="table-filter">
                  <option value="all"></option>
                </select>
              </th>
              <div className="experience">
                <th>Experience</th>
              </div>
              <th>Allot Committee</th>
              <th>Allot Portfolio</th>
              <th>
                Status
                <select class="table-filter">
                  <option value="all"></option>
                </select>
              </th>
              <th></th>
              <th></th>
            </thead>
            
            {data.filter(data => data.committee1="UNGA",data => data.institute="NIT Durgapur").map((user) => (
              <tbody>
                <tr>
                  <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.institute}</td>
                <td>{user.committee1}</td>
                <td>{user.preference1}</td>
                <td>{user.committee2}</td>
                <td>{user.preference2}</td>
                <td>{user.committee3}</td>
                <td>{user.preference3}</td>
                  <td>Portugal</td>
                  <td>Portugal</td>

                  <td>
                    <form class="">
                      <select name="committeeAlloted" id="committee">
                        <option value="">Committees</option>
                        <option value="AIPPM">AIPPM</option>
                        <option value="UNGA">UNGA</option>
                        <option value="UNSC">UNSC</option>
                        <option value="IP">IP</option>
                      </select>
                      <button type="submit" id="save">
                        Save
                      </button>
                    </form>
                  </td>
                  <td>
                    <input
                      type="text"
                      value=""
                      name="portfolioAlloted"
                      id="portfolioAlloted"
                    />

                    <button type="submit" id="save">
                      Save
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
            {data.filter(user => user.committee1="UNSC", data=>data.institute="NIT Durgapur").map((user) => (
              <tbody>
                <tr>
                  <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.institute}</td>
                <td>{user.committee1}</td>
                <td>{user.preference1}</td>
                <td>{user.committee2}</td>
                <td>{user.preference2}</td>
                <td>{user.committee3}</td>
                <td>{user.preference3}</td>
                  <td>Portugal</td>
                  <td>Portugal</td>

                  <td>
                    <form class="">
                      <select name="committeeAlloted" id="committee">
                        <option value="">Committees</option>
                        <option value="AIPPM">AIPPM</option>
                        <option value="UNGA">UNGA</option>
                        <option value="UNSC">UNSC</option>
                        <option value="IP">IP</option>
                      </select>
                      <button type="submit" id="save">
                        Save
                      </button>
                    </form>
                  </td>
                  <td>
                    <input
                      type="text"
                      value=""
                      name="portfolioAlloted"
                      id="portfolioAlloted"
                    />

                    <button type="submit" id="save">
                      Save
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
            {data.filter(user => user.committee1="AIPPM", data=>data.institute="NIT Durgapur").map((user) => (
              <tbody>
                <tr>
                  <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.institute}</td>
                <td>{user.committee1}</td>
                <td>{user.preference1}</td>
                <td>{user.committee2}</td>
                <td>{user.preference2}</td>
                <td>{user.committee3}</td>
                <td>{user.preference3}</td>
                  <td>Portugal</td>
                  <td>Portugal</td>

                  <td>
                    <form class="">
                      <select name="committeeAlloted" id="committee">
                        <option value="">Committees</option>
                        <option value="AIPPM">AIPPM</option>
                        <option value="UNGA">UNGA</option>
                        <option value="UNSC">UNSC</option>
                        <option value="IP">IP</option>
                      </select>
                      <button type="submit" id="save">
                        Save
                      </button>
                    </form>
                  </td>
                  <td>
                    <input
                      type="text"
                      value=""
                      name="portfolioAlloted"
                      id="portfolioAlloted"
                    />

                    <button type="submit" id="save">
                      Save
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
            
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
