
// GET/user/transaction et
// GET/user/transaction/{transactionId}


const GetAllResponse200 = {
    "status": 200,
    "message": "données récupérées avec succès !",
    "transactions": [
        {
            "id": 1,
            "date": 20200227,
            "description": "Golden Sun Bakery",
            "amount": "$8,00",
            "balance": "$298,00",
            "type": "Electronic",
            "category": [
                "Food",
                "sport",
                "health"
            ],
            "note": "lorem ipsum"

        },
        {
            "id": 1,
            "date": 20200227,
            "description": "Golden Sun Bakery",
            "amount": "$8,00",
            "balance": "$298,00", "type": "Electronic",
            "category": [
                "Food",
                "sport",
                "health"
            ],
            "note": "lorem ipsum"
        },
        {
            "id": 1,
            "date": 20200227,
            "description": "Golden Sun Bakery",
            "amount": "$8,00",
            "balance": "$298,00",
            "type": "Electronic",
            "category": [
                "Food",
                "sport",
                "health"
            ],
            "note": "lorem ipsum"
        }
    ]
};
const GetAllResponse2 =[
{
    "status": 401,
    "message": "Token is missing from header"
},
{
    "status" : 400,
    "message": "erreur dans la requête"
}]
// POST/user/transaction/{transactionId}

const postTransactionInfo = 
[{
"status":200,
"message": "Ajout réalisé avec succès!"
},

{
    "status" : 401,
    "message": "Token is missing from header"
},
{
    "status" : 400,
    "message": "erreur dans la requête"
}
]

// PUT/user/transaction/{transactionId}
const modifTransactionInfo = 
[{
"status":200,
"message": "Modification réalisée avec succès!"
},

{
    "status" : 401,
    "message": "Token is missing from header"
},
{
    "status" : 400,
    "message": "erreur dans la requête"
}
]

// DELETE/user/transaction/{transactionId}
const deleteTransactionInfo = 
[{
"status":200,
"message": "Suppression réalisée avec succès!"
},

{
    "status" : 401,
    "message": "Token is missing from header"
},
{
    "status" : 400,
    "message": "erreur dans la requête"
}
]