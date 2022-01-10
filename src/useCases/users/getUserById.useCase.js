module.exports = dependencies => {
    const { usersRepository } = dependencies;
    if(!usersRepository){
        throw new Error('The users repository should be exist in dependencies');
    }

    //this is the function inside the function
    const execute = ({
        id
    }) => {
        return usersRepository.getById(id);
    }

    return {
        execute
    }
}