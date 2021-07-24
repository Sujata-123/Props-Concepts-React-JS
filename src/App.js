import React from 'react';
import './style.css';
import Practice1 from './Practice1';
const App = props => {
  const detailInformation = [
    { _id: '1', firstName: 'Sujata', lastName: 'Singh' },
    { _id: '2', firstName: 'Subham', lastName: 'Singh' },
    { _id: '3', firstName: 'Sandhya', lastName: 'Singh' },
    { _id: '4', firstName: 'Shashikant', lastName: 'Singh' }
  ];
  return (
    <div>
      {detailInformation.map(detail => {
        //using destructring
        // const { firstName, lastName } = detail;
        // return <Practice1 firstName={firstName} lastName={lastName} />;
        //using spread operator
        return <Practice1 key={detail._id} {...detail} />;
      })}
      {/* <Practice1 firstName="Sujata" lastName="Singh" />
      <Practice1 firstName="Subham" lastName="Singh" />
      <Practice1 firstName="Sandhya" lastName="Singh" />
      <Practice1 firstName="Shashikant" lastName="Singh" /> */}
    </div>
  );
};
export default App;
