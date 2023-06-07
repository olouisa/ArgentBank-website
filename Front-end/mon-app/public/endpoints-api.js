
// GET/user/transaction : Obtenir toutes les transactions du mois en cours

const responseAPI_GETAll = {
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
// GET/user/transaction/{transactionId} : Obtenir le détail d’une transaction

const responseAPI_GETDetailsOfOne = [
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


// POST/user/transaction/{transactionId}/detail : Ajouter des informations dans une transaction
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

// PUT/user/transaction/{transactionId}/detail : Modifier des informations dans une transaction
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

// DELETE/user/transaction/{transactionId}/detail : Supprimer des informations dans une transaction
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