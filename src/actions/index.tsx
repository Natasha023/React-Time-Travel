import * as constants from '../constants';

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}
export interface StartTimer {
    type: constants.START_TIMER;
}

export interface StopTimer {
    type: constants.STOP_TIMER;
}

export interface ClearTimer {
    type: constants.CLEAR_TIMER;
}

export interface TimerTicker {
    type: constants.TIMER_TICKER;
}

export type TimerAction = StartTimer | StopTimer | ClearTimer |TimerTicker;

export function startTimer(): TimerAction {
    return {
        type: constants.START_TIMER
    };
}

export function stopTimer(): TimerAction {
    return {
        type: constants.STOP_TIMER
    };
}

export function clearTimer(): TimerAction {
    return {
        type: constants.CLEAR_TIMER
    };
}

export function timerTicker(): TimerAction {
    return {
        type: constants.TIMER_TICKER
    };
}