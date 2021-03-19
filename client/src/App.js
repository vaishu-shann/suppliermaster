

import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [code, setCode] = useState(0);
  const [name, setName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [address3, setAddress3] = useState("");
  const [city,setCity]=useState("");
  const [pincode, setPincode] = useState(0);
  const [contact, setContact] = useState(0);
  const [telephone, setTelephone] = useState(0);
  const [accode, setAccode] = useState(0);
  const [gst, setGst] = useState(0);



  const addSupplier = () => {
    Axios.post("http://localhost:3001/create", {
      code : code,
      name: name,
      address1 : address1 ,
      address2 : address2,
      address3 : address3 ,
      city : city, 
      pincode : pincode,
     contact : contact,
     telephone : telephone,
     accode : accode,
     gst : gst,
                                               
    }).then(() => {
      console.log("success");
    });
  };

  
  return (
    <div className="App">
      
      <div className="information">
      <h2>Supplier Master</h2> 
      <label>Supplier code:</label>
        <input
          type="number"
           onChange={(event) => {
            setCode(event.target.value);
          }}
          maxLength="6"
          required
        />
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
          maxLength="30"
          required
        />
        <label>Address 1:</label>
        <input
          type="text"
          onChange={(event) => {
            setAddress1(event.target.value);
          }}
          maxLength="30"
          required
        />
        <label>Address 2:</label>
        <input
          type="text"
           onChange={(event) => {
            setAddress2(event.target.value);
          }}
          required
        />
        <label>Address 3:</label>
        <input
          type="text"
          onChange={(event) => {
            setAddress3(event.target.value);
          }}
          required
        />
        <label>city:</label>
        <input
          type="text"
           onChange={(event) => {
            setCity(event.target.value);
          }}
          required
        />
        
        <label>Pincode:</label>
        <input
          type="number"
           onChange={(event) => {
            setPincode(event.target.value);
          }}
          maxLength="8"
          required
        />
        <label>Contact:</label>
        <input
          type="number"
           onChange={(event) => {
            setContact(event.target.value);
          }}
          maxLength="10"
          required 
        />
        <label>Telephone:</label>
        <input
          type="number"
           onChange={(event) => {
            setTelephone(event.target.value);
          }}
          maxLength="15"
          required
        />
        <label>Ac-code:</label>
        <input
          type="number"
          onChange={(event) => {
            setAccode(event.target.value);
          }}
          required
        />
        <label>GST number:</label>
        <input
          type="number"
          onChange={(event) => {
            setGst(event.target.value);
          }}
          maxLength="16"
          required
        />
        <button onClick={addSupplier}> SUBMIT</button>
      </div>
     
    </div>
  );
}

export default App;
