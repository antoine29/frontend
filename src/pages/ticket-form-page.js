import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newTicket, saveTicket } from '../actions/ticket-actions';
import TicketForm from '../components/ticket-form';

class TicketFormPage extends Component {

    state = {
        redirect: false
    }

    componentDidMount(){
        this.props.newTicket();
    }

    submit = (ticket) => {
        return this.props.saveTicket(ticket)
        .then(response => this.setState({ redirect:true}))
        .catch(err => {
            throw new SubmissionError(this.props.errors)
        })
    }

    // render(){
    //     return(
    //         <div>
    //             <TicketForm/>
    //         </div>
    //     )
    // }

    render(){
        return(
            <div>
                {
                    this.state.redirect ?
                    <Redirect to="/"/> :
                    <TicketForm ticket={this.props.ticket} loading={this.props.loading} onSubmit={this.submit} />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        ticket: state.ticketStore.ticket,
        errors: state.ticketStore.errors
    }
}

// export default TicketFormPage;
export default connect(mapStateToProps, {newTicket, saveTicket})(TicketFormPage);