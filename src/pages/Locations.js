import React from 'react';
import Card from 'react-bootstrap/Card';
import './Locations.css';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
class Locations extends React.Component {
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
        this.functionLocations(this.props.match.params.page);
    }

    findCharacters = () => {
        this.setState({
            isLoaded: false
        })
        this.functionLocations()
    }

    

    functionLocations(page = 1) {
        fetch("https://rickandmortyapi.com/api/location/?page=" + page)
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
                                    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/61uBryXZTXL._AC_SX522_.jpg" />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>{item.type}</Card.Text>
                                        <Card.Text>{item.dimension}</Card.Text>
                                        
                                    
                                    </Card.Body>
                                </Card>
                            ))
                        }
                        
                        
                        
                    </div>
                    <div className="button">    
                        <Link to={"/locations/" + (parseInt(this.props.match.params.page ?? 1) + 1)}><Button>Next</Button></Link>
                        
                        
                    </div>
                </div>
            )
        }
    }


}

export default Locations