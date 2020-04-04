'use strict';

const e = React.createElement;
const domContainer = document.querySelector('#root_container');

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return e(
        'p',
        null,
        'Hello World'        
        );
    }
}

ReactDOM.render(e(App), domContainer);
