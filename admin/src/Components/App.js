import React, { Component } from 'react'
import { clearFix } from 'polished'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import uuid from 'uuid'

const Container = styled.div`
    width:100%;
    background-color:#FFFAD0;
    ${ clearFix() }
`

export default class App extends Component{
    render(){
        return(<Container>
            This is a component for App WOOOOAHH
            
        </Container>)
    }
}

App.PropTypes = {

}

App.defaultProps = {

}