import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default function TicketCard({ticket, deleteTicket}) {
  return (
    <Card>
      <Card.Content>

        <Card.Header>
          <Icon name='user outline'/> {ticket.propietario} <br/>
          <Icon name='hand point right outline'/> {ticket.tipo} <br/>
          <Icon name='hand point right outline'/> {ticket.estado}
        </Card.Header>

        <Card.Description>
          <p> {ticket.descripcion} </p>
        </Card.Description>

      </Card.Content>
      
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">Edit</Button>
          <Button basic color="red">Delete</Button>
        </div>
      </Card.Content>

    </Card>
  )
}

TicketCard.propTypes = {
  ticket: PropTypes.object.isRequired
}