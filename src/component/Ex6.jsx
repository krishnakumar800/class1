import React from 'react'
const x = 123435;
const title = 'welcome to be-practical';
const isView = true;
const users = ['john' , 'umesh','kranthi','balu']
const emp = {
    id : 123,
    name : 'krishna',
    email : 'kkroyroyal12@gmail.com'
}

const Ex6 = function (props) {
    return (
        <div>
            <h1>React Const local functional component </h1>
                
           
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
   
export default Ex6