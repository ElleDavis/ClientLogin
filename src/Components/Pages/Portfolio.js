import  Navigationbar from "../Layout/Navigationbar"
import CreateAssignment from "../Forms/CreateAssignment";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Portfolio =(props)=>{
    const [assignment, setAssignment] = useState(null);
    const history = useHistory()

  useEffect(() => {
    axios
      .get("https://elle-teacherdirectory-api.herokuapp.com/assignment", {
        headers: {
          "x-auth-token": localStorage.getItem("teacherToken"),
        },
      })
      .then((res) => setAssignment(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (assignment) => {
    axios
      .delete(`https://elle-teacherdirectory-api.herokuapp.com/assignment/${assignment._id}`, {
        headers: {
          "x-auth-token": localStorage.getItem("teacherToken"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setAssignment([...assignment.filter((t) => t._id !== assignment._id)]);
      })
      .catch((err) => console.error(err));
  };

  const handleUpdate = (assignment) => {
    // history.push(`/portfolio/${assignment._id}`)
    history.push(`/update/${assignment._id}`)
  }

  return (
    <div>
        <Navigationbar/>
      
      <h1>Assignments</h1>

      {assignment &&<CreateAssignment setAssignment={setAssignment} assignment={assignment} />}
      
      {assignment &&
        assignment.map((assignment) => (
          <div key={assignment._id}>
            <h6>{assignment.assignment_name}</h6>
            <h6>{assignment.assignment_due}</h6>
            <h6>{assignment.assignment_subject}{" "}
                {assignment.teacher === props.teacher._id && (
                <span
                  className="btn btn-danger"
                  style={{marginRight: '5px'}}
                  onClick={() => handleDelete(assignment)}
                > x </span>
              )}

              {assignment.teacher === props.teacher._id && (
                <span
                  className="btn btn-info"
                  onClick={() => handleUpdate(assignment)}
                >Update</span>
              )}
            </h6>
          </div>
        ))}
    </div>
  );
};
    // return(
        
    //     <div> 
    //         <Navigationbar/>
    //         <h2>Portfolio</h2>
    //         </div>
        
    // )}

export default Portfolio