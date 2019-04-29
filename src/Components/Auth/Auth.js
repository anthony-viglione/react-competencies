import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/reducer'

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
            console.log(res.data[0])
            let { id, username, profile_pic } = res.data[0]
            this.props.updateUser(username, id, profile_pic)
            this.props.history.push('/dashboard')
        } catch(err) {
            console.log('hit catch')
            console.log(err)
        }
    }

    login = async() => {
        console.log('hit login')
        let user = {
            username: this.state.name,
            password: this.state.password
        }
        try {
            let res = await axios.post('/auth/login', user)
            console.log(res.data[0])
            let { id, username, profile_pic } = res.data[0]
            this.props.updateUser(username, id, profile_pic)
            this.props.history.push('/dashboard')
        } catch(err) {
            console.log('hit catch')
            console.log(err)
        }
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
                                onChange={(e)=> this.handleChange('name', e.target.value)}
                                />
                    </div>
                    <div>
                        password
                            <input 
                                onChange={(e)=>this.handleChange('password', e.target.value)}
                                />
                    </div>
                    <button
                        onClick={()=>this.login()}>
                            Login
                    </button>
                    <button 
                        onClick={()=>this.register()}>
                            Register
                    </button>
                </div>
            )
        // }
    }
}

const mapDispatchToProps ={ //reducer holds the methods
    updateUser
}

export default connect(null, mapDispatchToProps) (Auth);
