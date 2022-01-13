const {
    Response
} = require('../../frameworks/common');

module.exports = dependencies => {
    // product is copied from useCases/index.js
    const {
        useCases: {
            product: {
                addProductUseCase
            }
        }
    } = dependencies;

    return async (req, res, next) => {
        try {
            const { 
                body = {} 
            } = req;

            const {
                id,
                name,
                description,
                images,
                price,
                color,
                meta
            } = body;

            const addProduct = addProductUseCase(dependencies);
            const response = await addProduct.execute({
                id,
                name,
                description,
                images,
                price,
                color,
                meta
            });

            res.json(new Response({
                status: true,
                content: response
            }))

            next();

        } catch (err) {
            next(err);
        }
    }
}