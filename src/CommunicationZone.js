import React from 'react';
import './App.css';
import ChatZone from './ChatZone';
import ContactWindow from './ContactWindow';
import InputZone from './InputZone';

const CommunicationZone = () => {

  const [value, setValue] = React.useState('')
  const [history, setHistory] = React.useState([{text:'How can I help You?', fromUser: false}])
  

  function handleChange(event) {
    setValue(event.target.value)
  }

  function handleSubmit( event, clicked) {
    if ((clicked || event.key === 'Enter') && value.trim().length>0) {

      const _currentValue=value;
      setValue('');

      // setHistory([...history,{text:_currentValue, fromUser: true}])
      setHistory(oldVal=>[...oldVal,{text:_currentValue, fromUser: true}])
      setTimeout(()=>dialogueEngine(_currentValue), 3000);
    }
    // cleanHistory();
  }

  function dialogueEngine(inputValue) {
    const answersBasic = [
      'can you elaborate?',
      'and why do you believe that is so?',
      'can you be more specific?',
      'what would be your guess?',
      'I need more details for this one',
    ];
    const answersAdvanced = [
      'have you check the logs?',
      'have you tried restarting?',
      'what does the documentation say?',
      'Maybe its a typo',
    ];
    const answersAdjust = [
      'you need to be a bit more specific',
      'come on I am trying to help',
      'whatever',
      'that does not sound like a bug',
    ];

    let response='';

    if (inputValue.length <= 7) {
      response = answersAdjust[Math.floor(Math.random() * answersAdjust.length)];
    } else if ( history.length <= 3 && inputValue.length > 6 ) {
      response = answersBasic[Math.floor(Math.random() * answersBasic.length)];
    } else if ( history.length >= 4) {
      response = answersAdvanced[Math.floor(Math.random() * answersAdvanced.length)];
    }

    // setHistory([...history,{text: response, fromUser: false}])
    setHistory(oldVal=>[...(oldVal.length>12 ? oldVal.slice(-12) : oldVal), {text: response, fromUser: false}])

  }

  return (
    <div className="chatHost innerShadow">
      <ContactWindow />
      <ChatZone chatItems={history} />
      <InputZone
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
      />
    </div>
  );
};

export default CommunicationZone;
