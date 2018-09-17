import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import feedbackDescSubmitAction from '../actions/feedbackDescSubmitAction'

class FeedbackDescription extends React.Component {

    constructor() {
        super()
        this.state = { description: "" }
    }

    render() {

        if (this.props.selectedProdProps == null) {
            return (
                <div>
                    Click on Any title..!!!
                </div>
            )
        }
        else {
            return (
                <div>
                    <ul>
                        <li>{this.props.selectedProdProps.description}</li>
                    </ul>
                    <form onSubmit={() => {
                        this.props.feedbackDescSubmitAction(
                            {
                                "id": this.props.selectedProdProps.id,
                                "description": this.state.description
                            })
                    }}>
                        Give a new description(if needed)<textarea onChange={this.inputDesc} type="text" />
                        <br /><br />
                        <button type="submit">Submit new title</button>
                    </form>
                </div>
            );
        }
    }
}

function inputDesc(e) {
    this.setState({ description: e.target.value })
}


function connectStoreToContainerProps(state) {
    console.log("ooooo")
    console.log(state.fbClicked)
    return {
        selectedProdProps: state.fbClicked,
        fbDescChanged: state.fbDescChanged
    }
}

function bindActionCreatorToContainerProps(dispatch) {
    console.log(dispatch)
    return bindActionCreators({ feedbackDescSubmitAction: feedbackDescSubmitAction }, dispatch)
}

export default connect(connectStoreToContainerProps, bindActionCreatorToContainerProps)(FeedbackDescription);