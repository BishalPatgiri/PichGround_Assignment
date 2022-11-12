import { inputFormat } from "./Todo"

interface input{
  label:string,
  todoData:inputFormat[],
  handleToggle:(id:number,inpu:boolean)=>void,
  handleDelete:(id:number)=>void
}

export const TodoList = ({label,todoData,handleToggle,handleDelete}:input) => {
  return (
    <div style={{fontFamily:"San Sarif",width:"70%",margin:"auto",marginTop:"20px",backgroundColor:"lightgrey",padding:"20px 0"}}>
      <h1 style={{fontFamily:"San Sarif"}}>{label}</h1>
      <div style={{display:"flex",justifyContent:"space-between",width:"90%",margin:"auto",backgroundColor:"white",padding:"15px",marginTop:"10px"}}>
           <h2 style={{width:"25%"}}>Task</h2>
           <h2 style={{width:"25%"}}>Status</h2>
           <h2 style={{marginLeft:"30px",width:"25%"}}>Edit</h2>
           <h2 style={{width:"25%"}}>Delete</h2>
      </div>
      {
        todoData.length>0 && todoData.map(ele=>(
          <div style={{display:"flex",justifyContent:"space-between",width:"90%",margin:"auto",backgroundColor:"white",padding:"15px",marginTop:"10px"}} key={ele._id}>
           <h3 style={{textDecoration:ele.status?"line-through":"none",width:"25%"}}>{ele.name}</h3>
           <h3 style={{width:"25%"}}>{ele.status?("Completed"):("Not Completed")}</h3>
           <button data-testid="toggle" style={{cursor:"pointer",width:"25%",padding:"12px 10px",color:"white",backgroundColor:"yellowgreen",border:"0",borderRadius:"6px",marginLeft:"10px"}} onClick={()=>handleToggle(ele._id,ele.status)}>Toggle</button>
           <button data-testid="delete" style={{cursor:"pointer",width:"25%",padding:"12px 10px",color:"white",backgroundColor:"red",border:"0",borderRadius:"5px",marginLeft:"10px"}} onClick={()=>handleDelete(ele._id)}>Delete</button>
          </div>
        ))
      }
      {
        todoData.length===0&&(
          <h2 style={{fontFamily:"San Sarif",marginTop:"20px"}}>No todos available...</h2>
        )
      }
    </div>
  )
}
