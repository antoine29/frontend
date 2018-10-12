import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newTicket, saveTicket, fetchTicket, updateTicket } from '../actions/ticket-actions';
import TicketForm from '../components/ticket-form';
// import { newTicket, saveTicket, fetchTicket, updateTicket} from '../actions/ticket-actions';

class TicketFormPage extends Component {

    state = {
        redirect: false
    }

    componentDidMount(){
        // this.props.newTicket();
        const {_id} = this.props.match.params;
        if(_id) this.props.fetchTicket(_id)
        else this.props.newTicket();
    }

    submit = (ticket) => {
        if(!ticket._id){
            return this.props.saveTicket(ticket)
            .then(response => this.setState({ redirect:true }))
            .catch(err => {
                throw new SubmissionError(this.props.errors)
            })
        }
        else{
            return this.props.updateTicket(ticket)
            .then(response => this.setState({ redirect:true }))
            .catch(err => {
                throw new SubmissionError(this.props.errors)
            })
        }
        // return this.props.saveTicket(ticket)
        // .then(response => this.setState({ redirect:true}))
        // .catch(err => {
        //     throw new SubmissionError(this.props.errors)
        // })
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
export default connect(mapStateToProps, {newTicket, saveTicket, fetchTicket, updateTicket})(TicketFormPage);