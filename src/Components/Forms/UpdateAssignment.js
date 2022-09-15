import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import  Navigationbar from "../Layout/Navigationbar"

const UpdateAssignment = (props) => {
  const [assignment, setAssignment] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`https:///elle-teacherdirectory-api.herokuapp.com/assignment/${id}`, {
        headers: {
        //   "x-auth-token": localStorage.getItem("userToken"),
        "x-auth-token": localStorage.getItem("teacherToken"),
        },
      })
      .then((res) => {
        console.log(res.data)
        setAssignment(res.data)
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://elle-teacherdirectory-api.herokuapp.com/assignment/${id}`, assignment, {
        headers: {  
        //   'x-auth-token': localStorage.getItem("userToken")
        'x-auth-token': localStorage.getItem("teacherToken")
        }
      }).then(res => history.push('/portfolio'))
    // }).then(res => history.push('/portfolio/:id'))
  };

  return (
        <div>
            <Navigationbar teacher={props.teacher}/>
            {assignment && (
                <form onSubmit={handleSubmit}>
                    <label className="form-label" htmlFor="Assignment_due">
                    Assignment_due"
                    </label>
                    <input
                        className="form-control"
                        type="Date"
                        id="assignment_due"
                        name="assignment_due"
                        value={assignment.assignment_due}
                        onChange={(e) =>
                      setAssignment({ ...assignment, [e.target.id]: e.target.value })
                        }
                    />

                    <div className="mb-3">
                        <label className="form-label" htmlFor="assignment_name">
                        Assignment_name
                        </label>
                        <input
                        className="form-control"
                        type="text"
                        id="assignment_name"
                        name="assignment_name"
                        value={assignment.assignment_name}
                        onChange={(e) =>
                      setAssignment({ ...assignment, [e.target.id]: e.target.value })
                        }
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="assignment_subject">
                        assignment_subject
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            id="assignment_subject"
                            name="assignment_subject"
                            value={assignment.assignment_subject}
                            onChange={(e) =>
                            setAssignment({ ...assignment, [e.target.id]: e.target.value })
                        }
                        />
                    </div>

                    <input
                        type="submit"
                        className="btn btn-success"
                        value="Update Assignment"
                    /> 
            </form>
         )}
    </div>
  );
};

export default UpdateAssignment;