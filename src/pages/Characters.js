import React from 'react';
import Card from 'react-bootstrap/Card';
import './Characters.css';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
class Characters extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            moreCharacters: ""
            
        }
    }

    componentDidMount() {
        this.functionCharacters(this.props.match.params.page);
    }

    findCharacters = () => {
        this.setState({
            isLoaded: false
        })
        this.functionCharacters()
    }

    

    functionCharacters(page = 1) {
        fetch("https://rickandmortyapi.com/api/character/?page=" + page)
        .then(res => res.json())
        .then(
            (results) => {

                console.log(results)
                
                this.setState({
                    isLoaded: true,
                    items: results.results,
                    moreCharacters: results.info.next
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
        const {error, isLoaded, items} = this.state;

        if(error) {
            return <div>Error: {error}</div>;

        }else if (!isLoaded) {
            return <div>Loading...</div>
        }else {
            return (
                <div>
                    
                    <div className="cardId">
                        {
                            items.map((item) => (
                                // <div>
                                // <img src={item.image} alt="character"/>
                                // <p>{item.name}</p>
                                // </div>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>{item.status}</Card.Text>
                                        <Card.Text>{item.species}</Card.Text>
                                        <Card.Text>{item.location.name}</Card.Text>
                                    
                                    </Card.Body>
                                </Card>
                            ))
                        }
                        
                        
                        
                    </div>
                    <div className="button">    
                        <Link to={"/characters/" + (parseInt(this.props.match.params.page ?? 1) + 1)}><Button>Next</Button></Link>
                        <Link to={"/characters/" + (parseInt(this.props.match.params.page ?? 1) - 1)}><Button>Next</Button></Link>
                        
                    </div>
                </div>
            )
        }
    }


}

export default Characters