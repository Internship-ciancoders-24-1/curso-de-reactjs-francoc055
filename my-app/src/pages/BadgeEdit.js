import React, { useState, useEffect } from 'react';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Layout from '../components/Layout';
import { DataService } from '../api';
import PageLoading from '../components/Loader';
import { useParams } from 'react-router-dom';

function BadgeEdit() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    name: '',
    lastname: '',
    email: '',
    job: ''
  });

  const { badgeId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await DataService.getDataById(badgeId);
      setForm(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await DataService.updateDataById(badgeId, form);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoading />;
  }

  return (
    <>
      <Layout>
        <div className='w-full flex justify-center items-center'>
          <Badge name={form.name} lastname={form.lastname} title={form.job} skills={['.NET', 'sql server']} />
          <BadgeForm onChange={handleChange} formValues={form} onSubmit={handleSubmit} />
        </div>
      </Layout>
    </>
  );
}

export default BadgeEdit;
