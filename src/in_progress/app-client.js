import React from 'react';
import ReactDOM from 'react-dom';
//import Project from './Project.js';
import projectData from './data.js';

class Project extends React.component {
    render() {
        return (
            <div>
                <h3>{this.props.projectData.name}</h3>
            </div>
        );
    }
}

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

class Index extends React.component {
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

ReactDOM.render(
    //<Index projectData={projectData}/>,
    <h1>HELLO</h1>,
    document.getElementById('content')
)