import React, { Component, Fragment } from 'react';
import Cabecalho from './components/Cabecalho'
import NavMenu from './components/NavMenu'
import Dashboard from './components/Dashboard'
import Widget from './components/Widget'
import TrendsArea from './components/TrendsArea'
import Tweet from './components/Tweet'
import classNames from 'classnames'

// function classNames(...possibleCSSClasses) {
//   return possibleCSSClasses.map((possibleCSSClass) => {
//     let className;
    
//     if(typeof possibleCSSClass === 'string') {
//       className = possibleCSSClass
//     }
//     if(typeof possibleCSSClass === 'object' && !Array.isArray(possibleCSSClass)) {
//       className = Object.keys(possibleCSSClass).filter((possibleCSSClassName) => {
//         return possibleCSSClass[possibleCSSClassName]
//       })
//     }

//     return className;
//   }).join(' ')
// }


class App extends Component {
  state = {
    novoTweet: '',
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value, 
    })
  }

  isNovoTweetLowerOrEqual140 = () => this.state.novoTweet.length <= 140
  isNovoTweetLowerOrEqual0 = () => this.state.novoTweet.length <= 0

  render() {
    // console.log(this.isNovoTweetHigherThan0() && this.isNovoTweetLowerThan140())
    return (
      <Fragment>
        <Cabecalho>
            <NavMenu usuario="@omariosouto" />
        </Cabecalho>
        <div className="container">
            <Dashboard>
                <Widget>
                    <form className="novoTweet">
                        <div className="novoTweet__editorArea">
                            <span className={classNames(
                              'novoTweet__status',
                              'outra classe',
                              {
                                'novoTweet__status--invalido': !this.isNovoTweetLowerOrEqual140()
                              }
                            )}>
                              {this.state.novoTweet.length}/140
                            </span>
                            {/* <span className={`
                              novoTweet__status
                              ${
                                !this.isNovoTweetLowerThan140()
                                ? 'novoTweet__status--invalido' 
                                : '' 
                              }`}>
                              {this.state.novoTweet.length}/140
                            </span> */}
                            <textarea
                              onChange={this.handleChange}
                              value={this.state.novoTweet}
                              name="novoTweet"
                              className="novoTweet__editor"
                              placeholder="O que está acontecendo?"></textarea>
                        </div>
                        <button
                          type="submit"
                          disabled={!this.isNovoTweetLowerOrEqual140() || this.isNovoTweetLowerOrEqual0()}
                          className="novoTweet__envia">
                          Tweetar
                        </button>
                    </form>
                </Widget>
                <Widget>
                    <TrendsArea />
                </Widget>
            </Dashboard>
            <Dashboard posicao="centro">
                <Widget>
                    <div className="tweetsArea">
                        <Tweet />
                    </div>
                </Widget>
            </Dashboard>
        </div>
      </Fragment>
    );
  }
}

export default App;
