import React from 'react';

function WelcomeMessage(props) {
  return (
    <div>
      <h1>你好, {props.name}!</h1>
      <p>欢迎来到我的 React 应用程序。很高兴见到你！</p>
    </div>
  );
}

export default WelcomeMessage;