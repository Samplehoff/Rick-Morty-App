import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';


class Characters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            item: []
        }
    }

    componentDidMount() {
        this.functionCharacters();
    }

    findCharacters = () => {
        this.setState({
            isLoaded: false
        })
        this.functionCharacters()
    }

    functionCharacters() {
        fetch("https://rickandmortyapi.com/api/character/")
        .then(res => res.json())
        .then(
            (results) => {
                console.log(results)
                this.setState({
                    isLoaded: true,
                    item: results.results
                })
            },
            //this is here to handle errors from the component and api
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )
    }

    render() {
        const {error, isLoaded, item} = this.state;

        if(error) {
            return <div>Error: {error}</div>;

        }else if (!isLoaded) {
            return <div>Loading...</div>
        }else {
            return (
                <div>
                    Characters:
                    <div>
                        {
                            item.map((item) => (
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>{item.status}</ListGroupItem>
                                        <ListGroupItem>{item.species}</ListGroupItem>
                                        <ListGroupItem>{item.gender}</ListGroupItem>
                                        <ListGroupItem>{item.origin}</ListGroupItem>
                                        <ListGroupItem>{item.location}</ListGroupItem>
                                        <ListGroupItem>{item.episode}</ListGroupItem>
                                    </ListGroup>
                                    
                                </Card>
                                //<img src={item.image} alt="character"/>
                            ))
                        }
                        
                    </div>
                </div>
            )
        }
    }


}

export default Characters