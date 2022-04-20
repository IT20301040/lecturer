import React, {Component} from 'react';
import axios from 'axios';

export default class PostDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post: {}

        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);
            }
        });
    }


    render() {

        const {FirstName,Email,PhoneNumber,Address,BirthDay,Description,Module} =this.state.post;
        return (
            <div>
                Post Details
                <h4>{FirstName}</h4>
                <p>{Email}</p>
                <p>{PhoneNumber}</p>
                <p>{Address}</p>
                <p>{BirthDay}</p>
                <p>{Description}</p>
                <p>{Module}</p>
            </div>
        )
    }
}