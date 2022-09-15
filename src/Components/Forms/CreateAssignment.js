import { useState } from "react";
import axios from 'axios'

const CreateAssignment = (props) => {
  const [formData, setFormData] = useState({
    assignment_name: "",
    assignment_subject: "",
    assignment_due: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://elle-teacherdirectory-api.herokuapp.com/assignment', formData, {
        headers: {
          'x-auth-token': localStorage.getItem("teacherToken")
        }
      }).then(res => props.setAssignment([...props.assignment, res.data]))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="assignment_due">
      assignment_due
      </label>
      <input
            className="form-control"
            // type="text"
            type="Date"
            id="assignment_due"
            name="assignment_due"
            value={formData.assignment_due}
            onChange={(e) =>
          setFormData({ ...formData, [e.target.id]: e.target.value })
        }
      />
      <div>
      <label className="form-label" htmlFor="assignment_name">
      assignment_name
      </label>
      <input
            className="form-control"
            type="text"
            id="assignment_name"
            name="assignment_name"
            value={formData.assignment_name}
            onChange={(e) =>
          setFormData({ ...formData, [e.target.id]: e.target.value })
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
            value={formData.assignment_subject}
            onChange={(e) =>
            setFormData({ ...formData, [e.target.id]: e.target.value })
          }
        />
      </div>

      <input type="submit" className="btn btn-success" value="Post" />
    </form>
  );
};

export default CreateAssignment ;