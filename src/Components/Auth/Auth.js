import React, {Component} from 'react';
import axios from 'axios';

class Auth extends Component{
    constructor(){
        super()

        this.state={
            name:'',
            password:''
        }
    }

    handleChange = (prop, val) =>{
        this.setState({
            [prop]:val
        })
    }

    register = async() => {
        console.log('hit register')
        let user = {
            username: this.state.name,
            password: this.state.password
        }
        try {
            console.log('try')
            let res = await axios.post('/auth/register', user)
            console.log(res.data)
        } catch(err) {
            console.log('hit')
            console.log(err)
        }
        this.props.history.push('/dashboard')
    }

    async login(){
        console.log('hit login')
    }

    render(){
        console.log(this.state)
        console.log({auth:this.props})
        // if(this.props.location.pathname === '/'){
        //     return(
        //         <div>
        //             Hey
        //         </div>
        //     )
        // } else {

            return(
                <div>
                    <div>
                        name
                            <input 
                                onChange={(e)=> this.handleChange('name',e.target.value)}
                                />
                    </div>
                    <div>
                        password
                            <input 
                                onChange={(e)=>this.handleChange('password',e.target.value)}
                                />
                    </div>
                    <button>Login</button>
                    <button onClick={()=>this.register()}>Register</button>
                </div>
            )
        // }
    }
}

export default Auth;
