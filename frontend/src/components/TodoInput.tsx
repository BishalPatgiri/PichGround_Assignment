import { useState } from "react"

interface inputData{
    handleAdd:(title:string)=>void
}

export const TodoInput = ({handleAdd}:inputData) => {
const [text,setText]=useState<string>("")

const handleChange:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
setText(e.target.value)
}

  return (
    <div style={{width:"25%",margin:"auto",backgroundColor:"lightgrey",borderRadius:"15px",padding:"20px",marginTop:"20px"}}>
        <input data-testid="input" style={{height:"40px",width:"80%",border:"0",outline:"0",paddingLeft:"10px"}} value={text} type="text" placeholder='Write Todos' onChange={handleChange} />
        <button style={{cursor:"pointer",padding:"12px 10px",color:"white",backgroundColor:"orangered",border:"0",borderRadius:"6px",marginLeft:"10px"}} onClick={()=>handleAdd(text)}>ADD</button>
    </div>
  )
}
