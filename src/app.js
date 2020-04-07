'use strict';
//import {leap_year_date, year_date} from "./date_map.js";

const e = React.createElement;
const domContainer = document.querySelector('#root_container');

class Day extends React.Component{
    constructor(props) {
        super(props);
        this.getDate = this.getDate.bind(this)
    }

    getDate(str){
        let date = str.split("T")
        let parsedate = date[0].split("-")
        return parsedate[1] + "/" + parsedate[2] + "/" + parsedate[0]
    }

    render(){
        if(this.props.data.length === 1){
            return(
                <div>
                    <p>{this.props.data[0].name}</p>
                    <p>{this.getDate(this.props.data[0].startTime)}</p>
                    <img src={this.props.data[0].icon}></img>
                    <p>Current: {this.props.data[0].temperature}{this.props.data[0].temperatureUnit}</p>
                </div>
            );
        }
        else{
            return(
                <div>
                    <p>{this.props.data[0].name}</p>
                    <p>{this.getDate(this.props.data[0].startTime)}</p>
                    <img src={this.props.data[0].icon}></img>
                    <p id="hightext">High: {this.props.data[0].temperature}{this.props.data[0].temperatureUnit}</p>
                    <p id="lowtext">Low: {this.props.data[1].temperature}{this.props.data[1].temperatureUnit}</p>
                </div>
            );

        }
       return (<div></div>);
        
    }

}

class Forcast extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          results: []
        };
        this.displayData = this.displayData.bind(this);
    }
    componentDidMount() {
        fetch("https://api.weather.gov/gridpoints/DTX/42,30/forecast?units=us", {
                method: 'get',
                headers: new Headers({
                    'User-Agent': '(joke-weather.com, mcrwong@umich.edu)',
                    'Accept': 'application/geo+json'
                })
            })
            .then(response => response.json())
            .then((data)=>{
                this.setState({
                    results: data.properties.periods
                })
            })
            .catch(error=>console.log(error));
    }

    displayData(results){
        if(results.length > 0){
            if(results[0].isDaytime){
                return (
                    <div className="row" id="forcast">
                        <div className="col"><Day data={results.slice(0, 2)}/></div>
                        <div className="col"><Day data={results.slice(2, 4)}/></div>
                        <div className="col"><Day data={results.slice(4, 6)}/></div>
                        <div className="col"><Day data={results.slice(6, 8)}/></div>
                        <div className="col"><Day data={results.slice(8, 10)}/></div>
                        <div className="col"><Day data={results.slice(10, 12)}/></div>
                        <div className="col"><Day data={results.slice(12)}/></div>
                    </div>
                );
            }
            else{
                return (
                    <div className="row" id="forcast">
                        <div className="col"><Day data={[results[0]]}/></div>
                        <div className="col"><Day data={results.slice(1, 3)}/></div>
                        <div className="col"><Day data={results.slice(3, 5)}/></div>
                        <div className="col"><Day data={results.slice(5, 7)}/></div>
                        <div className="col"><Day data={results.slice(7, 9)}/></div>
                        <div className="col"><Day data={results.slice(9, 11)}/></div>
                        <div className="col"><Day data={results.slice(11, 13)}/></div>
                    </div>
                );
            }
        }
        else{
            return (
                <div>Loading</div>
            );
        }
    }

    render(){
        return(
            <div className="container">{this.displayData(this.state.results)}</div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input_temp: 60,
            input_unit: 'F'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleUnit = this.handleUnit.bind(this);
    }

    handleInput(event) {
        if(event.target.value <= 500 && event.target.value >= -100){
            this.setState({input_temp: event.target.value});
        }
        else if(event.target.value > 500){
            this.setState({input_temp: 500})
        }
        else if(event.target.value < -100){
            this.setState({input_temp: -100})
        }
    }

    handleUnit(event) {
        this.setState({input_unit: event.target.value});
    }

    render(){
        return (
            <div>
                <div id="title-container" className="center">
                <h2 className="aligncenter" id="title">When is it Warm <img src = "titleicon.png" id="titlepic"></img></h2>
                <p id="annarbor">...in Ann Arbor?</p>
                </div>        
                <div><Forcast/></div>
                <div className="center">
                    <p className="aligncenter">I think <input autoFocus type="number" id="temperature" value={this.state.input_temp} onChange={this.handleInput}/>
                    <select value={this.state.input_unit} onChange={this.handleUnit}>
                        <option value="F">F</option>
                        <option value="C">C</option>
                        <option value="K">K</option>
                    </select> is warm</p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(e(App), domContainer);

