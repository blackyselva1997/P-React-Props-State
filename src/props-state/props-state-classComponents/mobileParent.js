import { Component } from "react";

class MobileParent extends Component {
  constructor() {
    super();
    this.state = {
      Mobiles: [
        {
          id: "001",
          name: "Oneplus11",
          price: 56999,
          isPurchased: true,
        },
        {
          id: "002",
          name: "Vivo Y100",
          price: 24999,
          isPurchased: false,
        },
        {
          id: "003",
          name: "Redmi 10",
          price: 56999,
          isPurchased: true,
        },
        {
          id: "004",
          name: "Iphone 13",
          price: 62990,
          isPurchased: false,
        },
        {
          id: "005",
          name: "Nokia",
          price: 12000,
          isPurchased: true,
        },
        {
          id: "006",
          name: "Poco M4",
          price: 13999,
          isPurchased: true,
        },
      ],
    }
    this.name = this.state.Mobiles  
  }
 


  Acc = () => {
    this.setState(
      this.state.Mobiles.sort((a, b) => {
        let lc = a.name.toLowerCase(),
          uc = b.name.toLowerCase();
        if (lc < uc) return -1;
        if (lc > uc) return 1;
        return 0;
      })
    );
  };

  Acc1 = () => {
    this.setState(
      this.state.Mobiles.sort((a, b) => {
        let lc = a.name.toLowerCase(),
          uc = b.name.toLowerCase();
        if (lc > uc) return -1;
        if (lc < uc) return 1;
        return 0;
      })
    );
  };

  Price = () => {
    this.setState(this.state.Mobiles.sort((a, b) => a.price - b.price));
  };

  Price1 = () => {
    this.setState(this.state.Mobiles.sort((a, b) => b.price - a.price));
  };

  Filter = () => {
    this.setState({Mobiles: this.state.Mobiles.filter(value => value.isPurchased)});
  };

  Filter1 = () => {
    this.setState({Mobiles: [...this.name]});
  }

  render() {
    return (
      <div>
        <button onClick={() => this.Acc()}>Accending</button>
        <button onClick={() => this.Acc1()}>Decending</button>
        <button onClick={() => this.Price()}>Low to High</button>
        <button onClick={() => this.Price1()}>High to Low</button>
        <button onClick={() => this.Filter()}>Filter</button>
        <button onClick={() => this.Filter1()}>Filter None</button>

        {this.state.Mobiles.map((value, index) => {
          return (
            <h1 key={index}>
              {value.name}: {value.price}
            </h1>
          );
        })}
      </div>
    );
  }
}

export default MobileParent;
