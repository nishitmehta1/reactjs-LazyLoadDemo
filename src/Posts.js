import React, { Component } from 'react';

export default class Posts extends Component {
	render() {
		return (
			<div>
				<div className="card col-md-8 mb-3">
				  <div className="row no-gutters">
				    <div className="col-md-4">
				      <img src={`https://picsum.photos/id/${this.props.id}/900/900`} className="card-img" alt="..."/>
				    </div>
				    <div className="col-md-8">
				      <div className="card-body">
				        <h5 className="card-title">{this.props.title}</h5>
				        <p className="card-text">{this.props.body}</p>
				        <p className="card-text">
				        	<small className="text-muted">Last updated 3 mins ago</small>
			        	</p>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}
