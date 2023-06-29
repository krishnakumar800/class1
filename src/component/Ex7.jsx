import React,{Component} from 'react'
const x = 123;
const title = 'welcome to react';
const isView = false;
const users = ['john' , 'umesh','kranthi','balu']
const emp = {
    id : 123,
    name : 'krishna',
    email : 'kkroyroyal12@gmail.com'
}



class Ex7 extends Component {
    constructor (props){
        super(props)
    

    }
    render() {
        return (
            <div>
                <h1>Variables and data binding in class component</h1>
                <h4>x = {x}</h4>
                <h4>title = {title}</h4>
                <h3> boolean = {isView ? "say True" : "say False"}</h3>
                <hr/>
                <div>
                    { isView ? <h1>True</h1> : <h1>False</h1>}
                </div>
                <hr/>
                <ul>
                    {
                        users.map((item,index) => {
                            return (
                                <li key = {index}> {index} {item}</li>
                            )
    
                        })
                       
                    }
                </ul>
                <hr/>
                <h3>emp id = {emp.id}</h3>
                <h3>emp name = {emp.name}</h3>
                <h3>emp email = {emp['email']}</h3>
    
    
                
    
              
               
                
    
               
            </div>
    
           
    
    
        )
    
    
    
    
    
    
    
    
    
        
    }
}
export default Ex7
        


