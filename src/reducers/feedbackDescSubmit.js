const feedbackDescSubmit = function (state = null, action) {

    switch (action.type) {
        case "FEEDBACK_DESC_CHANGE":
            console.log("jjjj" + action.payload)
            return action.payload
            break;

        default:
            break;
    }

    return state
}

export default feedbackDescSubmit;