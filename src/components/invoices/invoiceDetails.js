import React from "react"
const TaskList = (props) => {
  return (
    props.invoiceDetails.map((val, idx) => {
      let description = `description-${idx}`, totalhours = `totalhours-${idx}`, hourlyrate = `hourlyrate-${idx}`, totalamount = `totalamount-${idx}`
      return (
        <tr key={val.index}>
          <td>
            <textarea  name="description" data-id={idx} id={description} className="form-control " />
          </td>
          <td>
            <input type="text"  name="totalhours" id={totalhours} data-id={idx} className="form-control " />
          </td>
          <td>
            <input  type="text" name="hourlyrate" id={hourlyrate} data-id={idx} className="form-control"/>
          </td>
          <td>
          <input type="text"  name="totalamount" id={totalamount} data-id={idx} className="form-control " />
          </td>
          <td>
            {
            idx===0?<button onClick={()=>props.add()} type="button" className="btn btn-primary text-center"><i className="bi bi-plus-circle"></i></button>
            : <button className="btn btn-danger" onClick={(() => props.delete(val))} ><i className="bi bi-dash-circle"></i></button>
            }
          </td>
        </tr >
      )
    })
  )
}
export default TaskList