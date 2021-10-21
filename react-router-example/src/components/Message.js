import React from 'react';

const Message = ({ match }) => {
  console.log('match in Message:',match);
  return (
  <h3>Message with ID {match.params.id} in {match.url}</h3>

)};

export default Message;