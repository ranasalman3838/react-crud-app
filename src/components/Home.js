import React from 'react';
import { Fragment } from 'react';
import {Button,Table} from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css";
import Employee from './Employee';
import {useNavigate} from 'react-router-dom';


function Home(){
    let history = useNavigate();
    const handleDelete = (id) =>{
        var index = Employee.map(function(e){
            return e.id
        }).indexOf(id);
        Employee.splice(index, 1);
        history('/')
    }
    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
                <Table className="table stripped bordered hover"  size='sm'>
                    <thead>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        {
                            Employee && Employee.length >0
                            ?
                            Employee.map((item) => {
                                return(
                                    <tr>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.age}
                                        </td>
                                        <td>
                                            <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                                            &nbsp;
                                            <Button onClick={() => alert(item.id)}>EDIT</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "no data available"
                        }
                    </tbody>

                </Table>
            </div>
        </Fragment>
    )
}
export default Home;