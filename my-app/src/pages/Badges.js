import React from 'react';
import Navbar from '../components/Navbar';
import BadgeList from '../components/BadgeList';

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
            <Navbar/>

            <div>
                <button>new badge</button>
            </div>

            {/* <ul>
                {this.state.data.map(p =>{
                    return (
                        <li key={p.id}>
                            <p>{p.name}</p>
                            <p>{p.job}</p>
                            <hr/>
                        </li>
                    )
                })}
            </ul> */}
            <BadgeList data={this.state.data}/>
        </>
    }
}


export default Badges