import React from 'react';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Layout from '../components/Layout';

class BadgeNew extends React.Component {
  state = {
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

  render() {
    const { form } = this.state;

    return (
      <>
        <Layout>
          <div className='w-full flex justify-center items-center'>
            <Badge name={form.name} lastname={form.lastname} title={form.job} skills={['.NET', 'sql server']} />
            <BadgeForm onChange={this.handleChange} formValues={form} />
          </div>
        </Layout>

      </>
    );
  }
}

export default BadgeNew;
