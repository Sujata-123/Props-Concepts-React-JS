import React from 'react';
import Practice2 from './Practice2';
const Practice1 = props => {
  // object destructring
  const { firstName, lastName } = props;
  console.log(props);
  return (
    <div>
      {/* {props.firstName+"  "+props.lastName} */}
      {/* We can write like this also using string interpolation */}
      {/* {`First name is ${props.firstName} and last name is ${props.lastName}`} */}
      {/* Using object destructring thatswhy not writing props*/}
      {firstName} {lastName}
     {/* <Practice2 firstName="Sujata" lastName="Singh" role="Developer"/> */}
    </div>
  );
};
export default Practice1;
