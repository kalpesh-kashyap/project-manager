import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createProject} from "../../store/action/projectActions";
import {Redirect} from 'react-router-dom';

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    };
    handelChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handelSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
    };

    render() {
        const {auth} = this.props;
        if (!auth.uid) return <Redirect to='/signin'/>;
        return (
            <div className="container">
                <form onSubmit={this.handelSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handelChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea className="materialize-textarea" id="content" onChange={this.handelChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create Project</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);