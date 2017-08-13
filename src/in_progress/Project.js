import React from 'react';

export default class Project extends React.component {
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
            </div>
        );
    }
}