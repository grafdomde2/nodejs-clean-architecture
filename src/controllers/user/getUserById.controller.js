const {
    Response
} = require('../../frameworks/common');

module.exports = dependencies => {
    
    const {
        useCases: { 
            user: {
                getUserByIdUseCase 
            }
        }
    } = dependencies;

    return async (req, res, next) => {
        try{

            // https://domain/api/v1/users/:id
            const {
                params = {

                }
            } = req;

            const {
                id
            } = params;

            // Some inialization for the usecase
            const getUserById = getUserByIdUseCase(dependencies);

            const response = await getUserById.execute({
                id
            });

            res.json(new Response({
                status: true,
                content: response
            }))
            next();
            
        } catch(err){
            next(err)
        }
    };
}