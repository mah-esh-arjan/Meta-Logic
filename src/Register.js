import { useState } from "react";
import './Register.css'
import logo from './logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {    

    const [id,setId] = useState([1]);
    const [buttonId,setButtonId] = useState (1);

    const handleClick = (itemId) => {
        if(id.includes(itemId)){
            setId(id.filter(id => id !== itemId))
        }
        else{
        setId([...id, itemId])
        }
    setButtonId(itemId);
    }

    const Personal = () => {
        return(
            <div className={buttonId === 1 ?"show" : "hide"}>
             <h2>Personal details</h2>

                <div className="container">
                    <div className="row label-row">
                        <div className="col-4">

                        <label>First Name</label>
                         <input />
                        </div>
                       <div className="col-4">
                       <label>Middle Name</label>
                         <input />
                       </div>
                       <div className="col-4">
                       <label>Last Name</label>
                         <input />
                       </div>
                       
                     </div>    

                     <div className="row label-row">
                        <div className="col-4">
                        <label>Phone</label>
                         <input />
                        </div>
                       <div className="col-4">
                       <label>Birth Date</label>
                        <input type="date"/>
                       </div>
                     </div>   
                     <div className="row label-row">

                        <h2>Gender</h2>
                        <div className="Gender">

                        <input type="radio" id="Male" value="Male" name="gender" />   
                        <label for="Male">Male</label>
                      
                           
                        <input type="radio" id="Female" value="Female" name="gender"  />
                        <label for="Female">Female</label>

                        <input type="radio" id="Others" value="Others" name="gender"  />
                        <label for="Others">Others</label>
                        </div>
                    </div>
                    <div className="row label-button">
                        <button> Next</button>
                    </div>  
                </div>
            </div>
        )
    }

    const Address = () => {
        return(
            <div className={buttonId ===2 ?"show" : "hide"} >
                <h2>Address</h2>
            </div>
        )
    }

    const Set = () => {
        return(
            <div className={buttonId ===3 ?"show" : "hide"}>
                <h2>Set</h2>
            </div>
        )
    }

    const Review = () => {
        return(
            <div className={buttonId ===4 ?"show" : "hide"}>
                <h2>Review</h2>
            </div>
        )
    }



    return(
        <section id="Register" > 
        <nav >
            <img className="logo" src={logo}/>
        </nav>
        <h1> Register</h1>
        <div className="portal-section">
            <button onClick={() => handleClick(1)} className={id.includes(1)?"portal-buttons-active" : "portal-buttons"}>1</button>
            <button onClick={() => handleClick(2)} className={id.includes(2)?"portal-buttons-active" : "portal-buttons"}>2</button>
            <button onClick={() => handleClick(3)} className={id.includes(3)?"portal-buttons-active" : "portal-buttons"}>3</button>
            <button onClick={() => handleClick(4)} className={id.includes(4)?"portal-buttons-active" : "portal-buttons"}>4</button>
            </div>
        <div className="portal">
          < Personal />
          < Address />
          < Set />
          < Review />
        </div>
        </section>
    )
}

export default Register;