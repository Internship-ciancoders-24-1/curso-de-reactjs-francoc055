import React from 'react';

class BadgeForm extends React.Component {
 

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(this.state);
  // };



  render() {
    return (
      <form className="max-w-sm mx-auto mt-6" onSubmit={this.props.onSubmit}>
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="text-sm font-semibold text-gray-600">Nombre:</label>
          <input
            name='name'
            type="text"
            id="name"
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Ingrese su nombre"
            value={this.props.formValues.name}
            onChange={this.props.onChange}
          />
          <label htmlFor="lastname" className="text-sm font-semibold text-gray-600">Last name:</label>
          <input
            name='lastname'
            type="text"
            id="lastname"
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Ingrese su apellido"
            value={this.props.formValues.lastname}
            onChange={this.props.onChange}
          />
          <label htmlFor="email" className="text-sm font-semibold text-gray-600">Email:</label>
          <input
            name='email'
            type="email"
            id="email"
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Ingrese su email"
            value={this.props.formValues.email}
            onChange={this.props.onChange}
          />
          <label className="text-sm font-semibold text-gray-600">Job:</label>
          <input
            name='job'
            type="text"
            id="job"
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Ingrese su trabajo"
            value={this.props.formValues.job}
            onChange={this.props.onChange}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        >
          Enviar
        </button>
      </form>
    );
  }
}

export default BadgeForm;
