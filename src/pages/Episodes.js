import React from 'react';



class Episodes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            item: []
        }
    }

    componentDidMount() {
        this.functionEpisode();
        
    }

    findEpisode = () => {
        this.setState({
            isLoaded: false
        })
        this.functionEpsiode()
        
    }

    

    functionEpisode() {
        fetch("https://rickandmortyapi.com/api/episode/")
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
                                <img src="https://cdn.shopify.com/s/files/1/0191/7850/products/RICKMORTY_50_-_COVER_A_SOLICIT_WEB_1024x1024.jpg?v=1571438544" width="200"  alt="character"/>
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

export default Episodes