import * as React from 'react';
import Button from 'antd/lib/button';
import './Timer.css';

export interface TimerProp {
    timer?: Date;
    counter?: number;
    start?: boolean,
    onStartTimer?: () => void;
    onStopTimer?: () => void;
    onClearTimer?: () => void;
}
export default class Timer extends React.Component<TimerProp, object> {

  render() {
    const { timer, counter = 0, start, onStartTimer, onStopTimer, onClearTimer} = this.props;
    const color = counter % 2 ? 'green' : 'red';
    return (
        <div className="timer">
           <h1>Timer:<span style={{color}}> {counter}</span></h1> 
            <div>
                <Button type="primary" size="large" onClick={start ? onStopTimer : onStartTimer}>{start ? 'Stop' : 'Start'}</Button>
                <span/>
                <Button type="ghost" size="large" onClick={onClearTimer}>Clear</Button>
            </div>
        </div>
    );
  }
}