(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agregar-agregar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agregar/agregar.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agregar/agregar.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar color=\"dark\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"tertiary\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>{{ lista.titulo }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"dark\">\n\n  \n    <ion-list color=\"dark\">\n      <ion-item color=\"dark\">\n        <ion-label position=\"floating\">Nuevo item</ion-label>\n        <ion-input type=\"text\"\n                   [(ngModel)]=\"nombreItem\"\n                   (keyup.enter)=\"agregarItem()\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n\n    <ion-list>\n\n      <ion-list-header color=\"dark\" *ngIf=\"lista.items.length > 0\">\n        <ion-label>Tareas por hacer</ion-label>\n      </ion-list-header>\n\n\n\n      <ion-item-sliding *ngFor=\"let item of lista.items; let i = index\"\n                        class=\"animated fadeInDown\">\n\n        <ion-item color=\"dark\">\n          <ion-checkbox slot=\"start\"\n                        color=\"tertiary\"\n                        [(ngModel)]=\"item.completado\"\n                        (ionChange)=\"cambioCheck( item )\"></ion-checkbox>\n          <ion-label>{{ item.desc }}</ion-label>\n        </ion-item>\n\n        <ion-item-options side=\"end\">\n          <ion-item-option (click)=\"borrar( i )\" color=\"danger\">\n            <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n\n\n\n    </ion-list>\n\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/models/lista-item.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/lista-item.model.ts ***!
  \********************************************/
/*! exports provided: ListaItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaItem", function() { return ListaItem; });
class ListaItem {
    constructor(desc) {
        this.desc = desc;
        this.completado = false;
    }
}


/***/ }),

/***/ "./src/app/pages/agregar/agregar-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/agregar/agregar-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AgregarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarPageRoutingModule", function() { return AgregarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _agregar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agregar.page */ "./src/app/pages/agregar/agregar.page.ts");




const routes = [
    {
        path: '',
        component: _agregar_page__WEBPACK_IMPORTED_MODULE_3__["AgregarPage"]
    }
];
let AgregarPageRoutingModule = class AgregarPageRoutingModule {
};
AgregarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AgregarPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/agregar/agregar.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/agregar/agregar.module.ts ***!
  \*************************************************/
/*! exports provided: AgregarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarPageModule", function() { return AgregarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _agregar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agregar-routing.module */ "./src/app/pages/agregar/agregar-routing.module.ts");
/* harmony import */ var _agregar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agregar.page */ "./src/app/pages/agregar/agregar.page.ts");







let AgregarPageModule = class AgregarPageModule {
};
AgregarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _agregar_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgregarPageRoutingModule"]
        ],
        declarations: [_agregar_page__WEBPACK_IMPORTED_MODULE_6__["AgregarPage"]]
    })
], AgregarPageModule);



/***/ }),

/***/ "./src/app/pages/agregar/agregar.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/agregar/agregar.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FncmVnYXIvYWdyZWdhci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/agregar/agregar.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/agregar/agregar.page.ts ***!
  \***********************************************/
/*! exports provided: AgregarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarPage", function() { return AgregarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_lista_item_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/lista-item.model */ "./src/app/models/lista-item.model.ts");
/* harmony import */ var src_app_services_deseos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/deseos.service */ "./src/app/services/deseos.service.ts");





let AgregarPage = class AgregarPage {
    constructor(deseosService, route) {
        this.deseosService = deseosService;
        this.route = route;
        this.nombreItem = '';
        const listaId = this.route.snapshot.paramMap.get('listaId');
        this.lista = this.deseosService.obtenerLista(listaId);
    }
    ngOnInit() {
    }
    agregarItem() {
        if (this.nombreItem.length === 0) {
            return;
        }
        const nuevoItem = new src_app_models_lista_item_model__WEBPACK_IMPORTED_MODULE_3__["ListaItem"](this.nombreItem);
        this.lista.items.push(nuevoItem);
        this.nombreItem = '';
        this.deseosService.guardarStorage();
    }
    cambioCheck(item) {
        const pendientes = this.lista.items
            .filter(itemData => !itemData.completado)
            .length;
        if (pendientes === 0) {
            this.lista.terminadaEn = new Date();
            this.lista.terminada = true;
        }
        else {
            this.lista.terminadaEn = null;
            this.lista.terminada = false;
        }
        this.deseosService.guardarStorage();
        console.log(this.deseosService.listas);
    }
    borrar(i) {
        this.lista.items.splice(i, 1);
        this.deseosService.guardarStorage();
    }
};
AgregarPage.ctorParameters = () => [
    { type: src_app_services_deseos_service__WEBPACK_IMPORTED_MODULE_4__["DeseosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AgregarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agregar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./agregar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agregar/agregar.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./agregar.page.scss */ "./src/app/pages/agregar/agregar.page.scss")).default]
    })
], AgregarPage);



/***/ })

}]);
//# sourceMappingURL=agregar-agregar-module-es2015.js.map