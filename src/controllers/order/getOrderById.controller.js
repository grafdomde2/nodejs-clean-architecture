const {
    Response
} = require('../../frameworks/common');

module.exports = dependencies => {
    // Copy useCase from useCases/index.js
    // -- Copy getOrderByIdUseCase usecase from useCases/orders/index.js
    const {
        useCases: {
            order: {
                getOrderByIdUseCase
            }
        }
    } = dependencies;

    return async (req, res, next) => {

        try{
            const { params = {} } = req;

            const {
                id
            } = params;

            // init the usecase
            const getOrderById = getOrderByIdUseCase(dependencies);
            const response = await getOrderById.execute({
                id
            })

            res.json(new Response({
                status: true,
                content: response
            }))

            next();
        } catch (e) {
            next(e);
        }
    }
}