import React from 'react';
import { Table } from 'react-bootstrap';

const TableComponent = (props) => (
    <Table responsive striped bordered condensed hover>
    <thead>
        <tr>
            <th>id</th>
            <th>AppVersion</th>
            <th>Connectivity</th>
            <th>Device</th>
            <th>OSVersion</th>
            <th>Platform</th>
            <th>StartTime</th>
            <th>SessionIndex</th>
            <th>UserId</th>
            <th>UserIndex</th>
        </tr>
    </thead>
    <tbody>
        {props.sessions.map((session, i) =>
        <tr key={i}>
            <td>{session.Id}</td>
            <td>{session.AppVersion}</td>
            <td>{session.Connectivity}</td>
            <td>{session.Device}</td>
            <td>{session.OSVersion}</td>
            <td>{session.Platform}</td>
            <td>{session.StartTime}</td>
            <td>{session.SessionIndex}</td>
            <td>{session.UserId}</td>
            <td>{session.UserIndex}</td>
        </tr>
        )}
    </tbody>
</Table>
    );
    

export default TableComponent;