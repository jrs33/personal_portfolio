import firebase from 'firebase'

// Initialize Firebas
var config = {
    apiKey: "AIzaSyDXpTXhDZ_1KG-q8KOy-_xJXYWAoIywb6I",
    authDomain: "personalsite-34e89.firebaseapp.com",
    databaseURL: "https://personalsite-34e89.firebaseio.com",
    projectId: "personalsite-34e89",
    storageBucket: "personalsite-34e89.appspot.com",
    messagingSenderId: "775604391658"
};
firebase.initializeApp(config);

var database = firebase.database();

var cols = [
    { key: 'firstName', label: 'First Name' },
    { key: 'lastName', label: 'Last Name' },
    { key: 'url', label: 'Link' },
    { key: 'description', label: 'Description' }
];

// Place Firebase Retrieval here
var initialData = [];
database.ref().once('value', function(snapshot) {
    snapshot.forEach(childSnap =>{
        initialData.push(childSnap.val());
    })
});

var Table = React.createClass({
    //... props are a way of passing data from parent to child. ... State is reserved only for interactivity, that is, data that changes over time.
    getInitialState: function() {
        return {
            data: [],
            toggle: 0
        };
    },
    
    generateHeaders: function() {
        var cols = this.props.cols;  // [{key, label}]

        // generate our header (th) cell components
        return cols.map(function(colData) {
            return <th key={colData.key}> {colData.label} </th>;
        });
    },

    generateRows: function() {
        var cols = this.props.cols;  // [{key, label}]
        var data = this.state.data.slice();
        var divStyle = {padding: "5px",
                        margin: "5px"};

        return data.map(function(item) {
            // handle the column data within each row
            var cells = cols.map(function(colData) {

                // colData.key might be "firstName"
                return <td style={divStyle}> {item[colData.key]} </td>;
            });
            return <tr key={item.id}> {cells} </tr>;
        });
    },
    
    handleNewRowSubmit: function(e) {
        e.preventDefault();
        var newRow = { "id": this.state.data.length, "firstName": this.firstname.value, "lastName": this.lastname.value, "url": this.url.value, "description": this.description.value };
        
        // Writes data to Firebase instance
        firebase.database().ref().push(newRow);
        
        // Create copy of immutable state array, push element, and set the state to this new appended copy
        var arrayVar = this.state.data.slice();
        arrayVar.push(JSON.parse('{}'));
        arrayVar[arrayVar.length - 1].id = arrayVar.length;
        arrayVar[arrayVar.length - 1].firstName = this.firstname.value;
        arrayVar[arrayVar.length - 1].lastName = this.lastname.value;
        arrayVar[arrayVar.length - 1].url = this.url.value;
        arrayVar[arrayVar.length - 1].description = this.description.value;
        this.setState({data: arrayVar});
        
        // Clear the form for next entry
        this.firstname.value="";
        this.lastname.value="";
        this.url.value="";
        this.description.value="";
        return;
    },
    
    loadData: function(e) {
        if(this.state.toggle == 0){
            e.preventDefault();

            var arrayVar = this.props.initialData;
            this.setState({data: arrayVar, toggle: 1});
            
            return;
        }
        else {
            e.preventDefault();
            this.setState({data: [], toggle: 0});
            return;
        }
    },
    
    render: function() {
        var headerComponents = this.generateHeaders(),
            rowComponents = this.generateRows();

        return (
            <div>
                <table>
                    <td> {rowComponents} </td>
                </table>
                <form onSubmit={this.handleNewRowSubmit}>
                    <div>
                        <input type="text" ref={FirstName => this.firstname = FirstName} placeholder="First Name"/>
                    </div>
                    <div>
                        <input type="text" ref={LastName => this.lastname = LastName} placeholder="Last Name"/>
                    </div>
                    <div>
                        <input type="text" ref={URL => this.url = URL} placeholder="Source URL"/>
                    </div>
                    <div>
                        <input type="text" ref={Desc => this.description = Desc} placeholder="Source Summary"/>
                    </div>
                    <div>
                        <input type="submit" value="Add Source" />
                    </div>
                </form>
                <form onSubmit={this.loadData}>
                    <div>
                        <input type="submit" value="Toggle Data" />
                    </div>
                </form>
            </div>
        );
    }
});

React.render(<Table cols={cols} initialData={initialData}/>, document.getElementById('table'));