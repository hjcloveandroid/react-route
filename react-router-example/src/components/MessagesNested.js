import React from "react";

import { Link, Redirect, Route, Switch } from "react-router-dom";

import Message from './Message';

const Messages = (props) => {
  const {match, history} = props;
  console.log('match in Messages:',props);
  // props.history.push('/home');
  
  return (
    <div>
    <ul>
      {[...Array(5).keys()].map((n) => {
        return (
          <li key={n}>
            <Link to={`${match.url}/${n + 1}`}>Message {n + 1}</Link>
          </li>
        );
      })}
    </ul>
    <Switch>
    {/* 设置进入message list后的默认内容，未选择某一项 */}
    <Route exact path={match.url}  render={() => <h3>Please select a message</h3>} />
    <Route path={`${match.url}/:id`} component={Message}/>
    {/* <Redirect to='/home'/> */}
    </Switch>
  </div>
)};

export default Messages;
