import React from "react";
import "./dashboard.css";

const dashboard = () => {
  return (
    <div>
      <div class="top">
        <h1>All Participants</h1>
        <button id="myButton">Payment Details</button>
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
            <tbody>
              <tr>
                <td>SIUUUU</td>
                <td>siu@siu.com</td>
                <td>8745233623</td>
                <td>SIUUUU Institute Of Technology</td>
                <td>UNGA_DISEC</td>
                <td>Portugal</td>
                <td>UNGA_DISEC</td>
                <td>Portugal</td>
                <td>UNGA_DISEC</td>
                <td>Portugal</td>
                <td>Portugal</td>
                <td>Portugal</td>
                
                <td>
                  <form
                    action="/api/updatecommittee/<%= records.id %>"
                    method="POST"
                    class=""
                  >
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
                        <input type="text" value="" name="portfolioAlloted" id="portfolioAlloted"/> 
                                        
                         <button type="submit" id="save">Save</button>                        
                </td>
              </tr>
              <tr>
                <td>SIUUUU</td>
                <td>siu@siu.com</td>
                <td>8745233623</td>
                <td>SIUUUU Institute Of Technology</td>
                <td>UNGA_DISEC</td>
                <td>Portugal</td>
                <td>UNGA_DISEC</td>
                <td>Portugal</td>
                <td>UNGA_DISEC</td>
                <td>Portugal</td>
                <td>Portugal</td>
                <td>Portugal</td>
                
                <td>
                  <form
                    action="/api/updatecommittee/<%= records.id %>"
                    method="POST"
                    class=""
                  >
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
                        <input type="text" value="" name="portfolioAlloted" id="portfolioAlloted"/> 
                                        
                         <button type="submit" id="save">Save</button>                        
                </td>
              </tr>
              <tr>
                <td>SIUUUU</td>
                <td>siu@siu.com</td>
                <td>8745233623</td>
                <td>SIUUUU Institute Of Technology</td>
                <td>UNGA_DISEC</td>
                <td>Portugal</td>
                <td>UNGA_DISEC</td>
                <td>Portugal</td>
                <td>UNGA_DISEC</td>
                <td>Portugal</td>
                <td>Portugal</td>
                <td>Portugal</td>
                <td>
                  <form
                    action="/api/updatecommittee/<%= records.id %>"
                    method="POST"
                    class=""
                  >
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
                        <input type="text" value="" name="portfolioAlloted" id="portfolioAlloted"/> 
                                        
                         <button type="submit" id="save">Save</button>                        
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
