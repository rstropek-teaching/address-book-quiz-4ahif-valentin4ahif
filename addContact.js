"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify_errors_1 = require("restify-errors");
const data_1 = require("./data");
function post(req, res, next) {
    if (!req.body.id || !req.body.firstName || !req.body.lastName || !req.body.email) {
        next(new restify_errors_1.BadRequestError('Invalid input (e.g. required field missing or empty)'));
    }
    else {
        const newCustomerId = parseInt(req.body.id);
        if (!newCustomerId) {
            next(new restify_errors_1.BadRequestError('ID has to be a numeric value'));
        }
        else {
            const newCustomer = {
                id: newCustomerId,
                firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email
            };
            data_1.customers.push(newCustomer);
            res.send("Person successfully created");
        }
    }
}
exports.post = post;
