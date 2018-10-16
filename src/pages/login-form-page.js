import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/user-actions';
import LoginForm from '../components/login-form';

import { client } from '../actions/index';

class LoginFormPage extends Component {

    state = {
        estado: 0,
        redirect: false,    // para ir a otra pagina
        logInError: false,  // error de usuario no encontrado
        userError: false    // error de mas de un usuario encontrado
    }

    // submit = () => {

    // }

    submit = (user) => {
        //alert("llego el user");
        console.log(user);
        //console.log(this.props.fetchUser(user));

        // payload: client.get(`${url}/${_id}`)
        // alert(user.usuario);
        // client.get(`/users?usuario=${user.usuario}&&psswd=${user.psswd}`)
        // .then(function (response) {
        //     console.log(response.data.total);
        //     if(response.data.total === 1 ) {
        //         console.log("1 usuario encontrado");
        //         //ir a a la pagina de tickets
        //         return this.setState({redirect: true});
                
        //     }
        //     if(response.data.total === 0 ) {
        //         console.log("cero usuarios encontrados");
        //         // mostrar div de error en login
        //     }
        //     else{
        //         console.log("otra resp");
        //         // mostrar error de mas de un user encontrado
        //     } 

            
        // });

    }

    render(){
        return(
            <div>     
                { 
                    this.state.redirect ?
                        <Redirect to="/"/> : 
                        <LoginForm user={this.props.user} loading={this.props.loading} onSubmit={this.submit}/>
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.userStore.user,
        errors: state.userStore.errors
    }
}

// export default LoginFormPage;
export default connect(mapStateToProps, {fetchUser})(LoginFormPage);