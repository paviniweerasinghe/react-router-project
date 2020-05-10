import React from 'react'
import '../../App.css';
import Footer from '../Layout/Footer';


export default function Home() {

    return (
        <div className="container-fluid">
            <div className="col-md-12">
            <h1 className="display-6 text-uppercase text-center py-5 heading">
                welcome to rect-router 2020 conference!
            </h1>
            <p className='para'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, dolorem alias, 
                ipsum recusandae dicta aperiam atque, cumque aspernatur quidem fugit voluptates consectetur 
                enim soluta maxime illo odio. Ratione, excepturi corrupti! Maxime repudiandae odit quia tenetur 
                perferendis doloribus debitis voluptates alias commodi deleniti sit eligendi cumque ullam assumenda 
                corporis, repellat eos!
            </p>
            <div className="form-box">
                <h3 className="display-6 text-uppercase text-center py-3">
                    register and reserve your seat
                </h3>
                <form>
                    <div className="form-row mr-auto">
                        <div className="col-md-6 mb-4">
                            <input type="text" className='form-control text-light' placeholder='First Name'/>
                        </div>
                        <div className="col-md-6 mb-4">
                            <input type="text" className='form-control text-light' placeholder='Last Name'/>
                        </div>
                        <div className="col-md-6 mb-4">
                            <input type="text" className='form-control text-light' placeholder='Phone No'/>
                        </div>
                        <div className="col-md-6 mb-4">
                            <input type="text" className='form-control text-light' placeholder='Email'/>
                        </div>
                    </div>
                </form>
                <div className="col text-center mb-4">
                    <button className="btn btn-secondary text-uppercase text-center button-style "> receive your seat </button>
                </div>
            </div>
            <Footer/>
            </div>
        </div>    
    )
}
