import {combineReducers} from 'redux';
import allFeedbacks from './feedback_reducer';
import allUsers from './users_reducer';
import feedbackClicked from './feedbackClickReducer';
import feedbackDescSubmitAction from './feedbackDescSubmit';

const allReducers = combineReducers({
    allFB: allFeedbacks,
    allU: allUsers,
    fbClicked: feedbackClicked,
    fbDescChanged: feedbackDescSubmitAction
})

export default allReducers