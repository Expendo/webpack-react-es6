import React from 'react';
let about = React.createClass({

	getInitialState: function () {
		return {
			numClicks: 0
		};
	},

	onClick: function () {
		this.setState({
			numClicks: this.state.numClicks + 1
		});
	},

	render: function() {
		return (
			<div className="btn btn-danger"onClick={this.onClick}>
				{this.state.numClicks} clicks
			</div>
		);
	}

});

export default about;