import { render, screen } from '@testing-library/react';
import axios from 'axios';
import App from '../App';

test('renders Todo component', () => {
  render(<App />);
  const linkElement = screen.getByText("Todo App");
  expect(linkElement).toBeInTheDocument();
});

test('Checking All the components are there or not', () => {
  render(<App />);
  const linkElement1 = screen.getByText("Todo App");
  expect(linkElement1).toBeInTheDocument();

  const linkElement2 = screen.getByText("Todos");
  expect(linkElement2).toBeInTheDocument();

  const inputElement = screen.getAllByTestId("input");
  expect(inputElement).toBeTruthy();

});

describe("Checking all the buttons are there or not", () => {
  test('Checking ADD button', () => {
    render(<App />);
    const linkElement3 = screen.getByText("ADD");
    expect(linkElement3).toBeInTheDocument();
  });

  test('Checking Delete button', () => {
    render(<App />);
    const linkElement3 = screen.getByText("Delete");
    expect(linkElement3).toBeInTheDocument();
  });
});

describe("Checking all the api end points", () => {
test("/todo-item/list", async () => {
  axios.post("https://fierce-eyrie-70853.herokuapp.com/todo-item/list")
  .then(res=>{
    expect(res.data).toBe(true)
  })
});

test("/todo-item/create", async () => {
  axios.post("https://fierce-eyrie-70853.herokuapp.com/todo-item/create",{name:"Learn Somthing"})
  .then(res=>{
    expect(res.data).toBe(true)
  })
});

test("/todo-item/remove", async () => {
  axios.post("https://fierce-eyrie-70853.herokuapp.com/todo-item/remove",{id:"Qweedhh55as5"})
  .then(res=>{
    expect(res.data).toBe(true)
  })
});

test("/todo-item/mark-as-done", async () => {
  axios.post("https://fierce-eyrie-70853.herokuapp.com/todo-item/mark-as-done",{id:"Qweedhh55as5"})
  .then(res=>{
    expect(res.data).toBe(true)
  })
});


test("/todo-item/mark-as-not-done", async () => {
  axios.post("https://fierce-eyrie-70853.herokuapp.com/todo-item/mark-as-not-done",{id:"Qweedhh55as5"})
  .then(res=>{
    expect(res.data).toBe(true)
  })
});
})
