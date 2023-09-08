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
