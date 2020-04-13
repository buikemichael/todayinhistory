import React from 'react';
import Search from './Search';
import Info from './Info';

export default class Landing extends React.Component{
    constructor(){
        super()
        this.state={
            historyDatas:[]
        }
    }
    resData=(data)=>{
        this.setState({historyDatas:data})
    }
    render(){
        return(
            <div>
                <Search resData={this.resData}/>
                <Info historyDatas={this.state.historyDatas}/>
            </div>
        )
    }
}