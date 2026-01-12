"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequest = void 0;
const form_1 = require("../models/form");
const createRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Received request body:", req.body);
        const { name, role, schoolName, phone, message } = req.body;
        // Basic validation
        if (!name || !role || !schoolName || !phone) {
            return res.status(400).json({ message: 'Please fill in all required fields' });
        }
        const newRequest = new form_1.Request({
            name,
            role,
            schoolName,
            phone,
            message,
        });
        console.log("Attempting to save request...");
        const savedRequest = yield newRequest.save();
        console.log("Save operation completed. Result:", savedRequest);
        // Immediate verification
        const verify = yield form_1.Request.findById(savedRequest._id);
        console.log("Immediate verification query result:", verify);
        res.status(201).json({ message: 'Request submitted successfully', request: newRequest });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
exports.createRequest = createRequest;
