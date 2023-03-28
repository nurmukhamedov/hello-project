import { Component } from "react";

class ExampleClass extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }

        this.handleCLick = this.handleCLick.bind(this)
    }

    componentDidUpdate(prevState) {
        if (prevState.count !== this.state.count) {
            console.log('Component rendered');
        }
    }

    handleCLick() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    componentDidMount() {
        console.log('Component rendered');
    }


    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleCLick}>Click</button>
            </div>
        )
    }
}

export default ExampleClass;


