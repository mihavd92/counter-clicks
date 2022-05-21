import React, {Component} from "react";


class Counter extends Component {

   constructor(props) {
       super(props);
       this.state = {
           count: 0
       }
   }

   handleClickPls() {
       this.setState({ count: this.state.count + 1 })
   }

   handleClickMns() {
        this.setState({ count: this.state.count - 1 })
   }



    render() {
        return (
            <div>
                <h3>Counter Clicks {this.state.count}</h3>
                <button className="btn-pls" onClick={this.handleClickPls}> + </button>
                <button className="btn-mls" onClick={this.handleClickMns}> - </button>
            </div>
        )
    }
}

export default Counter;
