
export const types = {
    INIT_APPSTATE: "INIT_APPSTATE",
    CHANGE_ADULT: "CHANGE_ADULT",
    CHANGE_CHILDREN : "CHANGE_CHILDREN",
    SELECT_CHECK : "SELECT_CHECK"
}

export const initAppState = (adult, children, checked) => {
    return {
        type: types.INIT_APPSTATE,
        adult: adult,
        children: children,
        checked: checked
    };
}

export const changeAdult = (room, value) => {
    return {
        type: types.CHANGE_ADULT,
        room: room,
        value: value
    };
}

export const changeChildren = (room, value) => {
    return {
        type: types.CHANGE_CHILDREN,
        room: room,
        value: value
    };
}

export const selectCheck = (room, value) => {
    return {
        type: types.SELECT_CHECK,
        room: room,
        value: value
    };
}

