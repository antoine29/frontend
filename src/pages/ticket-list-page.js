import React, { Component } from 'react';
import { connect } from 'react-redux';
import TicketList from '../components/ticket-list';
import { fetchTickets } from '../actions/ticket-actions';

class TicketListPage extends Component {

    componentDidMount(){
        this.props.fetchTickets();
    }

    render(){
        return(
            <div>
                <h1>Lista de tickets</h1>
                <TicketList tickets={this.props.tickets}/>
            </div> 
        )
    }
}

function mapStateToProps(state){
    return {
        tickets : state.ticketStore.tickets
    }
}

export default connect(mapStateToProps, {fetchTickets})(TicketListPage);