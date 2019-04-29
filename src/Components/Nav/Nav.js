import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



class Nav extends Component{

    render(){
        // const { pathname } = this.props.location
        console.log({nav:this.props})
        // if(this.props.location.pathname !== '/'){
        // if(pathname === '/dashboard' || pathname.includes('/post') === true || pathname === '/new' )
            return(
                <div>
                    <Link to='/dashboard'>
                        <button>
                            Home
                        </button>
                    </Link>
                    <Link to='/new'>
                        <button>
                        New Post
                        </button>
                    </Link>
                    <Link to='/'>
                        <button>
                            Logout
                        </button>
                    </Link>
                    <h1>Name:{this.props.username}</h1>
                    <img src={this.props.profilePic}/>
                </div>
            )
        // }
    }
}
const mapStateToProps = reduxState => {
    return {
        username: reduxState.username,
        profilePic: reduxState.profilePic
    }
}

export default connect(mapStateToProps)(Nav);