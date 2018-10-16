import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

class LoginForm extends Component{

    renderField = ({ input, label, type, meta: { touched, error } }) => (
        <Form.Field className={classnames({error:touched && error})}>
            <label>{label}</label>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span className="error">{error.message}</span>}
        </Form.Field>
    )

    render(){
        const { handleSubmit, pristine, submitting, loading } = this.props;

        return(
            <Grid centered columns={2}>
                <Grid.Column>
                    <h1 style={{marginTop:"1em"}}>LogIn</h1>
                    <Form onSubmit={handleSubmit} loading={loading}>
                        <Field name="usuario" type="text" component={this.renderField} label="Usuario"/>
                        <Field name="psswd" type="password" component={this.renderField} label="Password"/>
                        <Button primary type='submit' disabled={pristine || submitting}>Ingresar</Button>
                    </Form>
                </Grid.Column>
            </Grid>

            // <div>
            //     <p> LoginForm component under construction</p>
            // </div>
        )
    }
}

// export default LoginForm;
export default reduxForm({form: 'user'})(LoginForm);

