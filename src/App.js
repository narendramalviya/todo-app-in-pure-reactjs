import React from "react";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem: "",
			list: [],
		};
	}

	// add todo
	addItem = () => {
		if (this.state.newItem) {
			const item = {
				todo: this.state.newItem,
				isDone: false,
				id: Date.now(),
			};
			let list = [...this.state.list];
			list.push(item);
			this.setState({ list: list,newItem:"" });
		}
	};

	// update text
	updateTextState = (text) => {
		this.setState({ newItem: text });
	};

	// delete todo
	deleteItem = (id) => {
		let list = [...this.state.list];
		let updatedList = list.filter((item) => item.id !== id);
		this.setState({ list: updatedList });
	};
	render() {
		let todos = this.state.list.map((item) => {
			return (
				<li key={item.id}>
					<input type="checkbox" /> {item.todo}
					<button onClick={() => this.deleteItem(item.id)}>
						delete
					</button>
				</li>
			);
		});
		return (
			<div className="App">
				<div className="container">
					<h1>TODO APP</h1>
					{/* {this.state.newItem} */}
					<input
						type="text"
						value={this.state.newItem}
						onChange={(event) =>
							this.updateTextState(event.target.value)
						}
					/>
					<button
						onClick={this.addItem}
						disabled={!this.state.newItem}
					>
						Add Todo
					</button>
					<ul>{todos}</ul>
				</div>
			</div>
		);
	}
}

export default App;
