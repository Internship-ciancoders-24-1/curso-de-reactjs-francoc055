import React from 'react'
import ReactDOM from 'react-dom'

import Badge from './components/Badge'

import BadgeNew from './pages/BadgeNew'
import Badges from './pages/Badges'

const name = 'franco'
const element = <h1>Hola {name}</h1>
const root = document.getElementById('root')

ReactDOM.render(    
    <>
        {/* <Navbar/> */}
        {/* <Badge name="enzo" lastname="diaz" title="dev full stack" skills={['.NET', 'sql server']}/> */}
        {/* <BadgeNew/> */}
        <Badges/>
    </>
, root)
