import React from 'react';
import Snippet from './Snippet';
import './App.css';

export default function ChatZone(props) {
  const history = props.chatItems;

  return (
    <div className="innerShadow">
      <div className="chatWrap">
        {history.map((item, index) => (
          <Snippet key={item.text + index} item={item} />
        ))}
      </div>
    </div>
  );
}
