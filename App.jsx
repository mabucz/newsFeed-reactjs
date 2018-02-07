/*jshint esversion: 6 */

import React from 'react';

class App extends React.Component {

    render() {
        return (
            <div>
                <Content />
            </div>
        );
   }
}

class Content extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            mt: {}
        };
    }

    _getData() {
        var self = this;

        $.getJSON('data.json', function(result) {
            self.setState({articles: result.articles});
            self.setState({mt: result.articles[0]});
        });
    }

    componentWillMount() {
        this._getData();
    }

    componentDidMount() {
        //var self = this;
        //setInterval(self._getData.bind(self), 4000);
    }

    render() {
        var articles = this.state.articles.map(function(art) {
                return <Article key={art.x} t={art.t} l={art.l} />;
            }),
            mt = this.state.mt;

        return (
            <div className="content">
                <MainTopic key={mt.x} t={mt.t} l={mt.l} a={mt.a} />
                {articles.slice(1, 9)}
            </div>
        );
    }

}

class Article extends React.Component {

    render() {
        return (
            <div className="article">
                <h2>{this.props.t}</h2>
                <p>{this.props.l}</p>
            </div>
        );
    }
}

class MainTopic extends React.Component {

    render() {
        return (
            <div className="main-topic">
                <h1>{this.props.t}</h1>
                <p>{this.props.l}</p>
                <p>{this.props.a}</p>
            </div>
        );
    }
}

export default App;
