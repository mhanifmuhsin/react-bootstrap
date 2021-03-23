import React from 'react'
import {
    Card, Container, ListGroup, ListGroupItem,
    Row, Col, Alert
} from 'react-bootstrap';
import DetailsMovies from '../components/DetailsMovies';

const ListMovie = ({movies,handleShow,show, handleClose, imdbKey, detailMovies}) => {
    return (
        <>
            <Container>
                <Row lg={4}>
                    {movies.length > 0 ? (
                        movies.map((movie) => <Col md='auto' key={movie.imdbID}>
                            <Card style={{ width: '15rem' }} >
                                <Card.Img variant="top" src={movie.Poster} />
                                <Card.Body>
                                    <Card.Title>{movie.Title}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem><strong>Year</strong>    : {movie.Year}</ListGroupItem>
                                    <ListGroupItem><strong>Type</strong>    : {movie.Type}</ListGroupItem>
                                </ListGroup>
                                <Card.Body>

                                    <Card.Link onClick={handleShow} data-imdbid={movie.imdbID}>View Detail</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    ) : (
                        <Container>
                            <Alert variant="warning">
                                Please Insert Keyword !
                        </Alert>
                        </Container>
                    )}
                </Row>
            </Container>
            <DetailsMovies show={show} handleClose={handleClose} keyImdb={imdbKey} detailMovies={detailMovies} />
        </>
    )
}

export default ListMovie
