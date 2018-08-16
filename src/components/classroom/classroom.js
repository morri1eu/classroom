import React, {Component} from "react";
import Students from "../../students.json"
import Student from "../Student"





class Classroom extends Component{
    state={
        students: Students
    }

    rollCall = (name,favSub)=>{
        alert(`Hi my name is ${name} and my favorite subject is ${favSub}`)
    }


    render(){
        return(
            <div>
                <h1>Classroom</h1>
                {this.state.students.map(student =>
                    <div>
                        <Student 
                        id={student.id} 
                        name={student.name} 
                        favoriteSubject={student.favoriteSubject}
                        rollCall= {this.rollCall}
                        />
                    </div>
                )}
            </div>
        )

    }
}
export default Classroom