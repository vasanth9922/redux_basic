import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import selectFeedback from '../actions/index'

class FeedbackTitle extends React.Component {

    displayTitles() {
        return (
            this.props.feedbacks.map((feedback) => (
                <li
                    key={feedback.id}
                    onClick={() => { this.props.selectFeedback(feedback) }}
                > {feedback.title} </li>
            ))
        )
    }
    render() {
        return (
            <div>
                <ul>
                    {this.displayTitles()}
                </ul>
            </div>
        );
    }
}

function connectStoreToContainerProps(state) {

    console.log("pppp")
    console.log(state.fbClicked)
    return {
        feedbacks: state.allFB
    }
}

function bindActionCreatorToContainerProps(dispatch) {
    console.log(dispatch)
    return bindActionCreators({ selectFeedback: selectFeedback }, dispatch)
}

export default connect(connectStoreToContainerProps, bindActionCreatorToContainerProps)(FeedbackTitle)