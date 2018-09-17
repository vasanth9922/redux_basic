import React from 'react';
import FeedbackTitle from '../containers/feedbackTitle';
import FeedbackDescription from '../containers/feedbackDescription';

class RootComponent extends React.Component {

    render() {
        return (
        <div>
            Root component of redux!!!!!!!!
            <p></p>
            smart container it is!!!
            <p></p>
            <FeedbackTitle />
            <hr></hr>
            <FeedbackDescription />
        </div>);
    }
}

export default RootComponent;