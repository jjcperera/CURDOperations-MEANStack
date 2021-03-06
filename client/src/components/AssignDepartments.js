import React, { Component } from 'react';
import INLinePaint from './style/AssignDepartments.css';
import Axios from 'axios';


class AssignDepartments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctors: [],
            nurse: [],
            MLT: [],
            pharmist: [],
            generalStaff: [],
            departments: [],
            selectedValue: "",
            selectedValues: ""
        }

        this.setValue = this.setValue.bind(this);
        this.setValues = this.setValues.bind(this);

    }

    setValue(e) {
        this.setState({ selectedValue: e.target.value });
    }

    setValues(e) {
        this.setState({ selectedValues: e.target.value });
    }
    getData() {
        console.log(this.state.selectedValue);
        console.log(this.state.selectedValues);


    }

    componentWillMount() {
        Axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');

        Axios.get('http://localhost:8081/employee').then(function (data) {
            console.log(data);
            this.setState({ doctors: data.data.data });
        }.bind(this))

        Axios.get('http://localhost:8081/employee').then(function (data) {
            this.setState({ nurse: data.data.data });
        }.bind(this))

        Axios.get('http://localhost:8081/employee').then(function (data) {
            this.setState({ MLT: data.data.data });
        }.bind(this))

        Axios.get('http://localhost:8081/employee').then(function (data) {
            this.setState({ generalStaff: data.data.data });
        }.bind(this))

        Axios.get('http://localhost:8081/employee').then(function (data) {
            this.setState({ pharmist: data.data.data });
        }.bind(this))




    }
    render() {

        let doctorList = this.state.doctors.map(function (item, i) {
            return <option key={i}><a href="#">{item.fname + " " + item.lname}</a></option>
        }.bind(this))


        let nurseList = this.state.nurse.map(function (item, i) {
            return <option key={i}><a href="#">{item.fname + " " + item.lname}</a></option>
        }.bind(this))

        let mitList = this.state.MLT.map(function (item, i) {
            return <option key={i}><a href="#">{item.fname + " " + item.lname}</a></option>
        }.bind(this))

        let generalList = this.state.generalStaff.map(function (item, i) {
            return <option key={i}><a href="#">{item.fname + " " + item.lname}</a></option>
        }.bind(this))

        let pharnacylList = this.state.pharmist.map(function (item, i) {
            return <option key={i}><a href="#">{item.fname + " " + item.lname}</a></option>
        }.bind(this))


        return (
            <div className="container">
                <div>
                    <div className="inline-block col-sm-5">

                        <h3>Assign Employee for Departments</h3>
                        <label>Doctor</label>
                        <select className="browser-default col-sm-2" onChange={this.setValue}>
                            <option active >Default</option>
                            {doctorList}
                        </select>
                        <br /><br /><br />
                        <label>Nurse</label>
                        <select className="browser-default col-sm-2" onChange={this.setValue}>
                            <option active >Default</option>

                            {nurseList}
                        </select>
                        <br /><br /><br />

                        <label>MLT</label>
                        <select className="browser-default col-sm-2" onChange={this.setValue}>
                            <option active >Default</option>

                            {mitList}
                        </select>

                        <br /><br /><br />
                        <label>General staff</label>
                        <select className="browser-default col-sm-2" onChange={this.setValue}>
                            <option active >Default</option>

                            {generalList}
                        </select>

                        <br /><br /><br />
                        <label>Pharmacist</label>
                        <select className="browser-default col-sm-2" onChange={this.setValue}>
                            <option active >Default</option>
                            {pharnacylList}
                        </select><br /><br /><br /><br />

                        <label>Departments</label>
                        <select className="browser-default col-sm-2" onChange={this.setValues}>
                            <option active >Default</option>

                            <option>OPD</option>
                            <option>HR</option>
                            <option>Laboratory</option>

                        </select><br /><br /><br /><br /><br />
                        <button type="button" class="btn btn-success col-sm-4 " onClick={this.getData.bind(this)}>Assign</button>

                    </div>
                    {/* <div className="inline-block col-sm-4">
                        <select className="browser-default col-sm-2" onChange={this.setValues}>
                            <option active >Default</option>

                            <option>OPD</option>
                            <option>HR</option>
                            <option>Laboratory</option>

                        </select><br /><br /><br /><br /><br />
                        <button type="button" class="btn btn-success col-sm-4 " onClick={this.getData.bind(this)}>Assign</button>

                    </div> */}

                </div>

            </div>
        );
    }
}

export default AssignDepartments;
