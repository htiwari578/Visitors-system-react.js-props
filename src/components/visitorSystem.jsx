import React, {Component} from 'react';
import Visitor from "./visitor";

class VisitorSystem extends Component {n 
    state ={
        visitors : [
            {id: 101 , name: "jack" , status: "Outside"},
            {id: 105 , name: "Tim" , status: "Outside"},
            {id: 110 , name: "Mary" , status: "Outside"},
            {id: 235 , name: "Steve" , status: "Outside"},
            {id: 444 , name: "Kathy" , status: "Outside"},
            {id: 120 , name: "Meg" , status: "Outside"},
            {id: 140 , name: "Bob" , status: "Outside"},
        ],

        queue : [],
    };

    getInsideCount = () => 
        this.state.visitors.reduce(
            (acc,curr) => acc + (curr.status ==="Inside" ? 1 : 0),
            0
        );
    
    handleEnter = (id) =>{
        let s1 = {...this.state};
        let visitor = s1.visitors.find((v1) => v1.id === id);
        let insideCount =  this.getInsideCount();
        if(insideCount ===2) {
            visitor.status="Waiting";
            s1.queue.push(visitor)
        } else visitor.status = "Inside";
        this.setState(s1);
    };
    handleExit = (id) =>{
        let s1 = {...this.state};
        let visitor = s1.visitors.find((v1) => v1.id === id);
        visitor.status = "Outside";
        if(s1.queue.length >0){
          let v1=  s1.queue.shift();
          v1.status ="Inside";
        }
        
        this.setState(s1);
    };
    render (){
        const {visitors ,queue}= this.state;

        return (
            <div className ="conatainer">
                <h4>Inside ={this.getInsideCount()}  Queue ={queue.length}</h4>
               {visitors.map((v1)=>(
                <Visitor visitor = {v1} 
                onEnter={this.handleEnter}
                onExit={this.handleExit}/>
               ))} 
               <h4>Queue</h4>
               <ul>
                {queue.map((q1)=> (
                    <li>{q1.name}</li>
                ))}
               </ul>
            </div>
        );

        
    }
}
export  default VisitorSystem;