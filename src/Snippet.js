import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './App.css';

// BUG In line 12

export default function Snippet(props) {
  return (
    <div>
      <Paper
        className="snippetBox"
        style={
          !props.item.fromUser
            ? { float: 'left', backgroundColor: '#6accc3' }
            : { float: 'right' }
        }
      >
        <Typography component="p">{props.item.text}</Typography>
      </Paper>
    </div>
  );
}
