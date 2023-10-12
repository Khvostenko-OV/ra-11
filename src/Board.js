import { useState } from 'react';
import ClockList from './Clocks';

export default function Board() {
  const [state, setState] = useState({name: '', tz: '0', clocks: []});

  const onSubmit = (evt) => {
    evt.preventDefault();
    setState({name: '', tz: '0', clocks: [...state.clocks, {name:state.name, tz:state.tz}]});
  }
  
  const onChange = ({target}) => {
    setState(prValue => ({...prValue, [target.name]: target.value}));
  }

  const clockClose = (clocks, pos) => {
    setState(prValue => ({...prValue, clocks: clocks.filter((_,i) => i !== pos)}));
  }
  
  return (
    <div className='body'>

      <form className='form' onSubmit={onSubmit}>
        <label>Название:
          <input className='input-name' name='name' value={state.name} onChange={onChange} required/>
        </label>
        <label>Часовой пояс:
          <input className='input-tz' type='number' name='tz' value={state.tz} onChange={onChange} required/>
        </label>
        <button className='button' type='submit'>Добавить</button>
      </form>

      {state.clocks.length? <ClockList clocks={state.clocks} onClose={clockClose}/> : null}

    </div>
    );
}
