import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function RenderingArrayOfObjects() {
  const data = [
    {
      "Name": "Nikita",
      "Marks": "98",
      "Phone": "123"
    },
    {
      "Name": "Pratiksha",
      "Marks": "96",
      "Phone": "127"
    },
    {
      "Name": "Muskan",
      "Marks": "97",
      "Phone": "163"
    },
    {
      "Name": "Nishi",
      "Marks": "95",
      "Phone": "193"
    },
    {
      "Name": "Himanshu",
      "Marks": "78",
      "Phone": "120"
    }
  ]
  const tableRows = data.map(
    (element) => {
      return (

        <tr>
          <td>{element.Name}</td>
          <td>{element.Marks}</td>
          <td>{element.Phone}</td>
        </tr>

      )
    }
  )
  return (
    <div>

      <Table hover>
        <thead>
          <tr>
            <th> Name</th>
            <th>Marks</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </Table>

    </div>
  )
}
function App() {
  return (
    <div className="App">
      <div>
        <h2 style={{ color: 'green' }}>Mapping an Array of Objects into a Bootstrap Table.</h2>
        <h3>Rendering Array of Objects</h3>

        <br></br>
        <RenderingArrayOfObjects />

      </div>
    </div>
  );
}

export default App;
