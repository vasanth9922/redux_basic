const feedbackDescSubmitAction = function(feedback) {

    console.log("priya" + feedback.description);

    return {
        type: "FEEDBACK_DESC_CHANGE",
        payload: feedback
    }
}

export default feedbackDescSubmitAction;