// ./config.js

// app configurations
module.exports = {
    'secret': 'lapr2017',

    'mongoURI': {
        'production': 'mongodb://admin:admin@ds141796.mlab.com:41796/lapr5-6618-pharmacy-management',
        'development': 'mongodb://admin:admin@ds141796.mlab.com:41796/lapr5-6618-pharmacy-management',
        //'test': 'mongodb://admin:admin@ds141796.mlab.com:41796/lapr5_pharmacies_g6618',
        'test': 'mongodb://admin:admin@ds247357.mlab.com:47357/lapr5_pharmacies_g6618',
    },
    'logger': {
        'db': 'mongodb://admin:admin@ds141796.mlab.com:41796/lapr5-6618-system-logging',
        'collection': 'request-logs'
    },

    'multipStockFactor': 2,
    'add': '+',
    'sub': '-',

    'medicines_backend': {

        'urlPresentations': 'https://lapr5-g6618-medicines-management.azurewebsites.net/api/presentations/',
        'urlPresentationsDetailed': 'https://lapr5-g6618-medicines-management.azurewebsites.net/api/presentations/detailed',
    },

    'receipts_backend': {
        'urlReceipt': 'https://lapr5-g6618-receipts-management.azurewebsites.net/api/medicalReceipts/',
        'url': 'https://lapr5-g6618-receipts-management.azurewebsites.net/api'
    },

    'orders_url': 'https://lapr5-g6618-orders-management.azurewebsites.net/api/orders/new'
}