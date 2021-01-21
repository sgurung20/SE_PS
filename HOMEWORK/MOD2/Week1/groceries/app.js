class App extends React.Component {
    state = { // state grocery list
        groceries,
        item: "",
        brand: "",
        units: ""
    }
    handleChange = (event) => {
        this.setState({ //collects user input value
            [event.target.id]: event.target.value
        })
    }
    handleSubmit = (event) => { // it handle submit 
        event.preventDefault() //prevents keep refreshing page
        
        const item = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: 1,
            isPurchased: false
        }
        this.setState({ //rerenders new groceries array
            groceries: [
                item, ...this.state.groceries
            ],
            item: "",
            brand: "",
            units: ""
        })
    }
    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <input id="item" onChange={this.handleChange} type='text' value={this.state.item}></input>
                <input id="brand" onChange={this.handleChange} type='text' value={this.state.brand}></input>
                <input id="units" onChange={this.handleChange} type='text' value={this.state.units}></input>
                <button>Submit</button>
            </form>
            <div>
                <ul>
                    {
                        this.state.groceries.map( //map function will iterate each item in groceries array
                            (grocery) => !grocery.isPurchased
                            ? <li>
                                {grocery.item}</li>
                            : "")
                    }
                </ul>
            </div>
        </div>)
    }
}
const groceries = [ //groceries array
    {
        item: 'Water',
        brand: 'Poland Spring',
        units: '20 oz',
        quantity: 1,
        isPurchased: true
    }, {
        item: 'Chocolate',
        brand: 'M&M',
        units: '3 oz',
        quantity: 1,
        isPurchased: true
    }, {
        item: 'Wafer bar',
        brand: 'Kit kat',
        units: '8 oz',
        quantity: 1,
        isPurchased: true
    }
]
ReactDOM.render(<App/>, document.querySelector('.container'))
