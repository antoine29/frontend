import React from 'react';
import { Card } from 'semantic-ui-react';
import TicketCard from './ticket-card';

export default function TicketList({tickets}){
    const cards = () => {
        return tickets.map(ticket => {
            return (
                // <li key={ticket._id}>{ticket.propietario} {ticket.tipo}</li>
                <TicketCard key={ticket._id} ticket={ticket}/>
            )
        })
    }

    return(
        // <div>
        //     <ul>
        //         { list() }
        //     </ul>
        // </div>
        <Card.Group>
            { cards() }
        </Card.Group>
    )
}