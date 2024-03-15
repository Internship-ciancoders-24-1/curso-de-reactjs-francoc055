import React from 'react';
import { Link } from 'react-router-dom';

class BadgeList extends React.Component {
  render() {
    if(this.props.data.length == 0)
    {
      return<>
          <h3>No se encontro ningun dato</h3>
      </>
    }
    return (
      <ul className="divide-y divide-gray-300">
        {this.props.data.map((p) => {
          return (
            <li key={p.id} className="w-96 py-4 bg-slate-50 shadow-md rounded-lg overflow-hidden m-4">
                  <Link to={`${p.id}/edit`}>
                    <p className="text-lg font-semibold">{p.name}</p>
                    <p className="text-sm text-gray-600">{p.job}</p>
                  </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgeList;
