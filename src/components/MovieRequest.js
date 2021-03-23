import React from 'react';
import {Container,InputGroup,FormControl} from 'react-bootstrap';

const MovieRequest = (props) => {
    return (
        <>
        <Container>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Keywoard..."
                        aria-describedby="basic-addon2"
                        value={props.value}
                        onChange={e=>props.setKeyword(e.target.value)} />
                </InputGroup>
        </Container>
        </>
    )
}

export default MovieRequest