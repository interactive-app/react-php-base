import React from "react"
import axios from "axios"
import styled from "styled-components"


// See styled-components documentation for further api info
const Container = styled.div`

    background-color:green;

`

const Heading = styled.h1`
    color:red;
`

export default class App extends React.Component {
    constructor(props){
        super(props);

        let defaultState = {
            input_val:"",
            api_message:""
        }
        props.appState ? this.state = props.appState : this.state = defaultState

        this.handleInputOnChange = this.handleInputOnChange.bind(this);
    }
    componentWillMount(){
        console.log("Layout component will mount")
        
    }
    componentDidMount(){
        console.log("Layout component did mount");
        
        axios.get('../public/api/api.php', {
            params: {
                action: "hello",
                data:{
                    name:"World"
                }
            }
        })
        .then(response => {
            this.setState({
                api_message:response.data
            })
        })
        .catch(error => {
            console.log(error.response)
        });

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

        let LTI_Message = "Oh No LTI is not valid"
        if($LTI_is_valid){
            LTI_Message = <span>{"LTI is valid and a custom LTI varible is now available in the gloabal scope - "+$LTI_custom_variable_by_user_string}</span>;
        }


        return (
        <Container>
            <Heading>{this.state.input_val}</Heading>
            
            <input 
                type="text" 
                id="usr"
                value={this.state.input_val}
                onChange={this.handleInputOnChange}
            />
            <h2 className="test">{this.state.api_message}</h2>
            <h3>{LTI_Message}</h3>


        </Container>);
    }
}
