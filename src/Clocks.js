import React from 'react';

export default class ClockList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: Number(new Date())};
  }

  componentDidMount() {
    this.timer = setInterval(() => this.setState({time: Number(new Date())}), 1000);
  }

  componentWillUnmount() {
    this.timer = undefined;
  }

  clockRender(ms, tz) {
    const time = new Date(ms);
    time.setHours(time.getHours() + parseInt(tz));
    return time.getUTCHours().toString().padStart(2,'0') + ':' +
           time.getMinutes().toString().padStart(2,'0') + ':' +
           time.getSeconds().toString().padStart(2,'0');
  }
  
  render() {
    return (
      <div className='clock-list'>
        {this.props.clocks.map((clock, index) =>
          <div key={index} className='clock'>
            <div className='clock-name'>{clock.name}</div>
            <div className='clock-time'>{this.clockRender(this.state.time, clock.tz)}</div>
            <div className='clock-close' onClick={() => this.props.onClose(this.props.clocks, index)}>X</div>
          </div>
        )}
      </div>
    );
  }
}
