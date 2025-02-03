import React from "react";
import {Link} from 'react-router-dom';
import profile from "./images/avatar.png";


function SignUp() {
   
        return (
            <form>
            <div className='main'>
                <div className='sub-main-register'>
                    <div>
                        <div>
                        <div className='imgs'>
                            <div className='container-image'>
                                <img src={profile} alt='profile' className='profile'/>
                            </div>
                        </div>
                        <div class="d-flex flex-row" className='imgs'> 
                            <label class="radio mr-1"> 
                                <input type="radio" name="add" value="anz"/>
                                <Link className='link' to='/login'>
                                <span> <i class="fa fa-user"></i> Login </span>
                                </Link> 
                            </label> 
                            <label class="radio"> 
                                <input type="radio" name="add" value="add" checked /> 
                                <span> <i class="fa fa-plus-circle"></i> Register </span> 
                            </label> 
                        </div>
                            {/* <div className='first-input'>
                                <input type="text" placeholder='Enter Name' className='fill' />
                            </div> */}
                            <div className='mail-id'>
                                <input type="email" placeholder='Enter Email' className='fill' />
                            </div>
                            <div className='mail-id'>
                                <input type="password" placeholder='Enter New Password' className='fill' />
                            </div>
                            {/* <div className='select'>
                                    <select>
                                        <option>Laki-Laki</option>
                                        <option>Perempuan</option>
                                    </select>
                            </div> */}
                            <div className='login-btn'>
                                <Link to='/home'>
                                    <button type="submit"><h4>Register</h4></button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </form>
        );
    }
    export default SignUp;