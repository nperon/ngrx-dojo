import { Action } from '@ngrx/store';

const MOVE_RIGHT = 'MOVE_RIGHT';

const initialState = {
        xCoordinate : 60,
        yCoordinate : 140,
}

export function editableSvgReducer(state = initialState, action: Action) {
    return state;
}