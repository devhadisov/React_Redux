
import { combineReducers } from 'redux';
import { types } from './action';


const initialState = {
    checked: [true, false, false, false],
    adult: [1, 1, 1, 1],
    children: [0, 0, 0, 0]
}

const app = (state = initialState, action) => {
    switch (action.type) {

        case types.INIT_APPSTATE:
        {
            return Object.assign({}, state,
                {
                    adult: action.adult,
                    children: action.children,
                    checked: action.checked
                });
        }

        case types.CHANGE_ADULT:
        {
            let adult = state.adult.slice();
            let room = Number(action.room) - 1;
            let value = Number(action.value);
            adult[room] = value;
            return Object.assign({}, state, 
                {
                    adult: adult
                });
        }

        case types.CHANGE_CHILDREN:
        {
            let children = state.children.slice();
            let room = Number(action.room) - 1;
            let value = Number(action.value);
            children[room] = value;
            return Object.assign({}, state, 
                {
                    children: children
                });
        }

        case types.SELECT_CHECK:
        {
            let checked = state.checked.slice();
            const checked_room_id = Number(action.room) - 1;

            const isChecked = action.value;
            if (isChecked) {
                for (let i = 1; i <= checked_room_id; i++) {
                    checked[i] = action.value;
                }
            } else {
                for (let i = checked_room_id; i < checked.length; i++) {
                    checked[i] = action.value;
                }
            }


            // restore adult and children to its default value
            let adult = state.adult.slice();
            let children = state.children.slice();
            for (let i = 0; i < checked.length; i++) {
                if (checked[i] === false) {
                    adult[i] = 1;
                    children[i] = 0;
                }
            }

            return Object.assign({}, state, 
                {
                    checked: checked,
                    adult: adult,
                    children: children
                });
        }

        default: 
            return state;
    }
}


const reducers = combineReducers({
     app
});

export default reducers;