import React from 'react'
import "./dashboard.css"

const Payment = () => {
  return (
    <div>
        <div class="top">
    <h1>Payment Details</h1>
    </div>
    
    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Paid To</th>
                <th>Email</th>
                <th>Ph. No</th>
                <th>Institute</th>
                <th>Committee</th>
                <th>Portfolio</th>
                <th>Date</th>
                <th>Preference1</th>
                <th>Preference2</th>
                <th>Prefernce3</th>
            </tr>
        </thead>
        </table>
    </div>
  )
}

export default Payment;