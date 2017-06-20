import '../stylesheets/Container.scss'

import React from "react"


export default class Container extends React.Component {


    constructor(props){
        super(props);

        let defaultState = {
            input_val:""
        }
        props.appState ? this.state = props.appState : this.state = defaultState

        this.handleInputOnChange = this.handleInputOnChange.bind(this);
    }
    componentWillMount(){
        console.log("Layout component will mount")
        
    }
    componentDidMount(){
        console.log("Layout component did mount");

    }
    componentWillUnmount(){
        console.log("Layout component will unmount")
    }

    handleInputOnChange(event){
        this.setState({
            input_val:event.target.value
        })
    }


    render(){


        return (
        <div className="container-component clearfix">
            <h1>{this.state.input_val}</h1>

            <input 
                type="text" 
                class="form-input" 
                id="usr"
                value={this.state.input_val}
                onChange={this.handleInputOnChange}
            />

        </div>);
    }
}
