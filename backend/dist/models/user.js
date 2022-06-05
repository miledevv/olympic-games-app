"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = mongoose_1.default.Schema;
let Korisnik = new UserSchema({
    korime: {
        type: String
    },
    lozinka: {
        type: String
    },
    ime: {
        type: String
    },
    prezime: {
        type: String
    },
    zemlja: {
        type: String
    },
    mail: {
        type: String
    },
    tip: {
        type: String
    },
    odobren: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Korisnik', Korisnik, 'korisnici');
//# sourceMappingURL=user.js.map