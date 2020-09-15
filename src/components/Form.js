import React from 'react';

const Form = (props) => {
  return ( 
    <div>
      <form onSubmit={props.submit}>
        <input
          type="text"
          name=""
          id=""
          placeholder="search by name"
          onChange={props.change}
          value={props.value}
        />
        <button>show {props.value} drink</button>
      </form>
    </div>
   );
}
 
export default Form;