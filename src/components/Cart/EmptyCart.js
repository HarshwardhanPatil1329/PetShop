import React from "react";
export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto  text-center text-title">
          <h1>Your cart is currently<br/> empty</h1>
        </div>
        <div className="col-10 mx-auto  text-center text-title">
          <h1>Add Some Pets to Proceed</h1>
        </div>

      </div>
    </div>
  );
}
