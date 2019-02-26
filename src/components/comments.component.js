import React, { Component } from 'react';
import axios from 'axios';
import API from '../api/api.endpoint';

class Comments extends Component{
    constructor(props){
        super(props);
        this.state = {
            comments: []
        }
        this.getComments = this.getComments.bind(this);
    }

    componentWillMount(){
        const commentsList = this.getComments();
        this.setState({comments: commentsList});
    }

    getComments(){
        axios.get(API.baseURL+'comments')
        .then(res => {
            console.log("res: "+res);
        })
    }

    render(){
        return(
            <tbody>
                {this.state.comments.map((_row, _id) => {
                    return(
                        <tr key={_id}>
                            <td>{_row.body}</td>
                            <td>{_row.postId}</td>
                        </tr>
                    )
                })}
            </tbody>
        )
    }
}

export default Comments;