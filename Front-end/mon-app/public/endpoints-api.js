
// GET/user/transaction et
// GET/user/transaction/{transactionId}


const GetAllTransactions = {
    "status": 200,
    "message": "données récupérées avec succès !",
    "transactions": [
        {
            "id": 1,
            "date": 20200227,
            "description": "Golden Sun Bakery",
            "amount": "$8,00",
            "balance": "$298,00",
            "details": {
                "type": "Electronic",
                "category": [
                    "Food",
                    "sport",
                    "health"
                ],
                "note": "lorem ipsum"
            }
        },
        {
            "id": 1,
            "date": 20200227,
            "description": "Golden Sun Bakery",
            "amount": "$8,00",
            "balance": "$298,00",
            "details": [{
                "type": "Electronic",
                "category": [
                    "Food",
                    "sport",
                    "health"
                ],
                "note": "lorem ipsum"
            }]
        },
        {
            "id": 1,
            "date": 20200227,
            "description": "Golden Sun Bakery",
            "amount": "$8,00",
            "balance": "$298,00",
            "details": [{
                "type": "Electronic",
                "category": [
                    "Food",
                    "sport",
                    "health"
                ],
                "note": "lorem ipsum"
            }]
        }
    ]
};

const getOneTransaction = [
    {
        "status": 200,
        "message": "données récupérées avec succès !",
        "transactions":
        {
            "id": 1,
            "date": 20200227,
            "description": "Golden Sun Bakery",
            "amount": "$8,00",
            "balance": "$298,00",
            "details": {
                "type": "Electronic",
                "category": [
                    "Food",
                    "sport",
                    "health"
                ],
                "note": "lorem ipsum"
            }
        }
    },

    {
        "status": 401,
        "message": "Token is missing from header"
    },
    {
        "status": 400,
        "message": "erreur dans la requête"
    }]


// POST/user/transaction/{transactionId}/detail
const bodyParametersPOST = {
    "note": "string"
}

const responseAPI_POST =
    [{
        "status": 200,
        "message": "Ajout réalisé avec succès!"
    },

    {
        "status": 401,
        "message": "Token is missing from header"
    },
    {
        "status": 400,
        "message": "erreur dans la requête"
    }
    ]

// PUT/user/transaction/{transactionId}/detail
const bodyParametersPUT = {
    "category": "string",
    "note": "string"
}
const responseApi_PUT =
    [{
        "status": 200,
        "message": "Modification réalisée avec succès!"
    },

    {
        "status": 401,
        "message": "Token is missing from header"
    },
    {
        "status": 400,
        "message": "erreur dans la requête"
    }
    ]

// DELETE/user/transaction/{transactionId}/detail
const bodyParametersDELETE = [{
    "category": [
        "string"
    ],
    "note": "string"

}]

const responseAPI_DELETE =
    [{
        "status": 200,
        "message": "Suppression réalisée avec succès!"
    },

    {
        "status": 401,
        "message": "Token is missing from header"
    },
    {
        "status": 400,
        "message": "erreur dans la requête"
    }
    ]