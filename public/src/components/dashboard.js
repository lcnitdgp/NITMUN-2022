import React from "react";
import "./dashboard.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Children, useState, useEffect } from "react";
//import { param } from "../../../backend/routes/auth";

function Dashboard() {
  const params = useParams();
  // const [name, setName] = useState([{}]);
  // const [email, setEmail] = useState([{}]);
  // const [phoneNumber, setPhoneNumber] = useState([{}]);
  // const [institute, setInstitute] = useState([{}]);
  // const [committee1, setComittee1] = useState([{}]);
  // const [preference1, setPreferences1] = useState([{}]);
  // const [committee2, setComittee2] = useState([{}]);
  // const [preference2, setPreferences2] = useState([{}]);
  // const [committee3, setComittee3] = useState([{}]);
  // const [preference3, setPreferences3] = useState([{}]);
  // const [experience, setExperience] = useState([{}]);
  const [data, setData] = useState([{}]);
  const [Name, setName] = useState([{}]);
  const [committeeAlloted, setCommitteeAlloted] = useState([{}]);
  const [committeef1, setCommitteef1] = useState("");
  const [committeef3, setCommitteef3] = useState("");
  const [committeef2, setCommitteef2] = useState("");
  const [Alloted, setAllotedCommittee] = useState("");

  // function both(user){
  //   setName(user.name)
  //   handleSubmit();
    
  // }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setName(name)
    console.log("Here" + Name)

    // await axios
    //   .post(`http://localhost:5000/updatecommittee/${Name}`, {
    //     committeeAlloted: committeeAlloted,
    //   })
    //   .then((res) => {
    //     console.log("Submitted, thank you!");
    //   });
  };

  // const data = {
  //   name,
  //   email,
  //   phoneNumber,
  //   institute,
  //   committee1,
  //   preference1,
  //   committee2,
  //   preference2,
  //   committee3,
  //   preference3,
  //   experience,
  // };

  function getData() {
    axios
      .get("http://localhost:5000/api/registration")
      .then((response) => response.data)
      .then((data) => {
        // console.log(data[1].name);
        setData(data);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  function payFunction() {
    window.location = "/api/payments";
    console.log("Clicked");
  }
  const datas =  data
  .map((user) =>  {
      return(
        
                  <tr>
                    <td >{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.institute}</td>
                    <td>{user.committee1}</td>
                    <td>{user.preference1}</td>
                    <td>{user.committee2}</td>
                    <td>{user.preference2}</td>
                    <td>{user.committee3}</td>
                    <td>{user.preference3}</td>
                    <td></td>
                    <td>{user.experience}</td>

                    <td>
                      <form class="">
                        <select
                          name="committeeAlloted"
                          id="committee"
                          className="input"
                          onChange={(e) => {
                            setCommitteeAlloted(e.target.value);
                          }}
                        >
                          <option value="">Committees</option>
                          <option value="AIPPM">AIPPM</option>
                          <option value="UNGA">UNGA</option>
                          <option value="UNSC">UNSC</option>
                          <option value="IP">IP</option>
                        </select>
                        <button type="submit" id="save" onClick={handleSubmit}>
                          Save
                        </button>
                      </form>
                    </td>
                    {/* ()=> {handleSubmit() && setName(user.name)}   */}
                    <td>
                      <input
                        type="text"
                        value=""
                        name="portfolioAlloted"
                        id="portfolioAlloted"
                      />

                      <button type="submit" id="save" >
                        Save
                      </button>
                    </td>
                  </tr>
                
      )
    });
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
            {/* <thead> */}
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
              <select
                class="table-filter"
                onChange={(e) => {
                  setCommitteef1(e.target.value);
                }}
              >
                <option value="all">UNGA-DISEC</option>
                <option value="all">UNGA-SPECPOL</option>
                <option value="all">AIPPM</option>
                <option value="all">IP</option>
              </select>
            </th>
            <th>Preferance 1</th>
            <th>
              Committee 2
              <select
                class="table-filter"
                onChange={(e) => {
                  setCommitteef2(e.target.value);
                }}
              >
                <option value="all">UNGA-DISEC</option>
                <option value="all">UNGA-SPECPOL</option>
                <option value="all">AIPPM</option>
                <option value="all">IP</option>
              </select>
            </th>
            <th>Preferance 1</th>
            <th>
              Committee 3
              <select
                class="table-filter"
                onChange={(e) => {
                  setCommitteef3(e.target.value);
                }}
              >
                <option value="all">UNGA-DISEC</option>
                <option value="all">UNGA-SPECPOL</option>
                <option value="all">AIPPM</option>
                <option value="all">IP</option>
              </select>
            </th>
            <th>Preferance 1</th>
            <th>
              Committee Alloted
              <select
                class="table-filter"
                onChange={(e) => {
                  setAllotedCommittee(e.target.value);
                }}
              >
                <option value="all">UNGA-DISEC</option>
                <option value="all">UNGA-SPECPOL</option>
                <option value="all">AIPPM</option>
                <option value="all">IP</option>
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
                <option value="all">Alloted</option>
                <option value="all">Not Alloted</option>
              </select>
            </th>
            <th></th>
            <th></th>
            <tbody>{datas}</tbody>
          </table>
        </div>
      </div>
    </div>
  );

  {
    /* </thead> */
  }

  {
    /* {data
              .filter(
                (data) => (data.committee1 = "UNGA-DISEC"),
                (data) => (data.institute = "NIT Durgapur")
              )
              .map((user) => ( */
  }
  {
    /* <tbody>
                  <tr>
                    <td >{data[1].name}</td>
                    <td>{data[1].email}</td>
                    <td>{data[1].phoneNumber}</td>
                    <td>{data[1].institute}</td>
                    <td>{data[1].committee1}</td>
                    <td>{data[1].preference1}</td>
                    <td>{data[1].committee2}</td>
                    <td>{data[1].preference2}</td>
                    <td>{data[1].committee3}</td>
                    <td>{data[1].preference3}</td>
                    <td>Portugal</td>
                    <td>Portugal</td>

                    <td>
                      <form class="" onSubmit={handleSubmit}>
                        <select
                          name="committeeAlloted"
                          id="committee"
                          onChange={(e) => {
                            setCommitteeAlloted(e.target.value);
                          }}
                        >
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
               {/* ))}  */
  }

  {
    /* </table>
        </div>
      </div>
    </div>
   */
  }
}

export default Dashboard;
