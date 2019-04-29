import React, { Component } from 'react';

class Dashboard extends Component{
    constructor(){
        super()

        this.state={
            search:'',
            check:false,
            posts: []
        }
    }

    handleChange = (prop) =>{
        this.setState({
            [prop]:!this.state.check
        })
    }

    render(){ 
        console.log(this.state.check)
        let mappedPosts = this.state.posts.map((val, i)=>{
            return (
                <div key={i}>
                    <h3>{val.title}</h3>
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
                    <input type="checkbox" value={this.state.check} onChange={(e)=>this.handleChange('check', e.target.value)}/> Include My Posts
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

export default Dashboard;