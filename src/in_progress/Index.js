import React from 'react';
import projectData from './data.js';

export default class Index extends React.component {
    render(){
        return (
            <div>
                {this.props.projectData.map(
                    project => <div><ProjectPreview key={project.id} {...project}/></div>)
                }
            </div>
        );
    }
};