
function Login(){
    return(
    // <>Login</>
    // <div className="main">
    //     <div className="sub-main">
    //         <div>
    //             <div className="imgs">
    //                 <div className="container-image">
    //                     <img src={profile} alt="profile" className="profile"/>

    //                 </div>

    //             </div>
    //             <div>
    //                 <h1>Login Page</h1>
    //                 <div>
    //                     <img src={email} alt="email" className="email"/>
    //                     <input type="text" placeholder="user name" className="name"/>
    //                 </div>
    //                 <div className="second-input">
    //                     <img src={pass} alt="pass" className="email"/>
    //                     <input type="text" placeholder="user name" className="name"/>
    //                 </div>
    //                 <div className="login-button">
    //                 <button>Login</button>

    //                 </div>
                    
    //                     <p className="link">
    //                         <a href="#">Forget Password ?</a> Or<a href="#">Sign Up</a>
    //                     </p>
                    
                    
    //             </div>

    //         </div>

    //     </div>
    // </div>
     <div className="center">
        <h1>Login</h1>
        <form method="post">
            <div class="text_field">
                <input type="text" required></input>
                <label>Username</label>
            </div>
            <div class="text_field">
                <input type="text" required></input>
                <label>Password</label>
            </div>
            <div class="pass">Forget Password?</div>
            <input type="submit" value="Login"></input>
            <div className="signup_link">
                Not a member? <a href="#">Signup</a>

            </div>

        </form>
        

    </div>
    );

}

export default Login;