import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <div className="cotainer-fluid pt-5">
                <div className="row">
                    <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-inline mx-auto justify-content-center">
                            <Link to='/'>
                                <li> Lorem, ipsum.</li>
                             </Link>   
                             <Link to='/'>
                                <li> Lorem, ipsum.</li>
                             </Link>  
                             <Link to='/'>
                                <li> Lorem, ipsum.</li>
                             </Link>  
                        </ul>                   
                    </div>
                    <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-inline mx-auto justify-content-center">
                            <Link to='/'>
                                <li> Lorem, ipsum.</li>
                             </Link>   
                             <Link to='/'>
                                <li> Lorem, ipsum.</li>
                             </Link>  
                             <Link to='/'>
                                <li> Lorem, ipsum.</li>
                             </Link>  
                        </ul>                   
                    </div>
                    <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-inline mx-auto justify-content-center">
                            <Link to='/'>
                                <li> Lorem, ipsum.</li>
                             </Link>   
                             <Link to='/'>
                                <li> Lorem, ipsum.</li>
                             </Link>  
                             <Link to='/'>
                                <li> Lorem, ipsum.</li>
                             </Link>  
                        </ul>                   
                    </div>
                    <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-inline mx-auto justify-content-center">
                            <Link to='/'>
                                <li> Lorem, ipsum.</li>
                             </Link>   
                             <Link to='/'>
                                <li> Lorem, ipsum.</li>
                             </Link>  
                             <Link to='/'>
                                <li> Lorem, ipsum.</li>
                             </Link>  
                        </ul>                   
                    </div>
                    <p className="pt-3 pb-2 pl-5 copy-right">
                        &copy;&nbsp;CodeLover
                        {`${new Date().getFullYear()}`}
                        &nbsp; All Rights Received
                    </p>
                </div>
            </div>
        </div>
    )
}
