import React, { Component, PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Router, Route, Link, browserHistory } from 'react-router';

export default class FacebookUsersList extends Component {
  componentDidMount () {
    this.props.loadData();
  }
  colFormatter = (cell, row) => {
    return (
      <Link to={`/facebook/users/${cell}/view`}>
        {cell}
      </Link>
    );
  }
  render () {
    let threadList = this.props.users.users ? this.props.users.users : [];

    let table = threadList.map(thread=><div style={{ backgroundColor: 'grey', padding: '10px' }} key={thread.id}>{thread.thread_id}<br/>{thread.name}<hr/></div>);
    return (<div>
        <button onClick={this.props.loadData}>Reload Data</button>
        <hr/>
        <BootstrapTable data={threadList} striped={true} hover={true} pagination>
          <TableHeaderColumn dataField="id" width="60" isKey={true} dataSort={true}>ID</TableHeaderColumn>
          <TableHeaderColumn dataField="facebook_id" width="170" dataSort={true} dataFormat={this.colFormatter}>Facebook ID</TableHeaderColumn>
          <TableHeaderColumn dataField="full_name" dataSort={true}>First Name</TableHeaderColumn>
        </BootstrapTable>


    </div>
    );
  }
}
