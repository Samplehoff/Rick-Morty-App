import React from 'react';



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
                    
                    <div className="cardId">
                        {
                            item.map((item) => (
                                <div>
                                <img src={item.image} alt="character"/>
                                <p>{item.name}</p>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            )
        }
    }


}

export default Characters