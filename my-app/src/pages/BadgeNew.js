import React from 'react';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Layout from '../components/Layout';
import { DataService } from '../api';
import PageLoading from './../components/Loader'

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      name: '',
      lastname: '',
      email: '',
      job: ''
    }
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      this.setState({loading:true})
      await DataService.createData(this.state.form)
      this.setState({loading:false})
    }catch (err){
      this.setState({loading:false, error:err})
    }
  }

  render() {
    if(this.state.loading){
      return <PageLoading/>
    }
    const { form } = this.state;

    return (
      <>
        <Layout>
          <div className='w-full flex justify-center items-center'>
            <Badge name={form.name} lastname={form.lastname} title={form.job} skills={['.NET', 'sql server']} />
            <BadgeForm onChange={this.handleChange} formValues={form} onSubmit={this.handleSubmit}/>
          </div>
        </Layout>

      </>
    );
  }
}

export default BadgeNew;
