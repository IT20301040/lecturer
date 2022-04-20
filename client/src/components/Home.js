import React,{ Component} from "react";
import axios from 'axios';

export default class Home extends Component {
  constructor(props){
    super(props);

    this.state={
      posts:[]
    };
  }

  componentDidMount(){
    this.retriveposts();
  }

  retriveposts(){
    axios.get("http://localhost:8000/posts").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });

        console.log(this.state.posts);

      }


    });
  }

//delete funtion
  onDelete =(id) => {
    
    axios.delete(`/post/delete/${id}`).then((res)=>{
      alert("Delete Successfully");
      this.retriveposts();
    });
  };
//search
  filterData(posts,searchKey){
    const result = posts.filter((post) =>
    post.FirstName.toLowerCase().includes(searchKey) ||
    post.Email.toLowerCase().includes(searchKey) ||
    post.PhoneNumber.toLowerCase().includes(searchKey)

    )
    this.setState({posts:result})

  }
//search method

handlSearchArea =(e) =>{
  const searchKey = e.currentTarget.value;
  axios.get("/posts").then(res =>{

    if(res.data.success){
      this.filterData(res.data.existingPosts,searchKey)
    }


  });

}


  render() {
    return (
      <div className="container">
        <p>All Lecturer</p>
        
        <input className="form-control" type="search" placeholder="search" name="searchQuery" onChange={this.handlSearchArea}></input>

        <table className="table">
          <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">FirstName</th>
            <th scope="col">Email</th>
            <th scope="col">PhoneNumber</th>
            
            <th scope="col">Actoin</th>
            </tr>
          </thead>

          <tbody>
            {this.state.posts.map((posts,index)=>(
              <tr Key={index}>
                <th scope="row">{index+1}</th>

                <td>
                    <a href={'/post/${post._id}'} style={{textDecoration:'none'}}>
                    {posts.FirstName}
                    </a>
                    </td>
                <td>{posts.Email}</td>
                <td>{posts.PhoneNumber}</td>

                
                
                <td>
                  <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>

                    &nbsp;
                    &nbsp;

                    <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(posts._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                </td>
              </tr>
            ))}
          </tbody>



        </table>
        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none', color:'white'}}>Create New Lecture</a></button>
              &nbsp;
              &nbsp;
        <a className="btn btn-info" href="/help">
                    <i className="fas fa-edit"></i>&nbsp;Get Admin Support
                    </a>
        
       
      </div>
    )
  }
}