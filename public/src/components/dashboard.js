import React from "react";
import "./dashboard.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Children, useState, useEffect } from "react";
//import { param } from "../../../backend/routes/auth";

function Dashboard() {
  const params = useParams();
  
  const [data, setData] = useState([{}]);
  const [Name, setName] = useState([{}]);
  const [committeeAlloted, setCommitteeAlloted] = useState([{}]);
  const [portfolioAlloted, setPortfolioAlloted] = useState([{}]);
  const [committeef1, setCommitteef1] = useState("");
  const [committeef3, setCommitteef3] = useState("");
  const [committeef2, setCommitteef2] = useState("");
  const [Alloted, setAllotedCommittee] = useState("");
  const [institutef, setInstitutef] = useState("");
  const [yearf, setYearf] = useState("");
  const [Allotedmail, setAllotedmail] = useState("");
  const [paid,setPaid]=useState(false);
  

  // function both(user){
  //   setName(user.name)
  //   handleSubmit();

  // }

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
  let datas = data.map((user) => {
    const handleSubmit = async (e) => {
      e.preventDefault();

      await axios
        .post(`http://localhost:5000/api/updatecommittee/${user._id}`, {
          committeeAlloted: committeeAlloted,
        })
        .then((res) => {
          console.log("Submitted, thank you!");
        });
    };
    const handleSubmit1 = async (e) => {
      e.preventDefault();

      await axios
        .post(`http://localhost:5000/api/updateportfolio/${user._id}`, {
          portfolioAlloted: portfolioAlloted,
        })
        .then((res) => {
          console.log("Submitted, thank you!");
        });
    };
    const handleSubmit2 = async (e) => {
      e.preventDefault();

      await axios
        .post(`http://localhost:5000/api/allotmentmail/${user._id}`, {
          Allotedmail: true,  
        })
        .then((res) => {
          setAllotedmail(true);
          console.log("Submitted, thank you!");
        });
    };
    const handleSubmit3 = async (e) => {
      e.preventDefault();

      await axios
        .post(`http://localhost:5000/api/paymentmail/${user._id}`, {
          paid: true,  
        })
        .then((res) => {
          setAllotedmail(true);
          console.log("Submitted, thank you!");
        });
    };


    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.institute}</td>
        <td>{user.year}</td>
        <td>{user.roll}</td>
        <td>{user.committee1}</td>
        <td>{user.preference1}</td>
        <td>{user.committee2}</td>
        <td>{user.preference2}</td>
        <td>{user.committee3}</td>
        <td>{user.preference3}</td>
        <td>{user.committeeAlloted}</td>
        <td>{user.portfolioAlloted}</td>
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
            value={portfolioAlloted}
            onChange={(e) => {
              setPortfolioAlloted(e.target.value);
            }}
            name="portfolioAlloted"
            id="portfolioAlloted"
          />
          <button type="submit" id="save" onClick={handleSubmit2}>Save</button>
        </td>
        <td></td>
        <td>
          <button type="submit" id="save" onClick={handleSubmit2} style={
                  Allotedmail == true
                    ? { display: "none" }
                    : { display: "block" }
                }>
           Allotment mail 
          </button>
        </td>
        <td><button type="submit" id="save" onClick={handleSubmit3} style={
                  paid == true
                    ? { display: "none" }
                    : { display: "block" }
                }>
           Confirmation Mail 
          </button></td>
      </tr>
    );
  });
  if (committeef1) {
    datas = data
      .filter((data) => data.committee1 == committeef1)
      .map((user) => {
        const handleSubmit = async (e) => {
          e.preventDefault();

          await axios
            .post(`http://localhost:5000/api/updatecommittee/${user._id}`, {
              committeeAlloted: committeeAlloted,
            })
            .then((res) => {
              console.log("Submitted, thank you!");
            });
        };
        const handleSubmit1 = async (e) => {
          e.preventDefault();

          await axios
            .post(`http://localhost:5000/api/updateportfolio/${user._id}`, {
              portfolioAlloted: portfolioAlloted,
            })
            .then((res) => {
              console.log("Submitted, thank you!");
            });
        };

        return (
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.institute}</td>
            <td>{user.year}</td>
            <td>{user.roll}</td>
            <td>{user.committee1}</td>
            <td>{user.preference1}</td>
            <td>{user.committee2}</td>
            <td>{user.preference2}</td>
            <td>{user.committee3}</td>
            <td>{user.preference3}</td>
            <td>{user.committeeAlloted}</td>
            <td>{user.portfolioAlloted}</td>
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
                value={portfolioAlloted}
                onChange={(e) => {
                  setPortfolioAlloted(e.target.value);
                }}
                name="portfolioAlloted"
                id="portfolioAlloted"
              />

              <button type="submit" id="save" onClick={handleSubmit1}>
                Save
              </button>
            </td>
          </tr>
        );
      });
  }
  if (committeef2) {
    datas = data
      .filter((data) => data.committee2 == committeef2)
      .map((user) => {
        const handleSubmit = async (e) => {
          e.preventDefault();

          await axios
            .post(`http://localhost:5000/api/updatecommittee/${user._id}`, {
              committeeAlloted: committeeAlloted,
            })
            .then((res) => {
              console.log("Submitted, thank you!");
            });
        };
        const handleSubmit1 = async (e) => {
          e.preventDefault();

          await axios
            .post(`http://localhost:5000/api/updateportfolio/${user._id}`, {
              portfolioAlloted: portfolioAlloted,
            })
            .then((res) => {
              console.log("Submitted, thank you!");
            });
        };

        return (
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.institute}</td>
            <td>{user.year}</td>
            <td>{user.roll}</td>
            <td>{user.committee1}</td>
            <td>{user.preference1}</td>
            <td>{user.committee2}</td>
            <td>{user.preference2}</td>
            <td>{user.committee3}</td>
            <td>{user.preference3}</td>
            <td>{user.committeeAlloted}</td>
            <td>{user.portfolioAlloted}</td>
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
                value={portfolioAlloted}
                onChange={(e) => {
                  setPortfolioAlloted(e.target.value);
                }}
                name="portfolioAlloted"
                id="portfolioAlloted"
              />

              <button type="submit" id="save" onClick={handleSubmit1}>
                Save
              </button>
            </td>
          </tr>
        );
      });
  }
  if (Alloted) {
    datas = data
      .filter((data) => data.committeeAlloted == Alloted)
      .map((user) => {
        const handleSubmit = async (e) => {
          e.preventDefault();

          await axios
            .post(`http://localhost:5000/api/updatecommittee/${user._id}`, {
              committeeAlloted: committeeAlloted,
            })
            .then((res) => {
              console.log("Submitted, thank you!");
            });
        };
        const handleSubmit1 = async (e) => {
          e.preventDefault();

          await axios
            .post(`http://localhost:5000/api/updateportfolio/${user._id}`, {
              portfolioAlloted: portfolioAlloted,
            })
            .then((res) => {
              console.log("Submitted, thank you!");
            });
        };

        return (
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.institute}</td>
            <td>{user.year}</td>
            <td>{user.roll}</td>
            <td>{user.committee1}</td>
            <td>{user.preference1}</td>
            <td>{user.committee2}</td>
            <td>{user.preference2}</td>
            <td>{user.committee3}</td>
            <td>{user.preference3}</td>
            <td>{user.committeeAlloted}</td>
            <td>{user.portfolioAlloted}</td>
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
                value={portfolioAlloted}
                onChange={(e) => {
                  setPortfolioAlloted(e.target.value);
                }}
                name="portfolioAlloted"
                id="portfolioAlloted"
              />

              <button type="submit" id="save" onClick={handleSubmit1}>
                Save
              </button>
            </td>
          </tr>
        );
      });
  }
  if (yearf) {
    datas = data
      .filter((data) => data.year == yearf)
      .map((user) => {
        const handleSubmit = async (e) => {
          e.preventDefault();

          await axios
            .post(`http://localhost:5000/api/updatecommittee/${user._id}`, {
              committeeAlloted: committeeAlloted,
            })
            .then((res) => {
              console.log("Submitted, thank you!");
            });
        };
        const handleSubmit1 = async (e) => {
          e.preventDefault();

          await axios
            .post(`http://localhost:5000/api/updateportfolio/${user._id}`, {
              portfolioAlloted: portfolioAlloted,
            })
            .then((res) => {
              console.log("Submitted, thank you!");
            });
        };

        return (
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.institute}</td>
            <td>{user.year}</td>
            <td>{user.roll}</td>
            <td>{user.committee1}</td>
            <td>{user.preference1}</td>
            <td>{user.committee2}</td>
            <td>{user.preference2}</td>
            <td>{user.committee3}</td>
            <td>{user.preference3}</td>
            <td>{user.committeeAlloted}</td>
            <td>{user.portfolioAlloted}</td>
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
                value={portfolioAlloted}
                onChange={(e) => {
                  setPortfolioAlloted(e.target.value);
                }}
                name="portfolioAlloted"
                id="portfolioAlloted"
              />

              <button type="submit" id="save" onClick={handleSubmit1}>
                Save
              </button>
            </td>
            <td></td>
            <td>
              <button type="submit" id="Payment Mail"></button>
            </td>
            
          </tr>
        );
      });
  }
  if (committeef3) {
    datas = data
      .filter((data) => data.committee3 == committeef3)
      .map((user) => {
        const handleSubmit = async (e) => {
          e.preventDefault();

          await axios
            .post(`http://localhost:5000/api/updatecommittee/${user._id}`, {
              committeeAlloted: committeeAlloted,
            })
            .then((res) => {
              console.log("Submitted, thank you!");
            });
        };
        const handleSubmit1 = async (e) => {
          e.preventDefault();

          await axios
            .post(`http://localhost:5000/api/updateportfolio/${user._id}`, {
              portfolioAlloted: portfolioAlloted,
            })
            .then((res) => {
              console.log("Submitted, thank you!");
            });
        };

        return (
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.institute}</td>
            <td>{user.year}</td>
            <td>{user.roll}</td>
            <td>{user.committee1}</td>
            <td>{user.preference1}</td>
            <td>{user.committee2}</td>
            <td>{user.preference2}</td>
            <td>{user.committee3}</td>
            <td>{user.preference3}</td>
            <td>{user.committeeAlloted}</td>
            <td>{user.portfolioAlloted}</td>
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
                value={portfolioAlloted}
                onChange={(e) => {
                  setPortfolioAlloted(e.target.value);
                }}
                name="portfolioAlloted"
                id="portfolioAlloted"
              />

              <button type="submit" id="save" onClick={handleSubmit1}>
                Save
              </button>
            </td>
          </tr>
        );
      });
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
            {/* <thead> */}
            <th>Name</th>
            <th>E-mail</th>
            <th>Phone no.</th>
            <th>
              Institute
              <select class="table-filter"
              value={institutef}
              onChange={(e) => {
                setInstitutef(e.target.value);
              }}>
                <option value="NIT Durgapur">NIT Durgapur</option>
              </select>
            </th>
            <th>
              Year
              <select class="table-filter"
              value={yearf}
              onChange={(e) => {
                setYearf(e.target.value);
              }}>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
            </th>
            <th>Roll Number</th>
            <th>
              Committee 1
              <select
                class="table-filter"
                value={committeef1}
                onChange={(e) => {
                  setCommitteef1(e.target.value);
                }}
              >
                <option value="UNGA-DISEC">UNGA-DISEC</option>
                <option value="UNGA-SPECPOL">UNGA-SPECPOL</option>
                <option value="AIPPM">AIPPM</option>
                <option value="IP">IP</option>
              </select>
            </th>
            <th>Preferance 1</th>
            <th>
              Committee 2
              <select
                class="table-filter"
                value={committeef2}
                onChange={(e) => {
                  setCommitteef2(e.target.value);
                }}
              >
                <option value="UNGA-DISEC">UNGA-DISEC</option>
                <option value="UNGA_SPECPOL">UNGA-SPECPOL</option>
                <option value="AIPPM">AIPPM</option>
                <option value="IP">IP</option>
              </select>
            </th>
            <th>Preferance 1</th>
            <th>
              Committee 3
              <select
                class="table-filter"
                value={committeef3}
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
                value={Alloted}
                onChange={(e) => {
                  setAllotedCommittee(e.target.value);
                }}
              >
                <option value="UNGA-DISEC">UNGA-DISEC</option>
                <option value="UNGA_SPECPOL">UNGA-SPECPOL</option>
                <option value="AIPPM">AIPPM</option>
                <option value="IP">IP</option>
              </select>
            </th>
            <th>portfolioAlloted</th>
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
            <th>Payment Mail</th>
            <th>
              Paid to
              <select class="table-filter">
                <option value="Archit">Archit</option>
                <option value="Pushpal">Pushpal</option>
              </select>
            </th>
            <th>Confirmation mail</th>

            <tbody>{datas}</tbody>
          </table>
        </div>
      </div>
    </div>
  );


}

export default Dashboard;
