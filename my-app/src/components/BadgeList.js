import React from 'react';

class BadgeList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.data.map((p) => {
          return (
            <li key={p.id}>
              <p>{p.name}</p>
              <p>{p.job}</p>
              <hr />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgeList;
