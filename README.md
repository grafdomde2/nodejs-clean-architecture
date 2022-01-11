# nodejs-clean-architecture

# In-Progress

Some testing APIs.
Try these APIs using Postman

# Add User:

Type: POST
API: http://localhost:3000/api/v1/users
Body >> raw > JSON

# JSON format

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

# Get User By ID

Type: GET
API: http://localhost:3000/api/v1/users/{copy user id from the above API result and past it here}

# Update User

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

# Delete User By Id

Type: DELETE
API: http://localhost:3000/api/v1/users

Body >> raw > JSON
JSON Format

<pre>
{
    "id": "441cd90d-e029-4f10-8892-0675f0c5392b"
}
</pre>
