const initialState = {
        xCoordinate : 140,
        yCoordinate : 140,
        text: "Hello World!"
}

export function editableSvgReducer(state = initialState, action) {
    switch (action.type) {
        case MOVE_LEFT:
            return {
                ...state,
                xCoordinate: state.xCoordinate-action.distance,
            }
        case UPDATE_TEXT:
            return {
                ...state, 
                text: action.newText,
            }
        default:
          return state;
    }
}

const MOVE_LEFT = 'MOVE_LEFT';
const UPDATE_TEXT = 'UPDATE_TEXT';

export class moveLeftAction {
    readonly type = MOVE_LEFT;
    constructor(public distance: number) {}
}

export class updateTextAction {
    readonly type = UPDATE_TEXT;
    constructor(public newText: string) {}
}
