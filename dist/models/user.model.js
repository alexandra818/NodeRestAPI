"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                fullName: { type: String, maxlength: 24 },
                email: { type: String, maxlength: 24 },
                username: { type: String, maxlength: 24 },
                password: { type: String, maxlength: 24 },
                phoneNumber: { type: String, maxlength: 24 },
            }, 'A table to store user info',
            [
                {
                    route: '/get-all-users',
                    method: 'POST',
                    callback: this.getAllUsers,
                    requireToken: true,
                },
                {
                    route: '/get-user-by-id/:id',
                    method: 'POST',
                    callback: this.getUserById,
                    requireToken: true,
                },
                {
                    route: '/create-user',
                    method: 'POST',
                    callback: this.createUser,
                    requireToken: true,
                },
                {
                    route: '/update-user/id/:id',
                    method: 'PUT',
                    callback: this.updateUser,
                    requireToken: true,
                },
                {
                    route: '/delete/id/:id',
                    method: 'DELETE',
                    callback: this.deleteUser,
                    requireToken: true,
                }
            ]];
    }
    deleteUser(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let userCtrl = model.controller;
            let resp = yield userCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    updateUser(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body===>', req.body);
            let userCtrl = model.controller;
            let resp = yield userCtrl.update(req, null, null);
            console.log('resp from update', resp);
            res.json({ message: 'Success', resp });
        });
    }
    createUser(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body===>', req.body);
            let userCtrl = model.controller;
            let resp = yield userCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getAllUsers(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*']
            };
            let userCtrl = model.controller;
            let resp = yield userCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getUserById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            };
            let userCtrl = model.controller;
            let resp = yield userCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.User = User;
