"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
/**
 * The Injector stores services and resolves requested instances.
 */
exports.Injector = new class {
    /**
     * Resolves instances by injecting required services
     * @param {Type<any>} target
     * @returns {T}
     */
    resolve(target) {
        // tokens are required dependencies, while injections are resolved tokens from the Injector
        let tokens = Reflect.getMetadata('design:paramtypes', target) || [], injections = tokens.map(token => exports.Injector.resolve(token));
        return new target(...injections);
    }
};
