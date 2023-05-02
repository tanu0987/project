
// import './Form.css';
function Form(){

    return (
        <div className='main'>
            <div className='register'>
                <h2>Business Registration</h2>
                <form id="register" method="post">
                <label>Name: </label>
                <br></br>
                <input type="text" name="fname" id="name" placeholder='Enter your name' ></input>
                <br></br>
                <br></br>
                <label>Owner: </label>
                <br></br>
                <input type="text" name="lname" id="name" placeholder='Enter your Owner' ></input>
                <br></br>
                <br></br>
                
                <label>About: </label>
                <br></br>
                <input type="text" name="age" id="name" placeholder='About your Business' ></input>
                <br></br>
                <br></br>
                <label>Business Category: </label>
                <br></br>
                <select id="name">
                    <option value="name">Choose Business</option>
                    <option value="Food">Food related</option>
                    <option value="shopping">shopping related</option>
                    <option value="education">Education related</option>
                    <option value="health">Health related</option>
                    <option value="leisure">leisure related</option>
                    <option value="religious">religious related</option>
                    <option value="transportation">transportation related</option>
                    <option value="lodging">lodging related</option>
                    <option value="tourism">tourism related</option>
                </select>
                <br></br>
                <br></br>
                <label>Gender: </label>
                <br></br>
                &nbsp;&nbsp;&nbsp;
                <input type="radio" name="gender" id="male"></input>
                &nbsp;
                <span id="male">Male</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" name="gender" id="female"></input>
                &nbsp;
                <span id="female">Female</span>
               <br></br>
               <br></br>
               {/* <label>Known Language :</label>
               &nbsp;&nbsp;&nbsp;
               <input type="checkbox" name="lang" id="hindi"></input>
               &nbsp;
               <span id="hindi">hindi</span>
               &nbsp;&nbsp;&nbsp;&nbsp;
               <input type="checkbox" name="lang" id="eng"></input>
               &nbsp;
               <span id="eng">English</span>
               &nbsp;&nbsp;&nbsp;&nbsp;
               <input type="checkbox" name="lang" id="Pun"></input>
               &nbsp;
               <span id="Pun">Punjabi</span>
               <br></br>
               <br></br> */}
               <label>Address: </label>
                <br></br>
                <input type="text" name="add" id="name" placeholder='Enter your Address'></input>
                <br></br>
                <br></br>
                <label>City: </label>
                <br></br>
                <select id="city">
                    <option value="city">select City</option>
                    <option value="Kapurthala">Kapurthala</option>
                    <option value="Jalandhar">Jalandhar</option>
                    <option value="Agra">Agra</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Banglore">Banglore</option>
                    <option value="Shimla">Shimla</option>
                    <option value="Chennai">Chennai</option>
                </select>
                <br></br>
                <br></br>
                <label>Latitude: </label>
                <br></br>
                <input type="text" name="lati" id="name" placeholder='Enter Latitude' ></input>
                <br></br>
                <br></br>
                <label>Longitude: </label>
                <br></br>
                <input type="text" name="long" id="name" placeholder='Enter Longitude'></input>
                <br></br>
                <br></br>
               
               
               
               <input type="submit" value="Submit" name="submit" id="submit"></input>
                </form>
  
            </div>
        </div>
       
    );
}
export default Form;

