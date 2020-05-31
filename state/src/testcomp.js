import RectDom from 'react-dom';
import React, { Component } from 'react';

class Testcomp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        }
        this.newData = this.newData.bind(this);
    }
    newData() {
        this.setState(st => {
            return {
                score: st.score + 1
            }
        });
        this.setState(st => {
            return {
                score: st.score + 1
            }
        });
        this.setState(st => {
            return {
                score: st.score + 1
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Score is :{this.state.score}</h1>
                <button onClick={this.newData}> Click me!!</button>
            </div>
        )
    }
}




export default Testcomp;