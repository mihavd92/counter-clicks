import {Component, } from "react";

class CounterNew extends Component {

    Player1 = prompt('P1. Enter your name');
    Player2 = prompt('P2. Enter your name');

    constructor(props) {
        super(props);

        this.handleClickPl1pls = this.handleClickPl1pls.bind(this);
        this.handleClickPl1mns = this.handleClickPl1mns.bind(this);
        this.handleClickPl2pls = this.handleClickPl2pls.bind(this);
        this.handleClickPl2mns = this.handleClickPl2mns.bind(this);
        this.handleReplace = this.handleReplace.bind(this);
    }

    state = {
        countpl1: 0,
        countpl2: 0
    }

    handleClickPl1pls() {
        this.setState({countpl1: this.state.countpl1 + 1})
    }
    handleClickPl1mns() {
        this.setState({countpl1: this.state.countpl1 - 1})
    }

    handleClickPl2pls() {
        this.setState({countpl2: this.state.countpl2 + 1})
    }
    handleClickPl2mns() {
        this.setState({countpl2: this.state.countpl2 - 1})
    }

    handleReplace() {
        this.setState({ countpl1: 0, countpl2: 0 })
    }

    render() {
        return (
            <div>
                <h3>{this.Player1}: {this.state.countpl1}</h3>
                <button onClick={this.handleClickPl1pls}>+</button>
                <button onClick={this.handleClickPl1mns}>-</button>

                <h3>{this.Player2}: {this.state.countpl2}</h3>
                <button onClick={this.handleClickPl2pls}>+</button>
                <button onClick={this.handleClickPl2mns}>-</button>
                <br />
                <button onClick={this.handleReplace}>Replace All</button>
            </div>
        )
    }
}


export default CounterNew;
