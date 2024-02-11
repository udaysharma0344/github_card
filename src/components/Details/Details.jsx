import React, { useEffect, useState } from "react";
import "./Details.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Details = () => {
  const [data, setData] = useState([]);
  const [username, setusername] = useState("udaysharma0344")


  const findUser = () => {
    let user = document.getElementById("input").value
    console.log(user)
    setusername(user);
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
  }


  // useEffect(() => {
  const fetchdata = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        throw new Error(res.status);
      }
      const obj = await res.json();
      console.log(obj);

      setData(obj);
    } catch (err) {
      console.log(`${err}(internal server error)`);
    }
  };
  fetchdata();
  // }, []);

 


  return (
    <div>
      <div id="top">
        <div id="search_bar">
          <input id="input" placeholder="Enter GitHub ID" type="text" autoFocus>
          </input>
          <i class="fa-solid fa-magnifying-glass" onClick={findUser}></i>
        </div>
      </div>


      <div className="box">
        <Card style={{ width: "18rem" }} className="rd">
          {/* <Card.Img variant="top" src={data.avatar_url} className="image" /> */}
          <img src={data.avatar_url} className="image"></img>
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>{data.bio}</Card.Text>
            <Button variant="primary" className="btn">
              <a href={data.html_url} id="a">Git Hub</a>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Details;
