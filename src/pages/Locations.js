import React from 'react';



class Locations extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            item: []
        }
    }

    componentDidMount() {
        this.functionLocation();
    }

    findLocation = () => {
        this.setState({
            isLoaded: false
        })
        this.functionCharacters()
    }

    functionLocation() {
        fetch("https://rickandmortyapi.com/api/location/")
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
                                <img src="data:image/jpeg;base64,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" width="200" alt="character"/>
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

export default Locations