import React from 'react';
import Navbar from '../components/Navbar';
import BadgeList from '../components/BadgeList';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import {DataService} from '../api'
import PageLoading from '../components/Loader';

class Badges extends React.Component {
    state = {
        loading:true,
        error: null,
        data: undefined
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async ()=>{
        this.setState({loading:true, error:null})
        try{
            const data = await DataService.getAllData()
            this.setState({loading:false, data: data})
        }catch(error){
            console.log('entro');
            this.setState({loading:false, error:error})
        }
    }
    

    

    render(){
        if(this.state.loading)
        {
            return <PageLoading/>
        }

        if(this.state.error)
        {
            return  `Error: ${this.state.error}`
        }
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