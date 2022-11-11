
import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'

export interface inputFormat{
    _id:number,
    name:string,
    status:boolean,
    
}

export const Todo = () => {

    const [data,setData]=useState<inputFormat[]>([])

    const getData=()=>{
        axios.post("https://fierce-eyrie-70853.herokuapp.com/todo-item/list").then((res: AxiosResponse<inputFormat[]>)=>setData(res.data))
    }
    useEffect(()=>{
        getData()

    },[])

    const handleAdd=(title:string)=>{
        if(title){
            const payload={
                name:title,
            }
            axios.post("https://fierce-eyrie-70853.herokuapp.com/todo-item/create",payload).then(res=>getData()).catch(e=>console.log(e))
        }
    }

    const handleToggle=(id:number,inpu:boolean)=>{
        
        if(id&&inpu===false){
            axios.post(`https://fierce-eyrie-70853.herokuapp.com/todo-item/mark-as-done`,{id:id}).then(res=>getData()).catch(e=>console.log(e))
        }
        else if(id&&inpu===true){
            axios.post(`https://fierce-eyrie-70853.herokuapp.com/todo-item/mark-as-not-done`,{id:id}).then(res=>getData()).catch(e=>console.log(e))
        }
    }

    const handleDelete=(id:number)=>{
        if(id){
            const payload={
                id:id,
            }
            axios.post(`https://fierce-eyrie-70853.herokuapp.com/todo-item/remove`,payload).then(res=>getData()).catch(e=>console.log(e))
        }
    }
  return (
    <div>
        <h1 style={{fontFamily:"San Sarif",marginTop:"20px"}}>Todo App</h1>
        <TodoInput handleAdd={handleAdd}/>
        <TodoList label={"Todos"} handleDelete={handleDelete} todoData={data} handleToggle={handleToggle}/>
    </div>
  )
}
