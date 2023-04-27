import React from "react";
import BankFlatironTRow from "./row";

function BankFlatironTable({ transactions, onDelete }) {
    return (
      <table >
        <thead>
          <tr>
            <th>ID</th>
            <th >DATE</th>
            <th >DESCRIPTION</th>
            <th >CATEGORY</th>
            <th >AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <BankFlatironTRow key={transaction.id} transaction={transaction} onDel
onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    );
  }
  
  export default BankFlatironTable;