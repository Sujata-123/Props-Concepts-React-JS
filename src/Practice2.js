import React from 'react';
import Practice3 from './Practice3';
const Practice2 = props => {
  // Object destructring
  const { firstName, lastName, role } = props;
  console.log(props);

  return (
    <div>
      {/* {props.firstName} {props.lastName} {props.role} */}
      {/* Not writing props because  using object destructring */}
      {firstName}
      {lastName}
      {role}
      {/* <Practice3
        firstName="Sujata"
        lastName="Singh"
        Company="Appwrt it Solutions"
        role="Developer"
      /> */}
    </div>
  );
};
export default Practice2;
