/* this is action creater... recieving the feedback 
state change and creating an action */


const selectFeedback = function(feedback) {

    console.log("vasanth" + feedback.id);

    return {
        type: "FEEDBACK_CLICKED",
        payload: feedback
    }
}

export default selectFeedback;