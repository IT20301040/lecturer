import React, {Component} from "react";
import axios from "axios";

export default class EditPost extends Component {


    constructor(props){
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeBirthDay = this.onChangeBirthDay.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            FirstName:"",
            LastName:"",
            Email:"",
            Password:"",
            PhoneNumber:"",
            Address:"",
            BirthDay:"",
            Description:""
            
        };
    }
//method for get new value input funtion

    onChangeFirstName=(e) =>{
        this.setState({
          FirstName: e.target.value        
        });
    }

    onChangeLastName=(e) =>{
      this.setState({
        LastName: e.target.value        
      });
  }

  onChangeEmail=(e) =>{
    this.setState({
      Email: e.target.value        
    });
}

onChangePassword=(e) =>{
  this.setState({
    Password: e.target.value        
  });
}

onChangePhoneNumber=(e) =>{
  this.setState({
    PhoneNumber: e.target.value        
  });
}

onChangeAddress=(e) =>{
  this.setState({
    Address: e.target.value        
  });
}

onChangeBirthDay=(e) =>{
  this.setState({
    BirthDay: e.target.value        
  });
}

onChangeDescription=(e) =>{
  this.setState({
    Description: e.target.value        
  });
}


  


    onSubmit =(e) =>{
        
        e.preventDefault();
        const id = this.props.match.params.id;
        console.log(`the values are ${this.state.FirstName},${this.state.LastName},${this.state.Email},${this.state.Password},${this.state.PhoneNumber},${this.state.Address},${this.state.BirthDay},${this.state.Description}`)
        
        this.setState({
          FirstName:'',
          LastName:'',
          Email:'',
          Password:'',
          PhoneNumber:'',
          Address:'',
          BirthDay:'',
          Description:'',
          
        })

    

    };


    componentDidMount(){
        const id = this.props.match?.params.id;
        axios.put(`/post/update/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    FirstName:res.data.post.FirstName,
                    LastName:res.data.post.LastName,
                    Email:res.data.post.Email,
                    Password:res.data.post.Password,
                    PhoneNumber:res.data.post.PhoneNumber,
                    Address:res.data.post.Address,
                    BirthDay:res.data.post.BirthDay,
                    Description:res.data.post.Description,
                });

                console.log(this.state.post);
            }
        });
    }


    render(){
        return (
            <form onSubmit={this.onSubmit}>
  <div class="form-group">
      <h1 className="h3 mb-3 font-weight-normal">Edit From</h1>

    <label for="exampleFormControlInput1">First Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1"  value={this.state.FirstName} onChange={this.onChangeFirstName}></input>
  </div>
  
  <div class="form-group">
    <label for="exampleFormControlInput1">Last Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1"  value={this.state.LastName} onChange={this.onChangeLastName}></input>
  </div>

  <div class="form-group">
    <label for="exampleFormControlInput1">Email</label>
    <input type="email" class="form-control" id="exampleFormControlInput1"  value={this.state.Email} onChange={this.onChangeEmail}></input>
  </div>

  <div class="form-group">
    <label for="exampleFormControlInput1">Password</label>
    <input type="Password" class="form-control" id="exampleFormControlInput1" value={this.state.Password} onChange={this.onChangePassword}></input>
  </div>

  <div class="form-group">
    <label for="exampleFormControlInput1">Phonr Number</label>
    <input type="text" class="form-control" id="exampleFormControlInput1"  value={this.state.PhoneNumber} onChange={this.onChangePhoneNumber}></input>
  </div>

  
  
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Address</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.Address} onChange={this.onChangeAddress}></textarea>
  </div>

  <div class="form-group">
    <lable for="exampleFormControlTextarea1">BirthDay</lable>
    <input type="date" class="form-control" id="exampleFormControlInput1" value={this.state.BirthDay} onChange={this.onChangeBirthDay} ></input>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.Description} onChange={this.onChangeDescription}></textarea>
  </div>

  
  
 <center> <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>Update</button></center>
</form>
        )
    }
}