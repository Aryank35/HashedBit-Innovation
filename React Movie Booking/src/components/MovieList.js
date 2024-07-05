import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './MovieList.css';

const movies = [
  { id: 1, name: 'Movie 1', image: '/images/movie1.jpg' },
  { id: 2, name: 'Movie 2', image: '/images/movie2.jpg' },
  { id: 2, name: 'Movie 3', image: '/images/movie3.jpg' },
  { id: 2, name: 'Movie 4', image: '/images/movie4.jpg' },
  { id: 1, name: 'Movie 5', image: '/images/movie5.jpg' },
  { id: 2, name: 'Movie 6', image: '/images/movie6.jpg' },
  { id: 2, name: 'Movie 7', image: '/images/movie7.jpg' },
  { id: 2, name: 'Movie 8', image: '/images/movie8.jpg' },
  { id: 1, name: 'Movie 9', image: '/images/movie9.jpg' },
  { id: 2, name: 'Movie 10', image: '/images/movie10.jpg' },
  { id: 2, name: 'Movie 11', image: '/images/movie11.jpg' },
  { id: 2, name: 'Movie 12', image: '/images/movie12.jpg' },
  // Add more movies here
];

function MovieList() {
  return (
    <Container className="movie-list py-5 px-5">
      <Row>
        {movies.map(movie => (
          <Col key={movie.id} md={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={movie.image} />
              <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Link to={`/movie/${movie.id}`} className="btn btn-primary">View Details</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MovieList;
