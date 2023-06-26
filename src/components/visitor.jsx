import React, { Component } from 'react';

class Visitor extends Component {

    getButton = (status,onEnter,onExit,id) => 
        status ==="Outside" ? (
            <button className ="btn btn-success btn-sm"onClick={() => onEnter(id)}>Enter</button>
        ): status ==="Inside" ? (
            <button className="btn btn-warning btn-sm" onClick={() => onExit(id)}>Exit</button>
        ): (
            ""
        );

        getRowColor = (status) => 
            status ==="Outside" ? "bg-dark text-white" 
            : 
            status === "Inside" ? 
            "bg-secondary" : 
            "bg-light";
        
    


    render (){
        const {visitor, onEnter, onExit} =this.props;
        const {id,name,status} = visitor;
        return(
            <div className ={"row border m-1 " + this.getRowColor(status)}>
                <div className ="col-3">{id}</div>
                <div className ="col-3">{name}</div>
                <div className ="col-3">{status}</div>
                <div className ="col-3">{this.getButton(status,onEnter,onExit,id)}</div>
            </div>
        );

    }
}
export default Visitor;