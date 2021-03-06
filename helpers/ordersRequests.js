// helpers/ordersRequests.js

var config = require('../config');
var mongoose = require('mongoose');
var Promise = require('bluebird');
mongoose.Promise = Promise;
var request = require("request");

exports.postOrder = function (body_data) {


    return new Promise((resolve, reject) => {

        var options = {
            method: 'POST',
            url: config.orders_url,
            headers:
                {
                },
            body: body_data
        };

        request(options, function (error, response, body) {

            if (error) throw new Error(error);

            if (response.statusCode >= 300) {
                resolve({message:"couldn't send order"});
            }
            else {
                resolve({message:"order sent"});
            }

        });
    });

}