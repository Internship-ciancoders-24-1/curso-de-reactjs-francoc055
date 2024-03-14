import React from 'react';
import logo from './../images/logo.svg';


class Navbar extends React.Component{
    render(){
        return <div className='h-14 bg-slate-500 mb-5'>
            <a href='/' className='flex items-center ml-5'>
                <img src={logo} className='h-12'></img>
                <span className='font-light'>Lorem</span>
                <span className='font-bold'>Conf</span>
            </a>
        </div>
    }

}


export default Navbar