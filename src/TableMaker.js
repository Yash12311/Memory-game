import React from "react";
export default class TableMaker extends React.Component {
  MainList = [];
  pointer = 0;
  points = 0;
  constructor(props) {
    super(props);
    this.state = {
      value1: "",
      value2: "",
      input: "",
      list: [],
      selected: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.func = this.func.bind(this);
    this.listk = [
      {
        name: "Burger",
        source: "Burger.jpg",
        key: 1
      },
      {
        name: "Maggi",
        source: "Maggi.png",
        key: 2
      },
      {
        name: "Fries",
        source: "Fries.jpg",
        key: 3
      },
      {
        name: "Pizza",
        source: "Pizza.jpg",
        key: 4
      },
      {
        name: "Honey",
        source: "Honey.jpg",
        key: 5
      },
      {
        name: "Mango",
        source: "Mango.png",
        key: 6
      },
      {
        name: "Samosa",
        source: "Samosa.jpg",
        key: 7
      },
      {
        name: "Panipuri",
        source: "Panipuri.jpg",
        key: 8
      }
    ];
    this.shuffle = this.shuffle.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleChange(event) {
    this.setState({
      selected: false
    });
    this.points = 0;
    let p;
    if (this.state.input === "" || parseInt(this.state.input, 10) > 8) p = 0;
    else p = parseInt(this.state.input, 10);
    console.log(p);
    this.pointer = p;
    let mySet = [1, 2, 3, 4, 5, 6, 7, 8];
    mySet = this.shuffle(mySet);
    mySet.length = p;
    let valList = [];
    mySet.forEach(function (value) {
      valList.push(value);
      valList.push(value);
    });
    valList = this.shuffle(valList);
    let k = 0;
    this.MainList = valList;
    for (let i = 0; i < 2; i++) {
      let listh = [];
      for (let j = 0; j < p; j++) {
        let f = k;
        listh.push(
          <td>
            <img
              id={k.toString()}
              key={k.toString()}
              src="Pattern.jpg"
              onClick={() => this.func(f.toString())}
              alt="1"
            />
          </td>
        );
        k++;
      }
      this.state.list.push(<tr>{listh}</tr>);
    }
    this.setState({
      input: ""
    });
    document.getElementById("play").disable = true;
  }
  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
  func(btn) {
    if (
      document.getElementById(btn.toString()).src ===
      "https://qgunb.csb.app/Blank.jpg"
    ) {
      console.log("no");
    } else {
      if (this.state.value1 === "") {
        document.getElementById(btn.toString()).src = this.listk[
          this.MainList[btn] - 1
        ]["source"];

        this.setState({
          value1: btn
        });
      } else {
        if (
          document.getElementById(this.state.value1).src !== "Blank.jpg" &&
          this.state.value1 !== btn.toString() &&
          this.MainList[this.state.value1] === this.MainList[btn]
        ) {
          console.log("jh");
          document.getElementById(this.state.value1).src = "Blank.jpg";
          document.getElementById(btn.toString()).src = "Blank.jpg";
          this.points++;
          if (this.points === this.pointer) {
            this.setState({
              selected: true,
              list: []
            });
          }
        } else {
          document.getElementById(btn.toString()).src = this.listk[
            this.MainList[btn] - 1
          ]["source"];
          setTimeout(function () {
            document.getElementById(btn.toString()).src = "Pattern.jpg";
          }, 1000);
          document.getElementById(this.state.value1).src = "Pattern.jpg";
        }
        this.setState({
          value1: ""
        });
      }
    }
  }
  handleInput(event) {
    this.setState({
      input: event.target.value
    });
  }
  componentDidMount() {}
  render() {
    return (
      <>
        <input
          type="text"
          id="play"
          value={this.state.input}
          onChange={(event) => this.handleInput(event)}
        />
        <button onClick={(event) => this.handleChange(event)}>click me</button>
        <tbody>{this.state.list}</tbody>
        <div id="abc">{this.state.selected ? "win" : ""}</div>
      </>
    );
  }
}
