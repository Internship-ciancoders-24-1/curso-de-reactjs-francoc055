import React from 'react';

class BadgeList extends React.Component {
  render() {
    return (
      <ul className="divide-y divide-gray-300">
        {this.props.data.map((p) => {
          return (
            <li key={p.id} className="w-96 py-4 bg-slate-50 shadow-md rounded-lg overflow-hidden m-4">
              {/* <div className="bg-white shadow-md rounded-lg overflow-hidden"> */}
                {/* <div className="p-4"> */}
                  <p className="text-lg font-semibold">{p.name}</p>
                  <p className="text-sm text-gray-600">{p.job}</p>
                {/* </div> */}
              {/* </div> */}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgeList;
