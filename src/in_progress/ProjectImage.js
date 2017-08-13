import React from 'react';

export default ProjectImage extends React.component {
    render(){
        return (
            <div style={{textAlign:"center"}}>
                <img src={this.props.img}></img>
            </div>
        );
    }
}