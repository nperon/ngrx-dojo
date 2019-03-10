const initialState = {
        xCoordinate : 60,
        yCoordinate : 140,
}

export function editableSvgReducer(state = initialState, action) {
    switch (action.type) {
        case MOVE_LEFT:
            return {
                ...state,
                xCoordinate: state.xCoordinate-action.distance,
            }
        default:
          return state;
    }
}

const MOVE_LEFT = 'MOVE_LEFT';

export class moveLeftAction {
    readonly type = MOVE_LEFT;
    constructor(public distance: number) {}
}