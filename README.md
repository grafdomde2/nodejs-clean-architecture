# Nodejs Clean Architecture

# In-Progress

Some testing APIs.
Try these APIs using Postman

## Add User:

Type: POST
API: http://localhost:3000/api/v1/users
Body >> raw > JSON

## JSON format

<pre>
{
    "name": "First-Name",
    "lastName": "Last-Name",
    "gender": "1", //1,2
    "meta": {
        "hair": {
            "color": "Black"
        }
    }
}
</pre>

## Get User By ID

Type: GET
API: http://localhost:3000/api/v1/users/{copy user id from the above API result and past it here}

## Update User

Type: PUT
API: http://localhost:3000/api/v1/users

Body >> raw > JSON
JSON Format

<pre>
{
    "id": "put user ID here",
    "name": "First-Name",
    "lastName": "Last-Name",
    "gender": "1",
    "meta": {
        "hair": {
            "color": "Brown"
        }
    }
}
</pre>

## Delete User By Id

Type: DELETE
API: http://localhost:3000/api/v1/users

Body >> raw > JSON
JSON Format

<pre>
{
    "id": "441cd90d-e029-4f10-8892-0675f0c5392b"
}
</pre>

## Add Products

Type: POST
API: http://localhost:3000/api/v1/products
Body >> raw > JSON

## JSON format

<pre>
{
    "name": "Iphone",
    "description": "a phone with ios",
    "images": [
        "apple.com/iphone"
    ],
    "price": "300",
    "color": "Black",
    "meta": {
        "ram": "6gb"
    }
}
</pre>

## Get Product By ID

Type: GET
API: http://localhost:3000/api/v1/products/{copy user id from the above API result and past it here}

## Update Product

Type: PUT
API: http://localhost:3000/api/v1/products

Body >> raw > JSON
JSON Format

<pre>
{
    "id": "996141ae-d040-46ea-bdb6-be2bdbfc9c58",
    "name": "Iphone ddd",
    "description": "a phone with ios",
    "images": [
        "apple.com/iphone"
    ],
    "price": "300",
    "color": "Black",
    "meta": {
        "ram": "6gb"
    }
}
</pre>

## Delete Product By Id

Type: DELETE
API: http://localhost:3000/api/v1/products

Body >> raw > JSON
JSON Format

<pre>
{
    "id": "product id here"
}
</pre>

## Place an Order

Type: POST
API: http://localhost:3000/api/v1/orders
Body >> raw > JSON

## JSON format

<pre>
{
    "userId": "12345",
    "productsIds": [
        "1474", 
        "5264"
    ],
    "date": "1.1.2022",
    "isPayed": true,
    "meta": {
        "comment": "Deliver it to me as soon as possible"
    }
}
</pre>

## Get Order By ID

Type: GET
API: http://localhost:3000/api/v1/orders/{copy user id from the above API result and past it here}

## Update Order

Type: PUT
API: http://localhost:3000/api/v1/orders

Body >> raw > JSON
JSON Format

<pre>
{
    "id": "id here",
    "userId": "12345",
    "productsIds": [
        "1474", 
        "5264"
    ],
    "date": "1.1.2022",
    "isPayed": true,
    "meta": {
        "comment": "Deliver it to me as soon as possible"
    }
}
</pre>

## Delete Order By Id

Type: DELETE
API: http://localhost:3000/api/v1/orders

Body >> raw > JSON
JSON Format

<pre>
{
    "id": "order id here"
}
</pre>
