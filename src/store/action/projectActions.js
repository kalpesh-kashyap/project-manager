export const createProject = (project) => {
    return (dispatch, getStage, {getFirebase, getFirestore}) => {
        const fireStore = getFirestore();
        fireStore.collection('projects').add({
            ...project,
            authorFirstName: 'Kalpesh',
            authorLastName: 'Kashyap',
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project})
        }).catch(err => dispatch({type: 'CREATE_PROJECT_ERROR', err}));
    }
};