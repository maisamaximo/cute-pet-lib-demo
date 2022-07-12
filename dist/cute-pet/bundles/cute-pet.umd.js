(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/material/dialog'), require('@angular/material/button'), require('@angular/forms'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/card'), require('@angular/material/chips'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@angular/material/toolbar'), require('@angular/material/icon'), require('@angular/material/tabs'), require('@angular/material/progress-spinner'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('cute-pet', ['exports', '@angular/core', '@angular/common/http', 'rxjs/operators', '@angular/material/dialog', '@angular/material/button', '@angular/forms', '@angular/material/form-field', '@angular/material/input', '@angular/material/card', '@angular/material/chips', '@angular/common', '@angular/platform-browser', '@angular/platform-browser/animations', '@angular/material/toolbar', '@angular/material/icon', '@angular/material/tabs', '@angular/material/progress-spinner', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["cute-pet"] = {}, global.ng.core, global.ng.common.http, global.rxjs.operators, global.ng.material.dialog, global.ng.material.button, global.ng.forms, global.ng.material.formField, global.ng.material.input, global.ng.material.card, global.ng.material.chips, global.ng.common, global.ng.platformBrowser, global.ng.platformBrowser.animations, global.ng.material.toolbar, global.ng.material.icon, global.ng.material.tabs, global.ng.material.progressSpinner, global.rxjs));
})(this, (function (exports, i0, i1, operators, i1$1, i3, i2, i5, i6, i2$1, i3$1, i2$2, platformBrowser, animations, toolbar, i5$1, i3$2, i7, rxjs) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);
    var i2__namespace$2 = /*#__PURE__*/_interopNamespace(i2$2);
    var i5__namespace$1 = /*#__PURE__*/_interopNamespace(i5$1);
    var i3__namespace$2 = /*#__PURE__*/_interopNamespace(i3$2);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);

    var CutePetService = /** @class */ (function () {
        function CutePetService(http) {
            this.http = http;
            this.apiURL = 'https://petstore3.swagger.io/api/v3/pet';
        }
        CutePetService.prototype.getPetsByStatus = function (status) {
            return this.http.get(this.apiURL + "/findByStatus?status=" + status);
        };
        CutePetService.prototype.getPetById = function (id) {
            return this.http.get(this.apiURL + "/" + id);
        };
        CutePetService.prototype.deletePet = function (id) {
            return this.http.delete(this.apiURL + "/" + id, {
                headers: new i1.HttpHeaders().set('api_key', ''),
            });
        };
        CutePetService.prototype.editPet = function (pet) {
            return this.http.put(this.apiURL, pet);
        };
        CutePetService.prototype.createPet = function (pet) {
            return this.http.post(this.apiURL, pet).pipe(operators.take(1));
        };
        return CutePetService;
    }());
    CutePetService.ɵfac = function CutePetService_Factory(t) { return new (t || CutePetService)(i0__namespace.ɵɵinject(i1__namespace.HttpClient)); };
    CutePetService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: CutePetService, factory: CutePetService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CutePetService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i1__namespace.HttpClient }]; }, null);
    })();

    var CutePetComponent = /** @class */ (function () {
        function CutePetComponent() {
        }
        CutePetComponent.prototype.ngOnInit = function () {
        };
        return CutePetComponent;
    }());
    CutePetComponent.ɵfac = function CutePetComponent_Factory(t) { return new (t || CutePetComponent)(); };
    CutePetComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: CutePetComponent, selectors: [["lib-pet-cute-pet"]], decls: 2, vars: 0, template: function CutePetComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "p");
                i0__namespace.ɵɵtext(1, " cute-pet works! ");
                i0__namespace.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CutePetComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-pet-cute-pet',
                        template: "\n    <p>\n      cute-pet works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }
    function __classPrivateFieldIn(state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function"))
            throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    }

    var DeleteDialogComponent = /** @class */ (function () {
        function DeleteDialogComponent(dialogRef, data, cutePetService) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.cutePetService = cutePetService;
        }
        DeleteDialogComponent.prototype.deletePet = function () {
            this.cutePetService.deletePet(this.data.id).subscribe(function (success) {
                console.log('success');
            }, function (error) {
                window.location.reload();
                console.error(error);
            }, function () {
                window.location.reload();
            });
        };
        return DeleteDialogComponent;
    }());
    DeleteDialogComponent.ɵfac = function DeleteDialogComponent_Factory(t) { return new (t || DeleteDialogComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace$1.MatDialogRef), i0__namespace.ɵɵdirectiveInject(i1$1.MAT_DIALOG_DATA), i0__namespace.ɵɵdirectiveInject(CutePetService)); };
    DeleteDialogComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: DeleteDialogComponent, selectors: [["lib-pet-delete-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-actions", "", "align", "center"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "color", "primary", "mat-dialog-close", ""]], template: function DeleteDialogComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "h1", 0);
                i0__namespace.ɵɵtext(1, "Are you sure you want to delete this cute pet?");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "div", 1);
                i0__namespace.ɵɵelementStart(3, "button", 2);
                i0__namespace.ɵɵlistener("click", function DeleteDialogComponent_Template_button_click_3_listener() { return ctx.deletePet(); });
                i0__namespace.ɵɵtext(4, "Yes");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "button", 3);
                i0__namespace.ɵɵtext(6, " Cancel ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace$1.MatDialogTitle, i1__namespace$1.MatDialogActions, i3__namespace.MatButton, i1__namespace$1.MatDialogClose], styles: ["button[_ngcontent-%COMP%]{text-transform:uppercase}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DeleteDialogComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-pet-delete-dialog',
                        templateUrl: './delete-dialog.component.html',
                        styleUrls: ['./delete-dialog.component.css'],
                    }]
            }], function () {
            return [{ type: i1__namespace$1.MatDialogRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1$1.MAT_DIALOG_DATA]
                        }] }, { type: CutePetService }];
        }, null);
    })();

    var UniqueIdService = /** @class */ (function () {
        function UniqueIdService() {
        }
        UniqueIdService.prototype.generateRandomId = function () {
            return Math.floor(Math.random() * 100);
        };
        // TO DO: implement logic to not overwrite an existent id
        UniqueIdService.prototype.checkIdExists = function (list, id) {
            return true;
        };
        return UniqueIdService;
    }());
    UniqueIdService.ɵfac = function UniqueIdService_Factory(t) { return new (t || UniqueIdService)(); };
    UniqueIdService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: UniqueIdService, factory: UniqueIdService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(UniqueIdService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return []; }, null);
    })();

    var PetFormComponent = /** @class */ (function () {
        function PetFormComponent(dialogRef, data, fb, cutePetService, uniqueId) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.fb = fb;
            this.cutePetService = cutePetService;
            this.uniqueId = uniqueId;
            this.submitted = false;
        }
        PetFormComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.id) {
                this.cutePetService.getPetById(this.data.id).subscribe(function (pet) {
                    _this.updateForm(pet);
                });
            }
            this.petForm = this.fb.group({
                id: null,
                category: this.fb.group({ id: 1, name: 'Dogs' }),
                name: [null, [i2.Validators.required]],
                photoUrls: [[], [i2.Validators.required]],
                tag: this.fb.group({ id: 1, name: '' }),
                status: [null, [i2.Validators.required]],
            });
        };
        PetFormComponent.prototype.onSubmit = function () {
            this.submitted = true;
            if (this.petForm.valid) {
                if (this.petForm.value.id) {
                    this.cutePetService
                        .editPet(this.updateForm(this.petForm.value))
                        .subscribe(function (success) {
                        window.location.reload();
                    }, function (error) { return console.error(error); }, function () { return console.log('complete'); });
                }
                else {
                    this.cutePetService
                        .createPet(this.formatPayload(this.petForm.value))
                        .subscribe(function (success) {
                        window.location.reload();
                    }, function (error) { return console.error(error); }, function () { return console.log('complete'); });
                }
                this.dialogRef.close(true);
                this.petForm.reset();
            }
        };
        PetFormComponent.prototype.closeModal = function () {
            this.submitted = false;
            this.dialogRef.close(true);
            this.petForm.reset();
        };
        PetFormComponent.prototype.formatPayload = function (formData) {
            var payload = Object.assign(Object.assign({}, formData), { id: this.uniqueId.generateRandomId(), photoUrls: [formData.photoUrls] });
            return payload;
        };
        PetFormComponent.prototype.updateForm = function (pet) {
            var photoURL = pet.photoUrls instanceof Array ? pet.photoUrls[0] : [pet.photoUrls];
            this.petForm.patchValue({
                id: pet.id,
                name: pet.name,
                photoUrls: photoURL,
                status: pet.status,
            });
            return this.petForm.value;
        };
        return PetFormComponent;
    }());
    PetFormComponent.ɵfac = function PetFormComponent_Factory(t) { return new (t || PetFormComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace$1.MatDialogRef), i0__namespace.ɵɵdirectiveInject(i1$1.MAT_DIALOG_DATA), i0__namespace.ɵɵdirectiveInject(i2__namespace.FormBuilder), i0__namespace.ɵɵdirectiveInject(CutePetService), i0__namespace.ɵɵdirectiveInject(UniqueIdService)); };
    PetFormComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: PetFormComponent, selectors: [["lib-pet-form"]], inputs: { id: "id" }, decls: 27, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "d-grid", 3, "formGroup"], ["appearance", "fill"], ["matInput", "", "placeholder", "Cute name", "value", "", "formControlName", "name"], ["matInput", "", "placeholder", "Ex. https://catphoto.com", "value", "", "formControlName", "photoUrls", "required", ""], ["matNativeControl", "", "required", "", "formControlName", "status"], ["value", "available", "selected", ""], ["value", "pending"], ["value", "sold"], ["mat-dialog-actions", ""], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "color", "primary", 3, "click"]], template: function PetFormComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "h1", 0);
                i0__namespace.ɵɵtext(1, "Cute pet info");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "div", 1);
                i0__namespace.ɵɵelementStart(3, "form", 2);
                i0__namespace.ɵɵelementStart(4, "mat-form-field", 3);
                i0__namespace.ɵɵelementStart(5, "mat-label");
                i0__namespace.ɵɵtext(6, "Name");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(7, "input", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "mat-form-field", 3);
                i0__namespace.ɵɵelementStart(9, "mat-label");
                i0__namespace.ɵɵtext(10, "Photo URL");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(11, "input", 5);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "mat-form-field", 3);
                i0__namespace.ɵɵelementStart(13, "mat-label");
                i0__namespace.ɵɵtext(14, "Status");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(15, "select", 6);
                i0__namespace.ɵɵelementStart(16, "option", 7);
                i0__namespace.ɵɵtext(17, "Available");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(18, "option", 8);
                i0__namespace.ɵɵtext(19, "Pending");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(20, "option", 9);
                i0__namespace.ɵɵtext(21, "Sold");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(22, "div", 10);
                i0__namespace.ɵɵelementStart(23, "button", 11);
                i0__namespace.ɵɵlistener("click", function PetFormComponent_Template_button_click_23_listener() { return ctx.onSubmit(); });
                i0__namespace.ɵɵtext(24, "Add");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(25, "button", 12);
                i0__namespace.ɵɵlistener("click", function PetFormComponent_Template_button_click_25_listener() { return ctx.closeModal(); });
                i0__namespace.ɵɵtext(26, " Cancel ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("formGroup", ctx.petForm);
            }
        }, directives: [i1__namespace$1.MatDialogTitle, i1__namespace$1.MatDialogContent, i2__namespace.ɵangular_packages_forms_forms_y, i2__namespace.NgControlStatusGroup, i2__namespace.FormGroupDirective, i5__namespace.MatFormField, i5__namespace.MatLabel, i6__namespace.MatInput, i2__namespace.DefaultValueAccessor, i2__namespace.NgControlStatus, i2__namespace.FormControlName, i2__namespace.RequiredValidator, i2__namespace.SelectControlValueAccessor, i2__namespace.NgSelectOption, i2__namespace.ɵangular_packages_forms_forms_x, i1__namespace$1.MatDialogActions, i3__namespace.MatButton], styles: ["button[_ngcontent-%COMP%]{text-transform:uppercase}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PetFormComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-pet-form',
                        templateUrl: './pet-form.component.html',
                        styleUrls: ['./pet-form.component.css'],
                    }]
            }], function () {
            return [{ type: i1__namespace$1.MatDialogRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1$1.MAT_DIALOG_DATA]
                        }] }, { type: i2__namespace.FormBuilder }, { type: CutePetService }, { type: UniqueIdService }];
        }, { id: [{
                    type: i0.Input
                }] });
    })();

    var ModalService = /** @class */ (function () {
        function ModalService(dialog) {
            this.dialog = dialog;
        }
        ModalService.prototype.openModal = function (modalSize, component, id) {
            var dialogRef = this.dialog.open(component, {
                minWidth: modalSize + 'px',
                data: { id: id },
            });
            dialogRef.afterClosed().subscribe();
        };
        return ModalService;
    }());
    ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(i0__namespace.ɵɵinject(i1__namespace$1.MatDialog)); };
    ModalService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ModalService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i1__namespace$1.MatDialog }]; }, null);
    })();

    var CardOverviewComponent = /** @class */ (function () {
        function CardOverviewComponent(modalService) {
            this.modalService = modalService;
        }
        CardOverviewComponent.prototype.onEdit = function () {
            this.modalService.openModal(600, PetFormComponent, this.id);
        };
        CardOverviewComponent.prototype.onDelete = function () {
            this.modalService.openModal(400, DeleteDialogComponent, this.id);
        };
        return CardOverviewComponent;
    }());
    CardOverviewComponent.ɵfac = function CardOverviewComponent_Factory(t) { return new (t || CardOverviewComponent)(i0__namespace.ɵɵdirectiveInject(ModalService)); };
    CardOverviewComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: CardOverviewComponent, selectors: [["lib-pet-card-overview"]], inputs: { id: "id", name: "name", status: "status", image: "image" }, decls: 15, vars: 3, consts: [["fxFlex.lt-md", "", 1, "pet-card"], ["mat-card-image", "", "alt", "Photo of a pet", 3, "src"], ["color", "tag-status"], ["aria-label", "Status selection"], ["color", "accent", "selected", ""], [1, "m-auto"], ["mat-flat-button", "", "mat-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "mat-button", "", "color", "primary", 3, "click"]], template: function CardOverviewComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-card", 0);
                i0__namespace.ɵɵelement(1, "img", 1);
                i0__namespace.ɵɵelementStart(2, "div");
                i0__namespace.ɵɵelementStart(3, "mat-card-title");
                i0__namespace.ɵɵtext(4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-card-subtitle", 2);
                i0__namespace.ɵɵelementStart(6, "mat-chip-list", 3);
                i0__namespace.ɵɵelementStart(7, "mat-chip", 4);
                i0__namespace.ɵɵtext(8);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(9, "hr");
                i0__namespace.ɵɵelementStart(10, "mat-card-actions", 5);
                i0__namespace.ɵɵelementStart(11, "button", 6);
                i0__namespace.ɵɵlistener("click", function CardOverviewComponent_Template_button_click_11_listener() { return ctx.onEdit(); });
                i0__namespace.ɵɵtext(12, " Edit ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(13, "button", 7);
                i0__namespace.ɵɵlistener("click", function CardOverviewComponent_Template_button_click_13_listener() { return ctx.onDelete(); });
                i0__namespace.ɵɵtext(14, " Delete ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("src", ctx.image, i0__namespace.ɵɵsanitizeUrl);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate(ctx.name);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵtextInterpolate(ctx.status);
            }
        }, directives: [i2__namespace$1.MatCard, i2__namespace$1.MatCardImage, i2__namespace$1.MatCardTitle, i2__namespace$1.MatCardSubtitle, i3__namespace$1.MatChipList, i3__namespace$1.MatChip, i2__namespace$1.MatCardActions, i3__namespace.MatButton], styles: [".pet-card[_ngcontent-%COMP%]{max-width:400px}.pet-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:400px;height:400px;object-fit:cover}.mat-card-subtitle[_ngcontent-%COMP%], .mat-card-title[_ngcontent-%COMP%]{display:inline-block}.mat-card-subtitle[_ngcontent-%COMP%]{margin-bottom:0;float:right}hr[_ngcontent-%COMP%]{border:1px solid #6739b7}button[_ngcontent-%COMP%]{text-transform:uppercase}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CardOverviewComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-pet-card-overview',
                        templateUrl: './card-overview.component.html',
                        styleUrls: ['./card-overview.component.css'],
                    }]
            }], function () { return [{ type: ModalService }]; }, { id: [{
                    type: i0.Input
                }], name: [{
                    type: i0.Input
                }], status: [{
                    type: i0.Input
                }], image: [{
                    type: i0.Input
                }] });
    })();

    function PetListComponent_mat_tab_group_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelement(1, "lib-pet-card-overview", 8);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var pet_r7 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("id", pet_r7.id)("name", pet_r7.name)("status", pet_r7.status)("image", pet_r7.photoUrls[0]);
        }
    }
    function PetListComponent_mat_tab_group_1_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelement(1, "lib-pet-card-overview", 8);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var pet_r8 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("id", pet_r8.id)("name", pet_r8.name)("status", pet_r8.status)("image", pet_r8.photoUrls[0]);
        }
    }
    function PetListComponent_mat_tab_group_1_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelement(1, "lib-pet-card-overview", 8);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var pet_r9 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("id", pet_r9.id)("name", pet_r9.name)("status", pet_r9.status)("image", pet_r9.photoUrls[0]);
        }
    }
    function PetListComponent_mat_tab_group_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-tab-group");
            i0__namespace.ɵɵelementStart(1, "mat-tab", 3);
            i0__namespace.ɵɵelementStart(2, "div", 4);
            i0__namespace.ɵɵtemplate(3, PetListComponent_mat_tab_group_1_ng_container_3_Template, 2, 4, "ng-container", 5);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "mat-tab", 6);
            i0__namespace.ɵɵelementStart(5, "div", 4);
            i0__namespace.ɵɵtemplate(6, PetListComponent_mat_tab_group_1_ng_container_6_Template, 2, 4, "ng-container", 5);
            i0__namespace.ɵɵpipe(7, "async");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(8, "mat-tab", 7);
            i0__namespace.ɵɵelementStart(9, "div", 4);
            i0__namespace.ɵɵtemplate(10, PetListComponent_mat_tab_group_1_ng_container_10_Template, 2, 4, "ng-container", 5);
            i0__namespace.ɵɵpipe(11, "async");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var petAvailable_r3 = ctx.ngIf;
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngForOf", petAvailable_r3);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngForOf", i0__namespace.ɵɵpipeBind1(7, 3, ctx_r0.petPendent$));
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵproperty("ngForOf", i0__namespace.ɵɵpipeBind1(11, 5, ctx_r0.petSold$));
        }
    }
    function PetListComponent_ng_template_3_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 11);
            i0__namespace.ɵɵelementStart(1, "mat-icon", 12);
            i0__namespace.ɵɵtext(2, " error ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "span", 13);
            i0__namespace.ɵɵtext(4, "Error loading data. Try again later");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(5, "button", 14);
            i0__namespace.ɵɵlistener("click", function PetListComponent_ng_template_3_div_0_Template_button_click_5_listener() { i0__namespace.ɵɵrestoreView(_r14_1); var ctx_r13 = i0__namespace.ɵɵnextContext(2); return ctx_r13.onRefresh(); });
            i0__namespace.ɵɵtext(6, " Refresh ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    function PetListComponent_ng_template_3_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "mat-spinner", 15);
            i0__namespace.ɵɵelementStart(1, "p", 16);
            i0__namespace.ɵɵtext(2, "Loading data...");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function PetListComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtemplate(0, PetListComponent_ng_template_3_div_0_Template, 7, 0, "div", 9);
            i0__namespace.ɵɵpipe(1, "async");
            i0__namespace.ɵɵtemplate(2, PetListComponent_ng_template_3_ng_template_2_Template, 3, 0, "ng-template", null, 10, i0__namespace.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
            var _r11 = i0__namespace.ɵɵreference(3);
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(1, 2, ctx_r2.error$))("ngIfElse", _r11);
        }
    }
    var PetListComponent = /** @class */ (function () {
        function PetListComponent(cutePetService) {
            this.cutePetService = cutePetService;
            this.error$ = new rxjs.Subject();
        }
        PetListComponent.prototype.ngOnInit = function () {
            this.onRefresh();
        };
        PetListComponent.prototype.getPets = function () {
            this.petAvailable$ = this.getPetsByStatus('available');
            this.petPendent$ = this.getPetsByStatus('pending');
            this.petSold$ = this.getPetsByStatus('sold');
        };
        PetListComponent.prototype.getPetsByStatus = function (status) {
            var _this = this;
            return this.cutePetService.getPetsByStatus(status).pipe(operators.catchError(function (error) {
                console.error(error);
                _this.error$.next(true);
                return rxjs.EMPTY;
            }));
        };
        PetListComponent.prototype.onRefresh = function () {
            this.getPets();
        };
        return PetListComponent;
    }());
    PetListComponent.ɵfac = function PetListComponent_Factory(t) { return new (t || PetListComponent)(i0__namespace.ɵɵdirectiveInject(CutePetService)); };
    PetListComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: PetListComponent, selectors: [["lib-pet-list"]], decls: 5, vars: 4, consts: [[1, "container"], [4, "ngIf", "ngIfElse"], ["loadingError", ""], ["label", "Available"], [1, "list"], [4, "ngFor", "ngForOf"], ["label", "Pending"], ["label", "Sold"], [3, "id", "name", "status", "image"], ["class", "loadingError", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "loadingError"], ["color", "primary", "aria-hidden", "false", "aria-label", "Example home icon", 1, "m-auto"], [1, "pb-2", "m-auto"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "m-auto"], [1, "pt-2", "text-center"]], template: function PetListComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵtemplate(1, PetListComponent_mat_tab_group_1_Template, 12, 7, "mat-tab-group", 1);
                i0__namespace.ɵɵpipe(2, "async");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(3, PetListComponent_ng_template_3_Template, 4, 4, "ng-template", null, 2, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r1 = i0__namespace.ɵɵreference(4);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(2, 2, ctx.petAvailable$))("ngIfElse", _r1);
            }
        }, directives: [i2__namespace$2.NgIf, i3__namespace$2.MatTabGroup, i3__namespace$2.MatTab, i2__namespace$2.NgForOf, CardOverviewComponent, i5__namespace$1.MatIcon, i3__namespace.MatButton, i7__namespace.MatSpinner], pipes: [i2__namespace$2.AsyncPipe], styles: [".container[_ngcontent-%COMP%]{padding:5em}.list[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:2rem;padding-block:4rem}.list[_ngcontent-%COMP%], .loadingError[_ngcontent-%COMP%]{justify-content:center}.loadingError[_ngcontent-%COMP%]{display:grid;align-items:center}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PetListComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-pet-list',
                        templateUrl: './pet-list.component.html',
                        styleUrls: ['./pet-list.component.css'],
                    }]
            }], function () { return [{ type: CutePetService }]; }, null);
    })();

    var BtnAddNewComponent = /** @class */ (function () {
        function BtnAddNewComponent(modalService) {
            this.modalService = modalService;
        }
        BtnAddNewComponent.prototype.addPet = function () {
            this.modalService.openModal(600, PetFormComponent);
        };
        return BtnAddNewComponent;
    }());
    BtnAddNewComponent.ɵfac = function BtnAddNewComponent_Factory(t) { return new (t || BtnAddNewComponent)(i0__namespace.ɵɵdirectiveInject(ModalService)); };
    BtnAddNewComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: BtnAddNewComponent, selectors: [["lib-pet-btn-add-new"]], decls: 4, vars: 0, consts: [["mat-flat-button", "", "color", "primary", 3, "click"]], template: function BtnAddNewComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵlistener("click", function BtnAddNewComponent_Template_button_click_0_listener() { return ctx.addPet(); });
                i0__namespace.ɵɵelementStart(1, "mat-icon");
                i0__namespace.ɵɵtext(2, "add");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtext(3, " New Pet\n");
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i3__namespace.MatButton, i5__namespace$1.MatIcon], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(BtnAddNewComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-pet-btn-add-new',
                        templateUrl: './btn-add-new.component.html',
                        styleUrls: [],
                    }]
            }], function () { return [{ type: ModalService }]; }, null);
    })();

    var materialModules = [
        i5.MatFormFieldModule,
        toolbar.MatToolbarModule,
        i3.MatButtonModule,
        i5$1.MatIconModule,
        i3$2.MatTabsModule,
        i2$1.MatCardModule,
        i3$1.MatChipsModule,
        i1$1.MatDialogModule,
        i6.MatInputModule,
        i7.MatProgressSpinnerModule,
    ];
    var CutePetModule = /** @class */ (function () {
        function CutePetModule() {
        }
        return CutePetModule;
    }());
    CutePetModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: CutePetModule });
    CutePetModule.ɵinj = i0__namespace.ɵɵdefineInjector({ factory: function CutePetModule_Factory(t) { return new (t || CutePetModule)(); }, imports: [__spread([
                i2$2.CommonModule,
                i1.HttpClientModule,
                platformBrowser.BrowserModule,
                animations.BrowserAnimationsModule,
                i2.FormsModule,
                i2.ReactiveFormsModule
            ], materialModules)] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(CutePetModule, { declarations: [CutePetComponent,
                CardOverviewComponent,
                PetListComponent,
                BtnAddNewComponent,
                PetFormComponent,
                DeleteDialogComponent], imports: [i2$2.CommonModule,
                i1.HttpClientModule,
                platformBrowser.BrowserModule,
                animations.BrowserAnimationsModule,
                i2.FormsModule,
                i2.ReactiveFormsModule, i5.MatFormFieldModule,
                toolbar.MatToolbarModule,
                i3.MatButtonModule,
                i5$1.MatIconModule,
                i3$2.MatTabsModule,
                i2$1.MatCardModule,
                i3$1.MatChipsModule,
                i1$1.MatDialogModule,
                i6.MatInputModule,
                i7.MatProgressSpinnerModule], exports: [CutePetComponent,
                CardOverviewComponent,
                PetListComponent,
                BtnAddNewComponent,
                PetFormComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CutePetModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            CutePetComponent,
                            CardOverviewComponent,
                            PetListComponent,
                            BtnAddNewComponent,
                            PetFormComponent,
                            DeleteDialogComponent,
                        ],
                        imports: __spread([
                            i2$2.CommonModule,
                            i1.HttpClientModule,
                            platformBrowser.BrowserModule,
                            animations.BrowserAnimationsModule,
                            i2.FormsModule,
                            i2.ReactiveFormsModule
                        ], materialModules),
                        exports: [
                            CutePetComponent,
                            CardOverviewComponent,
                            PetListComponent,
                            BtnAddNewComponent,
                            PetFormComponent,
                        ],
                        entryComponents: [PetFormComponent],
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of cute-pet
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BtnAddNewComponent = BtnAddNewComponent;
    exports.CardOverviewComponent = CardOverviewComponent;
    exports.CutePetComponent = CutePetComponent;
    exports.CutePetModule = CutePetModule;
    exports.CutePetService = CutePetService;
    exports.DeleteDialogComponent = DeleteDialogComponent;
    exports.PetFormComponent = PetFormComponent;
    exports.PetListComponent = PetListComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=cute-pet.umd.js.map
