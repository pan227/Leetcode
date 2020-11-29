import React, {Component} from "react";

class InputBox extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.ref = React.createRef();

        this.state = {
            text: ""
        }
    }

    submit() {
        this.setState({text: this.ref.current.value});
    }

    render() {
        return (
            <div>
                <input ref={this.ref} onChange={this.edit}></input>
                <hr />
                <button onClick={this.submit}>SUBMIT</button>
                <span>{this.state.text}</span>
            </div>
        ) 
    }
}

export default InputBox;