import React from 'react';
import imagen from './../images/medal-svgrepo-com.svg';
import persona from './../images/undraw.svg';
import './../index.css';

class Badge extends React.Component {
  render() {

    return (
      <div className="w-4/5 max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-zinc-500 p-6 flex justify-center">
          <img src={imagen} className="h-40" alt="Medal Icon" />
        </div>
        <div className="px-6 py-8">
          <div className="flex items-center justify-center">
            <img
              src={persona}
              className="h-32 w-32 rounded-full object-cover mr-6"
              alt="Person"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{this.props.name} {this.props.lastname}</h1>
              <p className="text-lg text-gray-600">{this.props.title}</p>
            </div>
          </div>
          <div className="mt-6">
            <hr/>
            <span className="my-4 inline-block bg-gray-200 rounded-full px-4 py-2 text-lg font-semibold text-gray-700 mr-2">#{this.props.skills[0]}</span>
            <span className="inline-block bg-gray-200 rounded-full px-4 py-2 text-lg font-semibold text-gray-700">#{this.props.skills[1]}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Badge;
