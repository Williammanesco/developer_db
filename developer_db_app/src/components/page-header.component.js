// import { Component } from 'react'

// export default class PageHeader extends Component {
//     constructor(props) {
//       super(props);
//     }

//     render(){
//       return (
//         <h3 style={{ textAlign: 'center', color: 'gray', padding: '0.5em' }}>this.props.title</h3>
//       )
//     }

// }

import React from 'react';

export default function Title({ title }) {
    return (
      <h3 style={{ textAlign: 'center', color: 'gray', padding: '0.5em' }}>{title}</h3>
    );
}