'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;
var domContainer = document.querySelector('#root_container');

var Day = function (_React$Component) {
    _inherits(Day, _React$Component);

    function Day(props) {
        _classCallCheck(this, Day);

        var _this = _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).call(this, props));

        _this.getDate = _this.getDate.bind(_this);
        return _this;
    }

    _createClass(Day, [{
        key: 'getDate',
        value: function getDate(str) {
            var date = str.split("T");
            var parsedate = date[0].split("-");
            return parsedate[1] + "/" + parsedate[2] + "/" + parsedate[0];
        }
    }, {
        key: 'render',
        value: function render() {
            console.log(this.props.data);
            if (this.props.data.length === 1) {
                return React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        this.props.data[0].name
                    ),
                    React.createElement(
                        'p',
                        null,
                        this.getDate(this.props.data[0].startTime)
                    ),
                    React.createElement('img', { src: this.props.data[0].icon }),
                    React.createElement(
                        'p',
                        null,
                        'Current: ',
                        this.props.data[0].temperature,
                        this.props.data[0].temperatureUnit
                    )
                );
            } else {
                return React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        this.props.data[0].name
                    ),
                    React.createElement(
                        'p',
                        null,
                        this.getDate(this.props.data[0].startTime)
                    ),
                    React.createElement('img', { src: this.props.data[0].icon }),
                    React.createElement(
                        'p',
                        null,
                        'High: ',
                        this.props.data[0].temperature,
                        this.props.data[0].temperatureUnit
                    ),
                    React.createElement(
                        'p',
                        null,
                        'Low: ',
                        this.props.data[1].temperature,
                        this.props.data[1].temperatureUnit
                    )
                );
            }
            return React.createElement('div', null);
        }
    }]);

    return Day;
}(React.Component);

var Forcast = function (_React$Component2) {
    _inherits(Forcast, _React$Component2);

    function Forcast(props) {
        _classCallCheck(this, Forcast);

        var _this2 = _possibleConstructorReturn(this, (Forcast.__proto__ || Object.getPrototypeOf(Forcast)).call(this, props));

        _this2.state = {
            results: []
        };
        _this2.displayData = _this2.displayData.bind(_this2);
        return _this2;
    }

    _createClass(Forcast, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            fetch("https://api.weather.gov/gridpoints/DTX/42,30/forecast?units=us", {
                method: 'get',
                headers: new Headers({
                    'User-Agent': '(joke-weather.com, mcrwong@umich.edu)',
                    'Accept': 'application/geo+json'
                })
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                _this3.setState({
                    results: data.properties.periods
                });
            }).catch(function (error) {
                return console.log(error);
            });
        }
    }, {
        key: 'displayData',
        value: function displayData(results) {
            if (results.length > 0) {
                if (results[0].isDaytime) {
                    return React.createElement(
                        'div',
                        { id: 'forcast' },
                        React.createElement(
                            'div',
                            { className: 'col' },
                            React.createElement(Day, { data: results.slice(0, 2) })
                        ),
                        React.createElement(
                            'div',
                            { className: 'col' },
                            React.createElement(Day, { data: results.slice(2, 4) })
                        ),
                        React.createElement(
                            'div',
                            { className: 'col' },
                            React.createElement(Day, { data: results.slice(4, 6) })
                        ),
                        React.createElement(
                            'div',
                            { className: 'col' },
                            React.createElement(Day, { data: results.slice(6, 8) })
                        ),
                        React.createElement(
                            'div',
                            { className: 'col' },
                            React.createElement(Day, { data: results.slice(8, 10) })
                        ),
                        React.createElement(
                            'div',
                            { className: 'col' },
                            React.createElement(Day, { data: results.slice(10, 12) })
                        ),
                        React.createElement(
                            'div',
                            { className: 'col' },
                            React.createElement(Day, { data: results.slice(12) })
                        )
                    );
                } else {
                    return React.createElement(
                        'div',
                        { id: 'forcast' },
                        React.createElement(
                            'div',
                            { className: 'col' },
                            React.createElement(Day, { data: [results[0]] })
                        ),
                        React.createElement(
                            'div',
                            { className: 'col' },
                            React.createElement(Day, { data: results.slice(1, 3) })
                        ),
                        React.createElement(
                            'div',
                            { className: 'col' },
                            React.createElement(Day, { data: results.slice(3, 5) })
                        ),
                        React.createElement(
                            'div',
                            { className: 'col' },
                            React.createElement(Day, { data: results.slice(5, 7) })
                        ),
                        React.createElement(
                            'div',
                            { className: 'col' },
                            React.createElement(Day, { data: results.slice(7, 9) })
                        ),
                        React.createElement(
                            'div',
                            { className: 'col' },
                            React.createElement(Day, { data: results.slice(9, 11) })
                        ),
                        React.createElement(
                            'div',
                            { className: 'col' },
                            React.createElement(Day, { data: results.slice(11, 13) })
                        )
                    );
                }
            } else {
                return React.createElement(
                    'div',
                    null,
                    'Loading'
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.displayData(this.state.results)
            );
        }
    }]);

    return Forcast;
}(React.Component);

var App = function (_React$Component3) {
    _inherits(App, _React$Component3);

    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { id: 'title-container', className: 'center' },
                    React.createElement(
                        'h2',
                        { id: 'title' },
                        'When is it Warm'
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(Forcast, null)
                )
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(e(App), domContainer);