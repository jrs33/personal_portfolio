import React from 'react';

export default Languages extends React.component {
    render(){
        return(
            <div>

                {this.props.langs.map(function(listValue)
                 {
                    return <li>{<i>{listValue}</i>}</li>;
                })}

            </div>
        );
    }

}