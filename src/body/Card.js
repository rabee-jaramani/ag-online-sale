import React from 'react';

export default function Card(props) {
  // eslint-disable-next-line no-unused-vars

  return (
    <div className="card container">
      {/* <div className="title">{props.brand}</div> */}
      <img src={props.logo} alt="logo" />
      <div className="sale1">{props.offer1}</div>
      <div className="sale2">{props.offer2}</div>
      <div className="terms">*T&C Apply</div>
      <a
        className="shop-now-a"
        href={props.link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="btn-div">
          <span>Shop Now</span>
          <i className="fa-solid fa-tags"></i>
        </div>
      </a>

    </div>
  );
}
