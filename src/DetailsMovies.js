import React  from 'react';
import { Button, Modal, ListGroup, ListGroupItem } from 'react-bootstrap';
const DetailsMovies = ({ show, handleClose , detailMovies}) => {
    return (
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Detail Movie </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><strong>Year</strong>    : {detailMovies.Year}</ListGroupItem>
                    <ListGroupItem><strong>Type</strong>    : {detailMovies.Type}</ListGroupItem>
                    <ListGroupItem><strong>Released</strong>  : {detailMovies.Released}</ListGroupItem>
                    <ListGroupItem><strong>Runtime</strong>  : {detailMovies.Runtime}</ListGroupItem>
                    <ListGroupItem><strong>Genre</strong>  : {detailMovies.Genre}</ListGroupItem>
                    <ListGroupItem><strong>Director</strong>  : {detailMovies.Director}</ListGroupItem>
                    <ListGroupItem><strong>Actors</strong>  : {detailMovies.Actors}</ListGroupItem>
                    <ListGroupItem><strong>Plot</strong>  : {detailMovies.Plot}</ListGroupItem>
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default DetailsMovies