import React from 'react';

const DemoOutput = (props) => {
  return (
    <div>
      <p>{props.show ? 'This is a simple React app.' : ''}</p>
    </div>
  )
}

export default React.memo(DemoOutput);
