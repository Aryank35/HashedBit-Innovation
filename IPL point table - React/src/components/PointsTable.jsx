
import React, { useEffect, useState } from "react";
import { Container, Table, Spinner, Alert, Card } from "react-bootstrap";
import './PointsTable.css'; 

const PointsTable = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    key: "NRR",
    direction: "descending",
  });

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTeams(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const sortedTeams = React.useMemo(() => {
    let sortableTeams = [...teams];
    if (sortConfig !== null) {
      sortableTeams.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableTeams;
  }, [teams, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Alert variant="danger">Error: {error.message}</Alert>
      </Container>
    );
  }

  return (
    <div className="bg-light full-height">
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card className="shadow p-4" style={{ width: '100%', maxWidth: '900px' }}>
          <Card.Body>
            <h1 className="text-center mb-4">IPL 2022 Points Table</h1>
            <Table bordered hover>
              <thead className="thead-dark">
                <tr>
                  <th>Position</th>
                  <th onClick={() => requestSort("Team")}>Team</th>
                  <th onClick={() => requestSort("Matches")}>Matches Played</th>
                  <th onClick={() => requestSort("Won")}>Won</th>
                  <th onClick={() => requestSort("Lost")}>Lost</th>
                  <th onClick={() => requestSort("Points")}>Points</th>
                  <th onClick={() => requestSort("NRR")}>NRR</th>
                </tr>
              </thead>
              <tbody>
                {sortedTeams.map((team, index) => (
                  <tr key={team.id}>
                    <td>{index + 1}</td>
                    <td>{team.Team}</td>
                    <td>{team.Matches}</td>
                    <td>{team.Won}</td>
                    <td>{team.Lost}</td>
                    <td>{team.Points}</td>
                    <td>{team.NRR}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default PointsTable;
