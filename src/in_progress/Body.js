import React from 'react';

export default class Body extends React.component {
    render(){
        return (
            <div>
                <span>{this.props.desc}</span>
            </div>
        );
    }
}