// ----------------------------------------------------
// overall pretty dang good
// I haven't actully run this, so it might have bugs

// notes:
// only have one react component per file
// cleaner to only import default from react, then access `Component` via it (opinion)
// if your component doesn't have state or lifecycle hooks, make it a pure function (App)

// you can simplify the state by assuming:
// data === undefined means loading
// data = [] or [a, b, c...] means loaded
// note that empty array is truthy in js
// placeholder value was always 'loading', so better to put into the render
// (you need a slightly different approach if you want to handle fetch failures, needs some thinking per app)

// you can get rid of the constructor and just declare class values
// you do need to make sure state at least has a value of {} so that `const { data } = this.state;` doesn't crash
// move the columns declaration out of render so your app doesn't need to recreate the array each time

// I really like the free version of https://www.ag-grid.com/best-react-data-grid/ (a table component)

// I also like to import npm library css files in index.js
// I also like to import normalise.css (import 'normalize.css/normalize.css';)

// and to add this to index.css:
// * { box-sizing: border-box;}
// makes css much more sane/consistent in my opinion
// ----------------------------------------------------

import React from 'react';

// components
import ReactTable from 'react-table';

// css
import './App.css';
import 'react-table/react-table.css';

class SubmissionTable extends React.Component {
  state = {};

  columns = [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'filename',
      accessor: 'input_file',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Submitted',
      accessor: 'created_at',
    },
  ];

  componentDidMount() {
    fetch('api/v1/submission_list/')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    return (
      <div className="SubmissionTable">
        {!data ? (
          <p>Loading</p>
        ) : (
          <ReactTable
            data={data}
            columns={this.columns}
            defaultPageSize={3}
            pageSizeOptions={[3, 6]}
          />
        )}
      </div>
    );
  }
}

const App = () => (
  <div className="App">
    <SubmissionTable />
  </div>
);

export default App;
