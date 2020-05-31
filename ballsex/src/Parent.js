import React, { Component } from 'react';
import Ball from './Ball'

class Parent extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxball: 6,
        maxNum: 40
    };
    constructor(props) {
        super(props);
        this.state = {
            num: Array.from({ length: this.props.maxball })
        }
        this.handel = this.handel.bind(this)
    }
    handel() {
        this.setState(nt => ({ num: nt.num.map(nf => Math.floor(Math.random() * this.props.maxNum) + 1) }))

    }
    render() {
        return (
            <section>
                <h1>{this.props.title}</h1>
                {this.state.num.map(n => <Ball num={n} />)}
                <div>
                    <button onClick={this.handel}>Generate!!</button>
                </div>

            </section>
        )
    }
}

export default Parent;