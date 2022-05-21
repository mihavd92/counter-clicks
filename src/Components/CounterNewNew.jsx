import {Component} from "react";


class CounterNewNew extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.handleClickMns = this.handleClickMns.bind(this)
        this.handleRestore = this.handleRestore.bind(this)
    }

    state = {
        clicks: 5
    }

    handleClick() {
        this.setState({ clicks: this.state.clicks + 1 })
    }

    handleClickMns() {
        this.setState({ clicks: this.state.clicks - 1 })
    }

    handleRestore() {
        this.setState({ clicks: this.state.clicks * 0 })
    }

    render() {
        return (
            <div>
                <h3>Counter Clicker v3 - {this.state.clicks}</h3>
                <button onClick={this.handleClick}>Plus</button>
                <button onClick={this.handleClickMns}>Minus</button>
                <button onClick={this.handleRestore}>Restore</button>
            </div>
        )
    }
}

export default CounterNewNew;
