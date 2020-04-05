'use strict';

const e = React.createElement;
const domContainer = document.querySelector('#root_container');

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
        <div id="title-container" className="center">
        <h2 id="title">When is it Warm</h2>
        </div>        
        );
    }
}

ReactDOM.render(e(App), domContainer);
