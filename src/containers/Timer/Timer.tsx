import Timer from '../../components/Timer/Timer';
import * as actions from '../../actions/';
import { TimeState } from '../../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ timer, counter, start }: TimeState) {
    return {
        timer,
        counter,
        start
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.TimerAction>) {
    let timer: any = null;
    return {
        onStartTimer: () => {
           timer = setInterval(() => dispatch(actions.timerTicker()), 1000);
           dispatch(actions.startTimer());
        },
        onTimerTicker: () => dispatch(actions.timerTicker()),
        onStopTimer: () => {
            clearInterval(timer);
            dispatch(actions.stopTimer());
        },
        onClearTimer: () => dispatch(actions.clearTimer()),
    };
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Timer);