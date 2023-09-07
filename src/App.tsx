// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
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
              <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <form>
                      <div className="modal-header">						
                        <h4 className="modal-title">Add Employee</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      </div>
                      <div className="modal-body">					
                        <div className="form-group">
                          <label>Name</label>
                          <input type="text" className="form-control" required />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input type="email" className="form-control" required />
                        </div>
                        <div className="form-group">
                          <label>Address</label>
                          <textarea className="form-control" required></textarea>
                        </div>
                        <div className="form-group">
                          <label>Phone</label>
                          <input type="text" className="form-control" required />
                        </div>					
                      </div>
                      <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                        <input type="submit" className="btn btn-success" value="Add" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>


              {/* <!-- Edit Modal HTML --> */}
              <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <form>
                      <div className="modal-header">						
                        <h4 className="modal-title">Edit Employee</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      </div>
                      <div className="modal-body">					
                        <div className="form-group">
                          <label>Name</label>
                          <input type="text" className="form-control" required />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input type="email" className="form-control" required />
                        </div>
                        <div className="form-group">
                          <label>Address</label>
                          <textarea className="form-control" required></textarea>
                        </div>
                        <div className="form-group">
                          <label>Phone</label>
                          <input type="text" className="form-control" required />
                        </div>					
                      </div>
                      <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                        <input type="submit" className="btn btn-info" value="Save" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* <!-- Delete Modal HTML --> */}
              <div id="deleteEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <form>
                      <div className="modal-header">						
                        <h4 className="modal-title">Delete Employee</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      </div>
                      <div className="modal-body">					
                        <p>Are you sure you want to delete these Records?</p>
                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                      </div>
                      <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                        <input type="submit" className="btn btn-danger" value="Delete" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
     
    </>
  )
}

export default App
