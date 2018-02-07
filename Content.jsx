/*jshint esversion: 6 */
import React from 'react';
import Article from './Article.jsx';
import MainTopic from './Maintopic.jsx';

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

    onArticleClickHandler(event) {
        console.log(event.target);
    }

    render() {
        var articles = this.state.articles.map(art => (
                <Article
                    key={art.x}
                    t={art.t}
                    l={art.l}
                    click={this.onArticleClickHandler}/>
            )),
            mt = this.state.mt;

        return (
            <div className="content">
                <MainTopic key={mt.x} t={mt.t} l={mt.l} a={mt.a} />
                {articles.slice(1, 9)}
            </div>
        );
    }

}
export default Content;
