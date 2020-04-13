import React, { Component } from 'react'

export default class Info extends Component {
    
    render(){
        return (
            <div>
                <ul>
                    {this.props.historyDatas.map((item,index)=>{
                        return(<li key={index}>{item}</li>)
                    }) }  
                </ul>
            </div>
        )
    }
}
