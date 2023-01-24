import React, { useState } from "react";
import Select from "react-select"


const status = [
    {label: 'Applied', value: "1"},
    {label: 'Interview', value: "2"},
    {label: 'Tech Test', value: "3"},
    {label: 'Interview Management', value: "4"},
    {label: 'Pool', value: "5"},
    {label: 'Hired', value: "6"},
]
const Candidates = () => {
    const [selectedStatus, setSelectedStatus ] = useState();
    const handleSelect = ({value}) => {
        setSelectedStatus(value)
    }
  return (
    <>
        <div className="container-fluid">
            <div className="container-lg">
                <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Job</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Linkdln</th>
                    <th scope="col">English</th>
                    <th scope="col">Resumen</th>
                    <th scope="col-10">Status</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>30/10/2022</td>
                        <td>developer backend</td>
                        <td>jorge</td>
                        <td>jorge@developer.dev</td>
                        <th>315665456</th>
                        <td>@jorgerxxx</td>
                        <td>Experto nativo</td>
                        <td><i class="fa-regular fa-circle-down"></i></td>
                        <td>
                            <Select options={status} onChange={handleSelect} />
                        </td>
                        <td>
                            {selectedStatus != null ? <i type="button" className="fa-regular fa-comment-dots" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            </i>  : ""}
                        </td>
                    </tr>
                    <tr>
                        <td>30/10/2022</td>
                        <td>developer front</td>
                        <td>felipe</td>
                        <td>felipe@developer.dev</td>
                        <th>311665456</th>
                        <td>@felipexxx</td>
                        <td>
                         Experto
                        </td>
                        <td><i class="fa-regular fa-circle-down"></i></td>
                        <td>
                            <Select options={status} onChange={handleSelect} />
                        </td>
                        <td>
                            {selectedStatus != null ? <i className="fa-regular fa-comment-dots"></i>  : ""}
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <textarea placeholder="Add the reasons why the candidate won't continue the process." cols="50" rows="5"></textarea>
                </div>
                <div className="modal-footer text-center">
                    <button type="button" className="btn btn-outline-dark btn-sm rounded-pill">Save</button>
                </div>
                </div>
            </div>
        </div>
    </>
  );
};
export default Candidates;
