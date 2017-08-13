import React from 'react';
import Languages from './Languages.js';
import ProjectImage from './ProjectImage.js';
import Body from './Body.js';
import Project from './Project.js';

class ProjectPreview extends React.component {
    render() {
        return(
            <div>
                <h1>Hello, world!</h1>,
                document.getElementById('content')
                /*<Project 
                    name={this.props.name}/>
                <Body
                    desc={this.props.description}/>
                <hr></hr>
                <ProjectImage
                    img={this.props.img}/>
                <hr></hr>
                <Languages 
                    langs={this.props.langList}/>
                <hr></hr>*/
            </div>
        );
    }
};