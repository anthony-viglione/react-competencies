import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { globalAgent } from 'https';

class Dashboard extends Component{
    constructor(){
        super()

        this.state={
            search:'',
            check: true,
            posts: []
        }
    }

    componentDidMount(){
        this.posts()
    }

    handleChange = (prop) =>{
        this.setState({
            [prop]:!this.state.check
        })
    }

    posts = async() => {
        const { id } = this.props
        const { search, check } = this.state
        console.log(search, check)
        let apples = {type:'gala', number:5}
        let res = await axios.get(`/getposts/${id}?search=${search}&check=${check}`)    //get requests don't have bodies so use queries and params
        console.log({dashboardPostsRes: res})
        this.setState({
            posts: res.data
        })
    }

    render(){ 
        console.log(this.state.check)
        let mappedPosts = this.state.posts.map((val, i)=>{
            return (
                <div key={i}>
                    <h3>{val.title} </h3>
                    <h1>{val.username}</h1>
                    <img src={val.profilePic}/>

                </div>
            )
        })
        return(
            <div>
                <h1>Dashboard Component</h1>
                <div>
                    <input 
                        placeholder={'search'} 
                        onChange={(e)=>this.handleChange('search', e.target.value)}
                    />
                    {this.state.check && <input 
                        type="checkbox" 
                        checked
                        value={this.state.check} 
                        onChange={(e)=>this.handleChange('check', e.target.value)}
                    />}
                   {!this.state.check && <input 
                        type="checkbox" 
                        value={this.state.check} 
                        onChange={(e)=>this.handleChange('check', e.target.value)}
                    />} 
                    Include My Posts
                </div>
                <div>
                    <button>
                        Search
                    </button>
                    <button>
                        Reset
                    </button>
                </div>
                <div>
                    {mappedPosts}
                </div>
            </div>
        )
    }
}
const mapStateToProps = reduxState => {
    return {
        id: reduxState.id
    }
}

export default connect(mapStateToProps)(Dashboard);