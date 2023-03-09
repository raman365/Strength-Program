import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './App.css';

function App() {
  const [oneRepMax, setOneRepMax] = useState('');

  const handleMaxChange = (event) => {
    setOneRepMax(event.target.value);
    setIsButtonClicked(false);
  }

  const calculateWarmUp1 = () => {
    if (!isNaN(oneRepMax)) {
      const warmUp1 = Math.round(0.15 * oneRepMax);
      const quotient = warmUp1 / 2;
      const remainder = quotient - Math.floor(quotient);
    
      if (remainder < 0.5) {
        return Math.ceil(quotient) * 2;
      } else {
        return Math.floor(quotient) * 2;
      }
        }
    return '';
  }

  const calculateWarmUp2 = () => {
    if (!isNaN(oneRepMax)) {
      const warmUp2 = Math.round(0.45 * oneRepMax);
      const quotient = warmUp2 / 2;
  const remainder = quotient - Math.floor(quotient);

  if (remainder < 0.5) {
    return Math.ceil(quotient) * 2;
  } else {
    return Math.floor(quotient) * 2;
  }
    }
    return '';
  }

  const calculateWarmUp3 = () => {
    if (!isNaN(oneRepMax)) {
      const warmUp3 = Math.round(0.65 * oneRepMax);
      const quotient = warmUp3 / 2;
      const remainder = quotient - Math.floor(quotient);
    
      if (remainder < 0.5) {
        return Math.ceil(quotient) * 2;
      } else {
        return Math.floor(quotient) * 2;
      }
        }
    return '';
  }

  const calculateStrengthRoutine = () => {
    if (!isNaN(oneRepMax)) {
      const strengthRoutine = Math.round(0.85 * oneRepMax);
      const quotient = strengthRoutine / 2;
      const remainder = quotient - Math.floor(quotient);
    
      if (remainder < 0.5) {
        return Math.ceil(quotient) * 2;
      } else {
        return Math.floor(quotient) * 2;
      }
        }
    return '';
  }

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleClick = () => {
    setIsButtonClicked(true);
  }

  const calculateNewWarmUp1 = () => {
    if (!isNaN(oneRepMax)) {
      const progress = calculateWarmUp1() * 0.05;
      const newRoutine = calculateWarmUp1() + progress;
      const quotient = newRoutine / 2;
      const remainder = quotient - Math.floor(quotient);
    
      if (remainder > 0.5) {
        return Math.ceil(quotient) * 2;
      } else {
        return Math.floor(quotient) * 2;
      }
        }
    return '';
  }

  const calculateNewWarmUp2 = () => {
    if (!isNaN(oneRepMax)) {
      const progress = calculateWarmUp2() * 0.05;
      const newRoutine = calculateWarmUp2() + progress;
      const quotient = newRoutine / 2;
      const remainder = quotient - Math.floor(quotient);
    
      if (remainder > 0.5) {
        return Math.ceil(quotient) * 2;
      } else {
        return Math.floor(quotient) * 2;
      }
        }
    return '';
  }

  const calculateNewWarmUp3 = () => {
    if (!isNaN(oneRepMax)) {
      const progress = calculateWarmUp3() * 0.05;
      const newRoutine = calculateWarmUp3() + progress;
      const quotient = newRoutine / 2;
      const remainder = quotient - Math.floor(quotient);
    
      if (remainder > 0.5) {
        return Math.ceil(quotient) * 2;
      } else {
        return Math.floor(quotient) * 2;
      }
        }
    return '';
  }
  const calculateNewRoutine = () => {
    if (!isNaN(oneRepMax)) {
      const progress = calculateStrengthRoutine() * 0.05;
      const newRoutine = calculateStrengthRoutine() + progress;
      const quotient = newRoutine / 2;
      const remainder = quotient - Math.floor(quotient);
    
      if (remainder > 0.5) {
        return Math.ceil(quotient) * 2;
      } else {
        return Math.floor(quotient) * 2;
      }
        }
    return '';
  }

  return (
    <div className="App">
      <h2>My Strength Routine</h2>
      <h3>Please enter your one rep max in KG below</h3>
      <TextField 
        id="standard-basic" 
        label="One Rep Max in KG" 
        variant="standard"
        value={oneRepMax}
        onChange={handleMaxChange}
      />
      <p>Your Strength routine is below;</p>
      <p>
        1 - Warm up {calculateWarmUp1()}KG X 10 Reps<br/>
        2 - Warm up {calculateWarmUp2()}KG X 5 Reps<br/>
        3 - Warm up {calculateWarmUp3()}KG X 3 Reps<br/>
        4 - 3 Sets of {calculateStrengthRoutine()}KG X 3 Reps (minimum)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Work up to 3 Sets of {calculateStrengthRoutine()}KG X 6 Reps (maximum)
      </p>
      <p>Click below once you have reached 3 Sets of {calculateStrengthRoutine()}KG X 6 Reps</p>
      <Button variant="contained" onClick={handleClick}>New Routine</Button>
      {isButtonClicked && <p>Congratulations, this is your new routine;<br/><br/>
        1 - Warm up {calculateNewWarmUp1()}KG X 10 Reps<br/>
        2 - Warm up {calculateNewWarmUp2()}KG X 5 Reps<br/>
        3 - Warm up {calculateNewWarmUp3()}KG X 3 Reps<br/>
        4 - 3 Sets of {calculateNewRoutine()}KG X 3 Reps (minimum)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Work up to 3 Sets of {calculateNewRoutine()}KG X 6 Reps (maximum)
      </p>}
    </div> 
  );
}

export default App;
