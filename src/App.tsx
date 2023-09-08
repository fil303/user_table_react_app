// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AddUserModel from './component/models/userTableModel/AddUserModelComponent'
import UpdateUserModel from './component/models/userTableModel/UpdateUserModelComponent'
import DeleteUserModel from './component/models/userTableModel/DeleteUserModelComponent'
import UserTable from './component/UserTableComponent'
import ButtonA from './component/buttons/ButtonComponent'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useState, useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const memoizedFunction = useCallback(() => {
    const countNumber:number = count
    alert('Function called '+countNumber+" time")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleClick = () => {
    // Update the clickCount state when the button is clicked
    setCount(count + 1);
  };
  return (
    <>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Manage <b>Employees</b></h2>
                </div>
                <div className="col-sm-6">
                  <ButtonA
                    href="#addEmployeeModal"
                    title="Add New Employee" 
                    color="btn-success"
                    icon={(<i className="material-icons">&#xE147;</i>)}
                  />
                  <ButtonA
                    href="#deleteEmployeeModal"
                    title="Delete"
                    color="btn-danger"
                    icon={(<i className="material-icons">&#xE15C;</i>)}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Count {count}</button>
            <button onClick={memoizedFunction}>Click me</button>
            <Router>
              <Routes>
                <Route path="/" element={<UserTable />} />
                <Route path="/test" element={(<div> <Link to="/">Home</Link>This is test message</div>)} />
              </Routes>
            </Router>
            
          </div>
        </div> 
      </div>        
      {/* <!-- Add Modal HTML --> */}
      <AddUserModel />
      {/* <!-- Edit Modal HTML --> */}
      <UpdateUserModel />
      {/* <!-- Delete Modal HTML --> */}
      <DeleteUserModel />
    </>
  )
}

export default App
