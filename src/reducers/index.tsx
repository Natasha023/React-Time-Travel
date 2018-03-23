import { EnthusiasmAction, TimerAction } from '../actions';
import { StoreState, TimeState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM, START_TIMER, STOP_TIMER, CLEAR_TIMER, TIMER_TICKER } from '../constants/index';
import { Dispatch } from 'react-redux';
import * as actions from '../actions';

export function enthusiasm(state: StoreState, action: EnthusiasmAction ): StoreState {
    switch (action.type) {

        case INCREMENT_ENTHUSIASM:
            return {...state, enthusiasmLevel: state.enthusiasmLevel + 1};
        case DECREMENT_ENTHUSIASM:
            return {...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)};
        default:
            return state;
    }
}

export function timerReducer(state: TimeState, action: TimerAction): TimeState {
    switch (action.type) {
      case START_TIMER:
            return {...state, start: true};
       case TIMER_TICKER:
            return {...state, counter: state.counter + 1};
       case STOP_TIMER:
            return {...state, timer: null, start: false};
       case CLEAR_TIMER:
            return {...state, timer: null, counter: 0}
       default:
            return state;
    }
}