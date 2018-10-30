import React, { Component } from 'react';

// Form for Notes

class NoteForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			textBody: '',
		};
	}

	addNote = (event) => {
		event.preventDefault();
		const newNote = {
			title: this.state.title,
			textBody: this.state.textBody,
		};

		this.props.addNote(newNote);

		this.setState({
			title: '',
			textBody: '',
		});
		this.props.history.push('/');
	};

	handleInputChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
		console.log({ [event.target.name]: event.target.value });
	};
	render() {
		return (
			<div>
				<h1>{this.props.isUpdating ? 'Edit Note' : 'Create New Note'}</h1>
				<form onSubmit={this.addNote} className="NoteForm">
					<input
						className="input-title"
						value={this.state.title}
						name="title"
						type="text"
						placeholder="Note Title"
						onChange={this.handleInputChange}
					/>
					<input
						className="input-note"
						value={this.state.textBody}
						name="textBody"
						type="text"
						placeholder="Note Content"
						onChange={this.handleInputChange}
					/>
					<button type="submit">Save</button>
				</form>
			</div>
		);
	}
}
export default NoteForm;
