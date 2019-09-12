import React from 'react';

const ProjectDetails = props => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur distinctio dolore dolores earum eligendi eveniet excepturi, impedit, iure odit, quibusdam repudiandae. Asperiores ducimus illum nam natus numquam sunt veritatis.</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted By</div>
                    <div>2nd November, 2AM</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
