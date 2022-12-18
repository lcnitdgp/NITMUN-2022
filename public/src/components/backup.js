import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div class="body-wrapper">
      <table className="container">
        <thead>
          <tr>
            <th>
              <h1>Name</h1>
            </th>
            <th>
              <h1>Amount</h1>
            </th>
            <th>
              <h1>Paid</h1>
            </th>
            <th>
              <h1>E-mail</h1>
            </th>
            <th>
              <h1>Ph no.</h1>
            </th>
            <th>
              <h1>Institute</h1>
            </th>
            <th>
              <h1>Committee</h1>
            </th>
            <th>
              <h1>Portfolio</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Soumik Biswas</td>
            <td>700</td>
            <td>Yes</td>
            <td>soumikjiswas@gmail.com</td>
            <td>6290575119</td>
            <td>National Institute Of Technology, Durgapur</td>
            <td>UNGA</td>
            <td>Republic of India</td>
          </tr>
          <tr>
            <td>Soumik Biswas</td>
            <td>700</td>
            <td>Yes</td>
            <td>soumikjiswas@gmail.com</td>
            <td>6290575119</td>
            <td>National Institute Of Technology, Durgapur</td>
            <td>UNGA</td>
            <td>Republic of India</td>
          </tr>
          <tr>
            <td>Soumik Biswas</td>
            <td>700</td>
            <td>Yes</td>
            <td>soumikjiswas@gmail.com</td>
            <td>6290575119</td>
            <td>National Institute Of Technology, Durgapur</td>
            <td>UNGA</td>
            <td>Republic of India</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
