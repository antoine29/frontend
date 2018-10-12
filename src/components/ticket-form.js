import React, { Component } from 'react';
import { Form, Grid, Button, TextArea } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

class TicketForm extends Component{

    renderField = ({ input, label, type, meta: { touched, error } }) => (
        <Form.Field className={classnames({error:touched && error})}>
            <label>{label}</label>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span className="error">{error.message}</span>}
        </Form.Field>
    )

    renderTextArea = ({ input, label, type, meta: { touched, error } }) => (
        <Form.Field className={classnames({error:touched && error})}>
            <label>{label}</label>
            <TextArea {...input} placeholder={label} type={type}/>
            {touched && error && <span className="error">{error.message}</span>}
        </Form.Field>
    )

    componentWillReceiveProps = (nextProps) => {
        const { ticket } = nextProps;
        if(ticket._id !== this.props.ticket._id) this.props.initialize(ticket)
    }


    render(){
        const { handleSubmit, pristine, submitting, loading } = this.props;

        return (
            <Grid centered columns={2}>
                <Grid.Column>
                    <h1 style={{marginTop:"1em"}}> 
                        {/* {this.props.array._id} */}
                        {this.props.ticket._id ? 'Editar Ticket' : 'Nuevo Ticket'}
                        Editar
                    </h1>
                    <Form onSubmit={handleSubmit} loading={loading}>
                        <Field name="propietario" type="text" component={this.renderField} label="Propietario"/>
                        <Field name="tipo" type="text" component={this.renderField} label="Tipo"/>
                        <Field name="descripcion" type="text" component={this.renderTextArea} label="Descripcion"/>
                        <Field name="estado" type="text" component={this.renderField} label="Estado"/>
                        <Button primary type='submit' disabled={pristine || submitting}> Save </Button>
                    </Form>
                </Grid.Column>
            </Grid>

            // <div>
            //     <p>Form para los tickets</p>
            // </div>
        )
    }
}

// export default TicketForm;
export default reduxForm({form: 'ticket'})(TicketForm);
