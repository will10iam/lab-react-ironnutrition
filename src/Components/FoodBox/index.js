import React from "react";

export function FoodBox(props) {
console.log(props)
    return ( 
        <>
        <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={props.nameFoods.image} alt={props.nameFoods.name} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{props.nameFoods.name}</strong> <br />
          <small>{props.nameFoods.calories} cal</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" value="1" />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
    </>
     );
}

export default FoodBox;