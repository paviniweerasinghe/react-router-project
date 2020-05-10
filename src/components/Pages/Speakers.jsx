import React from 'react'
import {Link} from 'react-router-dom';
import Girl1 from '../../images/girl1.jpg';
import Girl2 from '../../images/girl2.jpg';
import Girl3 from '../../images/girl3.jpg';
import Boy1 from '../../images/boy1.jpg';
import Boy2 from '../../images/boy2.jpg';


export default function Speakers() {
    return (
        <div>
            <div className="container py-2">
                <div className="row">
                    <div className=" col-md-3 p-2">
                        <div className="card">
                            <img src={Girl1} alt="" className='card-img-top mx-auto'/>
                            <div className="card-body">
                                <h3 className="card-title text-center pb-2"> Emma Watson </h3>
                                <h5>Subject: <b>NODE JS</b> </h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit nesciunt recusandae, 
                                fugit aperiam quia nobis sed dolor reprehenderit tempore quam similique labore dolorum 
                                nemo voluptatem ad perspiciatis ratione commodi suscipit!</p>
                                <Link to='/'>
                                    <button className="btn btn-secondary text-uppercase text-center"> More info about speaker </button>
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div className=" col-md-3 p-2">
                        <div className="card">
                            <img src={Girl2} alt="" className='card-img-top mx-auto'/>
                                <div className="card-body">
                                    <h3 className="card-title text-center pb-2"> Christine Smith </h3>
                                    <h5>Subject: <b>REACT JS </b> </h5>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit nesciunt recusandae, 
                                    fugit aperiam quia nobis sed dolor reprehenderit tempore quam similique labore dolorum 
                                    nemo voluptatem ad perspiciatis ratione commodi suscipit!</p>
                                    <Link to='/'>
                                        <button className="btn btn-secondary text-uppercase text-center"> More info about speaker </button>
                                    </Link>
                                </div>
                        </div>
                    </div>

                    <div className=" col-md-3 p-2">
                        <div className="card">
                            <img src={Boy1} alt="" className='card-img-top mx-auto'/>
                            <div className="card-body">
                                <h3 className="card-title text-center pb-2"> John Rude </h3>
                                <h5>Subject: <b>MONGO DB</b> </h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit nesciunt recusandae, 
                                fugit aperiam quia nobis sed dolor reprehenderit tempore quam similique labore dolorum 
                                nemo voluptatem ad perspiciatis ratione commodi suscipit!</p>
                                <Link to='/'>
                                    <button className="btn btn-secondary text-uppercase text-center"> More info about speaker </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className=" col-md-3 p-2">
                        <div className="card">
                            <img src={Boy2} alt="" className='card-img-top mx-auto'/>
                            <div className="card-body">
                                <h3 className="card-title text-center pb-2"> Edward Colon </h3>
                                <h5>Subject: <b>PYTHON</b> </h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit nesciunt recusandae, 
                                fugit aperiam quia nobis sed dolor reprehenderit tempore quam similique labore dolorum 
                                nemo voluptatem ad perspiciatis ratione commodi suscipit!</p>
                                <Link to='/'>
                                    <button className="btn btn-secondary text-uppercase text-center"> More info about speaker </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    )
}
