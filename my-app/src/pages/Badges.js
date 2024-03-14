import React from 'react';
import Navbar from '../components/Navbar';
import BadgeList from '../components/BadgeList';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';


class Badges extends React.Component {
    state = {data:[
        {
            id:1,
            name:"franco",
            lastaname: "armani",
            email:"fran@gmail.com",
            job:"dev fullstack"
        },
        {
            id:2,
            name:"juan",
            lastaname: "perez",
            email:"juan@gmail.com",
            job:"dev backend"
        }
    ]}

    render(){
        return <>
            <Layout>
                <div className='w-full flex flex-col justify-center items-center'>
                    <Link to="/badges/new" className='w-32 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md text-center'>new badge</Link>

        
                    <BadgeList data={this.state.data}/>
                </div>
            </Layout>
        </>
    }
}


export default Badges