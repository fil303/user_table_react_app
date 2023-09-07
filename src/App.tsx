// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AddUserModel from './component/models/userTableModel/AddUserModelComponent'
import UpdateUserModel from './component/models/userTableModel/UpdateUserModelComponent'
import DeleteUserModel from './component/models/userTableModel/DeleteUserModelComponent'
import UserTable from './component/UserTableComponent'

function App() {
  //const [count, setCount] = useState(0)

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
                  <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
                  <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete</span></a>						
                </div>
              </div>
            </div>
            <UserTable />
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
