var React = require('react');
var ReactDOM = require('react-dom');

var PersonAdd = React.createClass ({
/*    getInitialState: function() {
        return {
          value: 0
        };
    },
    
    handleChange(event) {
        this.setState({value: event.target.value});
    },
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                      Name:
                      <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    },
    
    handleSubmit(event) {
        //alert('Name entered was: ' + this.state.value);
        e.preventDefault();
    }*/
    render(){
        return(
            <form>
                <label for="fn">Name:</label>
                <input type="text" class="form-control" name="fn" placeholder="Enter your full name">
                
                
                <label for="inputEmail">Email Address:</label>
                <input type="email" class="form-control" name="inputEmail" aria-describedby="emailHelp" placeholder="Enter your email">
            </form>
        )
    }
});

ReactDOM.render(<PersonAdd />, document.getElementById('forms'));