import React, { Component } from 'react'
import './App.css';
import firebase from "./firebase/firebase"

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      image: null,
      progress:0,
      downloadURL: null
    }
  }


  handleChange = (e) =>{
    if(e.target.files[0]){
      this.setState({
      image: e.target.files[0]
    })
  }
    // console.log(e.target.files[0])
}

handleUpload = () =>{
  // console.log(this.state.image);
  let file = this.state.image;
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var uploadTask = storageRef.child('folder/' + file.name).put(file);

  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    (snapshot) =>{
      var progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes))*100
      this.setState({progress})
    },(error) =>{
      throw error
    },() =>{
      // uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{

      uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
        this.setState({
          downloadURL: url
        })
      })
    document.getElementById("file").value = null

   }
 ) 
}


  render() {
    return (
      <div className="App">
        <h4>upload image</h4>
        <label>
          Choose file
        <input type="file" id="file" onChange={this.handleChange} />        
        </label>

        {this.state.progress}
        <button className="button" onClick={this.handleUpload}>Upload</button>
        <img
          className="ref"
          src={this.state.downloadURL || "https://via.placeholder.com/400x300"}
          alt="Uploaded Images"
          height="300"
          width="400"
        />
      </div>
    )
  }
}
CSS
.App {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}



label{
  align-items: center;
  padding: 12px;
  background: red;
  display: table;
  color: #fff;
  /* margin-left: 700px; */
  /* padding-inline: 40px; */
   }

   .button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
  }
.ref{
  margin-top: auto;
}

input[type="file"] {
  display: none;
}

