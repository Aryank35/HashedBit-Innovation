import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import './MovieDetails.css';

const movies = [
  { id: 9, name: 'Kalki 2898 – A.D', description: 'Kalki 2898 – A.D is an Indian epic mythological-science fiction dystopian film written and directed by Nag Ashwin and produced by C. Aswani Dutt of Vyjayanthi Movies. The film stars an ensemble cast featuring Prabhas, Amitabh Bachchan, Kamal Haasan, Deepika Padukone, and Disha Patani.', image: '/images/movie15.jpg' },
  { id: 2, name: 'Mystic Falls', description: 'Mystic Falls is a suspense thriller that will keep you on the edge of your seat.', image: '/images/movie15.jpg' },
  { id: 3, name: 'Galactic Wars', description: 'Galactic Wars depicts an interstellar battle for survival.', image: '/images/movie15.jpg' },
  { id: 1, name: 'The Lost Kingdom', description: 'The Lost Kingdom unveils the secrets of a forgotten world.', image: '/images/movie15.jpg' },
  { id: 5, name: 'Epic Journey', description: 'Epic Journey follows the adventurous quest of a young hero.', image: '/images/movie15.jpg' },
  { id: 6, name: 'Cyber Future', description: 'Cyber Future presents a futuristic society on the brink of collapse.', image: '/images/movie15.jpg' },
  { id: 7, name: 'Ancient Secrets', description: 'Ancient Secrets reveals the mysteries of an ancient civilization.', image: '/images/movie15.jpg' },
  { id: 8, name: 'Warriors of Light', description: 'Warriors of Light chronicles the fight against dark forces.', image: '/images/movie15.jpg' },
  { id: 4, name: 'Dark Realm', description: 'Dark Realm takes you to a realm of darkness and intrigue.', image: '/images/movie15.jpg' },
  { id: 10, name: 'Mystery Island', description: 'Mystery Island is set on an island filled with hidden dangers.', image: '/images/movie15.jpg' },
  { id: 11, name: 'Forgotten Heroes', description: 'Forgotten Heroes celebrates the bravery of unsung heroes.', image: '/images/movie15.jpg' },
  { id: 12, name: 'Legend of the Phoenix', description: 'Legend of the Phoenix tells the tale of a legendary bird\'s rise.', image: '/images/movie15.jpg' },
];

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));

  return (
    <Container className="movie-details mt-5">
      <Card className="movie-details-card">
        <Card.Img variant="top" src={movie.image} className="movie-image" />
        <Card.Body>
          <Card.Title>{movie.name}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Link to={`/book/${movie.id}`} className="btn btn-primary">Book Seat</Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MovieDetails;
