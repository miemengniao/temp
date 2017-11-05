(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/http')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/http'], factory) :
	(factory((global['amexio-ng-extensions'] = {}),global._angular_core,global._angular_common,global._angular_forms,global._angular_http));
}(this, (function (exports,_angular_core,_angular_common,_angular_forms,_angular_http) { 'use strict';

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author -  Dattaram Gawas
 *
 */
var ButtonComponent = (function () {
    function ButtonComponent() {
        this.onClick = new _angular_core.EventEmitter();
        this.elementId = 'button-' + Math.floor(Math.random() * 90000) + 10000;
    }
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = function () {
        this.btnStyleClass = 'btn ';
        this.btnSizeStyleClass = '';
        if (this.type != null) {
            if (this.type.toLocaleLowerCase() === 'warning') {
                this.btnStyleClass = this.btnStyleClass + 'btn-warning';
            }
            else if (this.type.toLocaleLowerCase() === 'primary') {
                this.btnStyleClass = this.btnStyleClass + 'btn-primary';
            }
            else if (this.type.toLocaleLowerCase() === 'success') {
                this.btnStyleClass = this.btnStyleClass + 'btn-success';
            }
            else if (this.type.toLocaleLowerCase() === 'danger') {
                this.btnStyleClass = this.btnStyleClass + 'btn-danger';
            }
            else if (this.type.toLocaleLowerCase() === 'link') {
                this.btnStyleClass = this.btnStyleClass + 'btn-link';
            }
            else {
                this.btnStyleClass = this.btnStyleClass + 'btn-secondary';
            }
        }
        if (this.tooltipMessage == null) {
            this.hasToolTip = false;
        }
        if (this.size != null) {
            if (this.size === 'large') {
                this.btnStyleClass = this.btnStyleClass.concat(' btn-lg');
            }
            else if (this.size === 'small') {
                this.btnStyleClass = this.btnStyleClass.concat(' btn-sm');
            }
        }
        if (this.block) {
            this.btnStyleClass = this.btnStyleClass.concat(' btn-block');
        }
        if (this.popoverPlacement == null) {
            this.popoverPlacement = 'bottom';
        }
        //  assign mdbClass to imageClass
        if (this.icon) {
            this.iconName = this.icon;
        }
    };
    /**
     * @param {?} change
     * @return {?}
     */
    ButtonComponent.prototype.ngOnChanges = function (change) {
        /*console.log(change.isLoading);
          if(change.isLoading){
            this.disabled = true;
          }*/ // TODO : Fix
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngAfterViewInit = function () {
        // $('[data-toggle="popover"]').popover();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ButtonComponent.prototype.btnClick = function (event) {
        this.onClick.emit(event);
        if (this.onClickRoute != null) {
            // this.router.navigate([this.onClickRoute]);
        }
    };
    return ButtonComponent;
}());
ButtonComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-btn',
                template: "\n      <div>\n          <button type=\"button\" (click)=\"btnClick($event)\"\n                  [class]=\"btnStyleClass\"\n                  [attr.fieldName] = \"fieldName\"\n                  [attr.disabled] = \"disabled ? true: null\"\n                  data-toggle=\"tooltip\" [attr.data-placement]=\"popoverPlacement\" [attr.title]=\"tooltipMessage\">\n              <ng-container *ngIf=\"isLoading\">\n                <i class=\"fa fa-refresh fa-spin \" aria-hidden=\"true\"></i>&nbsp;\n              </ng-container>\n              \n              <ng-container *ngIf=\"icon!=null\">\n                \n                <!--this is for material design-->\n                <ng-container *ngIf=\"iconName && iconClass\">\n                  <i [attr.class]=\"iconClass\" >{{iconName}}</i>\n                </ng-container>\n\n                <!--this is for fontawesome-->\n                <ng-container *ngIf=\"iconName && !iconClass\">\n                  <i [attr.class]=\"iconName\"></i>\n                </ng-container>\n              </ng-container>\n              {{label}}\n          </button>\n      </div>\n  ",
                styles: ["\n  .glyphicon-refresh-animate {\n    -animation: spin .7s infinite linear;\n    -webkit-animation: spin2 .7s infinite linear;\n}\n\n@-webkit-keyframes spin2 {\n    from { -webkit-transform: rotate(0deg);}\n    to { -webkit-transform: rotate(360deg);}\n}\n\n@keyframes spin {\n    from { transform: scale(1) rotate(0deg);}\n    to { transform: scale(1) rotate(360deg);}\n}"
                ]
            },] },
];
/**
 * @nocollapse
 */
ButtonComponent.ctorParameters = function () { return []; };
ButtonComponent.propDecorators = {
    'label': [{ type: _angular_core.Input },],
    'icon': [{ type: _angular_core.Input },],
    'type': [{ type: _angular_core.Input },],
    'onClickRoute': [{ type: _angular_core.Input },],
    'tooltipMessage': [{ type: _angular_core.Input },],
    'disabled': [{ type: _angular_core.Input },],
    'isLoading': [{ type: _angular_core.Input },],
    'size': [{ type: _angular_core.Input },],
    'block': [{ type: _angular_core.Input },],
    'fieldName': [{ type: _angular_core.Input },],
    'popoverPlacement': [{ type: _angular_core.Input },],
    'iconClass': [{ type: _angular_core.Input },],
    'onClick': [{ type: _angular_core.Output },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
/**
 * Base class Used to Inject into all Form Fields Components.
 */
var FormInputBase = (function () {
    function FormInputBase() {
        this.hasLabel = true;
    }
    /**
     * @return {?}
     */
    FormInputBase.prototype.validate = function () {
        this.isValid = this.isValidInput();
    };
    /**
     * @return {?}
     */
    FormInputBase.prototype.isValidInput = function () {
        return null;
    };
    /**
     * @return {?}
     */
    FormInputBase.prototype.setValidClassNames = function () {
        this.divCss = 'form-group has-danger has-feedback has-feedback-custom';
        this.iconName = 'danger';
        this.iconClassName = 'fa fa-times';
    };
    /**
     * @return {?}
     */
    FormInputBase.prototype.setInvalidatedClassNames = function () {
        this.divCss = 'form-group has-success has-feedback has-feedback-custom';
        this.iconName = 'success';
        this.iconClassName = 'fa fa-check';
    };
    return FormInputBase;
}());
FormInputBase.propDecorators = {
    'fieldLabel': [{ type: _angular_core.Input },],
    'fieldName': [{ type: _angular_core.Input },],
    'minLength': [{ type: _angular_core.Input },],
    'minErrorMsg': [{ type: _angular_core.Input },],
    'maxLength': [{ type: _angular_core.Input },],
    'maxErrorMsg': [{ type: _angular_core.Input },],
    'allowBlank': [{ type: _angular_core.Input },],
    'errorMsg': [{ type: _angular_core.Input },],
    'placeholder': [{ type: _angular_core.Input },],
    'disabled': [{ type: _angular_core.Input },],
    'iconFeedBack': [{ type: _angular_core.Input },],
    'fontStyle': [{ type: _angular_core.Input },],
    'fontFamily': [{ type: _angular_core.Input },],
    'fontSize': [{ type: _angular_core.Input },],
    'fieldIcon': [{ type: _angular_core.Input },],
    'hasLabel': [{ type: _angular_core.Input },],
    'pattern': [{ type: _angular_core.Input },],
    'popoverPlacement': [{ type: _angular_core.Input },],
    'enablePopOver': [{ type: _angular_core.Input },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var noop = function () {
};
var CUSTOM_TEXT_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return TextInputComponent; }),
    multi: true
};
var BASE_IMPL_TEXT_INPUT = {
    provide: FormInputBase,
    useExisting: _angular_core.forwardRef(function () { return TextInputComponent; })
};
var TextInputComponent = (function (_super) {
    __extends(TextInputComponent, _super);
    function TextInputComponent() {
        var _this = _super.call(this) || this;
        _this.innerValue = '';
        _this.onTouchedCallback = noop;
        _this.onChangeCallback = noop;
        _this.elementId = 'input-text-' + Math.floor(Math.random() * 90000) + 10000;
        _this.spanId = 'span-msg-' + Math.random();
        if (_this.iconFeedBack) {
            _this.divCss = 'form-group has-feedback';
        }
        else {
            _this.divCss = 'form-group has-feedback has-feedback-custom';
        }
        return _this;
    }
    /**
     * @return {?}
     */
    TextInputComponent.prototype.ngOnInit = function () {
        if (this.errorMsg) {
            this.helpInfoMsg = this.errorMsg + '<br/>';
        }
        if (this.minErrorMsg) {
            this.helpInfoMsg = this.helpInfoMsg + 'Min Length: ' + this.minErrorMsg + '<br/>';
        }
        if (this.maxErrorMsg) {
            this.helpInfoMsg = this.helpInfoMsg + 'Max Length: ' + this.maxErrorMsg;
        }
        if (!this.iconFeedBack) {
            this.fieldglyphIcon = 'form-control-feedback glyphicon glyphicon-' + this.fieldIcon;
        }
        if (this.pattern != null) {
            this.regEx = new RegExp(this.pattern);
        }
        if (this.popoverPlacement == null) {
            this.popoverPlacement = 'bottom';
        }
        if (this.enablePopOver) {
            this.popoverField = 'popover';
        }
    };
    /**
     * @return {?}
     */
    TextInputComponent.prototype.ngAfterViewInit = function () {
        $('[data-toggle="popover"]').popover();
    };
    Object.defineProperty(TextInputComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this.innerValue;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    /**
     * @return {?}
     */
    TextInputComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
        this.validate();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TextInputComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TextInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TextInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @return {?}
     */
    TextInputComponent.prototype.isValidInput = function () {
        var /** @type {?} */ hasError = false;
        var /** @type {?} */ valueLength = 0;
        if (this.value != null) {
            valueLength = this.value.length;
        }
        if ((this.allowBlank && (!this.value || valueLength == 0))) {
            hasError = true;
        }
        else if (this.pattern != null && !this.regEx.test(this.value)) {
            hasError = true;
        }
        else if (this.minLength > valueLength) {
            hasError = true;
        }
        else if (this.maxLength < valueLength) {
            hasError = true;
        }
        if (hasError) {
            this.setValidClassNames();
        }
        else {
            this.setInvalidatedClassNames();
        }
        return hasError;
    };
    return TextInputComponent;
}(FormInputBase));
TextInputComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-text-input',
                template: "\n    <div [attr.class]=\"divCss\">\n      \n      <ng-container *ngIf=\"hasLabel\">\n        <label [attr.for]=\"elementId\"\n               [style.font-style]=\"fontStyle\"\n               [style.font-family]=\"fontFamily\"\n               [style.font-size]=\"fontSize\"\n               class=\"control-label\">\n          {{fieldLabel}}\n        </label>\n      </ng-container>\n\n      <input type=\"text\"\n             (blur)=\"onBlur()\"\n             [(ngModel)]=\"value\"\n             [attr.fieldName] = \"fieldName\"\n             [attr.id]=\"elementId\"\n             [attr.placeholder]=\"placeholder\"\n             [attr.maxLength]=\"maxLength\"\n             [attr.minLength]=\"minLength\"\n             [attr.disabled] = \"disabled ? true: null\"\n             [required]=\"allowBlank ? true: null\"\n             [attr.data-error]=\"errorMsg\"\n             [attr.aria-describedby]=\"spanId\"\n             autocomplete=\"off\"\n             class=\"form-control\"\n             [attr.data-toggle]=\"popoverField\" title=\"Info\" [attr.data-placement]=\"popoverPlacement\"  data-trigger=\"focus\"  data-html=\"true\"  [attr.data-content]=\"helpInfoMsg\">\n\n      <ng-container *ngIf=\"iconFeedBack\">\n        <span class=\"form-control-feedback-custom\">\n          <i [attr.class]=\"iconClassName\"></i>\n        </span>\n      </ng-container>\n\n      <ng-container *ngIf=\"!iconFeedBack\">\n        <i [class]=\"fieldglyphIcon\"></i>\n      </ng-container>\n      \n    </div>\n",
                providers: [CUSTOM_TEXT_INPUT_CONTROL_VALUE_ACCESSOR, BASE_IMPL_TEXT_INPUT],
                styles: ["\n        /**\n     A Style Sheet for all form inputs common used classes\n     */\n\n        /** Form Validations & Icon Positioning **/\n        .has-feedback-custom {\n            position: relative;\n        }\n        .has-feedback-custom .form-control {\n            padding-right: 47.5px;\n        }\n\n        .form-control-feedback-custom {\n            position: absolute;\n            top: 0;\n            right: 0;\n            z-index: 2;\n            display: block;\n            width: 38px;\n            height: 38px;\n            line-height: 38px;\n            text-align: center;\n            pointer-events: none;\n        }\n\n        .has-feedback-custom label ~ .form-control-feedback-custom {\n            top: 32px;\n        }\n        .has-feedback-custom label.sr-only ~ .form-control-feedback-custom {\n            top: 0;\n        }"]
            },] },
];
/**
 * @nocollapse
 */
TextInputComponent.ctorParameters = function () { return []; };

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var DropdownItemComponent = (function () {
    function DropdownItemComponent() {
        this.onItemClick = new _angular_core.EventEmitter();
    }
    /**
     * @return {?}
     */
    DropdownItemComponent.prototype.ngOnInit = function () {
    };
    return DropdownItemComponent;
}());
DropdownItemComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-btn-dropdown-item',
                template: ""
            },] },
];
/**
 * @nocollapse
 */
DropdownItemComponent.ctorParameters = function () { return []; };
DropdownItemComponent.propDecorators = {
    'label': [{ type: _angular_core.Input },],
    'disabled': [{ type: _angular_core.Input },],
    'icon': [{ type: _angular_core.Input },],
    'onClickRoute': [{ type: _angular_core.Input },],
    'onItemClick': [{ type: _angular_core.Output },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var ButtonDropdownComponent = (function () {
    function ButtonDropdownComponent() {
        this.elementId = 'button-dropdown' + Math.floor(Math.random() * 90000) + 10000;
    }
    /**
     * @return {?}
     */
    ButtonDropdownComponent.prototype.ngOnInit = function () {
        if (this.cClass) {
            this.btnStyleClass = this.cClass + ' btn ';
        }
        else {
            this.btnStyleClass = 'btn ';
        }
        this.btnDropdownStyle = 'dropdown-toggle dropdown-toggle-split';
        if (this.type !== '' || this.type != null) {
            if (this.type === 'warning') {
                this.btnStyleClass = this.btnStyleClass + 'btn-warning';
            }
            else if (this.type === 'primary') {
                this.btnStyleClass = this.btnStyleClass + 'btn-primary';
            }
            else if (this.type === 'success') {
                this.btnStyleClass = this.btnStyleClass + 'btn-success';
            }
            else if (this.type === 'danger') {
                this.btnStyleClass = this.btnStyleClass + 'btn-danger';
            }
        }
        else {
            this.btnStyleClass = this.btnStyleClass + 'btn-secondary';
        }
        if (this.size != null) {
            this.btnGroupStyleClass = 'btn-group ';
            if (this.size != null) {
                if (this.size === 'large') {
                    this.btnGroupStyleClass = this.btnGroupStyleClass.concat(' btn-group-lg');
                }
                else if (this.size === 'small') {
                    this.btnGroupStyleClass = this.btnGroupStyleClass.concat(' btn-group-sm');
                }
            }
        }
        this.btnDropdownStyle = this.btnStyleClass + ' ' + this.btnDropdownStyle;
    };
    /**
     * @return {?}
     */
    ButtonDropdownComponent.prototype.ngAfterContentInit = function () {
        this.createConfig();
    };
    /**
     * @return {?}
     */
    ButtonDropdownComponent.prototype.createConfig = function () {
        this.dropdownItemData = [];
        this.createDropdownItemConfig();
    };
    /**
     * @return {?}
     */
    ButtonDropdownComponent.prototype.createDropdownItemConfig = function () {
        var /** @type {?} */ itemRefArray = [];
        itemRefArray = this.dropdownItemRef.toArray();
        for (var /** @type {?} */ cr = 0; cr < itemRefArray.length; cr++) {
            var /** @type {?} */ itemConfig = itemRefArray[cr];
            var /** @type {?} */ data = { label: itemConfig.label, disabled: itemConfig.disabled, onItemClick: itemConfig.onItemClick, iconStyleClass: itemConfig.iconStyleClass, icon: itemConfig.icon, onClickRoute: itemConfig.onClickRoute };
            data.iconStyleClass = data.icon + ' pull-right';
            this.dropdownItemData.push(data);
        }
    };
    /**
     * @param {?} event
     * @param {?} itemData
     * @return {?}
     */
    ButtonDropdownComponent.prototype.itemClick = function (event, itemData) {
        itemData.onItemClick.emit(event);
        if (itemData.onClickRoute != null) {
            // this.router.navigate([itemData.onClickRoute]);
        }
    };
    return ButtonDropdownComponent;
}());
ButtonDropdownComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-btn-dropdown',
                template: "\n      <div [class]=\"btnGroupStyleClass\" [attr.id]=\"elementId\">\n          <button type=\"button\" [class]=\"btnDropdownStyle\"  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              {{label}}\n          </button>\n          <ul class=\"dropdown-menu\">\n              <ng-container *ngFor=\"let itemData of dropdownItemData\">\n                  <a class=\"dropdown-item amexio-dropdown-records\" [ngClass]=\"{'disabled':itemData.disabled}\" (click)=\"itemClick($event,itemData)\">\n                      {{itemData.label}}\n                      <ng-container *ngIf=\"itemData.icon!=null\">\n                          <i [class]=\"itemData.iconStyleClass\" aria-hidden=\"true\"></i>\n                      </ng-container>\n                  </a>\n              </ng-container>\n          </ul>\n      </div>\n      \n  ", styles: [
                    "\n            .amexio-dropdown-records{\n            }\n        "
                ]
            },] },
];
/**
 * @nocollapse
 */
ButtonDropdownComponent.ctorParameters = function () { return []; };
ButtonDropdownComponent.propDecorators = {
    'label': [{ type: _angular_core.Input },],
    'type': [{ type: _angular_core.Input },],
    'size': [{ type: _angular_core.Input },],
    'cClass': [{ type: _angular_core.Input },],
    'dropdownItemRef': [{ type: _angular_core.ContentChildren, args: [DropdownItemComponent,] },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var ButtonSplitDropdownComponent = (function () {
    function ButtonSplitDropdownComponent() {
        this.onClick = new _angular_core.EventEmitter();
        this.elementId = 'button-dropdown' + Math.floor(Math.random() * 90000) + 10000;
    }
    /**
     * @return {?}
     */
    ButtonSplitDropdownComponent.prototype.ngOnInit = function () {
        if (this.cClass) {
            this.btnStyleClass = this.cClass + ' btn ';
        }
        else {
            this.btnStyleClass = 'btn ';
        }
        this.btnDropdownStyle = 'dropdown-toggle';
        if (this.type !== '' || this.type != null) {
            if (this.type === 'warning') {
                this.btnStyleClass = this.btnStyleClass + 'btn-warning';
            }
            else if (this.type === 'primary') {
                this.btnStyleClass = this.btnStyleClass + 'btn-primary';
            }
            else if (this.type === 'success') {
                this.btnStyleClass = this.btnStyleClass + 'btn-success';
            }
            else if (this.type === 'danger') {
                this.btnStyleClass = this.btnStyleClass + 'btn-danger';
            }
        }
        else {
            this.btnStyleClass = this.btnStyleClass + 'btn-secondary';
        }
        if (this.size != null) {
            this.btnGroupStyleClass = 'btn-group ';
            if (this.size != null) {
                if (this.size === 'large') {
                    this.btnGroupStyleClass = this.btnGroupStyleClass.concat(' btn-group-lg');
                }
                else if (this.size === 'small') {
                    this.btnGroupStyleClass = this.btnGroupStyleClass.concat(' btn-group-sm');
                }
            }
        }
        this.btnDropdownStyle = this.btnStyleClass + ' ' + this.btnDropdownStyle;
    };
    /**
     * @return {?}
     */
    ButtonSplitDropdownComponent.prototype.ngAfterContentInit = function () {
        this.createConfig();
    };
    /**
     * @return {?}
     */
    ButtonSplitDropdownComponent.prototype.createConfig = function () {
        this.dropdownItemData = [];
        this.createDropdownItemConfig();
    };
    /**
     * @return {?}
     */
    ButtonSplitDropdownComponent.prototype.createDropdownItemConfig = function () {
        var /** @type {?} */ itemRefArray = [];
        itemRefArray = this.dropdownItemRef.toArray();
        for (var /** @type {?} */ cr = 0; cr < itemRefArray.length; cr++) {
            var /** @type {?} */ itemConfig = itemRefArray[cr];
            var /** @type {?} */ data = { label: itemConfig.label, disabled: itemConfig.disabled, onItemClick: itemConfig.onItemClick, iconStyleClass: itemConfig.iconStyleClass, icon: itemConfig.icon, onClickRoute: itemConfig.onClickRoute };
            data.iconStyleClass = data.icon + ' pull-right';
            this.dropdownItemData.push(data);
        }
    };
    /**
     * @param {?} event
     * @param {?} itemData
     * @return {?}
     */
    ButtonSplitDropdownComponent.prototype.itemClick = function (event, itemData) {
        itemData.onItemClick.emit(event);
        if (itemData.onClickRoute != null) {
            // this.router.navigate([itemData.onClickRoute]);
        }
    };
    /**
     * @param {?} clickData
     * @return {?}
     */
    ButtonSplitDropdownComponent.prototype.btnClick = function (clickData) {
        this.onClick.emit(clickData);
    };
    return ButtonSplitDropdownComponent;
}());
ButtonSplitDropdownComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-btn-split-dropdown',
                template: "\n      \n    <div [class]=\"btnGroupStyleClass\" [attr.id]=\"elementId\">\n        <button type=\"button\" [class]=\"btnStyleClass\">{{label}}</button>\n        <button type=\"button\" [class]=\"btnDropdownStyle\" (click)=\"btnClick($event)\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <span class=\"sr-only\">Toggle Dropdown</span>\n        </button>\n        <ul class=\"dropdown-menu\">\n            <ng-container *ngFor=\"let itemData of dropdownItemData\">\n                <a class=\"dropdown-item amexio-dropdown-records\" [ngClass]=\"{'disabled':itemData.disabled}\" (click)=\"itemClick($event,itemData)\">\n                    {{itemData.label}}\n                    <ng-container *ngIf=\"itemData.icon!=null\">\n                        <i [class]=\"itemData.iconStyleClass\" aria-hidden=\"true\"></i>\n                    </ng-container>\n                </a>\n            </ng-container>\n        </ul>\n    </div>\n    \n  ", styles: [
                    "\n    .amexio-dropdown-records{\n    }\n        \n    "
                ]
            },] },
];
/**
 * @nocollapse
 */
ButtonSplitDropdownComponent.ctorParameters = function () { return []; };
ButtonSplitDropdownComponent.propDecorators = {
    'label': [{ type: _angular_core.Input },],
    'type': [{ type: _angular_core.Input },],
    'size': [{ type: _angular_core.Input },],
    'cClass': [{ type: _angular_core.Input },],
    'onClick': [{ type: _angular_core.Output },],
    'dropdownItemRef': [{ type: _angular_core.ContentChildren, args: [DropdownItemComponent,] },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var ButtonGroupActionComponent = (function () {
    function ButtonGroupActionComponent() {
        this.onClick = new _angular_core.EventEmitter();
        this.elementId = 'button-group-action' + Math.floor(Math.random() * 90000) + 10000;
    }
    /**
     * @return {?}
     */
    ButtonGroupActionComponent.prototype.ngOnInit = function () {
        this.btnStyleClass = 'btn ';
        this.btnSizeStyleClass = '';
        if (this.type !== '' || this.type != null) {
            if (this.type === 'warning') {
                this.btnStyleClass = this.btnStyleClass + 'btn-warning';
            }
            else if (this.type === 'primary') {
                this.btnStyleClass = this.btnStyleClass + 'btn-primary';
            }
            else if (this.type === 'success') {
                this.btnStyleClass = this.btnStyleClass + 'btn-success';
            }
            else if (this.type === 'danger') {
                this.btnStyleClass = this.btnStyleClass + 'btn-danger';
            }
        }
        else {
            this.btnStyleClass = this.btnStyleClass + 'btn-secondary';
        }
        this.iconStyleClass = this.icon;
        if (this.tooltipMessage == null) {
            this.hasToolTip = false;
        }
        if (this.size != null) {
            if (this.size === 'large') {
                this.btnStyleClass = this.btnStyleClass.concat(' btn-lg');
            }
            else if (this.size === 'small') {
                this.btnStyleClass = this.btnStyleClass.concat(' btn-sm');
            }
        }
        if (this.block) {
            this.btnStyleClass = this.btnStyleClass.concat(' btn-block');
        }
    };
    return ButtonGroupActionComponent;
}());
ButtonGroupActionComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-btn-group-action',
                template: "",
                styles: ["\n    .glyphicon-refresh-animate {\n      -animation: spin .7s infinite linear;\n      -webkit-animation: spin2 .7s infinite linear;\n    }\n\n    @-webkit-keyframes spin2 {\n      from { -webkit-transform: rotate(0deg);}\n      to { -webkit-transform: rotate(360deg);}\n    }\n\n    @keyframes spin {\n      from { transform: scale(1) rotate(0deg);}\n      to { transform: scale(1) rotate(360deg);}\n    }"
                ]
            },] },
];
/**
 * @nocollapse
 */
ButtonGroupActionComponent.ctorParameters = function () { return []; };
ButtonGroupActionComponent.propDecorators = {
    'label': [{ type: _angular_core.Input },],
    'icon': [{ type: _angular_core.Input },],
    'type': [{ type: _angular_core.Input },],
    'onClickRoute': [{ type: _angular_core.Input },],
    'tooltipMessage': [{ type: _angular_core.Input },],
    'disabled': [{ type: _angular_core.Input },],
    'isLoading': [{ type: _angular_core.Input },],
    'size': [{ type: _angular_core.Input },],
    'block': [{ type: _angular_core.Input },],
    'fieldName': [{ type: _angular_core.Input },],
    'iconClass': [{ type: _angular_core.Input },],
    'onClick': [{ type: _angular_core.Output },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var ButtonGroupComponent = (function () {
    function ButtonGroupComponent() {
        this.elementId = 'button-group' + Math.floor(Math.random() * 90000) + 10000;
    }
    /**
     * @return {?}
     */
    ButtonGroupComponent.prototype.ngAfterViewInit = function () {
        $('[data-toggle="popover"]').popover();
    };
    /**
     * @return {?}
     */
    ButtonGroupComponent.prototype.ngAfterContentInit = function () {
        this.createConfig();
    };
    /**
     * @return {?}
     */
    ButtonGroupComponent.prototype.ngOnInit = function () {
        this.vertical ? this.btnGroupStyleClass = 'btn-group-vertical' : this.btnGroupStyleClass = 'btn-group ';
        if (this.size != null) {
            if (this.size === 'large') {
                this.btnGroupStyleClass = this.btnGroupStyleClass.concat(' btn-group-lg');
            }
            else if (this.size === 'small') {
                this.btnGroupStyleClass = this.btnGroupStyleClass.concat(' btn-group-sm');
            }
        }
        if (this.popoverPlacement == null) {
            this.popoverPlacement = 'bottom';
        }
    };
    /**
     * @return {?}
     */
    ButtonGroupComponent.prototype.createConfig = function () {
        this.buttonData = [];
        this.createButtonConfig();
    };
    /**
     * @param {?} event
     * @param {?} btnObj
     * @return {?}
     */
    ButtonGroupComponent.prototype.buttonClick = function (event, btnObj) {
        btnObj.onClick.emit(event);
        if (btnObj.onClickRoute != null) {
            // this.router.navigate([this.onClickRoute]);
        }
    };
    /**
     * @return {?}
     */
    ButtonGroupComponent.prototype.createButtonConfig = function () {
        var /** @type {?} */ buttonRefArray = [];
        buttonRefArray = this.buttonComponentRef.toArray();
        for (var /** @type {?} */ cr = 0; cr < buttonRefArray.length; cr++) {
            var /** @type {?} */ buttonConfig = buttonRefArray[cr];
            var /** @type {?} */ data = {
                label: buttonConfig.label, onClick: buttonConfig.onClick,
                icon: buttonConfig.icon, type: buttonConfig.type,
                iconClass: buttonConfig.iconClass,
                tooltipMessage: buttonConfig.tooltipMessage, onClickRoute: buttonConfig.onClickRoute,
                disabled: buttonConfig.disabled, isLoading: buttonConfig.isLoading,
                fieldName: buttonConfig.fieldName, btnStyleClass: buttonConfig.btnStyleClass,
                iconStyleClass: buttonConfig.iconStyleClass, btnSizeStyleClass: buttonConfig.btnSizeStyleClass,
                hasToolTip: buttonConfig.hasToolTip, elementId: buttonConfig.elementId
            };
            this.buttonData.push(data);
        }
    };
    return ButtonGroupComponent;
}());
ButtonGroupComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-btn-group',
                template: "    \n      <div [class]=\"btnGroupStyleClass\" role=\"group\" [attr.id]=\"elementId\">\n        <button *ngFor=\"let data of buttonData\" type=\"button\" (click)=\"buttonClick($event,data)\"\n                [class]=\"data.btnStyleClass\"\n                [attr.fieldName] = \"data.fieldName\"\n                [attr.disabled] = \"data.disabled ? true: null\"\n                data-toggle=\"tooltip\" [attr.data-placement]=\"popoverPlacement\" [attr.title]=\"data.tooltipMessage\"\n        >\n          <ng-container *ngIf=\"data.isLoading\">\n            <i class=\"fa fa-refresh fa-spin \" aria-hidden=\"true\"></i>&nbsp;&nbsp;&nbsp;\n          </ng-container>\n          \n          <ng-container *ngIf=\"data.iconStyleClass!=null\">\n            <!--this is for material design-->\n            <ng-container *ngIf=\"data.iconStyleClass && data.iconClass\">\n              <i [attr.class]=\"data.iconClass\" >{{data.iconStyleClass}}</i>\n            </ng-container>\n\n            <!--this is for fontawesome-->\n            <ng-container *ngIf=\"data.iconStyleClass && !data.iconClass\">\n              <i [attr.class]=\"data.iconStyleClass\"></i>\n            </ng-container>\n            \n          </ng-container>\n            {{data.label}}\n        </button>\n      </div>\n      <ng-content></ng-content>\n  ",
            },] },
];
/**
 * @nocollapse
 */
ButtonGroupComponent.ctorParameters = function () { return []; };
ButtonGroupComponent.propDecorators = {
    'size': [{ type: _angular_core.Input },],
    'vertical': [{ type: _angular_core.Input },],
    'popoverPlacement': [{ type: _angular_core.Input },],
    'buttonComponentRef': [{ type: _angular_core.ContentChildren, args: [ButtonGroupActionComponent,] },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var CommonHttpService = (function () {
    /**
     * @param {?} http
     */
    function CommonHttpService(http) {
        this.http = http;
        this.filteredObject = [];
    }
    /**
     * @param {?} serviceUrl
     * @param {?} methodType
     * @return {?}
     */
    CommonHttpService.prototype.fetchData = function (serviceUrl, methodType) {
        var /** @type {?} */ requestJson = {};
        var /** @type {?} */ headers = new _angular_http.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var /** @type {?} */ options = new _angular_http.RequestOptions({ headers: headers, method: methodType });
        if (methodType == 'post') {
            return this.http.post(serviceUrl, requestJson, options);
        }
        else if (methodType == 'get') {
            return this.http.get(serviceUrl, options);
        }
    };
    /**
     * Sets the the form field to disabled mode.
     * @param {?} inputTexts Reference to Form Components
     * @param {?} fieldName Name of the Field
     * @param {?} disabled  Boolean, Set true | false to disable
     * @return {?}
     */
    CommonHttpService.prototype.setDisabled = function (inputTexts, fieldName, disabled) {
        var /** @type {?} */ components = inputTexts._results;
        for (var /** @type {?} */ iComponents = 0; iComponents < components.length; iComponents++) {
            var /** @type {?} */ inputText = components[iComponents];
            if (inputText.fieldName == fieldName) {
                inputText.disabled = disabled;
            }
        }
    };
    /**
     * @param {?} inputTexts
     * @return {?}
     */
    CommonHttpService.prototype.validateAll = function (inputTexts) {
        var /** @type {?} */ validationData = {};
        var /** @type {?} */ invalidComponent = [];
        var /** @type {?} */ invalidMsg = {};
        this.isValid = true;
        var /** @type {?} */ errorCounter = 1;
        for (var /** @type {?} */ ic = 0; ic < inputTexts.length; ic++) {
            var /** @type {?} */ component = inputTexts[ic];
            var /** @type {?} */ isValid = component.isValidInput();
            if (isValid) {
                if (component.minErrorMsg) {
                    invalidMsg['minErrorMsg'] = component.minErrorMsg;
                }
                if (component.maxErrorMsg) {
                    invalidMsg['maxErrorMsg'] = component.maxErrorMsg;
                }
                if (component.errorMsg) {
                    invalidMsg['errorMsg'] = component.errorMsg;
                }
                invalidComponent.push({ 'componentName': component.fieldLabel, 'errorMsgs': invalidMsg });
                invalidMsg = {};
                this.isValid = false;
                errorCounter++;
            }
        }
        validationData = { 'ValidationStatus': this.isValid, 'invalidComponent': invalidComponent };
        return validationData;
    };
    /**
     * @param {?} parentRef
     * @param {?} serviceUrl
     * @param {?} methodType
     * @param {?} requestData
     * @return {?}
     */
    CommonHttpService.prototype.uploadFile = function (parentRef, serviceUrl, methodType, requestData) {
        var _this = this;
        this.parentRef = parentRef;
        var /** @type {?} */ requestJson = requestData;
        var /** @type {?} */ headers = new _angular_http.Headers({ "Access-Control-Allow-Origin": "*" });
        var /** @type {?} */ options = new _angular_http.RequestOptions({ headers: headers, method: methodType });
        if (methodType.toUpperCase() == "POST") {
            this.http.post(serviceUrl, requestJson, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setData();
            });
        }
    };
    /**
     * @return {?}
     */
    CommonHttpService.prototype.setData = function () {
        this.parentRef.setData(this.responseData);
    };
    return CommonHttpService;
}());
CommonHttpService.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
CommonHttpService.ctorParameters = function () { return [
    { type: _angular_http.Http, },
]; };

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var CHECK_COLUMN_SIZE = 'col-lg-';
var CheckBoxGroup = (function () {
    /**
     * @param {?} amxHttp
     */
    function CheckBoxGroup(amxHttp) {
        this.amxHttp = amxHttp;
        this.enableBoxStyle = false;
        this.selectedValue = new _angular_core.EventEmitter();
        this.elementId = 'check-box-group-' + Math.floor(Math.random() * 90000) + 10000;
        this.selectedCheckBox = [];
        this.divCss = 'amexio-checkbox-group';
    }
    /**
     * @return {?}
     */
    CheckBoxGroup.prototype.ngOnInit = function () {
        var _this = this;
        if (this.column) {
            this.calculatedColSize = CHECK_COLUMN_SIZE + this.column;
        }
        if (this.httpMethod && this.httpUrl) {
            this.amxHttp.fetchData(this.httpUrl, this.httpMethod).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setData(_this.responseData);
            });
        }
        else if (this.checkBoxGroupBindData) {
            this.previousValue = JSON.parse(JSON.stringify(this.checkBoxGroupBindData));
            this.setData(this.checkBoxGroupBindData);
        }
    };
    /**
     * @return {?}
     */
    CheckBoxGroup.prototype.ngDoCheck = function () {
        if (JSON.stringify(this.previousValue) != JSON.stringify(this.checkBoxGroupBindData)) {
            this.previousValue = JSON.parse(JSON.stringify(this.checkBoxGroupBindData));
            this.setData(this.checkBoxGroupBindData);
        }
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    CheckBoxGroup.prototype.setData = function (httpResponse) {
        this.data = this.getResponseData(httpResponse);
        this.viewData = this.getResponseData(httpResponse);
        var /** @type {?} */ viewDataWithIdArray = [];
        this.viewData.forEach(function (viewDataObject) {
            viewDataObject.id = 'checkbox' + Math.floor(Math.random() * 90000) + 10000;
            viewDataWithIdArray.push(viewDataObject);
        });
        this.viewData = [];
        this.viewData = viewDataWithIdArray;
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    CheckBoxGroup.prototype.getResponseData = function (httpResponse) {
        var /** @type {?} */ responsedata = httpResponse;
        var /** @type {?} */ dr = this.dataReader.split('.');
        for (var /** @type {?} */ ir = 0; ir < dr.length; ir++) {
            responsedata = responsedata[dr[ir]];
        }
        return responsedata;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CheckBoxGroup.prototype.filterData = function (event) {
        if (this.textValue.length > 0) {
            this.viewData = [];
            for (var /** @type {?} */ vd = 0; vd < this.data.length; vd++) {
                var /** @type {?} */ displayData = this.data[vd][this.displayField];
                if (displayData.toLowerCase().startsWith(this.textValue)) {
                    this.viewData.push(this.data[vd]);
                }
            }
        }
        else {
            this.viewData = this.data;
        }
    };
    /**
     * @param {?} rowData
     * @param {?} event
     * @return {?}
     */
    CheckBoxGroup.prototype.setSelectedCheckBox = function (rowData, event) {
        if (event.currentTarget.checked) {
            this.selectedCheckBox.push(rowData);
        }
        else {
            var /** @type {?} */ indexOf = this.selectedCheckBox.indexOf(rowData);
            delete this.selectedCheckBox[indexOf];
        }
        this.emitSelectedRows();
    };
    /**
     * @return {?}
     */
    CheckBoxGroup.prototype.emitSelectedRows = function () {
        var /** @type {?} */ sRows = [];
        var /** @type {?} */ cloneSelectedChecks = JSON.parse(JSON.stringify(this.selectedCheckBox));
        for (var /** @type {?} */ sr = 0; sr < cloneSelectedChecks.length; sr++) {
            if (cloneSelectedChecks[sr]) {
                //remove id from selected value
                delete cloneSelectedChecks[sr].id;
                sRows.push(cloneSelectedChecks[sr]);
            }
        }
        this.selectedValue.emit(sRows);
    };
    return CheckBoxGroup;
}());
CheckBoxGroup.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-checkbox',
                template: "\n      \n      <ng-container *ngIf=\"enableBoxStyle\">\n        <div [attr.class]=\"divCss\">\n          <label  *ngIf=\"fieldLabel\" [attr.for]=\"elementId\">{{fieldLabel}}</label>\n          <div class=\"\" [ngClass]=\"{'row':column || column!='','list-group':!column ||column==''}\">\n            <li class=\"list-group-item col-sm-12\" *ngIf=\"searchBox\"><span class=\"col-sm-12\"><input [(ngModel)]=\"textValue\" type=\"text\" class=\"form-control\" placeholder=\"Please select\" (keyup)=\"filterData($event)\"></span></li>\n            <li class=\"list-group-item\" [ngClass]=\"calculatedColSize\" *ngFor=\"let row of viewData\">\n              <label class=\"form-check-label\">\n                <input [attr.id]=\"row.id\" class=\"amexio-checkbox\" type=\"checkbox\" [checked]=\"row[valueField]\"  (click)=\"setSelectedCheckBox(row, $event)\"> \n                <label [attr.for]=\"row.id\">\n                  {{row[displayField]}}\n                </label>\n              </label>\n            </li>\n          </div>\n        </div>\n      </ng-container>\n\n      <ng-container *ngIf=\"!enableBoxStyle\">\n        <div [attr.class]=\"divCss\">\n          <label  *ngIf=\"fieldLabel\" [attr.for]=\"elementId\">{{fieldLabel}}</label>\n          <div class=\"\" [ngClass]=\"{'row':column || column!='','list-group':!column ||column==''}\">\n            <span class=\"col-sm-12\" *ngIf=\"searchBox\"><span class=\"col-sm-12\"><input [(ngModel)]=\"textValue\" type=\"text\" class=\"form-control\" placeholder=\"Please select\" (keyup)=\"filterData($event)\"></span></span>\n            <span class=\"\" [ngClass]=\"calculatedColSize\" *ngFor=\"let row of viewData\">\n              <label class=\"form-check-label\">\n                <input [attr.id]=\"row.id\" class=\"amexio-checkbox\" type=\"checkbox\" [checked]=\"row[valueField]\"  (click)=\"setSelectedCheckBox(row, $event)\"> \n                <label [attr.for]=\"row.id\">\n                  {{row[displayField]}}\n                </label>\n              </label>\n            </span>\n          </div>\n        </div>\n      </ng-container>\n  \n    ",
                providers: [CommonHttpService],
                styles: ["\n        /**\n A Style Sheet for all form inputs common used classes\n */\n\n/** Form Validations & Icon Positioning **/\n.has-feedback-custom {\n    position: relative;\n}\n.has-feedback-custom .form-control {\n    padding-right: 47.5px;\n}\n\n.form-control-feedback-custom {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 2;\n    display: block;\n    width: 38px;\n    height: 38px;\n    line-height: 38px;\n    text-align: center;\n    pointer-events: none;\n}\n\n.has-feedback-custom label ~ .form-control-feedback-custom {\n    top: 32px;\n}\n.has-feedback-custom label.sr-only ~ .form-control-feedback-custom {\n    top: 0;\n}\n      .amexio-checkbox-group{  \n      }\n    "]
            },] },
];
/**
 * @nocollapse
 */
CheckBoxGroup.ctorParameters = function () { return [
    { type: CommonHttpService, },
]; };
CheckBoxGroup.propDecorators = {
    'enableBoxStyle': [{ type: _angular_core.Input },],
    'fieldLabel': [{ type: _angular_core.Input },],
    'fieldName': [{ type: _angular_core.Input },],
    'dataReader': [{ type: _angular_core.Input },],
    'httpMethod': [{ type: _angular_core.Input },],
    'httpUrl': [{ type: _angular_core.Input },],
    'displayField': [{ type: _angular_core.Input },],
    'valueField': [{ type: _angular_core.Input },],
    'searchBox': [{ type: _angular_core.Input },],
    'checkBoxGroupBindData': [{ type: _angular_core.Input },],
    'column': [{ type: _angular_core.Input },],
    'selectedValue': [{ type: _angular_core.Output },],
};

/**
 * Created by ketangote on 7/25/17.
 */
var noop$1 = function () {
};
var CUSTOM_DATEPICKER_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR, useExisting: _angular_core.forwardRef(function () { return DateTimeComponent; }), multi: true
};
var BASE_IMPL_DATEPICKER_INPUT = {
    provide: FormInputBase, useExisting: _angular_core.forwardRef(function () { return DateTimeComponent; })
};
var DateTimeComponent = (function () {
    function DateTimeComponent() {
        this.innerValue = '';
        this.onTouchedCallback = noop$1;
        this.onChangeCallback = noop$1;
        this.elementId = new Date().getTime() + "";
        this.selectedDate = new Date();
        this.currrentDate = new Date();
        this.daysTitle = [];
        this.daysArray = [];
        this.dateFormat = "yMMMMd";
        this.timepicker = false;
        this.hrs = this.currrentDate.getHours();
        this.min = this.currrentDate.getMinutes();
        this.initDaysTitle();
        this.createDaysForCurrentMonths(this.currrentDate);
    }
    /**
     * @return {?}
     */
    DateTimeComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    DateTimeComponent.prototype.initDaysTitle = function () {
        this.daysTitle.push({ "text": "Mo" });
        this.daysTitle.push({ "text": "Tu" });
        this.daysTitle.push({ "text": "We" });
        this.daysTitle.push({ "text": "Th" });
        this.daysTitle.push({ "text": "Fr" });
        this.daysTitle.push({ "text": "Sa" });
        this.daysTitle.push({ "text": "Su" });
    };
    /**
     * @param {?} selectedPeriod
     * @return {?}
     */
    DateTimeComponent.prototype.createDaysForCurrentMonths = function (selectedPeriod) {
        var /** @type {?} */ date = new Date(selectedPeriod.getFullYear(), selectedPeriod.getMonth(), 1, 0, 0, 0, 0); // Starting at the 1st of the month
        var /** @type {?} */ extras = (date.getDay() + 6) % 7; // How many days of the last month do we need to include?
        date.setDate(date.getDate() - extras); // Skip back to the previous monday
        //let startDate =  new Date(selectedPersion.getFullYear(),selectedPersion.getMonth(),1,0,0,0,0);
        var /** @type {?} */ month = selectedPeriod.getMonth();
        var /** @type {?} */ year = selectedPeriod.getFullYear();
        while (1) {
            var /** @type {?} */ rowDays = [];
            for (var /** @type {?} */ i = 0; i < 7; i++) {
                var /** @type {?} */ day = {
                    'date': null, 'selected': false, 'isCurrentMonth': null
                };
                var /** @type {?} */ isCurrentMonth = ((date.getMonth() === selectedPeriod.getMonth()));
                day.date = new Date(date.getTime());
                day.isCurrentMonth = isCurrentMonth;
                if ((date.getMonth() === this.currrentDate.getMonth()) && (date.getDate() === this.currrentDate.getDate())) {
                    day.selected = true;
                }
                rowDays.push(day);
                date.setDate(date.getDate() + 1);
            }
            this.daysArray.push(rowDays);
            if (date.getMonth() > month || this.daysArray.length > 6) {
                break;
            }
        }
    };
    /**
     * @param {?} dateObj
     * @return {?}
     */
    DateTimeComponent.prototype.onDateClick = function (dateObj) {
        this.selectedDate = dateObj;
        this.selectedDate.setHours(this.hrs);
        this.selectedDate.setMinutes(this.min);
        this.resetSelection(dateObj);
        this.dateModel = this.selectedDate;
        this.value = this.selectedDate;
    };
    /**
     * @param {?} dateObj
     * @return {?}
     */
    DateTimeComponent.prototype.resetSelection = function (dateObj) {
        for (var /** @type {?} */ i = 0; i < this.daysArray.length; i++) {
            for (var /** @type {?} */ j = 0; j < this.daysArray[i].length; j++) {
                var /** @type {?} */ day = this.daysArray[i][j];
                if (day.date.getTime() === dateObj.getTime()) {
                    day.selected = true;
                }
                else {
                    day.selected = false;
                }
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DateTimeComponent.prototype.nextMonth = function (event) {
        this.setDateData("plus", 1, event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DateTimeComponent.prototype.prevMonth = function (event) {
        this.setDateData("minus", 1, event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DateTimeComponent.prototype.nextYear = function (event) {
        this.setDateData("plus", 12, event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DateTimeComponent.prototype.prevYear = function (event) {
        this.setDateData("minus", 12, event);
    };
    /**
     * @param {?} state
     * @param {?} mon
     * @param {?} event
     * @return {?}
     */
    DateTimeComponent.prototype.setDateData = function (state, mon, event) {
        var /** @type {?} */ d = new Date(this.currrentDate.getFullYear(), this.currrentDate.getMonth(), this.currrentDate.getDate());
        if (state === "plus") {
            d.setMonth(d.getMonth() + mon);
        }
        else if (state === "minus") {
            d.setMonth(d.getMonth() - mon);
        }
        this.currrentDate = d;
        this.initDate();
        event.stopPropagation();
    };
    /**
     * @return {?}
     */
    DateTimeComponent.prototype.setToday = function () {
        this.currrentDate = new Date();
        this.initDate();
    };
    /**
     * @return {?}
     */
    DateTimeComponent.prototype.initDate = function () {
        this.daysArray = [];
        this.createDaysForCurrentMonths(this.currrentDate);
        this.selectedDate = this.currrentDate;
        this.dateModel = this.selectedDate;
        this.value = this.selectedDate;
    };
    /**
     * @param {?} type
     * @param {?} event
     * @return {?}
     */
    DateTimeComponent.prototype.plus = function (type, event) {
        if (type === "min") {
            if (this.min == 59) {
                this.min = -1;
                this.hrs++;
            }
            this.min++;
        }
        if (type === "hrs") {
            this.hrs++;
        }
        if (this.hrs === 24) {
            this.hrs = 0;
        }
        this.selectedDate.setHours(this.hrs);
        this.selectedDate.setMinutes(this.min);
        this.value = this.selectedDate;
        event.stopPropagation();
    };
    /**
     * @param {?} type
     * @param {?} event
     * @return {?}
     */
    DateTimeComponent.prototype.minus = function (type, event) {
        if (type === "min") {
            if (this.min == 0) {
                this.min = 60;
                this.hrs--;
            }
            this.min--;
        }
        if (type === "hrs") {
            this.hrs--;
        }
        if (this.hrs === 0) {
            this.hrs = 23;
        }
        this.selectedDate.setHours(this.hrs);
        this.selectedDate.setMinutes(this.min);
        this.value = this.selectedDate;
        event.stopPropagation();
    };
    Object.defineProperty(DateTimeComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this.innerValue;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    /**
     * @return {?}
     */
    DateTimeComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateTimeComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
            this.dateModel = this.innerValue;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DateTimeComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DateTimeComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return DateTimeComponent;
}());
DateTimeComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-date-time-picker',
                template: "\n      <div class=\"form-group\">\n    <ng-container *ngIf=\"fieldLabel\">\n      <label class=\"control-label\">{{fieldLabel}}</label>\n    </ng-container>\n    <div class=\"input-group \">\n\n      <!--Date with readonly-->\n      <ng-container *ngIf=\"readonly && datepicker\">\n        <input type=\"text\" class=\"form-control\" aria-label=\"Date picker\" [attr.disabled]=\"readonly ? true: null\"\n               value=\"{{dateModel|date:dateFormat}}\">\n        <input type=\"hidden\" [(ngModel)]=\"value\"/>\n        <div class=\"dropdown\">\n        <span class=\"input-group-addon\" [attr.id]=\"elementId\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-calendar amexio-datepicker-icon-readonly-style\"></i></span>\n        </div>\n      </ng-container>\n\n      <!--DatePicker editable with & without time-->\n      <ng-container *ngIf=\"!readonly && datepicker\">\n\n        <ng-container *ngIf=\"!timepicker\">\n          <input type=\"text\" class=\"form-control\" aria-label=\"Date picker\"\n                 value=\" {{dateModel|date:dateFormat}} \">\n          <input type=\"hidden\" [(ngModel)]=\"value\"/>\n        </ng-container>\n        <ng-container *ngIf=\"timepicker\">\n          <input type=\"text\" class=\"form-control\" aria-label=\"Date picker\"\n                 value=\"{{dateModel|date:dateFormat}}  {{hrs + ' : ' + min}}\">\n          <input type=\"hidden\" [(ngModel)]=\"value\"/>\n        </ng-container>\n\n        <div class=\"dropdown\">\n        \n        <span class=\"input-group-addon \" [attr.id]=\"elementId\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-calendar amexio-datepicker-icon-style\"\n                                                            aria-hidden=\"true\"></i></span>\n\n          <div class=\"dropdown-menu dropdown-menu-right\" [attr.aria-labelledby]=\"elementId\">\n\n            <div class=\"amexio-datepicker\" [attr.id]=\"elementId\">\n              <table class=\"table\">\n                <thead>\n                <td class=\"navigation\" (click)=\"prevYear($event)\">&#8882;</td>\n                <td class=\"navigation\" (click)=\"prevMonth($event)\">&#x22B4;</td>\n\n                <!--if timepicker is true-->\n                <ng-container *ngIf=\"timepicker\">\n                  <td colspan=\"3\">{{selectedDate | date:'MMMM y'}}<br/>{{hrs + ':' + min}}</td>\n                </ng-container>\n\n                <ng-container *ngIf=\"!timepicker\">\n                  <td colspan=\"3\">{{selectedDate | date:'MMMM y'}}<br/></td>\n                </ng-container>\n\n                <td class=\"navigation\" (click)=\"nextMonth($event)\">&#x22B5;</td>\n                <td class=\"navigation\" (click)=\"nextYear($event)\">&#x22B3;</td>\n                </thead>\n                <tr>\n                  <td class=\"daysHeader\" *ngFor=\"let dayTitle of daysTitle\">\n                    <div>{{dayTitle.text}}</div>\n                  </td>\n                </tr>\n                <tr *ngFor=\"let dayArray of daysArray\">\n                  <td *ngFor=\"let day of dayArray\"\n                      [ngClass]=\"{'dateSelected':day.selected, 'currentMonth':day.isCurrentMonth, 'notCurrentMonth':!day.isCurrentMonth}\">\n                    <div (click)=\"onDateClick(day.date)\">{{ day.date | date:'d' }}</div>\n                  </td>\n                </tr>\n                <tr>\n                  <td colspan=\"7\" style=\"padding-top: 10px;\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"setToday()\">TODAY</button>\n                  </td>\n                </tr>\n\n                <!--if picker is true-->\n                <ng-container *ngIf=\"timepicker\">\n                  <tr>\n                    <td colspan=\"7\" class=\"navigation\">\n                      &#9719;\n                    </td>\n                  </tr>\n                  <tr>\n                    <td colspan=\"2\">\n                    </td>\n                    <td (click)=\"plus('hrs', $event);\">&#9650;</td>\n                    <td></td>\n                    <td (click)=\"plus('min', $event);\">&#9650;</td>\n                    <td colspan=\"2\">\n                    </td>\n                  </tr>\n                  <tr>\n                    <td colspan=\"2\">\n                    </td>\n                    <td>{{hrs}}</td>\n                    <td>:</td>\n                    <td>{{min}}</td>\n                    <td colspan=\"2\">\n                    </td>\n                  </tr>\n                  <tr>\n                    <td colspan=\"2\">\n                    </td>\n                    <td (click)=\"minus('hrs', $event);\">&#9660;</td>\n                    <td></td>\n                    <td (click)=\"minus('min', $event);\">&#9660;</td>\n                    <td colspan=\"2\">\n                    </td>\n                  </tr>\n                </ng-container>\n\n              </table>\n            </div>\n\n          </div>\n        </div>\n      </ng-container>\n\n      <!--Only for Time-->\n      <ng-container *ngIf=\"!datepicker\">\n        <input type=\"text\" class=\"form-control\" aria-label=\"Date picker\"\n               value=\"{{hrs + ' : ' + min}}\">\n        <input type=\"hidden\" [(ngModel)]=\"value\"/>\n        <div class=\"dropdown\">\n        \n        <span class=\"input-group-addon\" [attr.id]=\"elementId\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\"> <i\n          class=\"fa fa-clock-o amexio-datepicker-icon-style\"></i></span>\n\n          <div class=\"dropdown-menu dropdown-menu-right\" [attr.aria-labelledby]=\"elementId\">\n\n            <div class=\"amexio-datepicker\" [attr.id]=\"elementId\">\n              <table class=\"table\">\n                <!--if picker is true-->\n                <tr>\n                  <td colspan=\"2\">\n                  </td>\n                  <td (click)=\"plus('hrs', $event);\">&#9650;</td>\n                  <td></td>\n                  <td (click)=\"plus('min', $event);\">&#9650;</td>\n                  <td colspan=\"2\">\n                  </td>\n                </tr>\n                <tr>\n                  <td colspan=\"2\">\n                  </td>\n                  <td>{{hrs}}</td>\n                  <td>:</td>\n                  <td>{{min}}</td>\n                  <td colspan=\"2\">\n                  </td>\n                </tr>\n                <tr>\n                  <td colspan=\"2\">\n                  </td>\n                  <td (click)=\"minus('hrs', $event);\">&#9660;</td>\n                  <td></td>\n                  <td (click)=\"minus('min', $event);\">&#9660;</td>\n                  <td colspan=\"2\">\n                  </td>\n                </tr>\n\n              </table>\n            </div>\n\n          </div>\n        </div>\n      </ng-container>\n    </div>\n\n      </div>\n\n  ", providers: [CUSTOM_DATEPICKER_INPUT_CONTROL_VALUE_ACCESSOR, BASE_IMPL_DATEPICKER_INPUT], styles: ["\n\n\n    .amexio-datepicker {\n      padding: 10px 10px 0px 10px;\n      width: 40vh;\n      display: flex;\n      justify-content: center;\n    }\n\n    .amexio-datepicker table, tr {\n\n    }\n\n    .amexio-datepicker table, tr, td {\n      text-align: center;\n      padding: 5px;\n    }\n\n    .amexio-datepicker table tr td:hover {\n        font-weight: bold;\n    }\n\n    .amexio-datepicker .currentMonth {\n      font-weight: bold;\n    }\n\n    .amexio-datepicker .notCurrentMonth {\n      font-weight: inherit;\n    }\n\n    .amexio-datepicker .dateSelected {\n      font-weight: bold;\n      background-color: #dddddd;\n    }\n\n    .daysHeader {\n      font-weight: bold;\n    }\n\n    .amexio-datepicker table, tr, td div {\n      cursor: pointer;\n    }\n\n    .amexio-datepicker .navigation {\n      font-size: 20px;\n      font-weight: bold;\n    }\n    .amexio-datepicker-icon-readonly-style {\n      font-size: 20px;\n      padding: 5px;\n      color: #adadad;\n    }\n    .amexio-datepicker-icon-style {\n        font-size: 20px;\n        padding: 2px;\n    }\n  "]
            },] },
];
/**
 * @nocollapse
 */
DateTimeComponent.ctorParameters = function () { return []; };
DateTimeComponent.propDecorators = {
    'dateFormat': [{ type: _angular_core.Input },],
    'datepicker': [{ type: _angular_core.Input },],
    'timepicker': [{ type: _angular_core.Input },],
    'fieldLabel': [{ type: _angular_core.Input },],
    'readonly': [{ type: _angular_core.Input },],
    'required': [{ type: _angular_core.Input },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Pratik Kelwalkar
 *
 */
var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var noop$2 = function () {
};
var CUSTOM_DROPDOWN_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return DropDownComponent; }),
    multi: true
};
var BASE_IMPL_DROPDOWN_INPUT = {
    provide: FormInputBase,
    useExisting: _angular_core.forwardRef(function () { return DropDownComponent; })
};
var DropDownComponent = (function (_super) {
    __extends$1(DropDownComponent, _super);
    /**
     * @param {?} amxHttp
     */
    function DropDownComponent(amxHttp) {
        var _this = _super.call(this) || this;
        _this.amxHttp = amxHttp;
        _this.onSingleSelect = new _angular_core.EventEmitter();
        _this.onMultiSelect = new _angular_core.EventEmitter();
        _this.multiSelectValues = [];
        _this.filteredOptions = [];
        _this.nonFilteredRowData = [];
        _this.innerValue = '';
        _this.onTouchedCallback = noop$2;
        _this.onChangeCallback = noop$2;
        _this.elementId = 'dropdown-' + Math.floor(Math.random() * 90000) + 10000;
        return _this;
    }
    /**
     * @return {?}
     */
    DropDownComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.placeholder == '' || this.placeholder == null)
            this.placeholder = 'Choose Option';
        if (this.httpMethod && this.httpUrl) {
            this.amxHttp.fetchData(this.httpUrl, this.httpMethod).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setData(_this.responseData);
            });
        }
        else if (this.data) {
            this.previousData = JSON.parse(JSON.stringify(this.data));
            this.setData(this.data);
        }
    };
    /**
     * @return {?}
     */
    DropDownComponent.prototype.ngDoCheck = function () {
        if (JSON.stringify(this.previousData) != JSON.stringify(this.data)) {
            this.previousData = JSON.parse(JSON.stringify(this.data));
            this.setData(this.data);
        }
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    DropDownComponent.prototype.setData = function (httpResponse) {
        var _this = this;
        //Check if key is added?
        var /** @type {?} */ responsedata = httpResponse;
        if (this.dataReader != null) {
            this.multiSelectValues = [];
            var /** @type {?} */ dr = this.dataReader.split(".");
            for (var /** @type {?} */ ir = 0; ir < dr.length; ir++) {
                responsedata = responsedata[dr[ir]];
            }
        }
        else {
            responsedata = httpResponse;
        }
        //Sort Alphabetically
        var /** @type {?} */ sortedData = responsedata.sort(function (a, b) { return a[_this.displayField].toLowerCase() !== b[_this.displayField].toLowerCase() ? a[_this.displayField].toLowerCase() < b[_this.displayField].toLowerCase() ? -1 : 1 : 0; });
        this.filteredOptions = sortedData;
        this.nonFilteredRowData = sortedData;
        if (this.multiSelect) {
            var /** @type {?} */ preSelectedMultiValues_1 = '';
            var /** @type {?} */ optionsChecked_1 = [];
            this.nonFilteredRowData.forEach(function (row) {
                if (row.checked) {
                    optionsChecked_1.push(row[_this.valueField]);
                    _this.multiSelectValues.push(row);
                    preSelectedMultiValues_1 == '' ? preSelectedMultiValues_1 += row[_this.displayField] : preSelectedMultiValues_1 += ',' + row[_this.displayField];
                }
            });
            this.value = optionsChecked_1;
            this.fieldLabel = preSelectedMultiValues_1;
        }
    };
    /**
     * use it to fire external model changes and reflect in dropdown
     * @param {?} event
     * @return {?}
     */
    DropDownComponent.prototype.onChange = function (event) {
        this.value = event;
    };
    /**
     *
     *  use it to detect user selection changes and bind that to Model
     * @param {?} value
     * @param {?} display
     * @param {?} rowData
     * @return {?}
     */
    DropDownComponent.prototype.onUserSelectionChange = function (value, display, rowData) {
        var _this = this;
        if (this.multiSelect) {
            var /** @type {?} */ optionsChecked_2 = [];
            this.multiSelectValues = [];
            if (rowData.hasOwnProperty('checked')) {
                rowData.checked = !rowData.checked;
                this.filteredOptions.forEach(function (row) {
                    if (row.checked) {
                        optionsChecked_2.push(row[_this.valueField]);
                        _this.multiSelectValues.push(row);
                    }
                });
                this.value = optionsChecked_2;
                this.onMultiSelect.emit(this.multiSelectValues);
            }
        }
        else {
            this.value = value;
            this.onSingleSelect.emit(rowData);
        }
    };
    /**
     * Show Multi-Selected Value's Display Field
     * @param {?} multiSelectedValues
     * @return {?}
     */
    DropDownComponent.prototype.getMultiDisplayField = function (multiSelectedValues) {
        var _this = this;
        var /** @type {?} */ multiSelectDisplayString = '';
        this.multiSelectValues.forEach(function (row) {
            multiSelectDisplayString == '' ? multiSelectDisplayString += row[_this.displayField] : multiSelectDisplayString += ',' + row[_this.displayField];
        });
        if (this.multiSelectValues.length > 0)
            return multiSelectDisplayString;
        else
            return 'Choose Options';
    };
    /**
     * Show Single Selected Value's Display Field
     * @param {?} selectedValue
     * @return {?}
     */
    DropDownComponent.prototype.getDisplayField = function (selectedValue) {
        var _this = this;
        var /** @type {?} */ displaySelectedOption = '';
        if (this.filteredOptions != null) {
            this.filteredOptions.forEach(function (row) {
                if (row[_this.valueField] == selectedValue) {
                    displaySelectedOption = row[_this.displayField];
                }
            });
        }
        return displaySelectedOption;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DropDownComponent.prototype.onDropDownSearchKeyUp = function (event) {
        var _this = this;
        var /** @type {?} */ keyword = event.target.value;
        if (keyword != null && keyword != '' && keyword != ' ') {
            this.filteredOptions = [];
            var /** @type {?} */ search_Term_1 = keyword.toLowerCase();
            this.nonFilteredRowData.forEach(function (row) {
                if (row[_this.displayField].toLowerCase().startsWith(search_Term_1)) {
                    _this.filteredOptions.push(row);
                }
            });
        }
        if (keyword == '') {
            this.filteredOptions = this.nonFilteredRowData;
        }
    };
    Object.defineProperty(DropDownComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this.innerValue;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    /**
     * @return {?}
     */
    DropDownComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
        // this.validate();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DropDownComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DropDownComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DropDownComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return DropDownComponent;
}(FormInputBase));
DropDownComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-dropdown',
                template: "\n        <!-- Faux input to handle Bindings -->\n        <div class=\"form-group amexio-dropdown\">\n            <label *ngIf=\"fieldLabel\">{{fieldLabel}}</label>\n            <input type=\"hidden\"\n                   (blur)=\"onBlur()\"\n                   [ngModel]=\"value\"\n                   (ngModelChange)=\"onChange($event)\"\n            />\n\n            <div class=\"dropdown\">\n\n                <button [attr.disabled] = \"disabled ? true: null\" class=\"btn btn-secondary \"  [style.width]=\"width\" type=\"button\" [attr.id]=\"elementId\" data-toggle=\"dropdown\"\n                        aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <ng-container *ngIf=\"multiSelect\">\n                        <span style=\"float: left;\"> {{value != null || '' ? getMultiDisplayField(value) : placeholder}}</span>\n                        <span class=\"dropdown-toggle\" style=\"float: right;\"></span>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"!multiSelect\">\n                        <span style=\"float: left;\">{{value != null || '' ? getDisplayField(value) : placeholder}}</span>\n                        <span class=\"dropdown-toggle\" style=\"float: right;\"></span>\n                    </ng-container>\n\n                </button>\n                <div class=\"dropdown-menu amexio-dropdown-menu scrollable-options\"  [style.width]=\"width\" [attr.aria-labelledby]=\"elementId\">\n                    <input *ngIf=\"searchBox\" type=\"text\" class=\"dropdown-item amexio-dropdown-records form-control\" (keyup)=\"onDropDownSearchKeyUp($event)\"\n                           placeholder=\"Search\"/>\n                    <button class=\"dropdown-item amexio-dropdown-records\" *ngFor=\"let row of filteredOptions\"\n                            (click)=\"onUserSelectionChange(row[valueField],row[displayField],row)\">\n                        {{row[displayField]}} <i class=\"fa fa-check pull-right\" aria-hidden=\"true\" *ngIf=\"row?.checked\"></i>\n                    </button>\n\n                    <ng-template *ngIf=\"filteredOptions.length < 1\">\n                        <a class=\"dropdown-item amexio-dropdown-records disabled\">No Options</a>\n                    </ng-template>\n\n                </div>\n            </div>\n        </div>\n      \n\n    ",
                styles: [
                    "            \n            .amexio-dropdown{\n                \n            }\n            .amexio-dropdown-menu{\n                \n            }\n            .amexio-dropdown-records{\n            }\n        "
                ],
                providers: [CUSTOM_DROPDOWN_CONTROL_VALUE_ACCESSOR, BASE_IMPL_DROPDOWN_INPUT]
            },] },
];
/**
 * @nocollapse
 */
DropDownComponent.ctorParameters = function () { return [
    { type: CommonHttpService, },
]; };
DropDownComponent.propDecorators = {
    'dataReader': [{ type: _angular_core.Input },],
    'httpMethod': [{ type: _angular_core.Input },],
    'httpUrl': [{ type: _angular_core.Input },],
    'displayField': [{ type: _angular_core.Input },],
    'valueField': [{ type: _angular_core.Input },],
    'data': [{ type: _angular_core.Input },],
    'multiSelect': [{ type: _angular_core.Input },],
    'disabled': [{ type: _angular_core.Input },],
    'searchBox': [{ type: _angular_core.Input },],
    'width': [{ type: _angular_core.Input },],
    'onSingleSelect': [{ type: _angular_core.Output },],
    'onMultiSelect': [{ type: _angular_core.Output },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var noop$3 = function () {
};
var CUSTOM_EMAIL_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return EmailInputComponent; }),
    multi: true
};
var BASE_IMPL_EMAIL_INPUT = {
    provide: FormInputBase,
    useExisting: _angular_core.forwardRef(function () { return EmailInputComponent; })
};
var EmailInputComponent = (function (_super) {
    __extends$2(EmailInputComponent, _super);
    function EmailInputComponent() {
        var _this = _super.call(this) || this;
        _this.innerValue = '';
        _this.onTouchedCallback = noop$3;
        _this.onChangeCallback = noop$3;
        _this.elementId = 'input-email-' + Math.floor(Math.random() * 90000) + 10000;
        _this.spanId = 'span-msg-' + Math.random();
        if (_this.iconFeedBack)
            _this.divCss = 'form-group has-feedback';
        else
            _this.divCss = 'form-group has-feedback has-feedback-custom';
        return _this;
    }
    /**
     * @return {?}
     */
    EmailInputComponent.prototype.ngOnInit = function () {
        if (this.errorMsg)
            this.helpInfoMsg = this.errorMsg + '<br/>';
        //Regex check
        if (this.pattern != null) {
            this.regEx = new RegExp(this.pattern);
        }
        if (this.popoverPlacement == null) {
            this.popoverPlacement = 'bottom';
        }
        if (this.enablePopOver) {
            this.popoverField = 'popover';
        }
    };
    /**
     * @return {?}
     */
    EmailInputComponent.prototype.ngAfterViewInit = function () {
        $('[data-toggle="popover"]').popover();
    };
    Object.defineProperty(EmailInputComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this.innerValue;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    /**
     * @return {?}
     */
    EmailInputComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
        this.validate();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    EmailInputComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EmailInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EmailInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @return {?}
     */
    EmailInputComponent.prototype.validate = function () {
        this.isValid = this.isValidInput();
    };
    /**
     * @return {?}
     */
    EmailInputComponent.prototype.isValidInput = function () {
        var /** @type {?} */ hasError = false;
        var /** @type {?} */ valueLength = 0;
        if (this.value != null) {
            valueLength = this.value.length;
        }
        if ((!this.allowBlank && (!this.value || valueLength == 0))) {
            hasError = true;
        }
        else if (this.pattern != null && !this.regEx.test(this.value)) {
            hasError = true;
        }
        else {
            var /** @type {?} */ cmp = document.getElementById(this.elementId);
            hasError = !cmp.validity.valid;
        }
        if (hasError) {
            this.setValidClassNames();
        }
        else {
            this.setInvalidatedClassNames();
        }
        return hasError;
    };
    return EmailInputComponent;
}(FormInputBase));
EmailInputComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-email-input',
                template: "\n      <div [attr.class]=\"divCss\">\n\n        <ng-container *ngIf=\"hasLabel\">\n          <label [attr.for]=\"elementId\"\n                 [style.font-style]=\"fontStyle\"\n                 [style.font-family]=\"fontFamily\"\n                 [style.font-size]=\"fontSize\"\n                 class=\"control-label\">\n            {{fieldLabel}}\n          </label>\n        </ng-container>\n\n        <input type=\"email\"\n               pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$\"\n               (blur)=\"onBlur()\"\n               [(ngModel)]=\"value\"\n               [attr.fieldName] = \"fieldName\"\n               [attr.id]=\"elementId\"\n               [attr.placeholder]=\"placeholder\"\n               [attr.maxLength]=\"maxLength\"\n               [attr.minLength]=\"minLength\"\n               [attr.disabled] = \"disabled ? true: null\"\n               [required]=\"allowBlank ? true: null\"\n               [attr.data-error]=\"errorMsg\"\n               [attr.aria-describedby]=\"spanId\"\n               autocomplete=\"off\"\n               class=\"form-control\"\n               [attr.data-toggle]=\"popoverField\" title=\"Info\" [attr.data-placement]=\"popoverPlacement\"  data-trigger=\"focus\"  data-html=\"true\"  [attr.data-content]=\"helpInfoMsg\">\n\n        <ng-container *ngIf=\"iconFeedBack\">\n        <span class=\"form-control-feedback-custom\">\n          <i [attr.class]=\"iconClassName\"></i>\n        </span>\n        </ng-container>\n\n        <ng-container *ngIf=\"!iconFeedBack\">\n          <i [class]=\"fieldglyphIcon\"></i>\n        </ng-container>\n\n      </div>\n\n\n    ",
                providers: [CUSTOM_EMAIL_INPUT_CONTROL_VALUE_ACCESSOR, BASE_IMPL_EMAIL_INPUT],
                styles: ["\n        /**\n     A Style Sheet for all form inputs common used classes\n     */\n\n        /** Form Validations & Icon Positioning **/\n        .has-feedback-custom {\n            position: relative;\n        }\n        .has-feedback-custom .form-control {\n            padding-right: 47.5px;\n        }\n\n        .form-control-feedback-custom {\n            position: absolute;\n            top: 0;\n            right: 0;\n            z-index: 2;\n            display: block;\n            width: 38px;\n            height: 38px;\n            line-height: 38px;\n            text-align: center;\n            pointer-events: none;\n        }\n\n        .has-feedback-custom label ~ .form-control-feedback-custom {\n            top: 32px;\n        }\n        .has-feedback-custom label.sr-only ~ .form-control-feedback-custom {\n            top: 0;\n        }\n    "]
            },] },
];
/**
 * @nocollapse
 */
EmailInputComponent.ctorParameters = function () { return []; };

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var noop$4 = function () {
};
var CUSTOM_NUMBER_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return NumberInputComponent; }),
    multi: true
};
var BASE_IMPL_NUMBER_INPUT = {
    provide: FormInputBase,
    useExisting: _angular_core.forwardRef(function () { return NumberInputComponent; })
};
var NumberInputComponent = (function (_super) {
    __extends$3(NumberInputComponent, _super);
    function NumberInputComponent() {
        var _this = _super.call(this) || this;
        _this.innerValue = '';
        _this.onTouchedCallback = noop$4;
        _this.onChangeCallback = noop$4;
        _this.elementId = 'input-text-' + Math.floor(Math.random() * 90000) + 10000;
        _this.spanId = 'span-msg-' + Math.random();
        if (_this.iconFeedBack)
            _this.divCss = 'form-group has-feedback';
        else
            _this.divCss = 'form-group has-feedback has-feedback-custom';
        return _this;
    }
    /**
     * @return {?}
     */
    NumberInputComponent.prototype.ngOnInit = function () {
        if (this.errorMsg)
            this.helpInfoMsg = this.errorMsg + '<br/>';
        if (this.minErrorMsg)
            this.helpInfoMsg = this.helpInfoMsg + 'Min Length: ' + this.minErrorMsg + '<br/>';
        if (this.maxErrorMsg)
            this.helpInfoMsg = this.helpInfoMsg + 'Max Length: ' + this.maxErrorMsg;
        if (!this.iconFeedBack)
            this.fieldglyphIcon = 'form-control-feedback glyphicon glyphicon-' + this.fieldIcon;
        //Regex check
        if (this.pattern != null) {
            this.regEx = new RegExp(this.pattern);
        }
        if (this.enablePopOver) {
            this.popoverField = 'popover';
        }
        if (this.popoverPlacement == null) {
            this.popoverPlacement = 'bottom';
        }
    };
    /**
     * @return {?}
     */
    NumberInputComponent.prototype.ngAfterViewInit = function () {
        $('[data-toggle="popover"]').popover();
    };
    Object.defineProperty(NumberInputComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this.innerValue;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    /**
     * @return {?}
     */
    NumberInputComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
        this.validate();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NumberInputComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NumberInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NumberInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @return {?}
     */
    NumberInputComponent.prototype.validate = function () {
        this.isValid = this.isValidInput();
    };
    /**
     * @return {?}
     */
    NumberInputComponent.prototype.isValidInput = function () {
        var /** @type {?} */ hasError = false;
        var /** @type {?} */ valueLength = 0;
        if (this.value != null) {
            valueLength = this.value.length;
        }
        if ((!this.allowBlank && (!this.value || valueLength == 0))) {
            hasError = true;
        }
        else if (this.pattern != null && !this.regEx.test(this.value)) {
            hasError = true;
        }
        else if (this.minValue > this.value) {
            hasError = true;
        }
        else if (this.maxValue < this.value) {
            hasError = true;
        }
        if (hasError) {
            this.setValidClassNames();
        }
        else {
            this.setInvalidatedClassNames();
        }
        return hasError;
    };
    /**
     * @return {?}
     */
    NumberInputComponent.prototype.setValidClassNames = function () {
        this.divCss = 'form-group has-error has-feedback';
        this.iconName = 'error';
        this.iconClassName = 'glyphicon glyphicon-remove form-control-feedback';
    };
    /**
     * @return {?}
     */
    NumberInputComponent.prototype.setInvalidatedClassNames = function () {
        this.divCss = 'form-group has-success has-feedback';
        this.iconName = 'success';
        this.iconClassName = 'glyphicon glyphicon-ok form-control-feedback';
    };
    return NumberInputComponent;
}(FormInputBase));
NumberInputComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-number-input',
                template: "\n        <div [attr.class]=\"divCss\">\n\n            <ng-container *ngIf=\"hasLabel\">\n                <label [attr.for]=\"elementId\"\n                       [style.font-style]=\"fontStyle\"\n                       [style.font-family]=\"fontFamily\"\n                       [style.font-size]=\"fontSize\"\n                       class=\"control-label\">\n                    {{fieldLabel}}\n                </label>\n            </ng-container>\n\n            <input type=\"number\"\n                   (blur)=\"onBlur()\"\n                   autocomplete=\"off\"\n                   class=\"form-control\"\n                   [(ngModel)]=\"value\"\n                   [attr.fieldName] = \"fieldName\"\n                   [attr.id]=\"elementId\"\n                   [attr.placeholder]=\"placeholder\"\n                   [attr.max]=\"maxValue\"\n                   [attr.min]=\"minValue\"\n                   [attr.disabled] = \"disabled ? true: null\"\n                   [required]=\"allowBlank ? true: null\"\n                   [attr.data-error]=\"errorMsg\"\n                   [attr.aria-describedby]=\"spanId\"\n                   data-toggle=\"popover\" title=\"Info\" [attr.data-placement]=\"popoverPlacement\"  data-trigger=\"focus\"  data-html=\"true\"  [attr.data-content]=\"helpInfoMsg\"\n            >\n\n\n            <ng-container *ngIf=\"iconFeedBack\">\n                <span [attr.class]=\"iconClassName\" aria-hidden=\"true\"></span>\n                <span [attr.id]=\"spanId\" class=\"sr-only\">({{iconName}})</span>\n            </ng-container>\n\n            <ng-container *ngIf=\"!iconFeedBack\">\n                <i [class]=\"fieldglyphIcon\"></i>\n            </ng-container>\n\n            <div class=\"help-block with-errors\"></div>\n\n        </div>\n\n\n    ",
                providers: [CUSTOM_NUMBER_INPUT_CONTROL_VALUE_ACCESSOR, BASE_IMPL_NUMBER_INPUT],
                styles: ["/**\n A Style Sheet for all form inputs common used classes\n */\n\n    /** Form Validations & Icon Positioning **/\n    .has-feedback-custom {\n        position: relative;\n    }\n    .has-feedback-custom .form-control {\n        padding-right: 47.5px;\n    }\n\n    .form-control-feedback-custom {\n        position: absolute;\n        top: 0;\n        right: 0;\n        z-index: 2;\n        display: block;\n        width: 38px;\n        height: 38px;\n        line-height: 38px;\n        text-align: center;\n        pointer-events: none;\n    }\n\n    .has-feedback-custom label ~ .form-control-feedback-custom {\n        top: 32px;\n    }\n    .has-feedback-custom label.sr-only ~ .form-control-feedback-custom {\n        top: 0;\n    }"]
            },] },
];
/**
 * @nocollapse
 */
NumberInputComponent.ctorParameters = function () { return []; };
NumberInputComponent.propDecorators = {
    'minValue': [{ type: _angular_core.Input },],
    'maxValue': [{ type: _angular_core.Input },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var __extends$4 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var noop$5 = function () {
};
var CUSTOM_PASSWORD_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return PasswordInputComponent; }),
    multi: true
};
var BASE_IMPL_PASSWORD_INPUT = {
    provide: FormInputBase,
    useExisting: _angular_core.forwardRef(function () { return PasswordInputComponent; })
};
var PasswordInputComponent = (function (_super) {
    __extends$4(PasswordInputComponent, _super);
    function PasswordInputComponent() {
        var _this = _super.call(this) || this;
        _this.innerValue = '';
        _this.onTouchedCallback = noop$5;
        _this.onChangeCallback = noop$5;
        _this.elementId = 'input-text-' + Math.floor(Math.random() * 90000) + 10000;
        _this.spanId = 'span-msg-' + Math.random();
        if (_this.iconFeedBack)
            _this.divCss = 'form-group has-feedback';
        else
            _this.divCss = 'form-group has-feedback has-feedback-custom';
        return _this;
    }
    /**
     * @return {?}
     */
    PasswordInputComponent.prototype.ngOnInit = function () {
        if (this.errorMsg)
            this.helpInfoMsg = this.errorMsg + '<br/>';
        if (this.minErrorMsg)
            this.helpInfoMsg = this.helpInfoMsg + 'Min Length: ' + this.minErrorMsg + '<br/>';
        if (this.maxErrorMsg)
            this.helpInfoMsg = this.helpInfoMsg + 'Max Length: ' + this.maxErrorMsg;
        if (!this.iconFeedBack)
            this.fieldglyphIcon = 'form-control-feedback glyphicon glyphicon-' + this.fieldIcon;
        //Regex check
        if (this.pattern != null) {
            this.regEx = new RegExp(this.pattern);
        }
        if (this.enablePopOver) {
            this.popoverField = 'popover';
        }
        if (this.popoverPlacement == null) {
            this.popoverPlacement = 'bottom';
        }
    };
    /**
     * @return {?}
     */
    PasswordInputComponent.prototype.ngAfterViewInit = function () {
        $('[data-toggle="popover"]').popover();
    };
    Object.defineProperty(PasswordInputComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this.innerValue;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    /**
     * @return {?}
     */
    PasswordInputComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
        this.validate();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    PasswordInputComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PasswordInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PasswordInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @return {?}
     */
    PasswordInputComponent.prototype.validate = function () {
        this.isValid = this.isValidInput();
    };
    /**
     * @return {?}
     */
    PasswordInputComponent.prototype.isValidInput = function () {
        var /** @type {?} */ hasError = false;
        if (this.value != null) {
            if ((this.allowBlank && (!this.value || this.value.length == 0))) {
                hasError = true;
            }
            else if (this.minLength > this.value.length) {
                hasError = true;
            }
            else if (this.maxLength < this.value.length) {
                hasError = true;
            }
            else if (this.pattern != null && !this.regEx.test(this.value)) {
                hasError = true;
            }
            if (hasError) {
                this.setValidClassNames();
            }
            else {
                this.setInvalidatedClassNames();
            }
        }
        return hasError;
    };
    /**
     * @return {?}
     */
    PasswordInputComponent.prototype.setValidClassNames = function () {
        this.divCss = 'form-group has-error has-feedback';
        this.iconName = 'error';
        this.iconClassName = 'glyphicon glyphicon-remove form-control-feedback';
    };
    /**
     * @return {?}
     */
    PasswordInputComponent.prototype.setInvalidatedClassNames = function () {
        this.divCss = 'form-group has-success has-feedback';
        this.iconName = 'success';
        this.iconClassName = 'glyphicon glyphicon-ok form-control-feedback';
    };
    return PasswordInputComponent;
}(FormInputBase));
PasswordInputComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-password-input',
                template: "\n\n        <div [attr.class]=\"divCss\">\n\n            <ng-container *ngIf=\"hasLabel\">\n                <label [attr.for]=\"elementId\"\n                       [style.font-style]=\"fontStyle\"\n                       [style.font-family]=\"fontFamily\"\n                       [style.font-size]=\"fontSize\"\n                       class=\"control-label\">\n                    {{fieldLabel}}\n                </label>\n            </ng-container>\n\n            <input type=\"password\"\n                   (blur)=\"onBlur()\"\n                   autocomplete=\"off\"\n                   class=\"form-control\"\n                   [(ngModel)]=\"value\"\n                   [attr.fieldName] = \"fieldName\"\n                   [attr.id]=\"elementId\"\n                   [attr.placeholder]=\"placeholder\"\n                   [attr.max]=\"maxLength\"\n                   [attr.min]=\"minLength\"\n                   [attr.disabled] = \"disabled ? true: null\"\n                   [required]=\"allowBlank ? true: null\"\n                   [attr.data-error]=\"errorMsg\"\n                   [attr.aria-describedby]=\"spanId\"\n                   [attr.data-toggle]=\"popoverField\" title=\"Info\" [attr.data-placement]=\"popoverPlacement\"  data-trigger=\"focus\"  data-html=\"true\"  [attr.data-content]=\"helpInfoMsg\"\n            >\n\n            <ng-container *ngIf=\"iconFeedBack\">\n                <span [attr.class]=\"iconClassName\" aria-hidden=\"true\"></span>\n                <span [attr.id]=\"spanId\" class=\"sr-only\">({{iconName}})</span>\n            </ng-container>\n\n            <ng-container *ngIf=\"!iconFeedBack\">\n                <i [class]=\"fieldglyphIcon\"></i>\n            </ng-container>\n\n            <div class=\"help-block with-errors\"></div>\n\n        </div>\n\n    ",
                providers: [CUSTOM_PASSWORD_INPUT_CONTROL_VALUE_ACCESSOR, BASE_IMPL_PASSWORD_INPUT],
                styles: ["/**\n A Style Sheet for all form inputs common used classes\n */\n\n    /** Form Validations & Icon Positioning **/\n    .has-feedback-custom {\n        position: relative;\n    }\n    .has-feedback-custom .form-control {\n        padding-right: 47.5px;\n    }\n\n    .form-control-feedback-custom {\n        position: absolute;\n        top: 0;\n        right: 0;\n        z-index: 2;\n        display: block;\n        width: 38px;\n        height: 38px;\n        line-height: 38px;\n        text-align: center;\n        pointer-events: none;\n    }\n\n    .has-feedback-custom label ~ .form-control-feedback-custom {\n        top: 32px;\n    }\n    .has-feedback-custom label.sr-only ~ .form-control-feedback-custom {\n        top: 0;\n    }"]
            },] },
];
/**
 * @nocollapse
 */
PasswordInputComponent.ctorParameters = function () { return []; };

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Pratik Kelwalkar
 *
 */
var ProgressComponent = (function () {
    function ProgressComponent() {
        this.showProgress = true;
    }
    /**
     * @return {?}
     */
    ProgressComponent.prototype.ngOnInit = function () {
        if (this.infinteMode) {
            this.displayText = 'Please wait';
            this.currentValue = '100';
            this.minValue = '0';
            this.maxValue = '100';
        }
        else
            this.displayText = this.currentValue + '%';
    };
    return ProgressComponent;
}());
ProgressComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-progress-bar',
                template: "\n\n      <div class=\"progress\" *ngIf=\"showProgress\">\n          <div class=\"progress-bar progress-bar-striped {{progressType !=null ? 'bg-'+progressType : ''}} active\" role=\"progressbar\" [attr.aria-valuenow]=\"currentValue\" [attr.aria-valuemin]=\"minValue\" [attr.aria-valuemax]=\"maxValue\" [style.width.%]=\"infinteMode ? 100 : this.currentValue\">\n              <span>{{infinteMode ? displayText : currentValue+'%'}}<span class=\"dotdotdot\"></span></span>\n          </div>\n      </div>\n\n  ",
                styles: ["\n        .progress {\n            margin: 15px;\n        }\n\n        .progress .progress-bar.active {\n            font-weight: 700;\n            animation: progress-bar-stripes .5s linear infinite;\n        }\n\n        .dotdotdot:after {\n            font-weight: 300;\n            content: '...';\n            display: inline-block;\n            width: 20px;\n            text-align: left;\n            animation: dotdotdot 1.5s linear infinite;\n        }\n\n        @keyframes dotdotdot {\n            0%   { content: '...'; }\n            25% { content: ''; }\n            50% { content: '.'; }\n            75% { content: '..'; }\n        }\n    "]
            },] },
];
/**
 * @nocollapse
 */
ProgressComponent.ctorParameters = function () { return []; };
ProgressComponent.propDecorators = {
    'showProgress': [{ type: _angular_core.Input },],
    'infinteMode': [{ type: _angular_core.Input },],
    'minValue': [{ type: _angular_core.Input },],
    'maxValue': [{ type: _angular_core.Input },],
    'currentValue': [{ type: _angular_core.Input },],
    'progressType': [{ type: _angular_core.Input },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var COLUMN_SIZE = 'col-lg-';
var RadioGroupComponent = (function () {
    /**
     * @param {?} amxHttp
     */
    function RadioGroupComponent(amxHttp) {
        this.amxHttp = amxHttp;
        this.enableBoxStyle = false;
        this.selectedValue = new _angular_core.EventEmitter();
        this.elementId = "radio-group-" + Math.floor(Math.random() * 90000) + 10000;
    }
    /**
     * @return {?}
     */
    RadioGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.calculatedColSize = COLUMN_SIZE + this.column;
        if (this.httpMethod && this.httpUrl) {
            this.amxHttp.fetchData(this.httpUrl, this.httpMethod).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setData(_this.responseData);
            });
        }
        else if (this.radioGroupBindData) {
            this.setData(this.radioGroupBindData);
        }
    };
    /**
     * @return {?}
     */
    RadioGroupComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    RadioGroupComponent.prototype.setData = function (httpResponse) {
        this.data = this.getResponseData(httpResponse);
        this.viewData = this.getResponseData(httpResponse);
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    RadioGroupComponent.prototype.getResponseData = function (httpResponse) {
        var /** @type {?} */ responsedata = httpResponse;
        if (this.dataReader != null) {
            var /** @type {?} */ dr = this.dataReader.split(".");
            if (dr != null) {
                for (var /** @type {?} */ ir = 0; ir < dr.length; ir++) {
                    responsedata = responsedata[dr[ir]];
                }
            }
        }
        else {
            responsedata = httpResponse;
        }
        return responsedata;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    RadioGroupComponent.prototype.filterData = function (event) {
        if (this.textValue.length > 0) {
            this.viewData = [];
            for (var /** @type {?} */ vd = 0; vd < this.data.length; vd++) {
                var /** @type {?} */ displayData = this.data[vd][this.displayField];
                if (displayData.toLowerCase().startsWith(this.textValue)) {
                    this.viewData.push(this.data[vd]);
                }
            }
        }
        else {
            this.viewData = this.data;
        }
    };
    /**
     * @param {?} rowData
     * @return {?}
     */
    RadioGroupComponent.prototype.setSelectedRadio = function (rowData) {
        this.selectedValue.emit(rowData);
    };
    return RadioGroupComponent;
}());
RadioGroupComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-radio-group',
                template: "\n\n        <ng-container  *ngIf=\"enableBoxStyle\">\n            <div class=\"form-group\">\n                <label  [attr.for]=\"elementId\">{{fieldLabel}}</label>\n\n                <div class=\"\" [ngClass]=\"{'row':column || column!='','list-group':!column ||column==''}\">\n                    <li class=\"list-group-item col-sm-12\" *ngIf=\"searchBox\"><span class=\"col-sm-12\">\n              <input [(ngModel)]=\"textValue\" type=\"text\" class=\"form-control\" placeholder=\"Please select\" (keyup)=\"filterData($event)\">\n            </span></li>\n                    <li class=\"list-group-item\" [ngClass]=\"calculatedColSize\"  *ngFor=\"let row of viewData;let i = index\">\n                        <label class=\"custom-control custom-radio\">\n                            <input class=\"custom-control-input\" [attr.id]=\"elementId+'CNT'+i\" type=\"radio\" [required]=\"allowBlank ? true: null\"  [attr.name] = \"fieldName\" (click)=\"setSelectedRadio(row)\" [checked]=\"row[valueField] == defaultSelectedValue ? true : false\">\n                            <span class=\"custom-control-indicator\"></span>\n                            <span class=\"custom-control-description\">{{row[displayField]}}</span>\n                        </label>\n                    </li>\n                </div>\n\n            </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"!enableBoxStyle\">\n            <div class=\"form-group\">\n                <label  [attr.for]=\"elementId\">{{fieldLabel}}</label>\n\n                <div class=\"\" [ngClass]=\"{'row':column || column!='','list-group':!column ||column==''}\">\n            <span class=\"col-sm-12\" *ngIf=\"searchBox\"><span class=\"col-sm-12\">\n              <input [(ngModel)]=\"textValue\" type=\"text\" class=\"form-control\" placeholder=\"Please select\" (keyup)=\"filterData($event)\">\n            </span></span>\n                    <span class=\"\" [ngClass]=\"calculatedColSize\"  *ngFor=\"let row of viewData;let i = index\">\n              <label class=\"custom-control custom-radio\">\n                <input class=\"custom-control-input\" [attr.id]=\"elementId+'CNT'+i\" type=\"radio\" [required]=\"allowBlank ? true: null\"  [attr.name] = \"fieldName\" (click)=\"setSelectedRadio(row)\" [checked]=\"row[valueField] == defaultSelectedValue ? true : false\">\n                <span class=\"custom-control-indicator\"></span>\n                <span class=\"custom-control-description\">{{row[displayField]}}</span>\n              </label>\n            </span>\n                </div>\n\n            </div>\n        </ng-container>\n\n\n\n    ",
                styles: ["/**\n A Style Sheet for all form inputs common used classes\n */\n\n    /** Form Validations & Icon Positioning **/\n    .has-feedback-custom {\n        position: relative;\n    }\n    .has-feedback-custom .form-control {\n        padding-right: 47.5px;\n    }\n\n    .form-control-feedback-custom {\n        position: absolute;\n        top: 0;\n        right: 0;\n        z-index: 2;\n        display: block;\n        width: 38px;\n        height: 38px;\n        line-height: 38px;\n        text-align: center;\n        pointer-events: none;\n    }\n\n    .has-feedback-custom label ~ .form-control-feedback-custom {\n        top: 32px;\n    }\n    .has-feedback-custom label.sr-only ~ .form-control-feedback-custom {\n        top: 0;\n    }"]
            },] },
];
/**
 * @nocollapse
 */
RadioGroupComponent.ctorParameters = function () { return [
    { type: CommonHttpService, },
]; };
RadioGroupComponent.propDecorators = {
    'enableBoxStyle': [{ type: _angular_core.Input },],
    'fieldLabel': [{ type: _angular_core.Input },],
    'fieldName': [{ type: _angular_core.Input },],
    'allowBlank': [{ type: _angular_core.Input },],
    'dataReader': [{ type: _angular_core.Input },],
    'httpMethod': [{ type: _angular_core.Input },],
    'httpUrl': [{ type: _angular_core.Input },],
    'displayField': [{ type: _angular_core.Input },],
    'valueField': [{ type: _angular_core.Input },],
    'radioGroupBindData': [{ type: _angular_core.Input },],
    'searchBox': [{ type: _angular_core.Input },],
    'column': [{ type: _angular_core.Input },],
    'selectedValue': [{ type: _angular_core.Output },],
    'defaultSelectedValue': [{ type: _angular_core.Input },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author -  Pratik Kelwalkar
 *
 */
var RatingInputComponent = (function () {
    function RatingInputComponent() {
        // -------------------------------------------------------------------------
        // Inputs
        // -------------------------------------------------------------------------
        this.iconClass = "amexio-star-icon";
        this.fullIcon = "★";
        this.emptyIcon = "☆";
        this.titles = [];
        // -------------------------------------------------------------------------
        // Outputs
        // -------------------------------------------------------------------------
        this.onHover = new _angular_core.EventEmitter();
        this.onLeave = new _angular_core.EventEmitter();
        this.hovered = 0;
        this.hoveredPercent = undefined;
        this._max = 5;
    }
    Object.defineProperty(RatingInputComponent.prototype, "max", {
        /**
         * @return {?}
         */
        get: function () {
            return this._max;
        },
        /**
         * @param {?} max
         * @return {?}
         */
        set: function (max) {
            this._max = max;
            this.buildRanges();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    RatingInputComponent.prototype.writeValue = function (value) {
        /*if (value % 1 !== value) {
         this.model = Math.round(value);
         return;
         }*/
        this.model = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RatingInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RatingInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} c
     * @return {?}
     */
    RatingInputComponent.prototype.validate = function (c) {
        if (this.required && !c.value) {
            return {
                required: true
            };
        }
        return null;
    };
    /**
     * @return {?}
     */
    RatingInputComponent.prototype.ngOnInit = function () {
        this.buildRanges();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    RatingInputComponent.prototype.onKeydown = function (event) {
        if ([37, 38, 39, 40].indexOf(event.which) === -1 || this.hovered)
            return;
        event.preventDefault();
        event.stopPropagation();
        var /** @type {?} */ increment = this.float ? 0.5 : 1;
        this.rate(this.model + (event.which === 38 || event.which === 39 ? increment : increment * -1));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    RatingInputComponent.prototype.calculateWidth = function (item) {
        if (this.hovered > 0) {
            if (this.hoveredPercent !== undefined && this.hovered === item)
                return this.hoveredPercent;
            return this.hovered >= item ? 100 : 0;
        }
        return this.model >= item ? 100 : 100 - Math.round((item - this.model) * 10) * 10;
    };
    /**
     * @param {?} hovered
     * @return {?}
     */
    RatingInputComponent.prototype.setHovered = function (hovered) {
        if (!this.readonly && !this.disabled) {
            this.hovered = hovered;
            this.onHover.emit(hovered);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    RatingInputComponent.prototype.changeHovered = function (event) {
        if (!this.float)
            return;
        var /** @type {?} */ target = (event.target);
        var /** @type {?} */ relativeX = event.pageX - target.offsetLeft;
        var /** @type {?} */ percent = Math.round((relativeX * 100 / target.offsetWidth) / 10) * 10;
        this.hoveredPercent = percent > 50 ? 100 : 50;
    };
    /**
     * @return {?}
     */
    RatingInputComponent.prototype.resetHovered = function () {
        this.hovered = 0;
        this.hoveredPercent = undefined;
        this.onLeave.emit(this.hovered);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RatingInputComponent.prototype.rate = function (value) {
        if (!this.readonly && !this.disabled && value >= 0 && value <= this.ratingRange.length) {
            var /** @type {?} */ newValue = this.hoveredPercent ? (value - 1) + this.hoveredPercent / 100 : value;
            this.onChange(newValue);
            this.model = newValue;
        }
    };
    /**
     * @return {?}
     */
    RatingInputComponent.prototype.buildRanges = function () {
        this.ratingRange = this.range(1, this.max);
    };
    /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    RatingInputComponent.prototype.range = function (start, end) {
        var /** @type {?} */ foo = [];
        for (var /** @type {?} */ i = start; i <= end; i++) {
            foo.push(i);
        }
        return foo;
    };
    return RatingInputComponent;
}());
RatingInputComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-rating-input',
                template: "\n    <span (mouseleave)=\"resetHovered()\"\n          class=\"amexio-rating\"\n          [class.disabled]=\"disabled\"\n          [class.readonly]=\"readonly\"\n          tabindex=\"0\"\n          role=\"slider\"\n          aria-valuemin=\"0\"\n          [attr.aria-valuemax]=\"ratingRange.length\"\n          [attr.aria-valuenow]=\"model\">\n    <span *ngFor=\"let item of ratingRange; let index = index\">\n        <i (mouseenter)=\"setHovered(item)\"\n           (mousemove)=\"changeHovered($event)\"\n           (click)=\"rate(item)\"\n           [attr.data-icon]=\"fullIcon\"\n           class=\"{{ iconClass }} half{{ calculateWidth(item) }}\"\n           [title]=\"titles[index] || item\">{{ emptyIcon }}</i>\n    </span>\n</span>\n  ",
                providers: [
                    { provide: _angular_forms.NG_VALUE_ACCESSOR, useExisting: _angular_core.forwardRef(function () { return RatingInputComponent; }), multi: true },
                    { provide: _angular_forms.NG_VALIDATORS, useExisting: _angular_core.forwardRef(function () { return RatingInputComponent; }), multi: true },
                ],
                styles: [
                    "/**\n A Style Sheet for all form inputs common used classes\n */\n\n      /** Form Validations & Icon Positioning **/\n      .has-feedback-custom {\n          position: relative;\n      }\n      .has-feedback-custom .form-control {\n          padding-right: 47.5px;\n      }\n\n      .form-control-feedback-custom {\n          position: absolute;\n          top: 0;\n          right: 0;\n          z-index: 2;\n          display: block;\n          width: 38px;\n          height: 38px;\n          line-height: 38px;\n          text-align: center;\n          pointer-events: none;\n      }\n\n      .has-feedback-custom label ~ .form-control-feedback-custom {\n          top: 32px;\n      }\n      .has-feedback-custom label.sr-only ~ .form-control-feedback-custom {\n          top: 0;\n      }\n      .amexio-rating {\n          cursor: pointer;\n          outline: none;\n      }\n      .amexio-rating.readonly {\n          cursor: default;\n      }\n      .amexio-rating.disabled {\n          cursor: not-allowed;\n      }\n      .amexio-rating i{\n          font-style: normal;\n      }\n      .amexio-star-icon {\n          color: #666666;\n          font-size: 2em;\n          position: relative;\n          border-color: 1px solid black;\n      }\n      .amexio-star-icon:before {\n          color: #FDE16D;\n          content: attr(data-icon) \" \";\n          position: absolute;\n          left: 0;\n          overflow: hidden;\n          width: 0;\n      }\n      .amexio-rating.disabled .amexio-star-icon:before {\n          color: #ECECEC;\n          text-shadow: none;\n      }\n      .amexio-star-icon.half10:before {\n          width: 10%;\n      }\n      .amexio-star-icon.half20:before {\n          width: 20%;\n      }\n      .amexio-star-icon.half30:before {\n          width: 30%;\n      }\n      .amexio-star-icon.half40:before {\n          width: 40%;\n      }\n      .amexio-star-icon.half50:before {\n          width: 50%;\n      }\n      .amexio-star-icon.half60:before {\n          width: 60%;\n      }\n      .amexio-star-icon.half70:before {\n          width: 70%;\n      }\n      .amexio-star-icon.half80:before {\n          width: 80%;\n      }\n      .amexio-star-icon.half90:before {\n          width: 90%;\n      }\n      .amexio-star-icon.half100:before {\n          width: 100%;\n      }\n      @-moz-document url-prefix() { /* Firefox Hack */\n          .amexio-star-icon {\n              font-size: 50px;\n              line-height: 34px;\n          }\n      }\n    "
                ]
            },] },
];
/**
 * @nocollapse
 */
RatingInputComponent.ctorParameters = function () { return []; };
RatingInputComponent.propDecorators = {
    'iconClass': [{ type: _angular_core.Input },],
    'fullIcon': [{ type: _angular_core.Input },],
    'emptyIcon': [{ type: _angular_core.Input },],
    'readonly': [{ type: _angular_core.Input },],
    'disabled': [{ type: _angular_core.Input },],
    'required': [{ type: _angular_core.Input },],
    'float': [{ type: _angular_core.Input },],
    'titles': [{ type: _angular_core.Input },],
    'max': [{ type: _angular_core.Input },],
    'onHover': [{ type: _angular_core.Output },],
    'onLeave': [{ type: _angular_core.Output },],
    'onKeydown': [{ type: _angular_core.HostListener, args: ["keydown", ["$event"],] },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var __extends$5 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var noop$6 = function () {
};
var CUSTOM_TEXT_AREA_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return TextAreaComponent; }),
    multi: true
};
var BASE_IMPL_TEXTAREA_INPUT = {
    provide: FormInputBase,
    useExisting: _angular_core.forwardRef(function () { return TextAreaComponent; })
};
var TextAreaComponent = (function (_super) {
    __extends$5(TextAreaComponent, _super);
    function TextAreaComponent() {
        var _this = _super.call(this) || this;
        _this.innerValue = '';
        _this.onTouchedCallback = noop$6;
        _this.onChangeCallback = noop$6;
        _this.elementId = 'input-text-' + Math.floor(Math.random() * 90000) + 10000;
        _this.spanId = 'span-msg-' + Math.random();
        if (_this.iconFeedBack)
            _this.divCss = 'form-group has-feedback';
        else
            _this.divCss = 'form-group has-feedback has-feedback-custom';
        return _this;
    }
    /**
     * @return {?}
     */
    TextAreaComponent.prototype.ngOnInit = function () {
        if (this.errorMsg)
            this.helpInfoMsg = this.errorMsg + '<br/>';
        if (!this.iconFeedBack)
            this.fieldglyphIcon = 'form-control-feedback glyphicon glyphicon-' + this.fieldIcon;
        //Regex check
        if (this.pattern != null) {
            this.regEx = new RegExp(this.pattern);
        }
        if (this.popoverPlacement == null) {
            this.popoverPlacement = 'bottom';
        }
        if (this.enablePopOver) {
            this.popoverField = 'popover';
        }
    };
    /**
     * @return {?}
     */
    TextAreaComponent.prototype.ngAfterViewInit = function () {
        $('[data-toggle="popover"]').popover();
    };
    Object.defineProperty(TextAreaComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this.innerValue;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    /**
     * @return {?}
     */
    TextAreaComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
        this.validate();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TextAreaComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TextAreaComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TextAreaComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @return {?}
     */
    TextAreaComponent.prototype.validate = function () {
        this.isValid = this.isValidInput();
    };
    /**
     * @return {?}
     */
    TextAreaComponent.prototype.isValidInput = function () {
        var /** @type {?} */ hasError = false;
        if ((this.allowBlank && (!this.value || this.value.length == 0))) {
            hasError = true;
        }
        else if (this.pattern != null && !this.regEx.test(this.value)) {
            hasError = true;
        }
        if (hasError) {
            this.setValidClassNames();
        }
        else {
            this.setInvalidatedClassNames();
        }
        return hasError;
    };
    return TextAreaComponent;
}(FormInputBase));
TextAreaComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-textarea-input',
                template: "<div [attr.class]=\"divCss\">\n\n        <ng-container *ngIf=\"hasLabel\">\n            <label [attr.for]=\"elementId\"\n                   [style.font-style]=\"fontStyle\"\n                   [style.font-family]=\"fontFamily\"\n                   [style.font-size]=\"fontSize\"\n                   class=\"control-label\">\n                {{fieldLabel}}\n            </label>\n        </ng-container>\n\n        <textarea type=\"text\"\n                  (blur)=\"onBlur()\"\n                  autocomplete=\"off\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"value\"\n                  [attr.fieldName] = \"fieldName\"\n                  [attr.rows]=\"noOfrows\"\n                  [attr.cols]=\"noOfCols\"\n                  [attr.id]=\"elementId\"\n                  [attr.placeholder]=\"placeholder\"\n                  [attr.disabled] = \"disabled ? true: null\"\n                  [required]=\"allowBlank ? true: null\"\n                  [attr.data-error]=\"errorMsg\"\n                  [attr.aria-describedby]=\"spanId\"\n                  [attr.data-toggle]=\"popoverField\" title=\"Info\" [attr.data-placement]=\"popoverPlacement\"  data-trigger=\"focus\"  data-html=\"true\"  [attr.data-content]=\"helpInfoMsg\"\n\n        >\n\n        </textarea>\n\n        <ng-container *ngIf=\"!iconFeedBack\">\n            <i [class]=\"fieldglyphIcon\"></i>\n        </ng-container>\n\n        <div class=\"help-block with-errors\"></div>\n\n    </div>\n    ",
                providers: [CUSTOM_TEXT_AREA_INPUT_CONTROL_VALUE_ACCESSOR, BASE_IMPL_TEXTAREA_INPUT],
                styles: ["\n        /**\n A Style Sheet for all form inputs common used classes\n */\n\n        /** Form Validations & Icon Positioning **/\n        .has-feedback-custom {\n            position: relative;\n        }\n        .has-feedback-custom .form-control {\n            padding-right: 47.5px;\n        }\n\n        .form-control-feedback-custom {\n            position: absolute;\n            top: 0;\n            right: 0;\n            z-index: 2;\n            display: block;\n            width: 38px;\n            height: 38px;\n            line-height: 38px;\n            text-align: center;\n            pointer-events: none;\n        }\n\n        .has-feedback-custom label ~ .form-control-feedback-custom {\n            top: 32px;\n        }\n        .has-feedback-custom label.sr-only ~ .form-control-feedback-custom {\n            top: 0;\n        }\n    "]
            },] },
];
/**
 * @nocollapse
 */
TextAreaComponent.ctorParameters = function () { return []; };
TextAreaComponent.propDecorators = {
    'noOfrows': [{ type: _angular_core.Input },],
    'noOfCols': [{ type: _angular_core.Input },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author -  Pratik Kelwalkar
 *
 */
var __extends$6 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var noop$7 = function () {
};
var CUSTOM_AUTO_COMPLETE_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return TypeAheadComponent; }),
    multi: true
};
var BASE_IMPL_AUTO_COMPLETE = {
    provide: FormInputBase,
    useExisting: _angular_core.forwardRef(function () { return TypeAheadComponent; })
};
var TypeAheadComponent = (function (_super) {
    __extends$6(TypeAheadComponent, _super);
    /**
     * @param {?} amxHttp
     */
    function TypeAheadComponent(amxHttp) {
        var _this = _super.call(this) || this;
        _this.amxHttp = amxHttp;
        _this.filteredResult = [];
        _this.showDropDown = false;
        _this.innerValue = '';
        _this.onTouchedCallback = noop$7;
        _this.onChangeCallback = noop$7;
        _this.elementId = 'auto-complete-' + Math.floor(Math.random() * 90000) + 10000;
        return _this;
    }
    /**
     * @return {?}
     */
    TypeAheadComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.triggerChar == null) {
            this.triggerChar = 1;
        }
        if (this.httpMethod && this.httpUrl) {
            this.amxHttp.fetchData(this.httpUrl, this.httpMethod).subscribe(function (res) {
                _this.responseData = res.json();
            }, function (error) {
            }, function () {
                _this.setData(_this.responseData);
            });
        }
        else if (this.datalist) {
            this.setData(this.datalist);
        }
    };
    /**
     * @return {?}
     */
    TypeAheadComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TypeAheadComponent.prototype.onKeyUp = function (event) {
        var _this = this;
        this.filteredResult = [];
        this.showDropDown = false;
        var /** @type {?} */ keyword = event.target.value;
        if (keyword != null && keyword != ' ' && keyword.length >= this.triggerChar) {
            var /** @type {?} */ search_term_1 = keyword.toLowerCase();
            this.data.forEach(function (item) {
                if (item != null) {
                    if (item[_this.key].toLowerCase().startsWith(search_term_1)) {
                        _this.filteredResult.push(item);
                    }
                }
            });
            if (this.filteredResult.length > 0)
                this.showOptions();
            else {
                this.showDropDown = false;
            }
        }
    };
    /**
     * @return {?}
     */
    TypeAheadComponent.prototype.showOptions = function () {
        this.showDropDown = true;
    };
    Object.defineProperty(TypeAheadComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this.innerValue;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    /**
     * @return {?}
     */
    TypeAheadComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TypeAheadComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TypeAheadComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TypeAheadComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TypeAheadComponent.prototype.setData = function (data) {
        var /** @type {?} */ autocompleteData = this.getResponseData(data);
        if (autocompleteData) {
            this.data = autocompleteData;
        }
    };
    /**
     * @param {?} value
     * @param {?} ref
     * @return {?}
     */
    TypeAheadComponent.prototype.setValue = function (value, ref) {
        this.value = value;
        this.showDropDown = false;
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    TypeAheadComponent.prototype.getResponseData = function (httpResponse) {
        var /** @type {?} */ responsedata = httpResponse;
        var /** @type {?} */ dr = this.dataReader.split(".");
        for (var /** @type {?} */ ir = 0; ir < dr.length; ir++) {
            responsedata = responsedata[dr[ir]];
        }
        return responsedata;
    };
    /**
     * @param {?} inp
     * @return {?}
     */
    TypeAheadComponent.prototype.clearResult = function (inp) {
        this.showDropDown = false;
        this.filteredResult = [];
        inp.value = null;
        this.value = null;
    };
    return TypeAheadComponent;
}(FormInputBase));
TypeAheadComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-typeahead',
                template: "\n      <div class=\"form-group\">\n          \n     \n      <ng-container *ngIf=\"fieldLabel\">\n          <label [attr.for]=\"elementId\">{{fieldLabel}}</label>\n      </ng-container>\n    \n    <div class=\"dropdown amexio-dropdown amexio-typeahead \" data-toggle=\"dropdown\" [ngClass]=\"{'show': showDropDown}\">\n        <input type=\"search\" class=\"form-control\" [attr.aria-expanded]=\"showDropDown\"\n               [attr.id]=\"elementId\"  (keyup)=\"onKeyUp($event)\"\n               [placeholder]=\"placeholder\"\n               (blur)=\"onBlur()\"  [(ngModel)]=\"value\" #inp>\n     \n      <ul class=\"dropdown-menu amexio-dropdown-menu amexio-scrollable-options\" style=\"width: 100%\">\n        <li class=\"amexio-dropdown-records\" *ngFor=\"let item of filteredResult\" (click)=\"setValue(item[key],inp)\" style=\"cursor: pointer;\">\n            {{item[key]}}\n        </li>\n      </ul>\n    </div>\n      </div>\n  ",
                providers: [CUSTOM_AUTO_COMPLETE_CONTROL_VALUE_ACCESSOR, BASE_IMPL_AUTO_COMPLETE, CommonHttpService],
                styles: [
                    ".amexio-scrollable-options {\n          height: auto;\n          max-height: 200px;\n          overflow-x: hidden;\n      }\n      /**\n   A Style Sheet for all form inputs common used classes\n   */\n\n      /** Form Validations & Icon Positioning **/\n      .has-feedback-custom {\n          position: relative;\n      }\n      .has-feedback-custom .form-control {\n          padding-right: 47.5px;\n      }\n\n      .form-control-feedback-custom {\n          position: absolute;\n          top: 0;\n          right: 0;\n          z-index: 2;\n          display: block;\n          width: 38px;\n          height: 38px;\n          line-height: 38px;\n          text-align: center;\n          pointer-events: none;\n      }\n\n      .has-feedback-custom label ~ .form-control-feedback-custom {\n          top: 32px;\n      }\n      .has-feedback-custom label.sr-only ~ .form-control-feedback-custom {\n          top: 0;\n      }\n      .amexio-typeahead{\n          \n      }\n      .amexio-typeahead .form-control{\n          border: none;\n      }\n    "
                ]
            },] },
];
/**
 * @nocollapse
 */
TypeAheadComponent.ctorParameters = function () { return [
    { type: CommonHttpService, },
]; };
TypeAheadComponent.propDecorators = {
    'httpUrl': [{ type: _angular_core.Input },],
    'httpMethod': [{ type: _angular_core.Input },],
    'dataReader': [{ type: _angular_core.Input },],
    'datalist': [{ type: _angular_core.Input },],
    'key': [{ type: _angular_core.Input },],
    'triggerChar': [{ type: _angular_core.Input },],
    'placeholder': [{ type: _angular_core.Input },],
};

var TabComponent = (function () {
    function TabComponent() {
        this.active = false;
        this.disabled = false;
        this.elementId = 'tab-pill' + Math.floor(Math.random() * 90000) + 10000;
    }
    /**
     * @return {?}
     */
    TabComponent.prototype.ngOnInit = function () {
    };
    return TabComponent;
}());
TabComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-tab',
                template: "\n    <div [ngClass]=\"cClass\" role=\"tabpanel\" class=\"tab-pane active\" [attr.id]=\"elementId\">\n      <ng-content *ngIf=\"active\"></ng-content>\n    </div>\n  "
            },] },
];
/**
 * @nocollapse
 */
TabComponent.ctorParameters = function () { return []; };
TabComponent.propDecorators = {
    'title': [{ type: _angular_core.Input },],
    'active': [{ type: _angular_core.Input },],
    'disabled': [{ type: _angular_core.Input },],
    'icon': [{ type: _angular_core.Input },],
    'cClass': [{ type: _angular_core.Input },],
};

var TabPaneComponent = (function () {
    function TabPaneComponent() {
        this.elementId = 'tabpane-' + Math.floor(Math.random() * 90000) + 10000;
    }
    /**
     * @return {?}
     */
    TabPaneComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    TabPaneComponent.prototype.ngAfterContentInit = function () {
        this.tabs = this.queryTabs.toArray();
    };
    /**
     * @return {?}
     */
    TabPaneComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.reAdjust();
        });
    };
    /**
     * @param {?} elementId
     * @return {?}
     */
    TabPaneComponent.prototype.closeTab = function (elementId) {
        var /** @type {?} */ newTab = [];
        var /** @type {?} */ tabs = this.tabs;
        var /** @type {?} */ index = 0;
        var /** @type {?} */ tabHighlightIndex = 0;
        tabs.forEach(function (tab) {
            tab.active = false;
            if (tab.elementId == elementId) {
                tabHighlightIndex = index;
            }
            if (tab.elementId != elementId) {
                newTab.push(tab);
            }
            index++;
        });
        if (tabHighlightIndex == newTab.length) {
            tabHighlightIndex--;
        }
        document.getElementById(elementId).parentNode.removeChild(document.getElementById(elementId));
        this.activateTab(newTab[tabHighlightIndex].elementId);
        this.tabs = newTab;
        if (this.tabs.length == 1) {
            this.closable = false;
        }
        this.reAdjust();
    };
    /**
     * @return {?}
     */
    TabPaneComponent.prototype.widthOfList = function () {
        var /** @type {?} */ itemsWidth = 0;
        $('#list-' + this.elementId + ' li').each(function () {
            var /** @type {?} */ itemWidth = $(this).outerWidth();
            itemsWidth += itemWidth;
        });
        return itemsWidth;
    };
    /**
     * @return {?}
     */
    TabPaneComponent.prototype.rightClick = function () {
        this.navAdjust('left-' + this.elementId, 'block');
        var /** @type {?} */ ts = document.getElementById('amexio-tabpane-wrapper-' + this.elementId);
        ts.scrollLeft += 200;
        if ((ts.scrollWidth - ts.offsetWidth - ts.scrollLeft) <= 0) {
            this.navAdjust('right-' + this.elementId, 'none');
        }
    };
    /**
     * @return {?}
     */
    TabPaneComponent.prototype.leftClick = function () {
        this.navAdjust('right-' + this.elementId, 'block');
        var /** @type {?} */ ts = document.getElementById('amexio-tabpane-wrapper-' + this.elementId);
        ts.scrollLeft -= 200;
        if (ts.scrollLeft == 0) {
            this.navAdjust('left-' + this.elementId, 'none');
        }
    };
    /**
     * @return {?}
     */
    TabPaneComponent.prototype.reAdjust = function () {
        var /** @type {?} */ listWidth1 = Math.round(this.widthOfList()) + 1;
        var /** @type {?} */ listWidth = Math.round($('#' + this.elementId).outerWidth()) + 10;
        if (listWidth1 > listWidth) {
            listWidth = listWidth1;
            this.navAdjust('right-' + this.elementId, 'block');
        }
        else {
            this.navAdjust('right-' + this.elementId, 'none');
            this.navAdjust('left-' + this.elementId, 'none');
        }
        $('#list-' + this.elementId).css('minWidth', listWidth + 'px');
    };
    /**
     * @param {?} elementId
     * @param {?} display
     * @return {?}
     */
    TabPaneComponent.prototype.navAdjust = function (elementId, display) {
        $('#' + elementId).css('display', display);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TabPaneComponent.prototype.onResize = function (event) {
        this.reAdjust();
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabPaneComponent.prototype.getTabClass = function (tab) {
        var /** @type {?} */ cls = 'nav-link ';
        if (tab.active && tab.active == true) {
            cls = cls + ' active';
        }
        if (tab.icon) {
            cls = cls + ' ' + tab.icon;
        }
        return cls;
    };
    /**
     * @param {?} tabId
     * @return {?}
     */
    TabPaneComponent.prototype.activateTab = function (tabId) {
        var /** @type {?} */ tabs = this.tabs;
        tabs.forEach(function (tab) {
            tab.active = false;
            if (tab.elementId == tabId) {
                tab.active = true;
            }
        });
    };
    return TabPaneComponent;
}());
TabPaneComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-tab-pane',
                template: "\n\n    <div [ngClass]=\"cClass\" [attr.id]=\"elementId\" (window:resize)=\"onResize($event)\">\n    <div (click)=\"leftClick()\" class=\"amexio-tabpane-scroller amexio-tabpane-scroller-left\" >\n      <span class=\"amexio-tabpane-hide-span\"  [attr.id]=\"'left-'+elementId\"><i class=\"fa fa-caret-left fa-2x\" aria-hidden=\"true\"></i></span>\n    </div>\n    <div (click)=\"rightClick()\" class=\"amexio-tabpane-scroller amexio-tabpane-scroller-right\">\n      <span class=\"amexio-tabpane-display-span\" [attr.id]=\"'right-'+elementId\"><i class=\"fa fa-caret-right fa-2x\" aria-hidden=\"true\"></i></span>\n    </div>\n    \n    <div class=\"amexio-tabpane-wrapper\" [attr.id]=\"'amexio-tabpane-wrapper-'+elementId\">\n      <ul class=\"nav nav-tabs amexio-tabs\" role=\"tablist\" [attr.id]=\"'list-'+elementId\">\n        <li class=\"nav-item\" *ngFor=\"let tab of tabs\" >\n          <a [class]=\"getTabClass(tab)\" data-toggle=\"tab\"  role=\"tab\" [ngClass]=\"{'active':tab.active}\" style=\"cursor: pointer;\" (click)=\"activateTab(tab.elementId)\" [attr.id]=\"tab.elementId\" >&nbsp;{{tab.title}}&nbsp;&nbsp;<a *ngIf=\"closable\" id=\"'closable-'+{{tab.elementId}}\" class=\"amexio-tabpane-closeicon-position\" (click)=\"closeTab(tab.elementId)\">&times;</a></a>\n        </li>\n      </ul>\n    </div>\n    </div>\n    \n    <div>\n      <ng-content ></ng-content>\n    </div>\n    \n  ",
                styles: ["\n      .amexio-tab-list {\n          position:absolute;\n          left:0px;\n          top:0px;\n          margin-left:12px;\n          margin-top:0px;\n      }\n\n      .amexio-tabpane-list li{\n          display:table-cell;\n          position:relative;\n          text-align:center;\n          cursor:grab;\n          cursor:-webkit-grab;\n          color:#efefef;\n          vertical-align:middle;\n      }\n\n      .amexio-tabpane-wrapper {\n          position:relative;\n          margin:0 auto;\n          overflow:hidden;\n          padding:5px;\n          height: 50px;\n      }\n\n      .amexio-tabpane-scroller {\n          text-align:center;\n          cursor:pointer;\n          padding-top:15px;\n          vertical-align: top;\n      }\n\n      .amexio-tabpane-scroller-right{\n          float:right;\n      }\n\n      .amexio-tabpane-scroller-left {\n          float:left;\n      }\n      .amexio-tabpane-hide-span{\n          display: none;\n      }\n      .amexio-tabpane-display-span{\n          display: block;\n      }\n      .amexio-tabpane-closeicon-position{\n          vertical-align: top;\n          cursor: pointer;\n      }\n      .amexio-tabs{\n          \n      }\n  "]
            },] },
];
/**
 * @nocollapse
 */
TabPaneComponent.ctorParameters = function () { return []; };
TabPaneComponent.propDecorators = {
    'closable': [{ type: _angular_core.Input },],
    'tapPosition': [{ type: _angular_core.Input },],
    'cClass': [{ type: _angular_core.Input },],
    'queryTabs': [{ type: _angular_core.ContentChildren, args: [TabComponent,] },],
};

/**
 * Created by ketangote on 7/17/17.
 */
var VerticalLeftTabPaneComponent = (function () {
    function VerticalLeftTabPaneComponent() {
        this.elementId = 'vertical-left-tabpane-' + Math.floor(Math.random() * 90000) + 10000;
        this.verticalText = false;
        this.tabwidth = "15%";
    }
    /**
     * @return {?}
     */
    VerticalLeftTabPaneComponent.prototype.ngOnInit = function () {
        if (this.verticalText) {
            this.tapPosition = 'nav flex-column amexio-verticallefttab-vertical-text';
        }
        else {
            this.tapPosition = 'nav flex-column';
        }
    };
    /**
     * @return {?}
     */
    VerticalLeftTabPaneComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    VerticalLeftTabPaneComponent.prototype.ngAfterContentInit = function () {
        this.tabs = this.queryTabs.toArray();
    };
    /**
     * @param {?} tabId
     * @return {?}
     */
    VerticalLeftTabPaneComponent.prototype.activateTab = function (tabId) {
        var /** @type {?} */ tabs = this.tabs;
        tabs.forEach(function (tab) {
            tab.active = false;
            if (tab.elementId == tabId)
                tab.active = true;
        });
    };
    return VerticalLeftTabPaneComponent;
}());
VerticalLeftTabPaneComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-vertical-left-tab-pane',
                template: "\n    <table [ngClass]=\"cClass\" >\n      <tr>\n        <td [attr.width]=\"tabwidth\" valign=\"top\">\n          <ul [ngClass]=\"tapPosition\">\n            <li *ngFor=\"let tab of tabs\" class=\"nav-item\">\n              <a (click)=\"activateTab(tab.elementId)\" [ngClass]=\"{'amexio-verticallefttab-active':(tab.active && !verticalText), 'amexio-verticallefttab-inactive':(!tab.active && !verticalText),'amexio-verticallefttab-activevertical':(tab.active && verticalText), 'amexio-verticallefttab-inactivevertical':(!tab.active && verticalText)}\" class=\"nav-link \" [attr.id]=\"tab.elementId\" style=\"cursor: pointer;\"> <i *ngIf=\"tab.icon\" [ngClass]=\"tab.icon\"></i>&nbsp;{{tab.title}}</a>\n            </li>\n          </ul>\n        </td>\n        <td valign=\"top\">\n          <div class=\"amexio-verticallefttab-td-padding\">\n            <ng-content ></ng-content>\n          </div>\n        </td>\n      </tr>\n    </table>\n\n    \n  ",
                styles: ["\n      .amexio-verticallefttab-active{\n          border-bottom: 1px solid #ddd;\n          border-top: 1px solid #ddd;\n          border-left: 1px solid #ddd;\n          border-right: none;\n          border-right-color: transparent;\n          display: block;\n      }\n\n      .amexio-verticallefttab-inactive{\n          border-right: 1px solid #ddd;;\n      }\n\n      .amexio-verticallefttab-activevertical{\n          border-left: 1px solid #ddd;\n          border-right: 1px solid #ddd;\n          border-top: 1px solid #ddd;\n      }\n\n      .amexio-verticallefttab-inactivevertical{\n          border-bottom: 1px solid #ddd;\n      }\n\n      .amexio-verticallefttab-vertical-text {\n          margin-top:50px;\n          border: none;\n          position: relative;\n      }\n      .amexio-verticallefttab-vertical-text>li {\n          height: 20px;\n          width: 120px;\n          margin-bottom: 100px;\n      }\n      .amexio-verticallefttab-vertical-text>li>a {\n          text-align: center;\n\n          -webkit-transform: rotate(-90deg);\n          -moz-transform: rotate(-90deg);\n          -ms-transform: rotate(-90deg);\n          -o-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n      }\n      .amexio-verticallefttab-td-padding{\n          padding: 5px;\n      }\n  "]
            },] },
];
/**
 * @nocollapse
 */
VerticalLeftTabPaneComponent.ctorParameters = function () { return []; };
VerticalLeftTabPaneComponent.propDecorators = {
    'tabs': [{ type: _angular_core.Input },],
    'tapPosition': [{ type: _angular_core.Input },],
    'verticalText': [{ type: _angular_core.Input },],
    'tabwidth': [{ type: _angular_core.Input },],
    'cClass': [{ type: _angular_core.Input },],
    'queryTabs': [{ type: _angular_core.ContentChildren, args: [TabComponent,] },],
};

/**
 * Created by ketangote on 7/25/17.
 */
var VerticalRightTabPaneComponent = (function () {
    function VerticalRightTabPaneComponent() {
        this.elementId = 'vertical-right-tabpane-' + Math.floor(Math.random() * 90000) + 10000;
        this.verticalText = false;
        this.tabwidth = "15%";
    }
    /**
     * @return {?}
     */
    VerticalRightTabPaneComponent.prototype.ngOnInit = function () {
        if (this.verticalText) {
            this.tapPosition = 'nav flex-column amexio-verticalrighttab-vertical-text';
        }
        else {
            this.tapPosition = 'nav flex-column';
        }
    };
    /**
     * @return {?}
     */
    VerticalRightTabPaneComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    VerticalRightTabPaneComponent.prototype.ngAfterContentInit = function () {
        this.tabs = this.queryTabs.toArray();
    };
    /**
     * @param {?} tabId
     * @return {?}
     */
    VerticalRightTabPaneComponent.prototype.activateTab = function (tabId) {
        var /** @type {?} */ tabs = this.tabs;
        tabs.forEach(function (tab) {
            tab.active = false;
            if (tab.elementId == tabId) {
                tab.active = true;
            }
        });
    };
    return VerticalRightTabPaneComponent;
}());
VerticalRightTabPaneComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-vertical-right-tab-pane',
                template: "\n    <table [ngClass]=\"cClass\">\n      <tr>\n        <td valign=\"top\">\n          <div class=\"amexio-verticalrighttab-td-padding\">\n            <ng-content ></ng-content>\n          </div>\n        </td>\n        <td [attr.width]=\"tabwidth\">\n          <ul [ngClass]=\"tapPosition\">\n            <li *ngFor=\"let tab of tabs\" class=\"nav-item\">\n              <a (click)=\"activateTab(tab.elementId)\" [ngClass]=\"{'amexio-verticalrighttab-active':(tab.active && !verticalText), 'amexio-verticalrighttab-inactive':(!tab.active && !verticalText),'amexio-verticalrighttab-activevertical':(tab.active && verticalText), 'amexio-verticalrighttab-inactivevertical':(!tab.active && verticalText)}\" class=\"nav-link \" [attr.id]=\"tab.elementId\" style=\"cursor: pointer;\"> <i *ngIf=\"tab.icon\" [ngClass]=\"tab.icon\"></i>&nbsp;{{tab.title}}</a>\n            </li>\n          </ul>\n        </td>\n      </tr>\n    </table>\n\n\n  ",
                styles: ["\n      .amexio-verticalrighttab-active{\n          border-bottom: 1px solid #ddd;\n          border-top: 1px solid #ddd;\n          border-right: 1px solid #ddd;\n          border-left: none;\n          border-left-color: transparent;\n          display: block;\n      }\n\n      .amexio-verticalrighttab-inactive{\n          border-left: 1px solid #ddd;;\n      }\n\n      .amexio-verticalrighttab-activevertical{\n          border-left: 1px solid #ddd;\n          border-right: 1px solid #ddd;\n          border-bottom: 1px solid #ddd;\n      }\n\n      .amexio-verticalrighttab-inactivevertical{\n          border-top: 1px solid #ddd;\n      }\n\n      .amexio-verticalrighttab-vertical-text {\n          margin-top:50px;\n          border: none;\n          position: relative;\n      }\n      .amexio-verticalrighttab-vertical-text>li {\n          height: 20px;\n          width: 120px;\n          margin-bottom: 100px;\n      }\n      .amexio-verticalrighttab-vertical-text>li>a {\n          text-align: center;\n          -webkit-transform: rotate(-90deg);\n          -moz-transform: rotate(-90deg);\n          -ms-transform: rotate(-90deg);\n          -o-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n      }\n      .amexio-verticalrighttab-td-padding{\n          padding: 5px;\n      }\n\n\n  "]
            },] },
];
/**
 * @nocollapse
 */
VerticalRightTabPaneComponent.ctorParameters = function () { return []; };
VerticalRightTabPaneComponent.propDecorators = {
    'tabs': [{ type: _angular_core.Input },],
    'tapPosition': [{ type: _angular_core.Input },],
    'verticalText': [{ type: _angular_core.Input },],
    'tabwidth': [{ type: _angular_core.Input },],
    'cClass': [{ type: _angular_core.Input },],
    'queryTabs': [{ type: _angular_core.ContentChildren, args: [TabComponent,] },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var ColumnComponent = (function () {
    function ColumnComponent() {
    }
    return ColumnComponent;
}());
ColumnComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-data-table-column',
                template: ""
            },] },
];
/**
 * @nocollapse
 */
ColumnComponent.ctorParameters = function () { return []; };
ColumnComponent.propDecorators = {
    'text': [{ type: _angular_core.Input },],
    'dataIndex': [{ type: _angular_core.Input },],
    'hidden': [{ type: _angular_core.Input },],
    'dataType': [{ type: _angular_core.Input },],
    'summaryType': [{ type: _angular_core.Input },],
    'summaryCaption': [{ type: _angular_core.Input },],
    'headerTemplate': [{ type: _angular_core.ContentChild, args: ['amexioHeaderTmpl',] },],
    'bodyTemplate': [{ type: _angular_core.ContentChild, args: ['amexioBodyTmpl',] },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR, useExisting: _angular_core.forwardRef(function () { return DataTableComponent; }), multi: true
};
var DataTableComponent = (function () {
    /**
     * @param {?} dataTableSevice
     * @param {?} cd
     */
    function DataTableComponent(dataTableSevice, cd) {
        this.dataTableSevice = dataTableSevice;
        this.cd = cd;
        this.rowSelect = new _angular_core.EventEmitter();
        this.selectedRowData = new _angular_core.EventEmitter();
        this.groupByColumn = false;
        this.onColumnClickEvent = new _angular_core.EventEmitter();
        this.columnDataEvent = new _angular_core.EventEmitter();
        this.viewRows = [];
        this.pageNumbers = [];
        this.currentPage = 1;
        this.elementId = 'mytable-' + Math.random();
        this.selectAll = false;
        this.selectedRows = [];
        this.isSummary = false;
        this.summaryData = [];
        this.summary = [];
        this.smallScreen = false;
        this.sortBy = -1;
        this.randomIDCheckALL = 'checkall-' + Math.floor(Math.random() * 90000) + 10000;
        this.headerCheckboxId = 'checkbox-header' + Math.floor(Math.random() * 90000) + 10000;
    }
    /**
     * @return {?}
     */
    DataTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.innerWidth < 768) {
            this.smallScreen = true;
        }
        else {
            this.smallScreen = false;
        }
        if (this.httpMethod && this.httpUrl) {
            this.dataTableSevice.fetchData(this.httpUrl, this.httpMethod).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setData(_this.responseData);
            });
        }
        else if (this.dataTableBindData) {
            this.previousData = JSON.parse(JSON.stringify(this.dataTableBindData));
            this.setData(this.dataTableBindData);
        }
        if (this.localColumnData && this.localColumnData.length > 0) {
            this.columnPreviewData = JSON.parse(JSON.stringify(this.localColumnData));
            this.columns = this.localColumnData;
        }
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.ngDoCheck = function () {
        if (JSON.stringify(this.previousData) != JSON.stringify(this.dataTableBindData)) {
            this.previousData = JSON.parse(JSON.stringify(this.dataTableBindData));
            this.setData(this.dataTableBindData);
        }
        if (JSON.stringify(this.columnPreviewData) != JSON.stringify(this.localColumnData)) {
            this.columnPreviewData = JSON.parse(JSON.stringify(this.localColumnData));
            this.columns = this.localColumnData;
        }
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.setHeight = function () {
        var /** @type {?} */ height;
        if (this.height) {
            height = this.height + 'px';
        }
        var /** @type {?} */ tableHeight;
        tableHeight = {
            'height': height, 'overflow-y': 'auto'
        };
        return tableHeight;
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.ngAfterContentInit = function () {
        if (this.localColumnData && this.localColumnData.length > 0) {
            this.columns = this.localColumnData;
        }
        else {
            this.createConfig();
        }
        this.dropdownData = {
            'response': {
                'data': this.columns
            }
        };
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.createConfig = function () {
        this.columns = [];
        this.createColumnConfig();
        for (var /** @type {?} */ ir = 0; ir < this.columns.length; ir++) {
            var /** @type {?} */ column = this.columns[ir];
            if (column.summaryType && column.dataType && column.dataType === 'number') {
                this.isSummary = true;
            }
            this.summaryData.push(0);
            this.summary.push({ summaryType: column.summaryType, summaryCaption: column.summaryCaption, data: [] });
        }
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.createColumnConfig = function () {
        var /** @type {?} */ columnRefArray = [];
        columnRefArray = this.columnRef.toArray();
        for (var /** @type {?} */ cr = 0; cr < columnRefArray.length; cr++) {
            var /** @type {?} */ columnConfig = columnRefArray[cr];
            var /** @type {?} */ columnData = void 0;
            if (columnConfig.headerTemplate != null && columnConfig.bodyTemplate != null) {
                columnData = {
                    text: columnConfig.text,
                    dataIndex: columnConfig.dataIndex,
                    hidden: columnConfig.hidden,
                    dataType: columnConfig.dataType,
                    headerTemplate: columnConfig.headerTemplate,
                    bodyTemplate: columnConfig.bodyTemplate
                };
            }
            else if (columnConfig.headerTemplate != null && columnConfig.bodyTemplate == null) {
                columnData = {
                    text: columnConfig.text,
                    dataIndex: columnConfig.dataIndex,
                    hidden: columnConfig.hidden,
                    dataType: columnConfig.dataType,
                    headerTemplate: columnConfig.headerTemplate
                };
            }
            else if (columnConfig.bodyTemplate != null && columnConfig.headerTemplate == null) {
                columnData = {
                    text: columnConfig.text,
                    dataIndex: columnConfig.dataIndex,
                    hidden: columnConfig.hidden,
                    dataType: columnConfig.dataType,
                    bodyTemplate: columnConfig.bodyTemplate
                };
            }
            else if (columnConfig.bodyTemplate == null && columnConfig.headerTemplate == null) {
                columnData = {
                    text: columnConfig.text,
                    dataIndex: columnConfig.dataIndex,
                    hidden: columnConfig.hidden,
                    dataType: columnConfig.dataType
                };
            }
            if (columnConfig.summaryType) {
                columnData['summaryType'] = columnConfig.summaryType;
            }
            if (columnConfig.summaryCaption) {
                columnData['summaryCaption'] = columnConfig.summaryCaption;
            }
            this.columns.push(columnData);
        }
        /*------For column filtering icon switch--------*/
        this.columns.forEach(function (opt) {
            opt['filterIcon'] = false;
        });
        /*------For column sorting flag --------*/
        this.columns.forEach(function (opt) {
            opt['isColumnSort'] = false;
        });
    };
    /**
     * @param {?} change
     * @return {?}
     */
    DataTableComponent.prototype.ngOnChanges = function (change) {
        if (change['dataTableBindData']) {
            var /** @type {?} */ data = change['dataTableBindData'].currentValue;
            if (data) {
                this.setData(data);
            }
        }
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    DataTableComponent.prototype.setData = function (httpResponse) {
        this.data = this.getResponseData(httpResponse);
        if (this.groupByColumn) {
            this.cloneData = JSON.parse(JSON.stringify(this.data));
        }
        if (this.filtering) {
            this.filterCloneData = JSON.parse(JSON.stringify(this.data));
        }
        //Code Comment because of groupby not working
        // if (this.data.length > (1 * this.pageSize)) {
        //   this.maxPage = Math.floor((this.data.length / this.pageSize));
        //   if ((this.data.length % this.pageSize) > 0) {
        //     this.maxPage++;
        //   }
        // }
        // for (let pageNo = 1; pageNo <= this.maxPage; pageNo++) {
        //   this.pageNumbers.push(pageNo);
        // }
        this.createSummaryData();
        this.renderData();
        if (this.groupByColumn) {
            this.setColumnData();
        }
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.createSummaryData = function () {
        for (var /** @type {?} */ sd = 0; sd < this.data.length; sd++) {
            var /** @type {?} */ localData = this.data[sd];
            if (this.isSummary) {
                for (var /** @type {?} */ ir = 0; ir < this.columns.length; ir++) {
                    var /** @type {?} */ column = this.columns[ir];
                    if (column.summaryType && column.dataType && column.dataType === 'number') {
                        var /** @type {?} */ colData = localData[column.dataIndex];
                        if (colData) {
                            var /** @type {?} */ summaryData = this.summary[ir];
                            if (summaryData && summaryData !== '') {
                                summaryData.data.push(colData);
                            }
                        }
                    }
                }
            }
        }
        for (var /** @type {?} */ is = 0; is < this.summaryData.length; is++) {
            if (this.summaryData[is] === 0) {
                this.summaryData[is] = '';
            }
            var /** @type {?} */ summarized = this.summary[is];
            if (summarized) {
                var /** @type {?} */ summaryType = summarized.summaryType;
                var /** @type {?} */ summarizeData = summarized.data.sort(function (a, b) {
                    return a - b;
                });
                var /** @type {?} */ summaryCaption = summarized.summaryCaption;
                if (summaryType) {
                    if (summaryType === 'sum') {
                        var /** @type {?} */ sumValue = 0;
                        for (var /** @type {?} */ s = 0; s < summarizeData.length; s++) {
                            sumValue = sumValue + summarizeData[s];
                        }
                        this.summaryData[is] = summaryCaption + ' ' + sumValue;
                    }
                    else if (summaryType === 'min') {
                        if (summarizeData) {
                            this.summaryData[is] = summaryCaption + ' ' + summarizeData[0];
                        }
                    }
                    else if (summaryType === 'max') {
                        if (summarizeData) {
                            this.summaryData[is] = summaryCaption + ' ' + summarizeData[summarizeData.length - 1];
                        }
                    }
                    else if (summaryType === 'avg') {
                        if (summarizeData) {
                            var /** @type {?} */ sumValue = 0;
                            for (var /** @type {?} */ s = 0; s < summarizeData.length; s++) {
                                sumValue = sumValue + summarizeData[s];
                            }
                            this.summaryData[is] = summaryCaption + ' ' + Math.round(sumValue / summarizeData.length);
                        }
                    }
                }
            }
        }
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    DataTableComponent.prototype.getResponseData = function (httpResponse) {
        var /** @type {?} */ responsedata = httpResponse;
        var /** @type {?} */ dr = this.dataReader.split('.');
        for (var /** @type {?} */ ir = 0; ir < dr.length; ir++) {
            responsedata = responsedata[dr[ir]];
        }
        return responsedata;
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.renderData = function () {
        //calculate page no for pagination
        if (this.data) {
            this.maxPage = 0;
            this.pageNumbers = [];
            if (this.data.length > (1 * this.pageSize)) {
                this.maxPage = Math.floor((this.data.length / this.pageSize));
                if ((this.data.length % this.pageSize) > 0) {
                    this.maxPage++;
                }
            }
            for (var /** @type {?} */ pageNo = 1; pageNo <= this.maxPage; pageNo++) {
                this.pageNumbers.push(pageNo);
            }
        }
        if (this.pageSize >= 1) {
            var /** @type {?} */ rowsTemp = this.data;
            var /** @type {?} */ newRows = [];
            var /** @type {?} */ startIndex = 0;
            var /** @type {?} */ endIndex = this.pageSize;
            if (this.currentPage > 1) {
                startIndex = (this.currentPage - 1) * this.pageSize;
                endIndex = startIndex + this.pageSize;
            }
            while (startIndex <= endIndex - 1) {
                if (rowsTemp[startIndex]) {
                    newRows.push(rowsTemp[startIndex]);
                }
                startIndex++;
            }
            this.viewRows = newRows;
        }
        else {
            this.viewRows = this.data;
        }
        this.selectedRowNo = -1;
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.sortData = function () {
        if (this.sortColumn) {
            var /** @type {?} */ sortColDataIndex_1;
            var /** @type {?} */ sortOrder_1 = this.sortBy;
            if (this.sortColumn.dataIndex && this.sortColumn.dataType) {
                var /** @type {?} */ dataIndex = this.sortColumn.dataIndex;
                sortColDataIndex_1 = dataIndex;
                if (this.sortColumn.dataType === 'string') {
                    if (this.groupByColumn) {
                        this.data.sort(function (a, b) {
                            var /** @type {?} */ x = a.group.toLowerCase();
                            var /** @type {?} */ y = b.group.toLowerCase();
                            if (sortOrder_1 === 2) {
                                if (x < y) {
                                    return 1;
                                }
                                if (x > y) {
                                    return -1;
                                }
                            }
                            else {
                                if (x < y) {
                                    return -1;
                                }
                                if (x > y) {
                                    return 1;
                                }
                            }
                            return 0;
                        });
                    }
                    else {
                        this.data.sort(function (a, b) {
                            var /** @type {?} */ x = a[sortColDataIndex_1].toLowerCase();
                            var /** @type {?} */ y = b[sortColDataIndex_1].toLowerCase();
                            if (sortOrder_1 === 2) {
                                if (x < y) {
                                    return 1;
                                }
                                if (x > y) {
                                    return -1;
                                }
                            }
                            else {
                                if (x < y) {
                                    return -1;
                                }
                                if (x > y) {
                                    return 1;
                                }
                            }
                            return 0;
                        });
                    }
                }
                else if (this.sortColumn.dataType === 'number') {
                    if (this.groupByColumn) {
                        this.data.sort(function (a, b) {
                            var /** @type {?} */ x = a.group;
                            var /** @type {?} */ y = b.group;
                            if (sortOrder_1 === 2) {
                                return y - x;
                            }
                            else {
                                return x - y;
                            }
                        });
                    }
                    else {
                        this.data.sort(function (a, b) {
                            var /** @type {?} */ x = a[sortColDataIndex_1];
                            var /** @type {?} */ y = b[sortColDataIndex_1];
                            if (sortOrder_1 === 2) {
                                return y - x;
                            }
                            else {
                                return x - y;
                            }
                        });
                    }
                }
            }
        }
        this.renderData();
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.next = function () {
        if (this.currentPage < this.maxPage) {
            this.currentPage++;
        }
        this.renderData();
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.prev = function () {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
        else {
            this.currentPage = 1;
        }
        this.renderData();
    };
    /**
     * @param {?} sortCol
     * @param {?} event
     * @return {?}
     */
    DataTableComponent.prototype.sortOnColHeaderClick = function (sortCol, event) {
        this.onColumnClickEvent.emit(event);
        this.columnDataEvent.emit(sortCol);
        if (this.sortBy === -1) {
            this.sortBy = 1;
        }
        else if (this.sortBy === 1) {
            this.sortBy = 2;
        }
        else if (this.sortBy === 2) {
            this.sortBy = 1;
        }
        this.setSortColumn(sortCol, this.sortBy);
    };
    /**
     * @param {?} sortCol
     * @param {?} _sortBy
     * @return {?}
     */
    DataTableComponent.prototype.setSortColumn = function (sortCol, _sortBy) {
        /*------set column sort false for other column--------*/
        this.columns.forEach(function (opt) {
            opt['isColumnSort'] = false;
        });
        this.sortBy = _sortBy;
        this.sortColumn = sortCol;
        this.sortColumn.isColumnSort = true;
        this.sortData();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DataTableComponent.prototype.setPageNo = function (value) {
        this.currentPage = value;
        this.renderData();
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.setUserPageNo = function () {
        this.renderData();
    };
    /**
     * @param {?} rowData
     * @param {?} rowIndex
     * @return {?}
     */
    DataTableComponent.prototype.rowClick = function (rowData, rowIndex) {
        rowIndex = 'row' + rowIndex;
        if (this.rowId) {
            //document.getElementById(this.rowId).style.backgroundColor = 'white';
        }
        this.rowId = rowIndex;
        //document.getElementById(rowIndex).style.backgroundColor = 'lightgray';
        this.rowSelect.emit(rowData);
        this.selectedRowNo = rowIndex;
    };
    /**
     * @param {?} rowNo
     * @return {?}
     */
    DataTableComponent.prototype.isSelected = function (rowNo) {
        return rowNo === this.selectedRowNo;
    };
    /**
     * @param {?} dataIndex
     * @return {?}
     */
    DataTableComponent.prototype.setColumnVisiblity = function (dataIndex) {
        for (var /** @type {?} */ ic = 0; ic < this.columns.length; ic++) {
            var /** @type {?} */ col = this.columns[ic];
            if (col.dataIndex === dataIndex) {
                col.hidden = !col.hidden;
            }
        }
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.selectAllVisibleRows = function () {
        this.selectAll = !this.selectAll;
        if (this.selectAll) {
            for (var /** @type {?} */ vr = 0; vr < this.viewRows.length; vr++) {
                this.selectedRows.push(this.viewRows[vr]);
            }
        }
        else {
            this.selectedRows = [];
        }
        this.emitSelectedRows();
    };
    /**
     * @param {?} rowData
     * @param {?} event
     * @return {?}
     */
    DataTableComponent.prototype.setSelectedRow = function (rowData, event) {
        if (event.currentTarget.checked) {
            this.selectedRows.push(rowData);
        }
        else {
            var /** @type {?} */ indexOf = this.selectedRows.indexOf(rowData);
            delete this.selectedRows[indexOf];
        }
        this.emitSelectedRows();
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.emitSelectedRows = function () {
        var /** @type {?} */ sRows = [];
        for (var /** @type {?} */ sr = 0; sr < this.selectedRows.length; sr++) {
            if (this.selectedRows[sr]) {
                sRows.push(this.selectedRows[sr]);
            }
        }
        this.selectedRowData.emit(sRows);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DataTableComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < 768) {
            this.smallScreen = true;
        }
        else {
            this.smallScreen = false;
        }
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.setColumnData = function () {
        var _this = this;
        this.data = this.cloneData;
        var /** @type {?} */ groups = {};
        this.data.forEach(function (option) {
            var /** @type {?} */ groupName = option[_this.groupByColumnIndex];
            if (!groups[groupName]) {
                groups[groupName] = [];
            }
            groups[groupName].push(option);
        });
        this.data = [];
        for (var /** @type {?} */ groupName in groups) {
            this.data.push({ expanded: false, group: groupName, groupData: groups[groupName] });
        }
        /*-------Aggregation---------*/
        /* this.data.forEach((groupdata)=>{
         let aggregateValue :  number;
         let dummyA={};
         let k;
         let arrayIndex;
         this.columns.forEach((columnOption)=> {
         if(columnOption.aggregate==true) {
         k = columnOption.dataIndex;
         aggregateValue =0;
         groupdata.groupData.forEach((childData, index) => {
         aggregateValue = +(aggregateValue + Number(childData[columnOption.dataIndex]));
         arrayIndex = index;

         });
         dummyA[k]=aggregateValue;
         }

         });

         groupdata.groupData[arrayIndex+1]=dummyA;

         });*/
        this.renderData();
        this.cd.detectChanges();
    };
    /**
     * @param {?} groupData
     * @return {?}
     */
    DataTableComponent.prototype.iconSwitch = function (groupData) {
        groupData.expanded = !groupData.expanded;
    };
    /**
     * @param {?} filteredObj
     * @return {?}
     */
    DataTableComponent.prototype.getFilteredData = function (filteredObj) {
        var _this = this;
        var /** @type {?} */ status = false;
        if (filteredObj.length > 0) {
            this.data = [];
            this.filterCloneData.forEach(function (option) {
                status = _this.filterOpertion(option, filteredObj);
                if (status) {
                    _this.data.push(option);
                    status = false;
                }
            });
            if (this.data.length > (1 * this.pageSize)) {
                this.pagingRegenration();
                this.renderData();
            }
            else {
                this.viewRows = this.data;
                this.currentPage = 1;
                this.maxPage = 1;
                this.cd.detectChanges();
            }
        }
        else {
            this.data = this.filterCloneData;
            this.pagingRegenration();
            this.renderData();
        }
    };
    /**
     * @param {?} data
     * @param {?} filteredObj
     * @return {?}
     */
    DataTableComponent.prototype.filterOpertion = function (data, filteredObj) {
        var /** @type {?} */ statusArray = [];
        var /** @type {?} */ condition;
        filteredObj.forEach(function (filterOpt) {
            if (filterOpt.filter === '3') {
                if (filterOpt.type === 'string') {
                    condition = data[filterOpt.key].toLowerCase().includes(filterOpt.value.toLowerCase());
                }
                statusArray.push(condition);
            }
            if (filterOpt.filter === '1') {
                if (filterOpt.type === 'string') {
                    condition = data[filterOpt.key].toLowerCase().startsWith(filterOpt.value.toLowerCase());
                }
                statusArray.push(condition);
            }
            else if (filterOpt.filter === '2') {
                if (filterOpt.type === 'string') {
                    condition = data[filterOpt.key].toLowerCase().endsWith(filterOpt.value.toLowerCase());
                }
                statusArray.push(condition);
            }
            else if (filterOpt.filter === '<') {
                if (filterOpt.type === 'number') {
                    condition = data[filterOpt.key] > filterOpt.value;
                }
                statusArray.push(condition);
            }
            else if (filterOpt.filter === '>') {
                if (filterOpt.type === 'number') {
                    condition = data[filterOpt.key] < filterOpt.value;
                }
                statusArray.push(condition);
            }
            else if (filterOpt.filter === '>=') {
                if (filterOpt.type === 'number') {
                    condition = data[filterOpt.key] <= filterOpt.value;
                }
                statusArray.push(condition);
            }
            else if (filterOpt.filter === '=<') {
                if (filterOpt.type === 'number') {
                    condition = data[filterOpt.key] >= filterOpt.value;
                }
                statusArray.push(condition);
            }
            else if (filterOpt.filter === '==') {
                if (filterOpt.type === 'number') {
                    condition = data[filterOpt.key] === filterOpt.value;
                }
                else {
                    condition = data[filterOpt.key].toLowerCase() === filterOpt.value.toLowerCase();
                }
                statusArray.push(condition);
            }
            else if (filterOpt.filter === '!=') {
                if (filterOpt.type === 'number') {
                    condition = data[filterOpt.key] !== filterOpt.value;
                }
                else {
                    condition = data[filterOpt.key].toLowerCase() !== filterOpt.value.toLowerCase();
                }
                statusArray.push(condition);
            }
        });
        statusArray.forEach(function (opt) {
            if (opt === false) {
                condition = false;
            }
        });
        return condition;
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.pagingRegenration = function () {
        this.maxPage = Math.floor((this.data.length / this.pageSize));
        if ((this.data.length % this.pageSize) > 0) {
            this.maxPage++;
        }
        for (var /** @type {?} */ pageNo = 1; pageNo <= this.maxPage; pageNo++) {
            this.pageNumbers.push(pageNo);
        }
        this.cd.detectChanges();
    };
    return DataTableComponent;
}());
DataTableComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-data-table', template: "\n        <ng-content></ng-content>\n        <div class=\"amexio-datatable-wrap\" [ngClass]=\"cClass\">\n            <table class=\"table table-sm  table-bordered amexio-grid-bordered  amexio-datatable-width\" [attr.id]=\"elementId\"\n                   (window:resize)=\"onResize($event)\">\n                <tr style=\"height: 60px;\" [ngClass]=\"tableTitlecClass\">\n                    <td style=\"vertical-align: middle\" [attr.colspan]=\"columns?.length + (checkboxSelect? 1: 0)\" width=\"100%\" data\n                        align=\"right\">\n        <span class=\"amexio-datatable-title\">\n      <b>{{title}}</b>\n      </span>\n                        <!--Datatable Top Toolbar-->\n                        <span class=\"col-xs-12 amexio-grid-opertions\">\n            <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n               <ng-container *ngIf=\"groupByColumn && !smallScreen\">\n            <amexio-dropdown [(ngModel)]=\"groupByColumnIndex\"\n                             [placeholder]=\"'Choose Column'\"\n                             name=\"groupByColumnIndex\"\n                             [dataReader]=\"'response.data'\"\n                             [data]=\"dropdownData\"\n                             [displayField]=\"'text'\"\n                             [valueField]=\"'dataIndex'\"\n                             (onSingleSelect)=\"setColumnData()\">\n                 </amexio-dropdown>\n          </ng-container>\n            <span class=\"nav-item \">\n            <a class=\"nav-link\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n               aria-expanded=\"false\">\n            <span style=\"font-size: 18px;\">&#x2630;</span>\n            </a>\n            <div class=\"dropdown-menu amexio-dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item \" *ngFor=\"let cols of columns;let i = index;\">\n            <label class=\"form-check-label\">\n            <input [attr.id]=\"headerCheckboxId+i\" class=\"amexio-checkbox\" [ngClass]=\"tableHeadercClass\" type=\"checkbox\"\n                   (click)=\"setColumnVisiblity(cols.dataIndex)\" [attr.checked]=\"!cols.hidden ? true: null\"> \n            <label [attr.for]=\"headerCheckboxId+i\">{{cols.text + \" \"}}</label> \n            </label>\n            </a>\n            </div>\n            </span>\n            </div>\n            </span>\n\n                    </td>\n                </tr>\n                <tr *ngIf=\"smallScreen && groupByColumn\">\n                    <td [attr.colspan]=\"columns.length+1\">\n                        <div>\n                            <amexio-dropdown [(ngModel)]=\"groupByColumnIndex\"\n                                             [placeholder]=\"'Choose Column'\"\n                                             name=\"groupByColumnIndex\"\n                                             [dataReader]=\"'response.data'\"\n                                             [data]=\"dropdownData\"\n                                             [displayField]=\"'text'\"\n                                             [valueField]=\"'dataIndex'\"\n                                             (onSingleSelect)=\"setColumnData()\">\n                            </amexio-dropdown>\n                        </div>\n                    </td>\n                </tr>\n            </table>\n            <!--filtering changes-->\n            <table class=\"table table-sm\">\n                <tr [ngClass]=\"tableHeadercClass\" *ngIf=\"filtering && !groupByColumn\">\n                    <ng-container *ngIf=\"!smallScreen\">\n                        <td *ngIf=\"checkboxSelect\" class=\"amexio-grid-checkbox\"></td>\n                        <td *ngFor=\"let cols of columns let index=index\" [hidden]=\"cols.hidden\">\n                            <amexio-filter-component [column]=\"cols\"\n                                                     (filterObject)=\"getFilteredData($event)\"></amexio-filter-component>\n                        </td>\n                    </ng-container>\n                    <ng-container *ngIf=\"smallScreen\">\n                        <td [ngClass]=\"tableHeadercClass\">\n                            <div class=\"amexio-datatable-small-word-wrap\" *ngFor=\"let cols of columns\" [hidden]=\"cols.hidden\">\n                                <amexio-filter-component [column]=\"cols\"\n                                                         (filterObject)=\"getFilteredData($event)\"></amexio-filter-component>\n                            </div>\n                        </td>\n                    </ng-container>\n                </tr>\n            </table>\n            <table class=\"table table-sm  table-hover  table-bordered amexio-grid-bordered\" [ngClass]=\"tableHeadercClass\"\n >\n                <tr *ngIf=\"!smallScreen\">\n                    <td *ngIf=\"checkboxSelect\" class=\"amexio-grid-checkbox\" [ngClass]=\"tableHeadercClass\">\n                        <input [attr.id]=\"headerCheckboxId\" class=\"amexio-checkbox\" [ngClass]=\"tableHeadercClass\" type=\"checkbox\"\n                               (click)=\"selectAllVisibleRows()\">\n                        <label [attr.for]=\"headerCheckboxId\"></label>\n                    </td>\n                    <td style=\"height: 50px;vertical-align: middle\"                        *ngFor=\"let cols of columns let index=index\" [hidden]=\"cols.hidden\" (click)=\"sortOnColHeaderClick(cols, $event)\">\n\n                        <!-- If user hasnt embedded view -->\n                        <ng-container *ngIf=\"!cols?.headerTemplate\"><b>{{cols.text}}</b></ng-container>\n                        <!--for sorting icon of column-->\n                        <ng-container *ngIf=\"this.sortBy==1 && cols.isColumnSort\">\n                            &nbsp; <i class=\"fa fa-arrow-up\"></i>\n                        </ng-container>\n                        <ng-container *ngIf=\"this.sortBy==2 && cols.isColumnSort\">\n                            &nbsp;<i class=\"fa fa-arrow-down\"></i>\n                        </ng-container>\n\n                        <!--Check if user has embedded view inserted then -->\n                        <ng-template *ngIf=\"cols?.headerTemplate\" [ngTemplateOutlet]=\"cols?.headerTemplate\"\n                                     [ngOutletContext]=\"{ $implicit: { header: cols.text } }\"></ng-template>\n                    </td>\n                </tr>\n            </table>\n            <!--Show table data-->\n            <div [ngStyle]=\"setHeight()\">\n                <table class=\"table table-sm   table-bordered amexio-grid-bordered\">\n                    <tbody *ngIf=\"!smallScreen\">\n                    <ng-container *ngIf=\"groupByColumn\">\n                        <tr  [ngClass]=\"{'hiderow' : !(viewRows?.length > 0),'showrow' : viewRows?.length > 0}\">\n                            <td [attr.colspan]=\"columns?.length + (checkboxSelect? 1: 0)\" width=\"100%\">\n                                <div class=\"list-group\" *ngFor=\"let row of viewRows;let i=index;\">\n                                    <div class=\"amexio-grid-groupby-seperator\" (click)=\"iconSwitch(row)\" style=\"cursor: pointer;\" data-toggle=\"collapse\" [attr.data-target]=\"'#'+i\" data-parent=\"#menu\">\n                                        <ng-container *ngIf=\"!row.expanded\">&#x25B6;</ng-container>\n                                        <ng-container *ngIf=\"row.expanded\">&#x25BC;</ng-container>\n                                        <label>{{row.group}}</label>\n                                        <span style=\"float: right; vertical-align: bottom;\" class=\"badge badge-default badge-pill\">{{row.groupData?.length}}</span>\n\n                                    </div>\n\n\n                                    <div [attr.id]=\"i\" class=\"sublinks collapse \">\n                                        <table class=\"table table-hover \">\n                                            <tbody>\n                                            <tr [ngClass]=\"tableDatacClass\"  *ngFor=\"let rows of row.groupData let rowIndex = index\"\n                                                id=\"{{'row'+i+rowIndex}}\"\n                                                (click)=\"rowClick(rows, i+''+rowIndex)\">\n                                                <td *ngIf=\"checkboxSelect\" class=\"amexio-grid-checkbox\" [ngClass]=\"tableHeadercClass\">\n                                                    <input class=\"amexio-checkbox\" type=\"checkbox\" id=\"checkbox-{{elementId}}-{{rowIndex}}\"\n                                                           [attr.checked]=\"selectAll? true: null\" (click)=\"setSelectedRow(rows, $event)\">\n                                                    <label for=\"checkbox-{{elementId}}-{{rowIndex}}\"></label>\n                                                </td>\n                                                <td *ngFor=\"let cols of columns\" [hidden]=\"cols.hidden\" style=\"vertical-align: middle !important;\">\n                                                    <!-- If user hasnt specified customized cell use default -->\n                                                    <ng-container *ngIf=\"!cols?.bodyTemplate\">{{rows[cols.dataIndex]}}</ng-container>\n                                                    <!-- else insert customized code -->\n                                                    <ng-template *ngIf=\"cols.bodyTemplate\" [ngTemplateOutlet]=\"cols.bodyTemplate\"\n                                                                 [ngOutletContext]=\"{ $implicit: { text : rows[cols.dataIndex] }, row: rows }\"></ng-template>\n                                                </td>\n                                            </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"viewRows?.length == 0\">\n                            <td [attr.colspan]=\"columns?.length+1\" class=\"loading-mask amexio-datatable-loadingmask\">\n                            </td>\n                        </tr>\n                    </ng-container>\n                    <ng-container *ngIf=\"!groupByColumn\">\n                        <tr *ngIf=\"viewRows?.length==0\">\n                            <td class=\"amexio-datatable-width\">\n                                <span>无数据</span>\n                            </td>\n                        </tr>\n                        <tr [ngClass]=\"tableDatacClass\"\n                            [ngClass]=\"{'hiderow' : !(viewRows?.length > 0),'showrow ' : viewRows?.length > 0}\"\n                            style=\"cursor: pointer; height: 50px;\" *ngFor=\"let row of viewRows let rowIndex = index \"\n                            id=\"{{'row'+rowIndex}}\"\n                            (click)=\"rowClick(row, rowIndex)\" [class.info]=\"isSelected(rowIndex)\">\n                            <td *ngIf=\"checkboxSelect\" class=\"amexio-grid-checkbox\">\n                                <input class=\"amexio-checkbox\" [ngClass]=\"tableHeadercClass\" type=\"checkbox\" id=\"checkbox-{{elementId}}-{{rowIndex}}\"\n                                       [attr.checked]=\"selectAll? true: null\"\n                                       (click)=\"setSelectedRow(row, $event)\">\n                                <label for=\"checkbox-{{elementId}}-{{rowIndex}}\"></label>\n                            </td>\n                            <td *ngFor=\"let cols of columns let index=index\" [hidden]=\"cols.hidden\"\n                                style=\"vertical-align: middle !important;\">\n                                <!-- If user hasnt specified customized cell use default -->\n                                <ng-container *ngIf=\"cols.dataType=='number'\"><span style=\"float: right\">{{row[cols.dataIndex]}}</span>\n                                </ng-container>\n                                <ng-container *ngIf=\"!cols?.bodyTemplate && cols.dataType=='string'\">{{row[cols.dataIndex]}}\n                                </ng-container>\n                                <!-- else insert customized code -->\n                                <ng-template *ngIf=\"cols.bodyTemplate\" [ngTemplateOutlet]=\"cols.bodyTemplate\"\n                                             [ngOutletContext]=\"{ $implicit: { text : row[cols.dataIndex] }, row: row }\"></ng-template>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"viewRows?.length == 0\">\n                            <td [attr.colspan]=\"columns?.length+1\" class=\"loading-mask amexio-datatable-loadingmask\">\n                            </td>\n                        </tr>\n                    </ng-container>\n                    </tbody>\n                    <tbody *ngIf=\"smallScreen\">\n                    <ng-container *ngIf=\"groupByColumn\">\n                        <tr  [ngClass]=\"{'hiderow' : !(viewRows?.length > 0),'showrow' : viewRows?.length > 0}\">\n                            <td [attr.colspan]=\"columns?.length + (checkboxSelect? 1: 0)\" width=\"100%\">\n                                <div class=\"list-group amexio-datatable-list-group\" *ngFor=\"let row of viewRows;let i=index;\">\n              <span (click)=\"iconSwitch(row)\" style=\"cursor: pointer;\" data-toggle=\"collapse\" [attr.data-target]=\"'#'+i\"\n                    data-parent=\"#menu\">\n                <span style=\"width: 100%\" class=\"fa amexio-grid-groupby-seperator\"\n                      [ngClass]=\"{'fa-caret-down':row.expanded,'fa-caret-right':!row.expanded}\">\n                  {{row.group}}\n                      <span style=\"float: right\" class=\"badge badge-default badge-pill\">{{row.groupData?.length}}</span>\n                    </span>\n              </span>\n\n                                    <div [attr.id]=\"i\" class=\"sublinks collapse\">\n                                        <table class=\"table table-bordered amexio-grid-bordered\">\n                                            <tbody>\n                                            <tr class=\"amexio-datatable-row\" *ngFor=\"let rows of row.groupData let rowIndex = index\"\n                                                id=\"{{'row'+i+rowIndex}}\"\n                                                (click)=\"rowClick(rows, i+''+rowIndex)\">\n                                                <td *ngIf=\"checkboxSelect\" class=\"amexio-grid-checkbox\">\n                                                    <input class=\"amexio-checkbox\" [ngClass]=\"tableHeadercClass\" type=\"checkbox\" id=\"checkbox-{{elementId}}-{{rowIndex}}\"\n                                                           [attr.checked]=\"selectAll? true: null\" (click)=\"setSelectedRow(rows, $event)\">\n                                                    <label for=\"checkbox-{{elementId}}-{{rowIndex}}\"></label>\n                                                </td>\n                                                <td [attr.colspan]=\"columns?.length-1\">\n                                                    <div class=\"amexio-datatable-small-word-wrap\" *ngFor=\"let cols of columns\"\n                                                         [hidden]=\"cols.hidden\">\n                                                        <b>{{cols.text}}</b> :\n                                                        <!-- If user hasnt specified customized cell use default -->\n                                                        <ng-container *ngIf=\"!cols?.bodyTemplate\">{{rows[cols.dataIndex]}}</ng-container>\n                                                        <!-- else insert customized code -->\n                                                        <ng-template *ngIf=\"cols.bodyTemplate\" [ngTemplateOutlet]=\"cols.bodyTemplate\"\n                                                                     [ngOutletContext]=\"{ $implicit: { text : rows[cols.dataIndex] }, row: rows }\"></ng-template>\n                                                    </div>\n                                                </td>\n                                            </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                    </ng-container>\n                    <ng-container *ngIf=\"!groupByColumn\">\n                        <tr *ngIf=\"viewRows?.length==0\">\n                            <td class=\"amexio-datatable-width\">\n                                <span>无数据</span>\n                            </td>\n                        </tr>\n                        <tr [ngClass]=\"{'hiderow' : !(viewRows?.length > 0),'showrow' : viewRows?.length > 0}\"\n                            style=\"cursor: pointer\" *ngFor=\"let row of viewRows let rowIndex = index \" id=\"{{'row'+rowIndex}}\"\n                            (click)=\"rowClick(row, rowIndex)\" [class.info]=\"isSelected(rowIndex)\">\n                            <td *ngIf=\"checkboxSelect\" class=\"amexio-grid-checkbox\">\n                                <input class=\"amexio-checkbox\" [ngClass]=\"tableHeadercClass\" type=\"checkbox\" id=\"checkbox-{{elementId}}-{{rowIndex}}\"\n                                       [attr.checked]=\"selectAll? true: null\"\n                                       (click)=\"setSelectedRow(row, $event)\">\n                                <label for=\"checkbox-{{elementId}}-{{rowIndex}}\"></label>\n                            </td>\n                            <td>\n                                <div class=\"amexio-datatable-small-word-wrap\" *ngFor=\"let cols of columns\" [hidden]=\"cols.hidden\">\n                                    <b>{{cols.text}}</b> :\n                                    <!-- If user hasnt specified customized cell use default -->\n                                    <ng-container *ngIf=\"!cols?.bodyTemplate\">{{row[cols.dataIndex]}}</ng-container>\n                                    <!-- else insert customized code -->\n                                    <ng-template *ngIf=\"cols.bodyTemplate\" [ngTemplateOutlet]=\"cols.bodyTemplate\"\n                                                 [ngOutletContext]=\"{ $implicit: { text : row[cols.dataIndex] }, row: row }\"></ng-template>\n                                </div>\n                            </td>\n                        </tr>\n                    </ng-container>\n                    <tr *ngIf=\"viewRows?.length == 0\">\n                        <td [attr.colspan]=\"columns?.length+1\" class=\"loading-mask amexio-datatable-loadingmask\">\n                        </td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <!--Datatable Bottom ToolBar-->\n            <table class=\"amexio-grid-pagination-outer\">\n                <tr>\n                    <td>\n                        <div *ngIf=\"(data && data.length > pageSize)\" class=\"row pagination-outer\" style=\"float: right;\">\n                            <div class=\"amexio-grid-pagination\"> <span style=\"padding-top: 10px\">Page no</span>\n                                <span class=\"col-xs-12 amexio-grid-opertions\">\n          <div class=\"btn-group btn-group-sm dropup\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n          <ng-container *ngIf=\"maxPage > 1\">\n         <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                 aria-expanded=\"false\">\n          {{currentPage}}\n          </button>\n          <div class=\"dropdown-menu amexio-dropdown-menu\">\n          <a *ngFor=\"let row of pageNumbers let pageNo = index \" class=\"dropdown-item\"\n             (click)=\"setPageNo(pageNo+1)\">{{pageNo + 1}}</a>\n          </div>\n          <span style=\"padding-top: 10px;padding-left: 5px\">\n            \n            <!--amexio-grid-pagination Group By Column -->\n          <ng-container *ngIf=\"currentPage==1 && groupByColumn\">\n          1- {{pageSize}} of {{this.data.length}}\n          </ng-container>\n         <ng-container *ngIf=\"((pageSize*currentPage) < (this.data.length)) && (currentPage!=1) && groupByColumn\">\n          {{(pageSize * (currentPage - 1)) + 1}} - {{pageSize * currentPage}} of {{this.data.length}}\n          </ng-container>\n          <ng-container *ngIf=\"((pageSize*currentPage) > (this.data.length)) && groupByColumn\">\n          {{(pageSize * (currentPage - 1)) + 1}} - {{this.data.length}} of {{this.data.length}}\n          </ng-container>\n          <ng-container *ngIf=\" (pageSize*currentPage) == (this.data.length) && groupByColumn\">\n          {{(pageSize * (currentPage - 1)) + 1}} - {{this.data.length}} of {{this.data.length}}\n          </ng-container>\n\n              <!--amexio-grid-pagination without Group By Column -->\n            <ng-container *ngIf=\"currentPage==1 && !groupByColumn\">\n          1- {{pageSize}} of {{this.data.length}}\n          </ng-container>\n          <ng-container *ngIf=\"((pageSize*currentPage) < (this.data.length)) && (currentPage!=1) && !groupByColumn\">\n          {{(pageSize * (currentPage - 1)) + 1}} - {{pageSize * currentPage}} of {{this.data.length}}\n          </ng-container>\n          <ng-container *ngIf=\"((pageSize*currentPage) > (this.data.length)) && !groupByColumn\">\n          {{(pageSize * (currentPage - 1)) + 1}} - {{this.data.length}} of {{this.data.length}}\n          </ng-container>\n          <ng-container *ngIf=\" (pageSize*currentPage) == (this.data.length) && !groupByColumn\">\n          {{(pageSize * (currentPage - 1)) + 1}} - {{this.data.length}} of {{this.data.length}}\n          </ng-container>\n          </span>\n          <span style=\"font-size: 18px;margin-left: 10px;padding-top: 10px;cursor: pointer\" (click)=\"prev()\">&#x276E;</span>\n          <span style=\"font-size: 18px;padding-top: 10px;cursor: pointer\" (click)=\"next()\">&#x276F;</span>\n          </ng-container>\n          </div>\n          </span>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n            </table>\n          \n        </div>\n    ", providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, CommonHttpService], styles: ["\n        .amexio-datatable-wrap {\n            width: 100%;\n        }\n\n        .amexio-datatable-wrap table {\n            width: 100%;\n            table-layout: fixed;\n            margin-bottom: 1px;\n        }\n\n        .amexio-datatable-width {\n            width: 100%;\n        }\n\n        .amexio-datatable-title {\n            float: left;\n            padding: 8px 0 0 10px;\n            font-size: large;\n        }\n\n        .amexio-grid-opertions {\n            float: right;\n            cursor: pointer;\n        }\n\n        .amexio-datatable-dropdown-action {\n            max-height: 445.406px;\n            overflow-y: auto;\n            min-height: 0px;\n        }\n\n        .amexio-datatable-small-word-wrap {\n            word-wrap: break-word\n        }\n\n        .amexio-datatable-btngroup-span {\n            float: right;\n        }\n\n        .amexio-datatable-list-group {\n            border-bottom: 1px ridge lightgray;\n        }\n\n        .amexio-datatable-pagenumber {\n            float: right;\n        }\n\n        .amexio-datatable-loadingmask {\n            height: 100px;\n        }\n\n        .amexio-datatable-float-right {\n            float: right;\n        }\n\n        .amexio-datatable-row {\n            height: 40px;\n            border-bottom: 1px solid #E0E0E0;\n            font-size: 13px;\n            background-color: #fff;\n        }\n\n        .amexio-datatable-row:hover {\n            background-color: #eee;\n        }\n\n        .amexio-grid-groupby-seperator {\n            height: 40px;\n            border-bottom: 1px solid #E0E0E0 !important;\n            padding: 12px 24px 0px 5px;\n            color: #6F6F6F;\n            font-size: 14px;\n            color: black;\n            font-weight: 500;\n            line-height: 16px;\n        }\n\n        .amexio-grid-checkbox {\n            width: 50px !important;\n            vertical-align: middle !important;\n        }\n\n        table tr td {\n            border-left: 0;\n            border-right: 0;\n            word-wrap: break-word;\n        }\n        .amexio-grid-pagination {\n            color: rgba(0, 0, 0, 0.54);\n            float: right!important;\n        }\n        .amexio-grid-pagination span{\n            margin-right: 20px;\n            display: inline-block;\n            color: rgba(0,0,0,0.54);\n            float:left;\n        }\n        .amexio-dropdown-menu{\n            \n        }\n        .amexio-grid-bordered{\n            \n        }\n        .amexio-grid-pagination-outer{\n            \n        }\n\n    "]
            },] },
];
/**
 * @nocollapse
 */
DataTableComponent.ctorParameters = function () { return [
    { type: CommonHttpService, },
    { type: _angular_core.ChangeDetectorRef, },
]; };
DataTableComponent.propDecorators = {
    'title': [{ type: _angular_core.Input },],
    'pageSize': [{ type: _angular_core.Input },],
    'httpUrl': [{ type: _angular_core.Input },],
    'httpMethod': [{ type: _angular_core.Input },],
    'dataReader': [{ type: _angular_core.Input },],
    'checkboxSelect': [{ type: _angular_core.Input },],
    'dataTableBindData': [{ type: _angular_core.Input },],
    'rowSelect': [{ type: _angular_core.Output },],
    'selectedRowData': [{ type: _angular_core.Output },],
    'height': [{ type: _angular_core.Input },],
    'width': [{ type: _angular_core.Input },],
    'groupByColumn': [{ type: _angular_core.Input },],
    'groupByColumnIndex': [{ type: _angular_core.Input },],
    'filtering': [{ type: _angular_core.Input },],
    'cClass': [{ type: _angular_core.Input },],
    'tableHeadercClass': [{ type: _angular_core.Input },],
    'tableTitlecClass': [{ type: _angular_core.Input },],
    'tableDatacClass': [{ type: _angular_core.Input },],
    'localColumnData': [{ type: _angular_core.Input },],
    'onColumnClickEvent': [{ type: _angular_core.Output },],
    'columnDataEvent': [{ type: _angular_core.Output },],
    'columnRef': [{ type: _angular_core.ContentChildren, args: [ColumnComponent,] },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author -  Dattaram Gawas
 *
 */
var FilterComponent = (function () {
    /**
     * @param {?} dataTableService
     */
    function FilterComponent(dataTableService) {
        this.dataTableService = dataTableService;
        this.filterObject = new _angular_core.EventEmitter();
        this.filterOptions = [
            {
                'key': 'Is Equal To',
                'value': '==',
                'type': 'string',
                'checkedStatus': ''
            },
            {
                'key': 'Is Not Equal To',
                'value': '!=',
                'type': 'string',
                'checkedStatus': ''
            },
            {
                'key': 'Start With',
                'value': '1',
                'type': 'string',
                'checkedStatus': 'fa fa-check'
            },
            {
                'key': 'Ends With',
                'value': '2',
                'type': 'string',
                'checkedStatus': ''
            },
            {
                'key': 'Contains',
                'value': '3',
                'type': 'string',
                'checkedStatus': ''
            },
            {
                'key': 'Is Equal To',
                'value': '==',
                'type': 'number',
                'checkedStatus': ''
            },
            {
                'key': 'Is Not Equal To',
                'value': '!=',
                'type': 'number',
                'checkedStatus': ''
            },
            {
                'key': 'Is greater Than',
                'value': '<',
                'type': 'number',
                'checkedStatus': ''
            },
            {
                'key': 'Is less Than',
                'value': '>',
                'type': 'number',
                'checkedStatus': ''
            },
            {
                'key': 'Is less Than or equal to',
                'value': '>=',
                'type': 'number',
                'checkedStatus': ''
            },
            {
                'key': 'Is greater Than or equal to',
                'value': '=<',
                'type': 'number',
                'checkedStatus': 'fa fa-check'
            }
        ];
    }
    /**
     * @return {?}
     */
    FilterComponent.prototype.ngOnInit = function () {
    };
    /**
     * @param {?} col
     * @param {?} opt
     * @return {?}
     */
    FilterComponent.prototype.selectedOption = function (col, opt) {
        this.checkStatus();
        var /** @type {?} */ filter = {};
        opt.checkedStatus = 'fa fa-check';
        filter['key'] = col.dataIndex;
        filter['value'] = this.filterValue;
        filter['filter'] = opt.value;
        filter['type'] = col.dataType;
        if (this.filterValue) {
            col.filterIcon = true;
            this.filterDataObject(filter, col);
        }
    };
    /**
     * @param {?} col
     * @return {?}
     */
    FilterComponent.prototype.keyUpSearch = function (col) {
        if (this.filterValue == null || this.filterValue === '') {
            this.removeFilter(col);
        }
        else {
            col.filterIcon = true;
            var /** @type {?} */ filter_1 = {};
            filter_1['key'] = col.dataIndex;
            filter_1['value'] = this.filterValue;
            filter_1['type'] = col.dataType;
            this.filterOptions.forEach(function (opt) {
                if (opt.checkedStatus === 'fa fa-check') {
                    if (col.dataType === opt.type) {
                        filter_1['filter'] = opt.value;
                    }
                }
            });
            this.filterDataObject(filter_1, col);
        }
    };
    /**
     * @param {?} column
     * @return {?}
     */
    FilterComponent.prototype.removeFilter = function (column) {
        var _this = this;
        this.filterValue = '';
        column.filterIcon = false;
        $('#' + column.dataIndex).val('');
        this.dataTableService.filteredObject.forEach(function (option, index) {
            if (option.key === column.dataIndex) {
                _this.dataTableService.filteredObject.splice(index, 1);
            }
        });
        this.filterObject.emit(this.dataTableService.filteredObject);
    };
    /**
     * @return {?}
     */
    FilterComponent.prototype.checkStatus = function () {
        this.filterOptions.forEach(function (opt) {
            opt.checkedStatus = '';
        });
    };
    /**
     * @param {?} filter
     * @param {?} col
     * @return {?}
     */
    FilterComponent.prototype.filterDataObject = function (filter, col) {
        var _this = this;
        this.dataTableService.filteredObject.forEach(function (option, index) {
            if (option.key == col.dataIndex) {
                _this.dataTableService.filteredObject.splice(index, 1);
            }
        });
        this.dataTableService.filteredObject.push(filter);
        this.filterObject.emit(this.dataTableService.filteredObject);
    };
    return FilterComponent;
}());
FilterComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-filter-component',
                template: "\n        <div class=\"col-lg-12 col-xs-12\">\n            <div class=\"row\">\n                <ng-container *ngIf=\"column.dataType==='string'\">\n                    <div class=\"input-group input-group-sm\">\n                        <input [attr.id]=\"column.dataIndex\" [(ngModel)]=\"filterValue\" [attr.placeholder]=\"column.text\" (keyup)=\"keyUpSearch(column)\" type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\">\n                        <div class=\"input-group-btn\">\n                            <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <i class=\"fa fa-filter\" aria-hidden=\"true\"></i>\n                            </button>\n                            <div class=\"dropdown-menu dropdown-menu-right \">\n\n                                <ng-container *ngFor=\"let opt of filterOptions\">\n                                    <ng-container *ngIf=\"opt.type===column.dataType\">\n                                        <a class=\"dropdown-item amexio-dropdown-records\" (click)=\"selectedOption(column,opt)\" >{{opt.key}}&nbsp;<i [class]=\"opt.checkedStatus\" aria-hidden=\"true\"></i></a>\n                                    </ng-container>\n                                </ng-container>\n                            </div>\n                        </div>\n                        <span class=\"input-group-btn\">\n                      <button *ngIf=\"column.filterIcon\" class=\"btn btn-secondary\" type=\"button\" (click)=\"removeFilter(column)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\n                    </span>\n                    </div>\n                </ng-container>\n                <ng-container *ngIf=\"column.dataType==='number'\">\n                    <div class=\"input-group input-group-sm\">\n                        <input [attr.id]=\"column.dataIndex\" [(ngModel)]=\"filterValue\" [attr.placeholder]=\"column.text\" (keyup)=\"keyUpSearch(column)\" type=\"number\" class=\"form-control\" aria-label=\"Text input with dropdown button\">\n                        <div class=\"input-group-btn\">\n                            <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <i class=\"fa fa-filter\" aria-hidden=\"true\"></i>\n                            </button>\n                            <div class=\"dropdown-menu dropdown-menu-right\">\n                                <ng-container *ngFor=\"let opt of filterOptions\">\n                                    <ng-container *ngIf=\"opt.type===column.dataType\">\n                                        <a class=\"dropdown-item amexio-dropdown-records\" (click)=\"selectedOption(column,opt)\" >{{opt.key}}&nbsp;<i [class]=\"opt.checkedStatus\" aria-hidden=\"true\"></i></a>\n                                    </ng-container>\n                                </ng-container>\n                            </div>\n                        </div>\n                        <span class=\"input-group-btn\">\n                      <button *ngIf=\"column.filterIcon\" class=\"btn btn-secondary\" type=\"button\" (click)=\"removeFilter(column)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\n                    </span>\n                    </div>\n                </ng-container>\n            </div>\n        </div>\n    ", styles: [
                    "\n            .amexio-dropdown-records{\n            }\n        "
                ]
            },] },
];
/**
 * @nocollapse
 */
FilterComponent.ctorParameters = function () { return [
    { type: CommonHttpService, },
]; };
FilterComponent.propDecorators = {
    'column': [{ type: _angular_core.Input },],
    'filterObject': [{ type: _angular_core.Output },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var CarouselComponent = (function () {
    /**
     * @param {?} carouselService
     */
    function CarouselComponent(carouselService) {
        this.carouselService = carouselService;
        this.isContent = false;
        this.elementId = 'scroll' + Math.round(Math.random() * 200);
        this.className = 'carousel amexio-carousel slide';
    }
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.httpMethod && this.httpUrl) {
            this.carouselService.fetchData(this.httpUrl, this.httpMethod).subscribe(function (response) {
                _this.response = response.json();
            }, function (error) {
            }, function () {
                _this.setData(_this.response);
            });
        }
        else if (this.scrollViewBindData) {
            this.setData(this.scrollViewBindData);
        }
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    CarouselComponent.prototype.setData = function (httpResponse) {
        var /** @type {?} */ responsedata = httpResponse;
        if (this.dataReader != null) {
            var /** @type {?} */ dr = this.dataReader.split('.');
            for (var /** @type {?} */ ir = 0; ir < dr.length; ir++) {
                responsedata = responsedata[dr[ir]];
            }
        }
        else {
            responsedata = httpResponse;
        }
        this.viewData = responsedata;
    };
    return CarouselComponent;
}());
CarouselComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-carousel',
                template: "\n        <div [attr.id]=\"elementId\" [attr.class]=\"className\" data-ride=\"carousel\">\n            <ol class=\"carousel-indicators\">\n                <li *ngFor=\"let scroll of viewData;let i =index\"  [attr.data-target]=\"'#'+elementId\" [attr.data-slide-to]=\"i\" class=\"\" [ngClass]=\"{'active':scroll.active}\"></li>\n            </ol>\n            <div class=\"carousel-inner\" role=\"listbox\">\n                <div class=\"carousel-item\" [ngClass]=\"{'active':scrollData.active}\"  *ngFor=\"let scrollData of viewData\">\n                    <ng-container *ngIf=\"isContent\">\n                        <div [innerHTML]=\"scrollData.content\"></div>\n                    </ng-container>\n                    <ng-container *ngIf=\"!isContent\">\n                        <img class=\"d-block img-fluid\" [src]=\"scrollData.img\" alt=\"First slide\" style=\"width: 100%\">\n                        <div class=\"carousel-caption  d-md-block\">\n                            <h3>{{scrollData.title}}</h3>\n                            <p>{{scrollData.caption}}</p>\n                        </div>\n                    </ng-container>\n                </div>\n            </div>\n            <a class=\"carousel-control-prev\" [attr.href]=\"'#'+elementId\" role=\"button\" data-slide=\"prev\">\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Previous</span>\n            </a>\n            <a class=\"carousel-control-next\" [attr.href]=\"'#'+elementId\" role=\"button\" data-slide=\"next\">\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Next</span>\n            </a>\n        </div>\n    ",
                providers: [CommonHttpService]
            },] },
];
/**
 * @nocollapse
 */
CarouselComponent.ctorParameters = function () { return [
    { type: CommonHttpService, },
]; };
CarouselComponent.propDecorators = {
    'httpUrl': [{ type: _angular_core.Input },],
    'httpMethod': [{ type: _angular_core.Input },],
    'dataReader': [{ type: _angular_core.Input },],
    'scrollViewBindData': [{ type: _angular_core.Input },],
    'isContent': [{ type: _angular_core.Input },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author -  Dattaram Gawas
 *
 */
var ItemSelectorComponent = (function () {
    /**
     * @param {?} itemSelectorService
     */
    function ItemSelectorComponent(itemSelectorService) {
        this.itemSelectorService = itemSelectorService;
        this.availableRecords = new _angular_core.EventEmitter();
        this.selectedRecords = new _angular_core.EventEmitter();
        this.selectedData = [];
    }
    /**
     * @return {?}
     */
    ItemSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.height && this.height >= 300) {
            this.itemSelectorHeight = this.height + 'px';
        }
        else {
            this.itemSelectorHeight = 300 + 'px';
        }
        if (window.innerWidth < 768) {
            this.itemSelectorWidth = 100 + '%';
            this.smallScreen = true;
        }
        else {
            this.smallScreen = false;
            this.itemSelectorWidth = 46 + '%';
        }
        if (this.httpMethod && this.httpUrl) {
            this.itemSelectorService.fetchData(this.httpUrl, this.httpMethod).subscribe(function (response) {
                _this.response = response.json();
            }, function (error) {
            }, function () {
                _this.setData(_this.response);
            });
        }
        else if (this.ItemSelectBindData) {
            this.setData(this.ItemSelectBindData);
        }
    };
    /**
     * @return {?}
     */
    ItemSelectorComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    ItemSelectorComponent.prototype.setData = function (httpResponse) {
        var /** @type {?} */ responsedata = httpResponse;
        if (this.dataReader != null) {
            var /** @type {?} */ dr = this.dataReader.split('.');
            for (var /** @type {?} */ ir = 0; ir < dr.length; ir++) {
                responsedata = responsedata[dr[ir]];
            }
            responsedata.forEach(function (option, index) {
                option['isSelected'] = false;
            });
        }
        else {
            responsedata = httpResponse;
        }
        this.availableData = responsedata;
    };
    /**
     * @param {?} data
     * @param {?} index
     * @return {?}
     */
    ItemSelectorComponent.prototype.itemClick = function (data, index) {
        debugger;
        this.switchingObject = data;
        this.objectIndex = index;
        for (var /** @type {?} */ ir = 0; ir < this.availableData.length; ir++) {
            if ((this.availableData[ir])[this.valueField] === data[this.valueField]) {
                this.availableData[ir].isSelected = true;
            }
            else {
                this.availableData[ir].isSelected = false;
            }
        }
    };
    /**
     * @return {?}
     */
    ItemSelectorComponent.prototype.rightSwitch = function () {
        var _this = this;
        debugger;
        if (this.switchingObject != null) {
            if (this.switchingObject.isSelected) {
                this.selectedData.push(this.switchingObject);
                this.switchingObject.isSelected = true;
                this.availableData.forEach(function (option, index) {
                    if (option.isSelected) {
                        _this.availableData.splice(index, 1);
                    }
                });
                this.switchingObject = null;
                this.dataEmitter();
            }
        }
    };
    /**
     * @return {?}
     */
    ItemSelectorComponent.prototype.leftSwitch = function () {
        var _this = this;
        if (this.switchingObject != null) {
            if (this.switchingObject.isSelected) {
                this.availableData.push(this.switchingObject);
                this.switchingObject.isSelected = false;
                this.selectedData.forEach(function (option, index) {
                    if (!option.isSelected) {
                        _this.selectedData.splice(index, 1);
                    }
                });
                this.switchingObject = null;
                this.dataEmitter();
            }
        }
    };
    /**
     * @return {?}
     */
    ItemSelectorComponent.prototype.upSwitch = function () {
        if (this.switchingObject != null) {
            if (this.switchingObject.isSelected) {
                var /** @type {?} */ index = this.selectedData[this.objectIndex];
                this.selectedData[this.objectIndex] = this.selectedData[this.objectIndex - 1];
                this.selectedData[this.objectIndex - 1] = index;
                this.switchingObject = null;
                this.dataEmitter();
            }
        }
    };
    /**
     * @return {?}
     */
    ItemSelectorComponent.prototype.downSwitch = function () {
        if (this.switchingObject != null) {
            if (this.switchingObject.isSelected) {
                if (this.selectedData.length - 1 !== this.objectIndex) {
                    var /** @type {?} */ index = this.selectedData[this.objectIndex];
                    this.selectedData[this.objectIndex] = this.selectedData[this.objectIndex + 1];
                    this.selectedData[this.objectIndex + 1] = index;
                    this.switchingObject = null;
                    this.dataEmitter();
                }
            }
        }
    };
    /**
     * @return {?}
     */
    ItemSelectorComponent.prototype.moveTop = function () {
        var /** @type {?} */ tempArray = [];
        if (this.switchingObject != null && this.switchingObject.isSelected) {
            if (this.selectedData.length > 1) {
                tempArray[0] = this.selectedData[this.objectIndex];
                this.selectedData.splice(this.objectIndex, 1);
                this.selectedData.forEach(function (option) {
                    tempArray.push(option);
                });
                this.selectedData = tempArray;
                this.switchingObject = null;
                this.dataEmitter();
            }
        }
    };
    /**
     * @return {?}
     */
    ItemSelectorComponent.prototype.moveDown = function () {
        if (this.switchingObject != null) {
            if (this.switchingObject.isSelected && this.selectedData.length > 1) {
                this.selectedData.splice(this.objectIndex, 1);
                this.selectedData[this.selectedData.length] = this.switchingObject;
            }
        }
        this.switchingObject = null;
        this.dataEmitter();
    };
    /**
     * @return {?}
     */
    ItemSelectorComponent.prototype.dataEmitter = function () {
        this.availableRecords.emit(this.availableData);
        this.selectedRecords.emit(this.selectedData);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ItemSelectorComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < 768) {
            this.itemSelectorWidth = 100 + '%';
            this.smallScreen = true;
        }
        else {
            this.smallScreen = false;
            this.itemSelectorWidth = 46 + '%';
        }
    };
    return ItemSelectorComponent;
}());
ItemSelectorComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-item-selector', template: "\n\n        <div class=\" amexio-itemselector\" (window:resize)=\"onResize($event)\">\n            <div [style.width]=\"itemSelectorWidth\">\n                <table width=\"100%\">\n                    <tr>\n                        <td class=\"amexio-itemselector-header\">\n                            Available\n                        </td>\n                    </tr>\n                </table>\n                <div [style.height]=\"itemSelectorHeight\" style=\"overflow: auto\">\n                    <table width=\"100%\">\n                        <tbody>\n                        <tr *ngFor=\"let data of availableData; let i = index\" (click)=\"itemClick(data,i)\">\n                            <td class=\"amexio-itemselector-records\" [ngClass]=\"data['isSelected'] ? 'amexio-itemselector-records-selected':''\">{{data[displayField]}}</td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <ng-container *ngIf=\"smallScreen\">\n                <div class=\"amexio-itemselector-width\">\n                    <div class=\"btn-group amexio-itemselector-btn-group \" role=\"group\"\n                         aria-label=\"Button group with nested dropdown\">\n                        <amexio-btn (onClick)=\"moveTop()\" [type]=\"'link'\" [tooltipMessage]=\"'move top'\" [block]=\"true\"\n                                    [icon]=\"'fa fa-caret-up'\"></amexio-btn>\n                        <amexio-btn (onClick)=\"upSwitch()\" [type]=\"'link'\" [tooltipMessage]=\"'move up'\" [block]=\"true\"\n                                    [icon]=\"'fa fa-angle-double-up'\"></amexio-btn>\n                        <amexio-btn (onClick)=\"leftSwitch()\" [type]=\"'link'\" [tooltipMessage]=\"'move left'\" [block]=\"true\"\n                                    [icon]=\"'fa fa-arrow-up'\"></amexio-btn>\n                        <amexio-btn (onClick)=\"rightSwitch()\" [type]=\"'link'\" [tooltipMessage]=\"'move right'\" [block]=\"true\"\n                                    [icon]=\"'fa fa-arrow-down'\"></amexio-btn>\n                        <amexio-btn (onClick)=\"downSwitch()\" [type]=\"'link'\" [tooltipMessage]=\"'move down'\" [block]=\"true\"\n                                    [icon]=\"'fa fa-angle-double-down'\"></amexio-btn>\n                        <amexio-btn (onClick)=\"moveDown()\" [type]=\"'link'\" [tooltipMessage]=\"'bottom'\" [block]=\"true\"\n                                    [icon]=\"'fa fa-caret-down'\"></amexio-btn>\n                    </div>\n                </div>\n\n            </ng-container>\n            <div class=\"amexio-itemselector-smallscreen\" *ngIf=\"!smallScreen\">\n                <div class=\"list-group text-center amexio-itemselector-smallscreen-div\" [style.height]=\"itemSelectorHeight\">\n                    <div>\n                        <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                            <amexio-btn (onClick)=\"moveTop()\" [type]=\"'link'\" [tooltipMessage]=\"'move top'\" [block]=\"true\"\n                                        [icon]=\"'fa fa-caret-up fa-2x'\"></amexio-btn>\n                            <amexio-btn (onClick)=\"upSwitch()\" [type]=\"'link'\" [tooltipMessage]=\"'move up'\" [block]=\"true\"\n                                        [icon]=\"'fa fa-arrow-up'\"></amexio-btn>\n                            <amexio-btn (onClick)=\"leftSwitch()\" [type]=\"'link'\" [tooltipMessage]=\"'move left'\" [block]=\"true\"\n                                        [icon]=\"'fa fa-arrow-left'\"></amexio-btn>\n                            <amexio-btn (onClick)=\"rightSwitch()\" [type]=\"'link'\" [tooltipMessage]=\"'move right'\" [block]=\"true\"\n                                        [icon]=\"'fa fa-arrow-right'\"></amexio-btn>\n                            <amexio-btn (onClick)=\"downSwitch()\" [type]=\"'link'\" [tooltipMessage]=\"'move down'\" [block]=\"true\"\n                                        [icon]=\"'fa fa-arrow-down'\"></amexio-btn>\n                            <amexio-btn (onClick)=\"moveDown()\" [type]=\"'link'\" [tooltipMessage]=\"'bottom'\" [block]=\"true\"\n                                        [icon]=\"'fa fa-caret-down fa-2x '\"></amexio-btn>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            <div [style.width]=\"itemSelectorWidth\">\n                <table width=\"100%\">\n                    <tr>\n                        <td class=\"amexio-itemselector-header\">\n                            Selected\n                        </td>\n                    </tr>\n                </table>\n                <div [style.height]=\"itemSelectorHeight\" style=\"overflow: auto\">\n                    <table width=\"100%\">\n                        <tbody>\n                        <tr *ngFor=\"let data of selectedData; let i = index\" (click)=\"itemClick(data,i)\">\n                            <td class=\"amexio-itemselector-records\" [ngClass]=\"data['isSelected'] ? 'amexio-itemselector-records-selected':''\">{{data[displayField]}}</td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n    ", styles: ["\n\n        .amexio-itemselector {\n            width: 100%;\n            overflow: hidden;\n            display: flex;\n        }\n\n\n        @media screen and (max-width: 768px) {\n            .amexio-itemselector {\n                width: 100%;\n                overflow: hidden;\n                display: block;\n            }\n        }\n\n\n        .amexio-itemselector-header {\n            padding: 10px;\n            height: 48px;\n            background-color: #cecece;\n        }\n\n        .amexio-itemselector-smallscreen {\n            width: 8%;\n        }\n\n        .amexio-itemselector-smallscreen-div {\n            padding-top: 35%;\n        }\n\n        .amexio-itemselector-btn-group {\n            padding: 5% 5% 2% 5%;\n        }\n\n        .amexio-itemselector-width {\n            width: 100%;\n        }\n\n        .amexio-itemselector-records {\n            width: 100%;\n            padding: 10px;\n        }\n\n        .amexio-itemselector-records-selected{\n            background-color: #cecece;\n        }\n\n\n\n    "], providers: [CommonHttpService]
            },] },
];
/**
 * @nocollapse
 */
ItemSelectorComponent.ctorParameters = function () { return [
    { type: CommonHttpService, },
]; };
ItemSelectorComponent.propDecorators = {
    'height': [{ type: _angular_core.Input },],
    'httpUrl': [{ type: _angular_core.Input },],
    'dataReader': [{ type: _angular_core.Input },],
    'httpMethod': [{ type: _angular_core.Input },],
    'ItemSelectBindData': [{ type: _angular_core.Input },],
    'displayField': [{ type: _angular_core.Input },],
    'valueField': [{ type: _angular_core.Input },],
    'availableRecords': [{ type: _angular_core.Output },],
    'selectedRecords': [{ type: _angular_core.Output },],
};

/**
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Created by Ketan Gote on 6/30/17.
 */
var NavbarComponent = (function () {
    /**
     * @param {?} _http
     * @param {?} carouselService
     */
    function NavbarComponent(_http, carouselService) {
        this._http = _http;
        this.carouselService = carouselService;
        this.selectedNode = new _angular_core.EventEmitter();
        this.elementId = 'nav-' + Math.floor(Math.random() * 90000) + 10000 + '-';
    }
    /**
     * @param {?} event
     * @param {?} ind
     * @return {?}
     */
    NavbarComponent.prototype.adjustPosition = function (event, ind) {
        this.thd = document.getElementById(this.elementId + 'dd-lr-' + ind);
        this.thdm = document.getElementById(this.elementId + 'dd-m-' + ind);
        this.thdm.style = 'margin-left: ' + this.thd.offsetLeft + 'px;';
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngAfterViewInit = function () {
        if (this.httpMethod && this.httpUrl) {
            this.callService();
        }
        else if (this.bindData) {
            this.setData(this.bindData);
        }
    };
    /**
     * @param {?} nodeData
     * @return {?}
     */
    NavbarComponent.prototype.menuClick = function (nodeData) {
        this.selectedNode.emit(nodeData);
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.renderServiceData = function () {
        this.setData(this.bindData);
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    NavbarComponent.prototype.setData = function (httpResponse) {
        this.menus = this.getData(httpResponse);
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    NavbarComponent.prototype.getData = function (httpResponse) {
        var /** @type {?} */ responsedata = httpResponse;
        if ((this.dataReader && this.dataReader.length > 0)) {
            var /** @type {?} */ dr = this.dataReader.split('.');
            for (var /** @type {?} */ ir = 0; ir < dr.length; ir++) {
                responsedata = responsedata[dr[ir]];
            }
        }
        return responsedata;
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.callService = function () {
        var _this = this;
        this.carouselService.fetchData(this.httpUrl, this.httpMethod).subscribe(function (response) {
            _this.bindData = response.json();
        }, function (error) {
        }, function () {
            _this.renderServiceData();
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    NavbarComponent.prototype.getToggleClass = function (data) {
        return data.hasOwnProperty('childrens');
    };
    return NavbarComponent;
}());
NavbarComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-menubar',
                template: "\n      \n          <nav class=\"navbar navbar-toggleable-md navbar-light bg-faded \" [ngClass]=\"{ 'fixed-bottom dropup':bottom}\">\n            <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-icon\"></span>\n            </button>\n\n              <div class=\"collapse navbar-collapse \" id=\"navbarNavDropdown\">\n                  <ul class=\"nav navbar-nav bg-faded\">\n                      <li class=\"dropdown amexio-navbar-dropdown-large bg-faded\" id=\"{{elementId}}dd-lr-{{ind}}\" *ngFor=\"let mh of menus let ind = index\" >\n                          <a class=\"dropdown-toggle\" [ngClass]=\"{'dropdown-toggle':getToggleClass(mh)}\" data-toggle=\"dropdown\" (click)=\"adjustPosition($event, ind)\">\n                              <ng-container *ngIf=\"headerTemplate==null\">\n                                  &nbsp;&nbsp;{{mh.text}}\n                              </ng-container><ng-template *ngIf=\"headerTemplate!=null\" [ngTemplateOutlet]=\"headerTemplate\" [ngOutletContext]=\"{ $implicit: {}, navHeader:mh }\"></ng-template>\n                          </a>\n                          <ng-container *ngIf=\"mh.childrens\">\n                              <ul class=\"dropdown-menu\" id=\"{{elementId}}dd-m-{{ind}}\">\n                                <div class=\"row\">\n                                  <li class=\"col-sm-4 amexio-navbar-li-position\" *ngFor=\"let sm of mh.childrens let ind =index\">\n                                    <ul class=\"amexio-navbar-align\">\n                                      <li class=\"amexio-navbar-li-custom\">\n                                        <a (click)=\"menuClick(sm)\">\n                                          <ng-container *ngIf=\"childTemplate==null\">{{sm.text}}</ng-container>\n                                          <ng-template *ngIf=\"childTemplate!=null\" [ngTemplateOutlet]=\"childTemplate\" [ngOutletContext]=\"{ $implicit: {}, menuHeader:sm }\"></ng-template>\n                                        </a>\n                                      </li>\n                                      <ng-container *ngIf=\"sm.childrens\">\n                                        <li class=\"amexio-navbar-ifchild\" (nodeClick)=\"menuClick($event)\" amexio-submenu-view [subMenuData]=\"sm.childrens\"  [templates]=\"subMenuTemplate\"></li>\n                                      </ng-container>\n                                    </ul>\n                                  </li>\n                                </div>\n                                 \n                              </ul>\n                          </ng-container>\n                      </li>\n                  </ul>\n              </div>\n          </nav>\n  ",
                styles: ["\n        footer .navbar-collapse.in {\n            bottom: 70px;\n            position: absolute;\n            background-color:#333;\n            width: 100%;\n        }\n\n        @media screen and (max-width: 768px) {\n            footer .navbar-collapse {\n                position: absolute;\n                bottom: 70px;\n                width: 100%;\n                background-color: #303030;\n            }\n        }\n        .amexio-navbar-dropdown-large {\n            position: static !important;\n        }\n        .amexio-navbar-li-position{\n            position: static !important\n        }\n        .amexio-navbar-align{\n            padding: 0px;\n            margin: 0px;\n        }\n        .amexio-navbar-li-custom{\n            list-style: none;\n            color: #428bca;\n            font-size: 18px;\n            padding: 3px 2px;\n            position: static !important\n        }\n        .amexio-navbar-li-custom a{\n            cursor:pointer;\n            text-decoration: none;\n            color: #428bca;\n        }\n        .amexio-navbar-ifchild{\n            list-style: none;\n            padding:0px;\n        }\n    "],
                providers: [CommonHttpService]
            },] },
];
/**
 * @nocollapse
 */
NavbarComponent.ctorParameters = function () { return [
    { type: _angular_http.Http, },
    { type: CommonHttpService, },
]; };
NavbarComponent.propDecorators = {
    'httpUrl': [{ type: _angular_core.Input },],
    'httpMethod': [{ type: _angular_core.Input },],
    'dataReader': [{ type: _angular_core.Input },],
    'bindData': [{ type: _angular_core.Input },],
    'bottom': [{ type: _angular_core.Input },],
    'selectedNode': [{ type: _angular_core.Output },],
    'headerTemplate': [{ type: _angular_core.ContentChild, args: ['amexioNavHeaderTmpl',] },],
    'childTemplate': [{ type: _angular_core.ContentChild, args: ['amexioMenuHeaderTmpl',] },],
    'subMenuTemplate': [{ type: _angular_core.ContentChild, args: ['amexioSubMenuTmpl',] },],
};

/**
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Created by Ketan Gote on 6/30/17.
 */
var NavbarSubMenuComponent = (function () {
    function NavbarSubMenuComponent() {
        this.nodeClick = new _angular_core.EventEmitter();
    }
    /**
     * @return {?}
     */
    NavbarSubMenuComponent.prototype.ngOnInit = function () {
    };
    /**
     * @param {?} nodeData
     * @return {?}
     */
    NavbarSubMenuComponent.prototype.menuClick = function (nodeData) {
        this.nodeClick.emit(nodeData);
    };
    return NavbarSubMenuComponent;
}());
NavbarSubMenuComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: '[amexio-submenu-view]',
                template: "\n    <ul class=\"amexio-navbarsubmenu-ul\">\n      <li *ngFor=\"let sm of subMenuData\">\n        <ng-container  *ngIf=\"sm.childrens\">\n          <a class=\"amexio-navbarsubmenu-a\" [ngClass]=\"sm.selected ? 'amexio-link-selected' : 'amexio-link-notselected'\"  (click)=\"menuClick(sm)\">\n            <ng-container *ngIf=\"templates==null\">\n              {{sm.text}}\n            </ng-container>\n            <ng-template  [ngTemplateOutlet]=\"templates\" [ngOutletContext]=\"{ $implicit: {}, subMenus:sm }\"></ng-template>\n           </a>\n          <ul class=\"amexio-navbarsubmenu-ul\">\n            <ng-container *ngIf=\"sm.childrens\">\n              <li (nodeClick)=\"menuClick($event)\" amexio-submenu-view [subMenuData]=\"sm.childrens\" [templates]=\"templates\"></li>\n            </ng-container>\n          </ul>\n        </ng-container>\n        \n        <ng-container  *ngIf=\"!sm.childrens\">\n          <a class=\"amexio-navbarsubmenu-a\" [ngClass]=\"sm.selected ? 'amexio-link-selected' : 'amexio-link-notselected'\"  (click)=\"menuClick(sm)\">\n           <ng-container *ngIf=\"templates==null\">\n             {{sm.text}}\n           </ng-container> \n            <ng-template *ngIf=\"templates!=null\"  [ngTemplateOutlet]=\"templates\" [ngOutletContext]=\"{ $implicit: {}, subMenus:sm }\"></ng-template>\n          </a>\n        </ng-container>\n      </li>\n    </ul>\n  ",
                styles: ["\n      .amexio-navbarsubmenu-ul{\n          list-style: none;\n          padding: 1px;\n      }\n      .amexio-navbarsubmenu-ul li {\n          list-style: none;\n          padding: 1px 20px;\n          color: #777;\n      }\n      .amexio-navbarsubmenu-a {\n          text-decoration: none;\n          color: #777;\n          cursor:pointer;\n      }\n\n      .amexio-link-selected{\n        color:blue;\n      }\n      .amexio-link-notselected{\n\n      }\n  "]
            },] },
];
/**
 * @nocollapse
 */
NavbarSubMenuComponent.ctorParameters = function () { return []; };
NavbarSubMenuComponent.propDecorators = {
    'subMenuData': [{ type: _angular_core.Input },],
    'nodeClick': [{ type: _angular_core.Output },],
    'templates': [{ type: _angular_core.Input },],
};

/**
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Created by Ketan Gote on 7/4/17.
 */
var SideNavBarComponent = (function () {
    /**
     * @param {?} _http
     * @param {?} navService
     * @param {?} cdf
     */
    function SideNavBarComponent(_http, navService, cdf) {
        this._http = _http;
        this.navService = navService;
        this.cdf = cdf;
        this.selectedNode = new _angular_core.EventEmitter();
        this.elementId = 'amexio-sidenav-view-' + Math.floor(Math.random() * 90000) + 10000;
        this.expanded = false;
        this.filter = false;
        this.width = "20%";
        this.enableToggleButton = true;
    }
    /**
     * @return {?}
     */
    SideNavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toPosition = this.toPosition + 'px';
        if (this.httpMethod && this.httpUrl) {
            this.callService();
        }
        else if (this.bindData) {
            this.setData(this.bindData);
        }
        // this.openNav();
        if (this.expanded) {
            setTimeout(function () {
                _this.openNav();
            });
        }
    };
    /**
     * @return {?}
     */
    SideNavBarComponent.prototype.getSideNavbarToggleBtnClass = function () {
        if (!this.right) {
            this.amexioSidenavbarStr = 'amexio-sidenavbar-sidenavopenleft';
        }
        else if (this.right) {
            this.amexioSidenavbarStr = 'amexio-sidenavbar-sidenavopenright';
        }
    };
    /**
     * @return {?}
     */
    SideNavBarComponent.prototype.getSideNavbarClass = function () {
        if (!this.right && this.position != 'relative') {
            this.amexioSidenavbarStr = 'amexio-sidenav-left';
        }
        else if (this.right) {
            this.amexioSidenavbarStr = 'amexio-sidenavbar-sidenavright';
        }
        else if (this.position == "relative") {
            this.amexioSidenavbarStr = 'amexio-sidenavbar-sidenav-relative';
        }
        return this.amexioSidenavbarStr;
    };
    /**
     * @return {?}
     */
    SideNavBarComponent.prototype.ngAfterViewInit = function () {
        /* if (this.httpMethod && this.httpUrl) {
         this.callService();
         } else if (this.bindData) {
         this.setData(this.bindData);
         }
         // this.openNav();

         if (this.expanded) {
         setTimeout(() => {
         this.openNav();
         });
         }*/
    };
    /**
     * @param {?} node
     * @return {?}
     */
    SideNavBarComponent.prototype.expandNode = function (node) {
        node.expand = !node.expand;
        if (node.expand) {
            node.hstyle = {
                'display': 'block'
            };
        }
        else {
            node.hstyle = {
                'display': 'none'
            };
        }
        var /** @type {?} */ nodeClick = JSON.parse(JSON.stringify(node));
        delete nodeClick.hstyle;
        delete nodeClick.expand;
        this.menuClick(nodeClick);
    };
    /**
     * @param {?} nodeData
     * @return {?}
     */
    SideNavBarComponent.prototype.menuClick = function (nodeData) {
        this.resetSelected(this.menus, nodeData.text);
        this.selectedNode.emit(nodeData);
        if (!nodeData.childrens && !this.expanded) {
            this.closeNav();
        }
    };
    /**
     * @return {?}
     */
    SideNavBarComponent.prototype.renderServiceData = function () {
        this.setData(this.bindData);
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    SideNavBarComponent.prototype.setData = function (httpResponse) {
        this.menus = this.getData(httpResponse);
        this.orgMenus = JSON.parse(JSON.stringify(this.menus));
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    SideNavBarComponent.prototype.getData = function (httpResponse) {
        var /** @type {?} */ responsedata = httpResponse;
        if ((this.dataReader && this.dataReader.length > 0)) {
            var /** @type {?} */ dr = this.dataReader.split('.');
            for (var /** @type {?} */ ir = 0; ir < dr.length; ir++) {
                responsedata = responsedata[dr[ir]];
            }
        }
        return responsedata;
    };
    /**
     * @return {?}
     */
    SideNavBarComponent.prototype.callService = function () {
        var _this = this;
        this.navService.fetchData(this.httpUrl, this.httpMethod).subscribe(function (response) {
            _this.bindData = response.json();
        }, function (error) {
        }, function () {
            _this.renderServiceData();
            _this.cdf.markForCheck();
        });
    };
    /**
     * @return {?}
     */
    SideNavBarComponent.prototype.openNav = function () {
        if (document.getElementById(this.elementId) && document.getElementById(this.elementId).style) {
            document.getElementById(this.elementId).style.width = this.width;
        }
    };
    /**
     * @return {?}
     */
    SideNavBarComponent.prototype.closeNav = function () {
        if (document.getElementById(this.elementId) && document.getElementById(this.elementId).style) {
            document.getElementById(this.elementId).style.width = '0';
        }
    };
    /**
     * @return {?}
     */
    SideNavBarComponent.prototype.filterData = function () {
        if (this.filterText.length >= 1) {
            var /** @type {?} */ mdata = JSON.parse(JSON.stringify(this.orgMenus));
            var /** @type {?} */ mnodes = this.searchTree(mdata, this.filterText);
            this.menus = mnodes;
        }
        else {
            this.menus = JSON.parse(JSON.stringify(this.orgMenus));
        }
    };
    /**
     * @param {?} data
     * @param {?} matchingTitle
     * @return {?}
     */
    SideNavBarComponent.prototype.searchTree = function (data, matchingTitle) {
        var /** @type {?} */ res = data.filter(function f(node) {
            node.expand = true;
            if (node.text.toLowerCase().startsWith(matchingTitle.toLowerCase())) {
                return true;
            }
            if (node.childrens) {
                return (node.childrens = node.childrens.filter(f)).length;
            }
        });
        return res;
    };
    /**
     * @param {?} data
     * @param {?} text
     * @return {?}
     */
    SideNavBarComponent.prototype.resetSelected = function (data, text) {
        for (var /** @type {?} */ ir = 0; ir < data.length; ir++) {
            if (data[ir].text === "Sample Form") {
            }
            if (data[ir].text === text) {
                data[ir].selected = true;
            }
            else {
                data[ir].selected = false;
            }
            if (data[ir].childrens) {
                this.resetSelected(data[ir].childrens, text);
            }
        }
    };
    /**
     * @return {?}
     */
    SideNavBarComponent.prototype.navToggle = function () {
        if (document.getElementById(this.elementId).style.width == '0px') {
            this.openNav();
        }
        else {
            this.closeNav();
        }
    };
    return SideNavBarComponent;
}());
SideNavBarComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-sidemenubar',
                template: "\n\n        <div [style.margin-top]=\"toPosition\" [ngClass]=\"getSideNavbarClass()\"  [attr.id]=\"elementId\" (mouseleave)=\"expanded?null:closeNav()\">\n            <ul class=\"navbar-nav\">\n                <li *ngIf=\"filter==true\">\n                    <div class=\"amexio-sidenavbar-filter\">\n                        <input type=\"text\" class=\"form-control amexio-sidenavbar-input-width\" [(ngModel)]=\"filterText\"  placeholder=\"Search\" (keyup)=\"filterData()\" />\n                    </div>\n                </li>\n                <li class=\"nav-item\" *ngFor=\"let header of menus\"  [ngClass]=\"{'amexio-sidenavbar-subheader':header.childrens,  'amexio-link-selected':(header.selected && !header.childrens)  }\">\n                    <div (click)=\"expandNode(header)\">\n                        <ng-container *ngIf=\"headerTemplate==null\">\n                            <a [ngClass]=\"(header.selected && !header.childrens)? 'amexio-link-selected' : 'amexio-link-notselected'\" >\n                                {{header.text}}\n                            </a>\n                        </ng-container>\n\n                        <ng-template *ngIf=\"headerTemplate!=null\" [ngTemplateOutlet]=\"headerTemplate\" [ngOutletContext]=\"{ $implicit: {}, navHeader:header }\"></ng-template>\n\n                        <span *ngIf=\"header.childrens \" class=\"amexio-sidenavbar-child-header fa\" [ngClass]=\"{'fa-angle-up':header.expand,'fa-angle-down':!header.expand}\"></span>\n                    </div>\n                    <ng-container *ngIf=\"header.childrens && header.expand\">\n                        <div [ngStyle]=\"header.hstyle\" >\n                            <ul  class=\"navbar-nav\">\n                                <li class=\"nav-item\" *ngFor=\"let level1Menu of header.childrens\" (click)=\"menuClick(level1Menu);\" [ngClass]=\"{'amexio-link-selected':(level1Menu.selected && !level1Menu.childrens)  }\" >\n                                    <ng-container *ngIf=\"childTemplate==null\">\n                                        <a [ngClass]=\"(level1Menu.selected && !level1Menu.childrens)? 'amexio-link-selected' : 'amexio-link-notselected'\" >\n                                            {{level1Menu.text}}\n                                        </a>\n                                    </ng-container>\n                                    <ng-template *ngIf=\"childTemplate!=null\" [ngTemplateOutlet]=\"childTemplate\" [ngOutletContext]=\"{ $implicit: {}, menuHeader:level1Menu }\"></ng-template>\n\n                                    <ng-container *ngIf=\"level1Menu.childrens\">\n                                        <ul class=\"amexio-sidenavbar-level1-child\" (nodeClick)=\"menuClick($event)\"  [templates]=\"subMenuTemplate\"  amexio-submenu-view [subMenuData]=\"level1Menu.childrens\"></ul>\n                                    </ng-container>\n                                </li>\n                            </ul>\n                        </div>\n                    </ng-container>\n\n                </li>\n            </ul>\n        </div>\n\n        <span *ngIf=\"enableToggleButton && position!='relative' \" [style.margin-top]=\"toPosition\"  [ngClass]=\"{'amexio-sidenavbar-sidenavopenleft':(!right && position!='relative'), 'amexio-sidenavbar-sidenavopenright':right}\"  (click)=\"openNav()\">&#9776;</span>\n\n    ",
                styles: ["\n\n\n        .amexio-link-selected{\n\n        }\n        .amexio-link-notselected{\n\n        } /*this is for relative position of sidenavbar*/\n        .amexio-sidenavbar-sidenav-relative{\n            height: 100%;\n            position: relative;\n            z-index: 1;\n            background-color: #ffffff;\n            overflow-x: hidden;\n            transition: 0.5s;\n            overflow: auto;\n        }\n        .amexio-sidenav-left {\n            height: 100%;\n            width: 0;\n            position: fixed;\n            z-index: 1;\n\n            left: 0;\n            background-color: #ffffff;\n            overflow-x: hidden;\n            transition: 0.5s;\n            overflow: auto;\n        }\n\n\n        .amexio-sidenav-left .nav-item{\n            text-align: left;\n            padding: 10px;\n            border-bottom: 1px solid #dddddd;\n        }\n\n        .amexio-sidenavbar-subheader .nav-item{\n            border: none;\n        }\n\n        .amexio-navbarsubmenu-ul li{\n            padding: 10px;\n        }\n\n        .amexio-sidenavbar-sidenavopenleft{\n            position:absolute;\n            top:0;\n            left:0;\n            font-size:30px;\n            cursor:pointer\n        }\n\n\n        .amexio-sidenavbar-sidenavright {\n            height: 100%;\n            width: 0;\n            position: fixed;\n            z-index: 1;\n            top: 0;\n            right: 0;\n            background-color: #ffffff;\n            overflow-x: hidden;\n            transition: 0.5s;\n            overflow: auto;\n        }\n\n        .amexio-sidenavbar-sidenavopenright{\n            position:absolute;\n            top:0;\n            right:0;\n            font-size:30px;\n            cursor:pointer\n        }\n\n        .amexio-sidenavbar-sidenavright >ul >li {\n            border-bottom: 1px solid #e7e7e7;\n        }\n\n        @media screen and (max-height: 450px) {\n            .amexio-sidenav-left {padding-top: 15px;}\n        }\n        .amexio-sidenavbar-filter{\n            padding-top: 5px;\n            padding-bottom: 5px;\n            padding-left: 10px;\n        }\n        .amexio-sidenavbar-input-width{\n            width: 100%;\n        }\n        .amexio-sidenavbar-nav-link-a{\n            padding-left: 10px;\n            padding-right: 10px;\n        }\n        .amexio-sidenavbar-child-header{\n            float: right;\n        }\n        .amexio-sidenavbar-level1-child{\n            list-style: none;\n            padding:0px;\n        }\n    "],
                providers: [CommonHttpService]
            },] },
];
/**
 * @nocollapse
 */
SideNavBarComponent.ctorParameters = function () { return [
    { type: _angular_http.Http, },
    { type: CommonHttpService, },
    { type: _angular_core.ChangeDetectorRef, },
]; };
SideNavBarComponent.propDecorators = {
    'httpUrl': [{ type: _angular_core.Input },],
    'httpMethod': [{ type: _angular_core.Input },],
    'dataReader': [{ type: _angular_core.Input },],
    'bindData': [{ type: _angular_core.Input },],
    'expanded': [{ type: _angular_core.Input },],
    'filter': [{ type: _angular_core.Input },],
    'toPosition': [{ type: _angular_core.Input },],
    'width': [{ type: _angular_core.Input },],
    'enableToggleButton': [{ type: _angular_core.Input },],
    'position': [{ type: _angular_core.Input },],
    'selectedNode': [{ type: _angular_core.Output },],
    'right': [{ type: _angular_core.Input },],
    'headerTemplate': [{ type: _angular_core.ContentChild, args: ['amexioNavHeaderTmpl',] },],
    'childTemplate': [{ type: _angular_core.ContentChild, args: ['amexioMenuHeaderTmpl',] },],
    'subMenuTemplate': [{ type: _angular_core.ContentChild, args: ['amexioSubMenuTmpl',] },],
};

/**
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Created by Ketan Gote on 6/28/17.
 */
var FilterTreeViewComponent = (function () {
    /**
     * @param {?} _http
     * @param {?} cdf
     * @param {?} treeViewFilterService
     */
    function FilterTreeViewComponent(_http, cdf, treeViewFilterService) {
        this._http = _http;
        this.cdf = cdf;
        this.treeViewFilterService = treeViewFilterService;
        this.enableCheckBox = false;
        this.selectedRecord = new _angular_core.EventEmitter();
        this.onTreeNodeChecked = new _angular_core.EventEmitter();
        this.isDataFound = true;
        this.onClickSearch = false;
        this.filterIndex = 3;
        this.triggerChar = 1;
        this.filterOptionData = [
            {
                "key": "Is Equal To",
                "value": "1",
                "type": "string",
                "checkedStatus": ""
            },
            {
                "key": "Is Not Equal To",
                "value": "2",
                "type": "string",
                "checkedStatus": ""
            },
            {
                "key": "Start With",
                "value": "3",
                "type": "string",
                "checkedStatus": "fa fa-check"
            },
            {
                "key": "Ends With",
                "value": "4",
                "type": "string",
                "checkedStatus": ""
            },
            {
                "key": "Contains",
                "value": "5",
                "type": "string",
                "checkedStatus": ""
            },
        ];
    }
    /**
     * @return {?}
     */
    FilterTreeViewComponent.prototype.ngOnInit = function () {
        if (this.parentTmp != null) {
            this.templates = { treeNodeTemplate: this.parentTmp };
        }
        else if (this.templates != null) {
            this.parentTmp = this.templates.treeNodeTemplate;
            // this.cdf.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    FilterTreeViewComponent.prototype.ngAfterViewInit = function () {
        if (this.parentTmp != null) {
            this.templates = { treeNodeTemplate: this.parentTmp };
        }
        else if (this.templates != null) {
            this.parentTmp = this.templates.treeNodeTemplate;
            // this.cdf.detectChanges();
        }
        if (this.httpMethod && this.httpUrl) {
            this.callService();
        }
        else if (this.dataTableBindData) {
            this.setData(this.dataTableBindData);
        }
    };
    /**
     * @return {?}
     */
    FilterTreeViewComponent.prototype.filterData = function () {
        if (this.filterText.length >= this.triggerChar) {
            var /** @type {?} */ tData = JSON.parse(JSON.stringify(this.orgTreeData));
            var /** @type {?} */ treeNodes = this.searchTree(tData, this.filterText);
            this.treeData = treeNodes;
            if (this.treeData.length === 0) {
                this.isDataFound = false;
            }
            else {
                this.isDataFound = true;
            }
        }
        else if (this.onClickSearch) {
            var /** @type {?} */ tData = JSON.parse(JSON.stringify(this.orgTreeData));
            var /** @type {?} */ treeNodes = this.searchTree(tData, this.filterText);
            this.treeData = treeNodes;
            this.onClickSearch = false;
            if (this.treeData.length == 0) {
                this.isDataFound = false;
            }
            else {
                this.isDataFound = true;
            }
        }
        else {
            this.isDataFound = true;
            this.treeData = this.orgTreeData;
        }
    };
    /**
     * @param {?} data
     * @param {?} matchingTitle
     * @return {?}
     */
    FilterTreeViewComponent.prototype.searchTree = function (data, matchingTitle) {
        var /** @type {?} */ fi = this.filterIndex;
        var /** @type {?} */ res = data.filter(function f(node) {
            if (fi == 5 && node.text.toLowerCase().includes(matchingTitle.toLowerCase())) {
                return true;
            }
            if (fi == 3 && node.text.toLowerCase().startsWith(matchingTitle.toLowerCase())) {
                return true;
            }
            if (fi == 1 && node.text.toLowerCase() == matchingTitle.toLowerCase()) {
                return true;
            }
            if (fi == 2 && node.text.toLowerCase() != matchingTitle.toLowerCase()) {
                return true;
            }
            if (fi == 4 && node.text.toLowerCase().endsWith(matchingTitle.toLowerCase())) {
                return true;
            }
            if (node.children) {
                return (node.children = node.children.filter(f)).length;
            }
        });
        return res;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    FilterTreeViewComponent.prototype.filterOption = function (data) {
        this.onClickSearch = true;
        this.filterIndex = data.value;
        this.filterOptionData.forEach(function (opt) {
            if (opt.value != data.value) {
                opt.checkedStatus = '';
            }
            else {
                opt.checkedStatus = 'fa fa-check';
            }
        });
        this.filterData();
    };
    /**
     * @return {?}
     */
    FilterTreeViewComponent.prototype.renderServiceData = function () {
        this.setData(this.dataTableBindData);
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    FilterTreeViewComponent.prototype.setData = function (httpResponse) {
        var /** @type {?} */ tdata = this.getData(httpResponse);
        if (tdata) {
            this.orgTreeData = JSON.parse(JSON.stringify(tdata));
            this.treeData = tdata;
        }
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    FilterTreeViewComponent.prototype.getData = function (httpResponse) {
        var /** @type {?} */ responsedata = httpResponse;
        var /** @type {?} */ dr = this.dataReader.split('.');
        for (var /** @type {?} */ ir = 0; ir < dr.length; ir++) {
            responsedata = responsedata[dr[ir]];
        }
        return responsedata;
    };
    /**
     * @return {?}
     */
    FilterTreeViewComponent.prototype.callService = function () {
        var _this = this;
        this.treeViewFilterService.fetchData(this.httpUrl, this.httpMethod).subscribe(function (response) {
            _this.dataTableBindData = response.json();
        }, function (error) {
        }, function () {
            _this.renderServiceData();
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    FilterTreeViewComponent.prototype.onRowSelect = function (data) {
        this.selectedRecord.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    FilterTreeViewComponent.prototype.onCheckSelect = function (data) {
        this.onTreeNodeChecked.emit(data);
    };
    return FilterTreeViewComponent;
}());
FilterTreeViewComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-tree-filter-view',
                template: "\n\n      <div class=\"col-lg-12\">\n          <div class=\"col-lg-12\">\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\" [(ngModel)]=\"filterText\"  placeholder=\"Search\" (keyup)=\"filterData()\">\n              <div class=\"input-group-btn\">\n                <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                </button>\n                <div class=\"dropdown-menu dropdown-menu-right\">\n                  <a class=\"dropdown-item amexio-dropdown-records\" *ngFor=\"let opt of filterOptionData\" (click)=\"filterOption(opt)\">{{opt.key}}&nbsp;<i [class]=\"opt.checkedStatus\" aria-hidden=\"true\"></i></a>\n                </div>\n              </div>\n            </div>\n              <ng-container *ngIf=\"isDataFound\">\n                  <amexio-tree-view\n                          [dataTableBindData]=\"treeData\"\n                          [enableCheckBox] =\"enableCheckBox\"\n                          (onTreeNodeChecked) = \"onCheckSelect($event)\"\n                          (selectedRecord)=\"onRowSelect($event)\" [templates]=\"templates\">\n                  </amexio-tree-view>\n              </ng-container>\n              <ng-container *ngIf=\"!isDataFound\">\n                  <p>No Data Found.</p>\n              </ng-container>\n\n          </div>\n      </div>\n\n\n  ", styles: [
                    "\n        .amexio-dropdown-records{\n        }\n    "
                ],
                providers: [CommonHttpService]
            },] },
];
/**
 * @nocollapse
 */
FilterTreeViewComponent.ctorParameters = function () { return [
    { type: _angular_http.Http, },
    { type: _angular_core.ChangeDetectorRef, },
    { type: CommonHttpService, },
]; };
FilterTreeViewComponent.propDecorators = {
    'httpUrl': [{ type: _angular_core.Input },],
    'httpMethod': [{ type: _angular_core.Input },],
    'dataReader': [{ type: _angular_core.Input },],
    'dataTableBindData': [{ type: _angular_core.Input },],
    'enableCheckBox': [{ type: _angular_core.Input },],
    'selectedRecord': [{ type: _angular_core.Output },],
    'onTreeNodeChecked': [{ type: _angular_core.Output },],
    'triggerChar': [{ type: _angular_core.Input },],
    'parentTmp': [{ type: _angular_core.ContentChild, args: ['amexioTreeTemplate',] },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var TreeViewComponent = (function () {
    /**
     * @param {?} treeViewService
     * @param {?} cdf
     */
    function TreeViewComponent(treeViewService, cdf) {
        this.treeViewService = treeViewService;
        this.cdf = cdf;
        this.selectedRecord = new _angular_core.EventEmitter();
        this.enableCheckBox = false;
        this.onTreeNodeChecked = new _angular_core.EventEmitter();
        this.data = [];
    }
    /**
     * @return {?}
     */
    TreeViewComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    TreeViewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.httpMethod && this.httpUrl) {
            this.treeViewService.fetchData(this.httpUrl, this.httpMethod).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setData(_this.responseData);
            });
        }
        else if (this.dataTableBindData) {
            this.setData(this.dataTableBindData);
        }
        if (this.parentTmp != null) {
            this.templates = { treeNodeTemplate: this.parentTmp };
        }
        else if (this.templates != null) {
            this.parentTmp = this.templates.treeNodeTemplate;
            this.cdf.detectChanges();
        }
    };
    /**
     * @param {?} change
     * @return {?}
     */
    TreeViewComponent.prototype.ngOnChanges = function (change) {
        if (change['dataTableBindData']) {
            var /** @type {?} */ data = change['dataTableBindData'].currentValue;
            if (data) {
                this.setData(data);
            }
        }
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    TreeViewComponent.prototype.setData = function (httpResponse) {
        var /** @type {?} */ treedata = this.getResponseData(httpResponse);
        if (treedata) {
            this.data = treedata;
        }
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    TreeViewComponent.prototype.getResponseData = function (httpResponse) {
        var /** @type {?} */ responsedata = httpResponse;
        if ((this.dataReader && this.dataReader.length > 0)) {
            var /** @type {?} */ dr = this.dataReader.split('.');
            for (var /** @type {?} */ ir = 0; ir < dr.length; ir++) {
                responsedata = responsedata[dr[ir]];
            }
        }
        return responsedata;
    };
    /**
     * @param {?} treeData
     * @return {?}
     */
    TreeViewComponent.prototype.toggle = function (treeData) {
        var _this = this;
        if (!treeData.leaf)
            treeData.expanded = !treeData.expanded;
        if (treeData.lazy && treeData.children && treeData.children.length <= 0) {
            this.lazyNode = treeData;
            this.treeViewService.fetchData(treeData.lazy.httpUrl, treeData.lazy.httpMethod).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setLazyData(_this.responseData);
            });
        }
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    TreeViewComponent.prototype.setLazyData = function (httpResponse) {
        delete this.lazyNode.leaf;
        this.lazyNode['expanded'] = true;
        for (var /** @type {?} */ di = 0; di < httpResponse.data.length; di++) {
            this.lazyNode.children.push(httpResponse.data[0]);
        }
    };
    /**
     * @param {?} treeData
     * @return {?}
     */
    TreeViewComponent.prototype.setSelectedRecord = function (treeData) {
        this.emitData(treeData);
    };
    /**
     * @param {?} treeData
     * @return {?}
     */
    TreeViewComponent.prototype.emitData = function (treeData) {
        this.selectedRecord.emit(JSON.parse(JSON.stringify(treeData)));
        this.resetSelected(this.data, treeData.text);
    };
    /**
     * @param {?} checkedData
     * @return {?}
     */
    TreeViewComponent.prototype.emitCheckedData = function (checkedData) {
        var _this = this;
        checkedData.checked = !checkedData.checked;
        if (checkedData.checked) {
            if (checkedData.hasOwnProperty('children')) {
                checkedData.children.forEach(function (option) {
                    option.checked = true;
                    if (option.hasOwnProperty('children')) {
                        _this.setCheckedStatusFromParent(option);
                    }
                });
            }
            this.onTreeNodeChecked.emit(this.data);
        }
        else {
            if (checkedData.hasOwnProperty('children')) {
                checkedData.children.forEach(function (option) {
                    option.checked = false;
                    if (option.hasOwnProperty('children')) {
                        _this.searchObject(option);
                    }
                });
            }
            this.onTreeNodeChecked.emit(this.data);
        }
    };
    /**
     * @param {?} object
     * @return {?}
     */
    TreeViewComponent.prototype.searchObject = function (object) {
        var _this = this;
        object.children.forEach(function (childOption) {
            childOption.checked = false;
            if (childOption.hasOwnProperty('children')) {
                _this.searchObject(childOption);
            }
        });
    };
    /**
     * @param {?} object
     * @return {?}
     */
    TreeViewComponent.prototype.setCheckedStatusFromParent = function (object) {
        var _this = this;
        object.children.forEach(function (childOption) {
            childOption.checked = true;
            if (childOption.hasOwnProperty('children')) {
                _this.setCheckedStatusFromParent(childOption);
            }
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TreeViewComponent.prototype.onTreeNodeCheck = function (data) {
        this.onTreeNodeChecked.emit(this.data);
    };
    /**
     * @param {?} data
     * @param {?} text
     * @return {?}
     */
    TreeViewComponent.prototype.resetSelected = function (data, text) {
        for (var /** @type {?} */ ir = 0; ir < data.length; ir++) {
            if (data[ir].text === "Sample Form") {
            }
            if (data[ir].text === text) {
                data[ir].selected = true;
            }
            else {
                data[ir].selected = false;
            }
            if (data[ir].children) {
                this.resetSelected(data[ir].children, text);
            }
        }
    };
    return TreeViewComponent;
}());
TreeViewComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-tree-view',
                template: "\n        <div *ngIf=\"data.length== 0\">\n            <div class=\"loading-mask amexio-treeview-loadingmask\" >\n            </div>\n        </div>\n\n        <ul class=\"amexio-treeview-ul\" *ngIf=\"data.length > 0\">\n            <li style=\"cursor: pointer\" *ngFor=\"let treeData of data\" >\n                <div class=\"d-flex\" style=\"padding-left: 10px;\">\n                    <ng-container *ngIf=\"(!treeData.expanded && treeData.children)\">\n                        <span class=\"amexio-treeview-navigation-icons\" (click)=\"toggle(treeData)\">&#x2795;</span>\n                    </ng-container>\n                    <ng-container *ngIf=\"treeData.expanded\">\n                        <span class=\"amexio-treeview-navigation-icons\"  (click)=\"toggle(treeData)\">&#x2796;</span>\n                    </ng-container>\n                    <span *ngIf=\"enableCheckBox\">\n                         <input type=\"checkbox\" [checked]=\"'checked'?treeData.checked:null\" (click)=\"emitCheckedData(treeData)\"/>                    \n                      </span>\n                    <span [ngClass]=\"(treeData.selected && !treeData.children)? 'amexio-treeview-records-selected' : 'amexio-treeview-records'\" (click)=\"emitData(treeData)\">\n                        <ng-container *ngIf=\"templates == null\">\n                          <label >{{treeData.text}}</label>\n                        </ng-container>\n                        <ng-template *ngIf=\"templates != null\" [ngTemplateOutlet]=\"parentTmp\" [ngOutletContext]=\"{ $implicit: { text: treeData.text } , icon: treeData.icon,node : treeData }\"></ng-template>\n                      </span>\n                </div>\n                <div *ngIf=\"treeData.expanded && treeData.expanded  == true\" >\n                    <ul class=\"amexio-treeview-ul\">\n                        <li style=\"cursor: pointer\" *ngFor=\"let leaf of treeData.children\">\n                            <div class=\"d-flex\" style=\"padding-left: 20px;\">\n                                <ng-container *ngIf=\"(!leaf.expanded && leaf.children)\">\n                                    <span class=\"amexio-treeview-navigation-icons\" (click)=\"toggle(leaf)\">&#x2795;</span>\n                                </ng-container>\n                                <ng-container *ngIf=\"leaf.expanded\">\n                                    <span class=\"amexio-treeview-navigation-icons\"  (click)=\"toggle(leaf)\">&#x2796;</span>\n                                </ng-container>\n\n                                <span *ngIf=\"enableCheckBox\"><input type=\"checkbox\" [checked]=\"'checked'?leaf.checked:null\" (click)=\"emitCheckedData(leaf)\"/></span>\n\n                                <span [ngClass]=\"(leaf.selected && !leaf.children)? 'amexio-treeview-records-selected' : 'amexio-treeview-records'\" (click)=\"emitData(leaf)\">\n                                    <ng-container *ngIf=\"templates == null\"><label>{{leaf.text}}</label></ng-container>\n                                    <ng-template *ngIf=\"templates != null\" [ngTemplateOutlet]=\"parentTmp\" [ngOutletContext]=\"{ $implicit: { text: leaf.text }, icon: leaf.icon, node : leaf }\"></ng-template>\n                              </span>\n\n                            </div>\n\n                            <div *ngIf=\"leaf.expanded && leaf.expanded  == true\">\n                                <amexio-tree-view [dataTableBindData]=\"leaf\" [dataReader]=\"'children'\" (selectedRecord)=\"setSelectedRecord($event)\" [templates]=\"templates\" (onTreeNodeChecked)=\"this.onTreeNodeCheck($event)\" [enableCheckBox]=\"enableCheckBox\"></amexio-tree-view>\n                            </div>\n                        </li>\n                    </ul>\n\n                </div>\n            </li>\n        </ul>",
                providers: [CommonHttpService],
                styles: ["/**\n A Style Sheet for all form inputs common used classes\n */\n\n    .amexio-treeview-records{\n        width: 100%;\n    }\n\n    .amexio-treeview-records:hover{\n        color: #ffffff;\n        background-color: #dddddd;\n    }\n\n    .amexio-treeview-records-selected{\n        width: 100%;\n        color: #ffffff;\n        background-color: #dddddd;\n    }\n\n    .amexio-treeview-navigation-icons{\n        vertical-align: middle;\n        font-size: 20px;\n        padding-left: 10px;\n    }\n\n    .amexio-treeview-loadingmask{\n        height: 300px;\n        width: 400px;\n    }\n    .amexio-treeview-ul{\n        list-style-type: none;\n        padding-left: 10px;\n    }\n    .amexio-treeview-ul li{\n        padding-left: 20px;\n    }\n    .amexio-treeview-ul li div ul{\n        padding-left: 10px;\n    }\n    /** Form Validations & Icon Positioning **/\n    .has-feedback-custom {\n        position: relative;\n    }\n    .has-feedback-custom .form-control {\n        padding-right: 47.5px;\n    }\n\n    .form-control-feedback-custom {\n        position: absolute;\n        top: 0;\n        right: 0;\n        z-index: 2;\n        display: block;\n        width: 38px;\n        height: 38px;\n        line-height: 38px;\n        text-align: center;\n        pointer-events: none;\n    }\n\n    .has-feedback-custom label ~ .form-control-feedback-custom {\n        top: 32px;\n    }\n    .has-feedback-custom label.sr-only ~ .form-control-feedback-custom {\n        top: 0;\n    }\n\n\n    "]
            },] },
];
/**
 * @nocollapse
 */
TreeViewComponent.ctorParameters = function () { return [
    { type: CommonHttpService, },
    { type: _angular_core.ChangeDetectorRef, },
]; };
TreeViewComponent.propDecorators = {
    'httpUrl': [{ type: _angular_core.Input },],
    'httpMethod': [{ type: _angular_core.Input },],
    'dataReader': [{ type: _angular_core.Input },],
    'dataTableBindData': [{ type: _angular_core.Input },],
    'selectedRecord': [{ type: _angular_core.Output },],
    'templates': [{ type: _angular_core.Input },],
    'headerKey': [{ type: _angular_core.Input },],
    'cookieName': [{ type: _angular_core.Input },],
    'enableCheckBox': [{ type: _angular_core.Input },],
    'parentTmp': [{ type: _angular_core.ContentChild, args: ['amexioTreeTemplate',] },],
    'onTreeNodeChecked': [{ type: _angular_core.Output },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var TreeDataTableComponent = (function () {
    /**
     * @param {?} treeDataTableService
     */
    function TreeDataTableComponent(treeDataTableService) {
        this.treeDataTableService = treeDataTableService;
        this.selectedRecord = new _angular_core.EventEmitter();
        this.viewRows = [];
        this.columns = [];
    }
    /**
     * @return {?}
     */
    TreeDataTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.httpMethod && this.httpUrl) {
            this.treeDataTableService.fetchData(this.httpUrl, this.httpMethod).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setData(_this.responseData);
            });
        }
    };
    /**
     * @return {?}
     */
    TreeDataTableComponent.prototype.ngAfterContentInit = function () {
        this.createConfig();
    };
    /**
     * @return {?}
     */
    TreeDataTableComponent.prototype.createConfig = function () {
        var /** @type {?} */ columnRefArray = [];
        columnRefArray = this.columnRef.toArray();
        for (var /** @type {?} */ cr = 0; cr < columnRefArray.length; cr++) {
            var /** @type {?} */ columnConfig = columnRefArray[cr];
            var /** @type {?} */ columnData = void 0;
            if (columnConfig.bodyTemplate == null && columnConfig.headerTemplate == null) {
                columnData = {
                    text: columnConfig.text, dataIndex: columnConfig.dataIndex,
                    hidden: columnConfig.hidden, dataType: columnConfig.dataType
                };
            }
            this.columns.push(columnData);
        }
    };
    /**
     * @param {?} change
     * @return {?}
     */
    TreeDataTableComponent.prototype.ngOnChanges = function (change) {
        if (this.dataTableBindData) {
            this.setData(this.dataTableBindData);
        }
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    TreeDataTableComponent.prototype.setData = function (httpResponse) {
        var /** @type {?} */ treedata = this.getResponseData(httpResponse);
        if (treedata) {
            this.data = treedata;
        }
        this.viewRows = this.createViewRows(this.data, null);
        this.renderData();
    };
    /**
     * @param {?} rowData
     * @param {?} rowIndex
     * @return {?}
     */
    TreeDataTableComponent.prototype.toggle = function (rowData, rowIndex) {
        this.toggleViewRows(rowData, !rowData.expanded, this.viewRows);
    };
    /**
     * @param {?} rowData
     * @param {?} expanded1
     * @param {?} viewData
     * @return {?}
     */
    TreeDataTableComponent.prototype.toggleViewRows = function (rowData, expanded1, viewData) {
        if (!rowData.leaf)
            rowData.expanded = expanded1;
        var /** @type {?} */ expanded = rowData.expanded;
        var /** @type {?} */ rowId = rowData.rowId;
        if (!rowData.level) {
            rowData.level = 0;
        }
        for (var /** @type {?} */ cr = 0; cr < viewData.length; cr++) {
            var /** @type {?} */ childRows = viewData[cr];
            if (childRows.parentId == rowId) {
                childRows.visible = expanded;
                childRows.level = rowData.level + 1;
                childRows.tdclass = 'tree-grid-level-' + childRows.level;
                if (childRows.haschildren && !rowData.expanded) {
                    this.toggleViewRows(childRows, rowData.expanded, viewData);
                }
            }
        }
    };
    /**
     * @return {?}
     */
    TreeDataTableComponent.prototype.renderData = function () {
        for (var /** @type {?} */ vr = 0; vr < this.viewRows.length; vr++) {
            var /** @type {?} */ childRows = this.viewRows[vr];
            if (childRows.parentId)
                childRows.visible = false;
            if (!childRows.parentId)
                childRows.visible = true;
        }
    };
    /**
     * @param {?} data
     * @param {?} parentId
     * @return {?}
     */
    TreeDataTableComponent.prototype.createViewRows = function (data, parentId) {
        var /** @type {?} */ viewTreeTableData = [];
        for (var /** @type {?} */ d = 0; d < data.length; d++) {
            var /** @type {?} */ td = JSON.parse(JSON.stringify(data[d]));
            var /** @type {?} */ rowId = Math.random();
            if (td.children && td.children.length > 0) {
                td['leaf'] = false;
                td['haschildren'] = true;
                td['visible'] = true;
            }
            else {
                td['leaf'] = true;
                td['haschildren'] = false;
                td['visible'] = false;
            }
            td['expanded'] = false;
            td['rowId'] = rowId;
            td['level'] = 1;
            td['tdclass'] = 'tree-grid-level-1';
            if (parentId)
                td['parentId'] = parentId;
            viewTreeTableData.push(td);
            if (td.children && td.children.length > 0) {
                var /** @type {?} */ dataArray = this.createViewRows(td.children, rowId);
                for (var /** @type {?} */ d1 = 0; d1 < dataArray.length; d1++) {
                    var /** @type {?} */ td1 = dataArray[d1];
                    viewTreeTableData.push(td1);
                }
                delete td.children;
            }
        }
        return viewTreeTableData;
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    TreeDataTableComponent.prototype.getResponseData = function (httpResponse) {
        var /** @type {?} */ responsedata = httpResponse;
        if (this.dataReader != null) {
            var /** @type {?} */ dr = this.dataReader.split('.');
            for (var /** @type {?} */ ir = 0; ir < dr.length; ir++) {
                responsedata = responsedata[dr[ir]];
            }
        }
        else {
            responsedata = httpResponse;
        }
        return responsedata;
    };
    /**
     * @param {?} rowData
     * @param {?} event
     * @return {?}
     */
    TreeDataTableComponent.prototype.setSelectedRow = function (rowData, event) {
        this.selectedRecord.emit(rowData);
    };
    /**
     * @param {?} col
     * @return {?}
     */
    TreeDataTableComponent.prototype.setSortColumn = function (col) {
        console.log(col);
        this.sortColumn = col;
        this.sortData();
    };
    /**
     * @return {?}
     */
    TreeDataTableComponent.prototype.sortData = function () {
        if (this.sortColumn) {
            if (this.sortColumn.dataIndex && this.sortColumn.dataType) {
                var /** @type {?} */ dataIndex = this.sortColumn.dataIndex;
                var /** @type {?} */ sortColDataIndex_1 = dataIndex;
                if (this.sortColumn.dataType == 'string') {
                    this.data.sort(function (a, b) {
                        debugger;
                        var /** @type {?} */ x = a[sortColDataIndex_1].toLowerCase();
                        var /** @type {?} */ y = b[sortColDataIndex_1].toLowerCase();
                        if (x < y) {
                            return -1;
                        }
                        if (x > y) {
                            return 1;
                        }
                        return 0;
                    });
                    this.viewRows = this.createViewRows(this.data, null);
                    this.renderData();
                }
                else if (this.sortColumn.dataType == 'number') {
                    this.data.sort(function (a, b) {
                        var /** @type {?} */ x = a[sortColDataIndex_1];
                        var /** @type {?} */ y = b[sortColDataIndex_1];
                        return x - y;
                    });
                    this.viewRows = this.createViewRows(this.data, null);
                    this.renderData();
                }
            }
        }
    };
    /**
     * @param {?} dataIndex
     * @return {?}
     */
    TreeDataTableComponent.prototype.setColumnVisiblity = function (dataIndex) {
        for (var /** @type {?} */ ic = 0; ic < this.columns.length; ic++) {
            var /** @type {?} */ col = this.columns[ic];
            if (col.dataIndex == dataIndex) {
                col.hidden = !col.hidden;
            }
        }
    };
    return TreeDataTableComponent;
}());
TreeDataTableComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-tree-data-table',
                template: "<table  class=\"table table-hover table-bordered \">\n        <thead>\n        <tr>\n            <td [attr.colspan]=\"columns.length\" width=\"100%\" align=\"right\">\n\n          <span class=\"amexio-tredatatable-float-left\">\n            <b>{{title}}</b>\n          </span>\n\n                <span class=\"amexio-tredatatable-float-right\">\n            <div class=\"dropdown\">\n              <a data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-list\" aria-hidden=\"true\"></i></a>\n                  <ul class=\"dropdown-menu dropdown-menu-right\">\n                      <li>\n                          &nbsp;&nbsp;<b> Show Columns</b>\n                      </li>\n                      <li *ngFor=\"let cols of columns\">\n                          <div class=\"checkbox\">\n                              <label>\n                                  &nbsp;&nbsp;<input type=\"checkbox\" (click)=\"setColumnVisiblity(cols.dataIndex)\" [attr.checked]=\"!cols.hidden ? true: null\"> {{cols.text +\" \"}}\n                              </label>\n                          </div>\n                      </li>\n                  </ul>\n            </div>\n          </span>\n            </td>\n        </tr>\n\n\n        <tr>\n            <td  *ngFor=\"let cols of columns\" [hidden]=\"cols.hidden\" >\n                <b><a (click)=\"setSortColumn(cols)\">{{cols.text}}</a></b>\n            </td>\n        </tr>\n\n        </thead>\n\n        <tr [ngClass]=\"{'amexio-treedatatable-hiderow' : !(viewRows.length > 0),'amexio-treedatatable-showrow' : viewRows.length > 0}\"  *ngFor=\"let row of viewRows let rowIndex = index\" [hidden]=\"!row.visible\" (click)=\"setSelectedRow(row, $event)\">\n            <td *ngFor=\"let cols of columns let colIndex = index\" [hidden] =\"cols.hidden\" >\n                <div class=\"amexio-treedatatable-col-0\" *ngIf=\"colIndex == 0\" \n                     [ngStyle]=\"{left: row.level*15+'px'}\" (click)=\"toggle(row,rowIndex)\">\n                  <span *ngIf=\"colIndex == 0\" class=\"fa \" [ngClass]=\"{'fa-minus': row.expanded, 'fa-plus': (!row.expanded && row.haschildren)}\" aria-hidden=\"true\">\n                  </span>\n                    {{row[cols.dataIndex]}}\n                </div>\n\n                <span *ngIf=\"colIndex > 0\" >{{row[cols.dataIndex]}}</span>\n\n            </td>\n        </tr>\n\n        <tr *ngIf=\"viewRows.length == 0\">\n            <td colspan=\"3\" class=\"loading-mask amexio-treedatatable-loadingmask-height\">\n\n            </td>\n        </tr>\n    </table>",
                providers: [CommonHttpService],
                styles: [
                    "/**\n A Style Sheet for all form inputs common used classes\n */\n\n        /** Form Validations & Icon Positioning **/\n        .has-feedback-custom {\n            position: relative;\n        }\n        .has-feedback-custom .form-control {\n            padding-right: 47.5px;\n        }\n\n        .form-control-feedback-custom {\n            position: absolute;\n            top: 0;\n            right: 0;\n            z-index: 2;\n            display: block;\n            width: 38px;\n            height: 38px;\n            line-height: 38px;\n            text-align: center;\n            pointer-events: none;\n        }\n\n        .has-feedback-custom label ~ .form-control-feedback-custom {\n            top: 32px;\n        }\n        .has-feedback-custom label.sr-only ~ .form-control-feedback-custom {\n            top: 0;\n        }\n        .amexio-treedatatable-loadingmask-height{\n            height: 400px;\n        }\n        .amexio-treedatatable-col-0{\n            cursor: pointer;\n            position: relative;\n        }\n        .amexio-treedatatable-hiderow{\n            visibility: hidden\n        }\n\n        .amexio-treedatatable-showrow{\n            visibility: visible;\n        }\n        .amexio-tredatatable-float-right{\n            float: right;\n        }\n        .amexio-tredatatable-float-left{\n            float: left;\n        }\n        "
                ]
            },] },
];
/**
 * @nocollapse
 */
TreeDataTableComponent.ctorParameters = function () { return [
    { type: CommonHttpService, },
]; };
TreeDataTableComponent.propDecorators = {
    'title': [{ type: _angular_core.Input },],
    'httpUrl': [{ type: _angular_core.Input },],
    'httpMethod': [{ type: _angular_core.Input },],
    'dataReader': [{ type: _angular_core.Input },],
    'dataTableBindData': [{ type: _angular_core.Input },],
    'pageSize': [{ type: _angular_core.Input },],
    'selectedRecord': [{ type: _angular_core.Output },],
    'columnRef': [{ type: _angular_core.ContentChildren, args: [ColumnComponent,] },],
};

/**
 * Created by ketangote on 7/25/17.
 */
var PaneActionComponent = (function () {
    function PaneActionComponent() {
        this.visible = true;
    }
    /**
     * @return {?}
     */
    PaneActionComponent.prototype.ngOnInit = function () {
    };
    return PaneActionComponent;
}());
PaneActionComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-pane-action',
                template: "\n    <div [ngClass]=\"actionCClass\">\n        <ng-content></ng-content>\n    </div>\n\n  "
            },] },
];
/**
 * @nocollapse
 */
PaneActionComponent.ctorParameters = function () { return []; };
PaneActionComponent.propDecorators = {
    'visible': [{ type: _angular_core.Input },],
    'actionCClass': [{ type: _angular_core.Input },],
};

/**
 * Created by ketangote on 7/25/17.
 */
var PaneBodyComponent = (function () {
    function PaneBodyComponent() {
        this.visible = true;
    }
    /**
     * @return {?}
     */
    PaneBodyComponent.prototype.ngOnInit = function () {
    };
    return PaneBodyComponent;
}());
PaneBodyComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-pane-body',
                template: "\n    <div [ngClass]=\"bodyCClass\">\n        <ng-content></ng-content>\n    </div>\n   \n\n\n  "
            },] },
];
/**
 * @nocollapse
 */
PaneBodyComponent.ctorParameters = function () { return []; };
PaneBodyComponent.propDecorators = {
    'visible': [{ type: _angular_core.Input },],
    'bodyCClass': [{ type: _angular_core.Input },],
};

/**
 * Created by ketangote on 7/25/17.
 */
var PaneHeaderComponent = (function () {
    function PaneHeaderComponent() {
        this.visible = true;
    }
    /**
     * @return {?}
     */
    PaneHeaderComponent.prototype.ngOnInit = function () {
    };
    return PaneHeaderComponent;
}());
PaneHeaderComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-pane-header',
                template: "\n    <div [ngClass]=\"headerCClass\">\n        <ng-content></ng-content>\n    </div>\n\n  "
            },] },
];
/**
 * @nocollapse
 */
PaneHeaderComponent.ctorParameters = function () { return []; };
PaneHeaderComponent.propDecorators = {
    'visible': [{ type: _angular_core.Input },],
    'headerCClass': [{ type: _angular_core.Input },],
};

/**
 * Created by ketangote on 7/25/17.
 */
var WindowPaneComponent = (function () {
    function WindowPaneComponent() {
        this.showWindowChange = new _angular_core.EventEmitter();
        this.showWindow = false;
    }
    /**
     * @return {?}
     */
    WindowPaneComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    WindowPaneComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    Object.defineProperty(WindowPaneComponent.prototype, "showWindow", {
        /**
         * @return {?}
         */
        get: function () {
            return this._showWindow;
        },
        /**
         * @param {?} sw
         * @return {?}
         */
        set: function (sw) {
            this._showWindow = sw;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    WindowPaneComponent.prototype.close = function () {
        this.showWindow = false;
        this.showWindowChange.emit(this.showWindow);
    };
    return WindowPaneComponent;
}());
WindowPaneComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-window-pane',
                template: "\n  <div class=\"modal fade amexio-window\"   tabindex=\"-1\" [ngClass]=\"{'show': visibleAnimate}\"\n       [ngStyle]=\"{'display': showWindow ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n    <div class=\"modal-dialog \" role=\"document\" [ngClass]=\"{'modal-lg':(size==2),'modal-sm':(size==1)}\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          {{title}}\n          <button *ngIf=\"closable\" type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\n        </div>\n        <div class=\"modal-body\" >\n          <ng-content select=\"amexio-pane-body\"></ng-content>\n        </div>\n        <div class=\"modal-footer\">\n          <ng-content select=\"amexio-pane-action\"></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n  ",
                styles: ["\n      .amexio-window{\n          overflow: auto;\n          background: #888888;\n      }\n  "]
            },] },
];
/**
 * @nocollapse
 */
WindowPaneComponent.ctorParameters = function () { return []; };
WindowPaneComponent.propDecorators = {
    'title': [{ type: _angular_core.Input },],
    'closable': [{ type: _angular_core.Input },],
    'showWindowChange': [{ type: _angular_core.Output },],
    'size': [{ type: _angular_core.Input },],
    'showWindow': [{ type: _angular_core.Input },],
};

/**
 * Created by ketangote on 7/26/17.
 */
var DialogComponent = (function () {
    function DialogComponent() {
        this.showWindowChange = new _angular_core.EventEmitter();
        this.actionStatus = new _angular_core.EventEmitter();
        this.showWindow = false;
        this.dialogType = 1;
        this.primaryActionLabel = "Ok";
        this.secondaryActionLabel = "Cancel";
    }
    /**
     * @return {?}
     */
    DialogComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    DialogComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    Object.defineProperty(DialogComponent.prototype, "showWindow", {
        /**
         * @return {?}
         */
        get: function () {
            return this._showWindow;
        },
        /**
         * @param {?} sw
         * @return {?}
         */
        set: function (sw) {
            this._showWindow = sw;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DialogComponent.prototype.close = function () {
        this.showWindow = false;
        this.showWindowChange.emit(this.showWindow);
    };
    /**
     * @param {?} v
     * @return {?}
     */
    DialogComponent.prototype.status = function (v) {
        this.close();
        this.actionStatus.emit(v);
    };
    return DialogComponent;
}());
DialogComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-dialog',
                template: "\n    <div class=\"modal fade amexio-dialog-background-color\" tabindex=\"-1\" [ngClass]=\"{'show': visibleAnimate}\"\n         [ngStyle]=\"{'display': showWindow ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n      <div class=\"modal-dialog \" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            {{title}}\n          </div>\n          <div class=\"modal-body\" >\n            <ng-content select=\"amexio-pane-body\"></ng-content>\n          </div>\n          <div class=\"modal-footer\">\n            <amexio-btn *ngIf=\"(dialogType==2)\" [label]=\"secondaryActionLabel\" [type]=\"'default'\" (onClick)=\"status('cancel')\"></amexio-btn>\n            <amexio-btn [label]=\"primaryActionLabel\" [type]=\"'primary'\" (onClick)=\"status('ok')\"></amexio-btn>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                styles: ["\n      .amexio-dialog-background-color{\n          background: #888888;\n      }\n  "]
            },] },
];
/**
 * @nocollapse
 */
DialogComponent.ctorParameters = function () { return []; };
DialogComponent.propDecorators = {
    'title': [{ type: _angular_core.Input },],
    'showWindowChange': [{ type: _angular_core.Output },],
    'actionStatus': [{ type: _angular_core.Output },],
    'dialogType': [{ type: _angular_core.Input },],
    'primaryActionLabel': [{ type: _angular_core.Input },],
    'secondaryActionLabel': [{ type: _angular_core.Input },],
    'showWindow': [{ type: _angular_core.Input },],
};

/**
 * Created by ketangote on 7/27/17.
 */
var CardComponent = (function () {
    function CardComponent() {
        this._showCard = true;
        this.enableFooter = true;
        this.enableHeader = true;
    }
    /**
     * @return {?}
     */
    CardComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    CardComponent.prototype.ngAfterViewInit = function () {
    };
    Object.defineProperty(CardComponent.prototype, "showCard", {
        /**
         * @return {?}
         */
        get: function () {
            return this._showCard;
        },
        /**
         * @param {?} sw
         * @return {?}
         */
        set: function (sw) {
            this._showCard = sw;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CardComponent.prototype.close = function () {
        this._showCard = false;
    };
    return CardComponent;
}());
CardComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-card-pane',
                template: "\n    \n\n    <div *ngIf=\"showCard\" class=\"amexio-card-padding\">\n      <div class=\"card amexio-card\" [ngClass]=\"cClass\">\n        <div *ngIf=\"enableHeader\" class=\"card-header\">\n          <ng-content select=\"amexio-pane-header\"></ng-content>\n        </div>\n        <div class=\"card-block\">\n          <ng-content select=\"amexio-pane-body\"></ng-content>\n        </div>\n        <div *ngIf=\"enableFooter\" class=\"card-footer \" >\n          <ng-content select=\"amexio-pane-action\"></ng-content>\n        </div>\n      </div>\n    </div>\n    \n  ",
                styles: ["\n      .amexio-card-padding{\n          padding: 2px;\n      }\n  "]
            },] },
];
/**
 * @nocollapse
 */
CardComponent.ctorParameters = function () { return []; };
CardComponent.propDecorators = {
    'title': [{ type: _angular_core.Input },],
    'enableHeader': [{ type: _angular_core.Input },],
    'enableFooter': [{ type: _angular_core.Input },],
    'cClass': [{ type: _angular_core.Input },],
    'showCard': [{ type: _angular_core.Input },],
};

/**
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Created by Ketan Gote on 8/8/17.
 */
var ListBoxComponent = (function () {
    /**
     * @param {?} _http
     */
    function ListBoxComponent(_http) {
        this._http = _http;
        this.selectedRows = new _angular_core.EventEmitter();
        this.rowClick = new _angular_core.EventEmitter();
        this.filter = false;
        this.enableCheckbox = false;
        this.selectedData = [];
        this.searchPlaceHolder = "Search";
    }
    /**
     * @return {?}
     */
    ListBoxComponent.prototype.ngOnInit = function () {
        if (this.data) {
            this.setData(this.data);
        }
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    ListBoxComponent.prototype.setData = function (httpResponse) {
        var /** @type {?} */ responsedata = httpResponse;
        var /** @type {?} */ dr = this.dataReader.split(".");
        for (var /** @type {?} */ ir = 0; ir < dr.length; ir++) {
            responsedata = responsedata[dr[ir]];
        }
        this.viewData = responsedata;
        this.orgData = JSON.parse(JSON.stringify(this.viewData));
    };
    /**
     * @return {?}
     */
    ListBoxComponent.prototype.filterData = function () {
        var /** @type {?} */ tData = JSON.parse(JSON.stringify(this.orgData));
        var /** @type {?} */ nodes = this.searchTree(tData, this.filterText);
        this.viewData = nodes;
    };
    /**
     * @param {?} data
     * @param {?} matchingTitle
     * @return {?}
     */
    ListBoxComponent.prototype.searchTree = function (data, matchingTitle) {
        var /** @type {?} */ disp = this.displayField;
        var /** @type {?} */ res = data.filter(function f(node) {
            if (node[disp].toLowerCase().startsWith(matchingTitle.toLowerCase())) {
                return true;
            }
            if (node.children) {
                return (node.children = node.children.filter(f)).length;
            }
        });
        return res;
    };
    /**
     * @param {?} event
     * @param {?} rowno
     * @param {?} data
     * @return {?}
     */
    ListBoxComponent.prototype.selectedCheckBox = function (event, rowno, data) {
        if (event.currentTarget.checked) {
            this.selectedData.push(data);
        }
        else {
            var /** @type {?} */ indexOf = this.selectedData.indexOf(data);
            delete this.selectedData[indexOf];
        }
        var /** @type {?} */ sdata = [];
        for (var /** @type {?} */ i = 0; i < this.selectedData.length; i++) {
            if (this.selectedData[i]) {
                sdata.push(this.selectedData[i]);
            }
        }
        this.selectedRows.emit(sdata);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ListBoxComponent.prototype.onClick = function (data) {
        this.rowClick.emit(data);
    };
    return ListBoxComponent;
}());
ListBoxComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-listbox',
                template: "\n\n        <div class=\"amexio-listbox\">\n            <ul  class=\"list-group amexio-listbox-list\">\n                <li  *ngIf=\"(filter == true)\"  class=\"list-group-item amexio-listbox-list-item amexio-listbox-search\">\n                    <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"filterText\"  [placeholder]=\"searchPlaceHolder\" (keyup)=\"filterData()\">\n                </li>\n                <li class=\"list-group-item  amexio-listbox-list-item\" *ngFor=\"let row of viewData let rowno = index \">\n                    <div>\n                <span *ngIf=\"(enableCheckbox == true)\">\n                  <input type=\"checkbox\" (click)=\"selectedCheckBox($event,rowno,row)\"/>\n                </span>\n                    </div>\n                    <div>\n                <span (click)=\"onClick(row)\" >\n                    <ng-container *ngIf=\"!bodyTemplate\"> {{row[displayField]}}</ng-container>\n                    <ng-template *ngIf=\"bodyTemplate\" [ngTemplateOutlet]=\"bodyTemplate\" [ngOutletContext]=\"{ row: row }\"></ng-template>\n                </span>\n                    </div>\n                </li>\n            </ul>\n        </div>\n\n\n    ",
                styles: [
                    "\n            .amexio-listbox{\n\n            }\n\n            .amexio-listbox-list{\n\n            }\n\n            .amexio-listbox-list-item{\n\n            }\n\n            .amexio-listbox-search{\n\n            }\n\n        "
                ]
            },] },
];
/**
 * @nocollapse
 */
ListBoxComponent.ctorParameters = function () { return [
    { type: _angular_http.Http, },
]; };
ListBoxComponent.propDecorators = {
    'enableCheckbox': [{ type: _angular_core.Input },],
    'searchPlaceHolder': [{ type: _angular_core.Input },],
    'filter': [{ type: _angular_core.Input },],
    'data': [{ type: _angular_core.Input },],
    'dataReader': [{ type: _angular_core.Input },],
    'displayField': [{ type: _angular_core.Input },],
    'selectedRows': [{ type: _angular_core.Output },],
    'rowClick': [{ type: _angular_core.Output },],
    'bodyTemplate': [{ type: _angular_core.ContentChild, args: ['amexioBodyTmpl',] },],
};

/**
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Created by Dattaram Gawas.
 */
var NotifyComponent = (function () {
    /**
     * @param {?} ref
     */
    function NotifyComponent(ref) {
        var _this = this;
        this.ref = ref;
        if (this.messageData !== null) {
            setInterval(function () {
                _this.messageData.shift();
                _this.ref.markForCheck();
            }, 1500);
        }
    }
    /**
     * @return {?}
     */
    NotifyComponent.prototype.ngOnInit = function () {
        this.changeStyle();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NotifyComponent.prototype.closePopup = function (index) {
        this.messageData.splice(index, 1);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    NotifyComponent.prototype.setMsgBackground = function (data) {
        if (data.type === 'success') {
            this.icon = 'fa-check-circle';
            return { 'background-color': '#33cc33' };
        }
        else if (data.type === 'danger') {
            this.icon = 'fa-times-circle';
            return { 'background-color': 'red' };
        }
        else if (data.type === 'info') {
            this.icon = 'fa-info-circle';
            return { 'background-color': '#3399ff' };
        }
        else if (data.type === 'warn') {
            this.icon = 'fa-exclamation-circle';
            return { 'background-color': '#ff9900' };
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NotifyComponent.prototype.onResize = function (event) {
        this.changeStyle();
    };
    /**
     * @return {?}
     */
    NotifyComponent.prototype.changeStyle = function () {
        if (window.innerWidth > 768) {
            this.msgStylClass = 'amexio-messenger-desktop';
        }
        else {
            this.msgStylClass = 'amexio-messenger-mobile';
        }
    };
    return NotifyComponent;
}());
NotifyComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-notification',
                template: "\n   <div class=\"list-group\" [ngClass]=\"msgStylClass\"  *ngIf=\"messageData!=null\" (window:resize)=\"onResize($event)\">\n     <ng-container *ngFor=\"let data of messageData let msgIndex=index\" >\n     <a [ngStyle]=\"setMsgBackground(data)\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n           <h6 class=\"amexio-message-color\"><i class=\"fa fa-lg \" [ngClass]=\"icon\" aria-hidden=\"true\"></i>\n             {{data.msg}}</h6>\n          <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"closePopup(msgIndex)\"></i>\n        </div>\n     </a>\n     </ng-container>\n   </div>\n  \n  ",
                styles: ["\n     .amexio-messenger-desktop {\n         position: absolute;\n         top: 2%;\n         left: 70%;\n         right: 1%;\n         text-align: center;\n         overflow: hidden;\n         cursor: pointer;\n     }\n     .amexio-messenger-mobile {\n         position: absolute;\n         z-index: 101;\n         top: 2%;\n         left: 20%;\n         right: 1%;\n         text-align: center;\n         overflow: hidden;\n         cursor: pointer;\n     }\n     .amexio-message-color {\n         color: white;\n\n     }\n\n "]
            },] },
];
/**
 * @nocollapse
 */
NotifyComponent.ctorParameters = function () { return [
    { type: _angular_core.ChangeDetectorRef, },
]; };
NotifyComponent.propDecorators = {
    'messageData': [{ type: _angular_core.Input },],
};

/**
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Created by Ketan Gote on 8/10/17.
 */
var FieldSetComponent = (function () {
    function FieldSetComponent() {
        this.fieldSetClass = "scheduler-border-expanded";
        this.fieldSetContent = "contentdisplay";
        this.expandCollapseClass = "fa fa-minus-square-o";
        this.expanded = true;
    }
    /**
     * @return {?}
     */
    FieldSetComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    FieldSetComponent.prototype.toogle = function () {
        this.expanded = !this.expanded;
        if (this.expanded) {
            this.fieldSetClass = "scheduler-border-expanded";
            this.fieldSetContent = "contentdisplay";
            this.expandCollapseClass = "fa fa-minus-square-o";
        }
        else if (!this.expanded) {
            this.fieldSetClass = "scheduler-border-collapsed";
            this.fieldSetContent = "contentnone";
            this.expandCollapseClass = "fa fa-plus-square-o";
        }
    };
    return FieldSetComponent;
}());
FieldSetComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-fieldset',
                template: "\n\n    <div style=\"padding: 5px;\">\n      <fieldset  [attr.class]=\"fieldSetClass\">\n        <legend  class=\"scheduler-border\">\n          <i *ngIf=\"collapsible\" [attr.class]=\"expandCollapseClass\" aria-hidden=\"true\" (click)=\"toogle()\"></i>\n          <span (click)=\"toogle()\"> &nbsp;{{title}}</span>\n        </legend>\n        <div [attr.class]=\"fieldSetContent\">\n          <ng-content select=\"amexio-fieldset-body\"></ng-content>\n        </div>\n      </fieldset>\n    </div>\n    \n\n    \n  ",
                styles: ["\n      fieldset .contentnone {\n          display: none;\n      }\n\n      fieldset .contentdisplay {\n          display: block;\n      }\n\n      fieldset.scheduler-border-expanded {\n          border: 1px groove #ddd !important;\n          padding: 0 1.4em 1.4em 1.4em !important;\n          margin: 0 0 1.5em 0 !important;\n          -webkit-box-shadow:  0px 0px 0px 0px #000;\n          box-shadow:  0px 0px 0px 0px #000;\n      }\n\n      fieldset.scheduler-border-collapsed {\n          border-top: 1px groove #ddd !important;\n          border-bottom: none;\n          border-left: none;\n          border-right: none;\n          padding: 0 1.4em 1.4em 1.4em !important;\n          margin: 0 0 1.5em 0 !important;\n          -webkit-box-shadow:  0px 0px 0px 0px #000;\n          box-shadow:  0px 0px 0px 0px #000;\n      }\n\n      legend.scheduler-border {\n          font-size: 1.2em !important;\n          font-weight: bold !important;\n          text-align: left !important;\n          width:auto;\n          padding:0 10px;\n          border-bottom:none;\n      }\n\n  "]
            },] },
];
/**
 * @nocollapse
 */
FieldSetComponent.ctorParameters = function () { return []; };
FieldSetComponent.propDecorators = {
    'collapsible': [{ type: _angular_core.Input },],
    'title': [{ type: _angular_core.Input },],
};

/**
 * Created by ketangote on 7/20/17.
 */
var FieldSetBodyComponent = (function () {
    function FieldSetBodyComponent() {
    }
    /**
     * @return {?}
     */
    FieldSetBodyComponent.prototype.ngOnInit = function () {
    };
    return FieldSetBodyComponent;
}());
FieldSetBodyComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-fieldset-body',
                template: "\n \n    <ng-content></ng-content>\n\n\n  "
            },] },
];
/**
 * @nocollapse
 */
FieldSetBodyComponent.ctorParameters = function () { return []; };

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Sagar Jadhav
 *
 */
var ImageComponent = (function () {
    function ImageComponent() {
        this.onClick = new _angular_core.EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ImageComponent.prototype.onImageClick = function (event) {
        this.onClick.emit(event);
    };
    /**
     * @return {?}
     */
    ImageComponent.prototype.ngOnInit = function () {
    };
    return ImageComponent;
}());
ImageComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-image',
                template: "\n        <!--Normal image-->\n        <ng-container *ngIf=\"imagePath || (imagePath && imageClass)\">\n            <img class=\"img-fluid\" [src]=\"imagePath\" [attr.class]=\"cClass\" (click)=\"onImageClick($event)\" [attr.title]=\"tooltipMessage\">\n        </ng-container>\n\n        <!--this is for material design-->\n        <ng-container *ngIf=\"imageClass && mdbClass && !imagePath\">\n            <i [attr.class]=\"imageClass\" [attr.title]=\"tooltipMessage\" (click)=\"onImageClick($event)\"  >{{mdbClass}}</i>\n        </ng-container>\n\n        <!--this is for fontawesome-->\n        <ng-container *ngIf=\"imageClass && (!imagePath && !mdbClass)\">\n            <i [attr.class]=\"imageClass\" [attr.title]=\"tooltipMessage\" (click)=\"onImageClick($event)\"></i>\n        </ng-container>\n\n        <ng-container *ngIf=\" title \">\n            <span class=\"amexio-image-title\">{{title}}</span>\n        </ng-container>\n    ",
                styles: [
                    "\n            .amexio-image-title{\n                font-size: medium;\n            }\n        "
                ]
            },] },
];
/**
 * @nocollapse
 */
ImageComponent.ctorParameters = function () { return []; };
ImageComponent.propDecorators = {
    'tooltipMessage': [{ type: _angular_core.Input },],
    'title': [{ type: _angular_core.Input },],
    'imagePath': [{ type: _angular_core.Input },],
    'imageClass': [{ type: _angular_core.Input },],
    'cClass': [{ type: _angular_core.Input },],
    'mdbClass': [{ type: _angular_core.Input },],
    'onClick': [{ type: _angular_core.Output },],
};

/**
 * Created by sagar on 6/9/17.
 */
var StepBlockComponent = (function () {
    function StepBlockComponent() {
    }
    /**
     * @return {?}
     */
    StepBlockComponent.prototype.ngOnInit = function () {
    };
    return StepBlockComponent;
}());
StepBlockComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-step-block',
                template: "\n    \n    \n  "
            },] },
];
/**
 * @nocollapse
 */
StepBlockComponent.ctorParameters = function () { return []; };
StepBlockComponent.propDecorators = {
    'active': [{ type: _angular_core.Input },],
    'label': [{ type: _angular_core.Input },],
    'icon': [{ type: _angular_core.Input },],
    'mdbClass': [{ type: _angular_core.Input },],
};

/**
 * Created by sagar on 6/9/17.
 */
var StepsComponent = (function () {
    function StepsComponent() {
        this.onBlockClick = new _angular_core.EventEmitter();
        this.onBlockClickEvent = new _angular_core.EventEmitter();
    }
    /**
     * @param {?} data
     * @param {?} ev
     * @return {?}
     */
    StepsComponent.prototype.onClick = function (data, ev) {
        this.onBlockClick.emit(data);
        this.onBlockClickEvent.emit(ev);
    };
    /**
     * @return {?}
     */
    StepsComponent.prototype.ngAfterContentInit = function () {
        if (this.stepBlockLocalData && this.stepBlockLocalData.length > 0) {
            this.stepBlockArray = this.stepBlockLocalData;
        }
        else {
            this.stepBlockArray = this.stepBlocks.toArray();
        }
    };
    /**
     * @return {?}
     */
    StepsComponent.prototype.ngOnInit = function () {
    };
    return StepsComponent;
}());
StepsComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-steps', template: "\n        <!--this code use when user give showIndex true bydefault it is true-->\n        <div class=\"amexio-stepwizard\" *ngIf=\"(showIndex && !showBlockBox && !showIcon)\">\n            <div class=\"amexio-stepwizard-row setup-panel\">\n                <div *ngFor=\"let stepBlock of stepBlockArray; let i = index\" class=\"amexio-stepwizard-step\">\n                    <button type=\"button\" [ngClass]=\"{'disabled':!stepBlock.active,'active':stepBlock.active}\" class=\"btn btn-info btn-circle\"\n                            (click)=\"onClick(stepBlock,$event)\">{{i + 1}}\n                    </button>\n                    <ng-container *ngIf=\"stepBlock.label && !stepBlock.active\">\n                        <p>{{stepBlock.label}}</p>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"stepBlock.label && stepBlock.active\">\n                        <p><strong class=\"amexio-step-label-highlight\">{{stepBlock.label}}</strong></p>\n                    </ng-container>\n                </div>\n            </div>\n        </div>\n\n        <!--this code use when user give showIcon true bydefault it is false-->\n        <div class=\"amexio-stepwizard\" *ngIf=\"(showIcon && !showIndex && !showBlockBox)\">\n            <div class=\"amexio-stepwizard-row setup-panel\">\n                <div *ngFor=\"let stepBlock of stepBlockArray; let i = index\" class=\"amexio-stepwizard-step\">\n                    <!--this is for material design-->\n                    <ng-container *ngIf=\"stepBlock.icon && stepBlock.mdbClass \">\n                        <i [attr.class]=\"'material-icons'\" (click)=\"onClick(stepBlock,$event)\">{{stepBlock.icon}}</i>\n                    </ng-container>\n\n                    <!--this is for fontawesome-->\n                    <ng-container *ngIf=\"stepBlock.icon && !stepBlock.mdbClass\">\n                        <i [attr.class]=\"stepBlock.icon\" (click)=\"onClick(stepBlock,$event)\"></i>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"stepBlock.icon=='' || !stepBlock.icon\">\n                        <br>\n                    </ng-container>\n                    <ng-container *ngIf=\"stepBlock.label && !stepBlock.active\">\n                        <p>{{stepBlock.label}}</p>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"stepBlock.label && stepBlock.active\">\n                        <p><strong class=\"amexio-step-label-highlight\">{{stepBlock.label}}</strong></p>\n                    </ng-container>\n\n                </div>\n            </div>\n        </div>\n\n        <!--This code use for steps of boxes-->\n        <ul *ngIf=\"showBlockBox\" class=\"nav nav-pills nav-justified \">\n            <li *ngFor=\"let stepBlock of stepBlockArray; let i = index\" class=\"nav-item \" style=\"padding-right:2px;\">\n                <a class=\"nav-link amexio-step-box\" [ngClass]=\"{'disabled':!stepBlock.active,'active':stepBlock.active}\"\n                   (click)=\"onClick(stepBlock,$event)\">\n                    <ng-container *ngIf=\"showIndex\">\n                        {{i + 1}}<br>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"showIcon && stepBlock.icon && stepBlock.mdbClass \">\n                        <i [attr.class]=\"'material-icons'\" (click)=\"onClick(stepBlock,$event)\">{{stepBlock.icon}}</i>\n                    </ng-container>\n                    <!--this is for fontawesome-->\n                    <ng-container *ngIf=\"showIcon && stepBlock.icon && !stepBlock.mdbClass\">\n                        <i [attr.class]=\"stepBlock.icon\" (click)=\"onClick(stepBlock,$event)\"></i>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"stepBlock.label && !stepBlock.active\">\n                        <p>{{stepBlock.label}}</p>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"stepBlock.label && stepBlock.active\">\n                        <p><strong>{{stepBlock.label}}</strong></p>\n                    </ng-container>\n                </a>\n            </li>\n        </ul>\n  ",
                styles: ["\n\n      .nav-pills {\n          background-color: #d6d6d6;\n      }\n\n      .amexio-step-box {\n          height: 80px;\n          border:1px solid grey;\n      }\n\n      .amexio-step-label-highlight {\n          color: black;\n          font-weight: bold;\n      }\n\n      .amexio-stepwizard-step p {\n          margin-top: 0px;\n          color: #666;\n      }\n\n      .amexio-stepwizard-row {\n          display: table-row;\n      }\n\n      .amexio-stepwizard {\n          display: table;\n          width: 100%;\n          position: relative;\n      }\n\n      .amexio-stepwizard .btn.disabled, .amexio-stepwizard .btn[disabled], .amexio-stepwizard fieldset[disabled] .btn {\n          opacity: 1 !important;\n          color: #cccccc;\n      }\n\n      .amexio-stepwizard-row:before {\n          top: 14px;\n          bottom: 0;\n          position: absolute;\n          content: \" \";\n          width: 100%;\n          height: 1px;\n          background-color: #ccc;\n          z-index: 0;\n      }\n\n      .amexio-stepwizard-step {\n          display: table-cell;\n          text-align: center;\n          position: relative;\n      }\n\n      .btn-circle {\n          width: 30px;\n          height: 30px;\n          text-align: center;\n          padding: 6px 0;\n          font-size: 12px;\n          line-height: 1.428571429;\n          border-radius: 15px;\n      }\n  "]
            },] },
];
/**
 * @nocollapse
 */
StepsComponent.ctorParameters = function () { return []; };
StepsComponent.propDecorators = {
    'showIndex': [{ type: _angular_core.Input },],
    'showIcon': [{ type: _angular_core.Input },],
    'showBlockBox': [{ type: _angular_core.Input },],
    'onBlockClick': [{ type: _angular_core.Output },],
    'onBlockClickEvent': [{ type: _angular_core.Output },],
    'stepBlocks': [{ type: _angular_core.ContentChildren, args: [StepBlockComponent,] },],
    'stepBlockLocalData': [{ type: _angular_core.Input },],
};

/**
 * Created by sagar on 6/9/17.
 */
var DockbarComponent = (function () {
    function DockbarComponent() {
        this.elementId = 'dockbar-item-id' + Math.floor(Math.random() * 90000) + 10000;
    }
    /**
     * @return {?}
     */
    DockbarComponent.prototype.onBarIconClick = function () {
        this.active = false;
    };
    /**
     * @return {?}
     */
    DockbarComponent.prototype.ngOnInit = function () {
    };
    return DockbarComponent;
}());
DockbarComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-dockbar-item',
                template: "    \n    <div *ngIf=\"active\" [style.width]=\"width\">\n      <ng-container *ngIf=\"active && title\">\n        <div class=\"amexio-dockbar-title\">\n          {{title}}\n          <span class=\"amexio-dockbar-item-close-bar\" (click)=\"onBarIconClick()\">&#9747;</span>\n        </div>\n      </ng-container>\n      <ng-content >\n      </ng-content>\n    </div>\n  ",
                styles: [
                    "      \n      .amexio-dockbar-item-close-bar{\n        font-size: 24px;\n        float: right;\n        color: black;\n        font-weight: 500;\n      }\n      .amexio-dockbar-title{\n        box-sizing: border-box;\n        font-size: 17px;\n        font-weight: 500;\n        padding: 15px 10px 10px 90px;\n        border-bottom: 1px solid #c7c7c7;\n      }\n    "
                ]
            },] },
];
/**
 * @nocollapse
 */
DockbarComponent.ctorParameters = function () { return []; };
DockbarComponent.propDecorators = {
    'active': [{ type: _angular_core.Input },],
    'label': [{ type: _angular_core.Input },],
    'icon': [{ type: _angular_core.Input },],
    'mdbClass': [{ type: _angular_core.Input },],
    'width': [{ type: _angular_core.Input },],
    'title': [{ type: _angular_core.Input },],
    'imagePath': [{ type: _angular_core.Input },],
};

/**
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Created by Ketan Gote on 8/21/17.
 */
var DockedBarToolComponent = (function () {
    function DockedBarToolComponent() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    DockedBarToolComponent.prototype.onClick = function (event) {
        var /** @type {?} */ tabs = this.dockbarArray;
        tabs.forEach(function (tab) {
            tab.active = false;
            if (tab.elementId == event.elementId) {
                tab.active = true;
            }
        });
    };
    /**
     * @return {?}
     */
    DockedBarToolComponent.prototype.ngAfterContentInit = function () {
        this.dockbarArray = this.dockbars.toArray();
    };
    /**
     * @return {?}
     */
    DockedBarToolComponent.prototype.ngOnInit = function () {
    };
    return DockedBarToolComponent;
}());
DockedBarToolComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-dockbar',
                template: "\n    <div class=\"amexio-dockbar\" [style.min-height]=\"height\">\n      <ng-container *ngFor=\"let dockbar of dockbarArray\">\n        <button [ngClass]=\"{'active':dockbar.active}\" (click)=\"onClick(dockbar)\">\n\n          <!--Normal image-->\n          <ng-container *ngIf=\"dockbar.imagePath\">\n            <img [src]=\"dockbar.imagePath\">\n          </ng-container>\n\n          <!--this is for material design-->\n          <ng-container *ngIf=\"dockbar.icon && dockbar.mdbClass\">\n            <amexio-image [imageClass]=\"dockbar.mdbClass\" [mdbClass]=\"dockbar.icon\"></amexio-image>\n          </ng-container>\n\n          <!--this is for fontawesome-->\n          <ng-container *ngIf=\"(!(dockbar.icon && dockbar.mdbClass) && dockbar.icon)\">\n            <amexio-image [imageClass]=\"dockbar.icon\" [cClass]=\"\"></amexio-image>\n          </ng-container>\n          \n          <!--if dockbar have label instead of icon -->\n          <ng-container *ngIf=\"dockbar.label && dockbar.active\">\n            <p><strong class=\"amexio-dockbar-label-highlight\">{{dockbar.label}}</strong></p>\n          </ng-container>\n          \n          <ng-container *ngIf=\"dockbar.label && !dockbar.active\">\n            <p>{{dockbar.label}}</p>\n          </ng-container>\n          \n        </button>\n      </ng-container>\n    </div>\n    <div class=\"amexio-dockbar-item\" [style.min-height]=\"height\">\n      <ng-content></ng-content>\n    </div>\n  ",
                styles: [
                    "      \n      .amexio-dockbar {\n        float: left;\n        width: 70px;\n        border: 1px solid #f1f1f1;\n        background-color: #dee0e3;\n        position: relative;\n      }\n      \n      .amexio-dockbar-item{\n        background-color: #f1f1f1;\n      }\n      \n      /* Style the buttons inside the tab */\n      .amexio-dockbar button {\n        display: block;\n        background-color: inherit;\n        color: #adadad;\n        padding: 5px;\n        width: 100%;\n        border: none;\n        outline: none;\n        text-align: center;\n        cursor: pointer;\n        transition: 0.3s;\n        font-size: 17px;\n        border-bottom: 1px solid #c7c7c7;\n        border-left: 5px solid #dee0e3;\n        height: 50px;\n      }\n\n      /* Change background color of buttons on hover */\n      .amexio-dockbar button:hover {\n        background-color: #f1f1f1;\n      }\n\n      /* Create an active/current \"tab button\" class */\n      .amexio-dockbar button.active {\n        background-color: #f1f1f1;\n        color: black;\n        border-left: 5px solid #3192e1;\n      }\n      \n      .amexio-dockbar-label-highlight {\n        color: black;\n        font-weight: bold;\n      }\n    "
                ]
            },] },
];
/**
 * @nocollapse
 */
DockedBarToolComponent.ctorParameters = function () { return []; };
DockedBarToolComponent.propDecorators = {
    'dockbars': [{ type: _angular_core.ContentChildren, args: [DockbarComponent,] },],
    'height': [{ type: _angular_core.Input },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas,Sagar Jadhav
 *
 */
var __extends$7 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BASE_IMPL_FILEUPLOAD_INPUT = {
    provide: FormInputBase, useExisting: _angular_core.forwardRef(function () { return FileuploadComponent; })
};
var FileuploadComponent = (function (_super) {
    __extends$7(FileuploadComponent, _super);
    /**
     * @param {?} commonHttpService
     */
    function FileuploadComponent(commonHttpService) {
        var _this = _super.call(this) || this;
        _this.commonHttpService = commonHttpService;
        return _this;
    }
    /**
     * @return {?}
     */
    FileuploadComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    FileuploadComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileuploadComponent.prototype.uploadFile = function (event) {
        var /** @type {?} */ fileList = event.target.files;
        var /** @type {?} */ formData = new FormData();
        if (fileList) {
            for (var /** @type {?} */ i = 0; i < fileList.length; i++) {
                if (!this.requestParamName) {
                    this.requestParamName = "file";
                }
                formData.append(this.requestParamName, fileList[i]);
            }
            this.commonHttpService.uploadFile(this, this.httpUrl, this.httpMethod, formData);
            if (fileList.length == 1) {
                this.uploadedFileName = fileList[0].name;
            }
            else if (fileList.length > 1) {
                this.uploadedFileName = fileList.length + ' files';
            }
        }
    };
    return FileuploadComponent;
}(FormInputBase));
FileuploadComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-file-upload', template: "\n    <div class=\"form-group\">\n      <ng-container *ngIf=\"hasLabel\">\n        <label [attr.for]=\"elementId\"\n               [style.font-style]=\"fontStyle\"\n               [style.font-family]=\"fontFamily\"\n               [style.font-size]=\"fontSize\"\n               class=\"control-label\">\n          {{fieldLabel}}\n        </label>\n      </ng-container>\n      <br>\n      <label class=\"custom-file\">\n        <input type=\"file\" class=\"custom-file-input\" [attr.accept]=\"fileType\" (change)=\"uploadFile($event)\"\n               [attr.multiple]=\"multipleFile\">\n        <span class=\"custom-file-control\"></span>\n      </label>\n      <ng-container *ngIf=\"uploadedFileName\">\n        <label class=\"amexio-uploaded-file-label\">{{uploadedFileName}}</label>\n      </ng-container>\n    </div>\n  ", styles: ["\n    .amexio-uploaded-file-label {\n     \n    }\n\n  "], providers: [BASE_IMPL_FILEUPLOAD_INPUT, CommonHttpService]
            },] },
];
/**
 * @nocollapse
 */
FileuploadComponent.ctorParameters = function () { return [
    { type: CommonHttpService, },
]; };
FileuploadComponent.propDecorators = {
    'fieldLabel': [{ type: _angular_core.Input },],
    'httpUrl': [{ type: _angular_core.Input },],
    'httpMethod': [{ type: _angular_core.Input },],
    'fileType': [{ type: _angular_core.Input },],
    'multipleFile': [{ type: _angular_core.Input },],
    'popoverPlacement': [{ type: _angular_core.Input },],
    'requestParamName': [{ type: _angular_core.Input },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Pratik Kelwalkar
 *
 */
var __extends$8 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var noop$9 = function () {
};
var CUSTOM_RANGE_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return AmexioSliderComponent; }),
    multi: true
};
var BASE_IMPL_RANGE_INPUT = {
    provide: FormInputBase,
    useExisting: _angular_core.forwardRef(function () { return AmexioSliderComponent; })
};
var AmexioSliderComponent = (function (_super) {
    __extends$8(AmexioSliderComponent, _super);
    function AmexioSliderComponent() {
        var _this = _super.call(this) || this;
        _this.innerValue = '';
        _this.onTouchedCallback = noop$9;
        _this.onChangeCallback = noop$9;
        _this.elementId = 'input-range-' + Math.floor(Math.random() * 90000) + 10000;
        return _this;
    }
    /**
     * @return {?}
     */
    AmexioSliderComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(AmexioSliderComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this.innerValue;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    /**
     * @return {?}
     */
    AmexioSliderComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AmexioSliderComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AmexioSliderComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AmexioSliderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return AmexioSliderComponent;
}(FormInputBase));
AmexioSliderComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-slider',
                template: "\n     <div class=\"amexio-slider\">\n         <input type=\"range\"\n                name=\"value\"\n                #rangeHndl\n                (blur)=\"onBlur()\"\n                [(ngModel)]=\"value\"\n                [attr.id]=\"elementId\"\n                [attr.min]=\"minValue\"\n                [attr.max]=\"maxValue\"\n                [attr.step]=\"stepValue\"\n                [ngStyle]=\"{'background':'linear-gradient(to right, #2cafb3 0%, #2cafb3 '+this.value +'%, #fff ' + this.value + '%, #636363 100%)'}\"\n         />\n         <!--<output [attr.for]=\"elementId\">{{value}}</output>-->\n     </div>\n ",
                styles: ["\n      .amexio-slider input {\n          background: -webkit-linear-gradient(left, #2cafb3 0%, #2cafb3 50%, #636363 50%, #636363 100%);\n          background: linear-gradient(to right, #2cafb3 0%, #2cafb3 50%, #636363 50%, #636363 100%);\n          border: solid 1px #2cafb3;\n          border-radius: 8px;\n          height: 7px;\n          width: 356px;\n          outline: none;\n          -webkit-transition: background 450ms ease-in;\n          transition: background 450ms ease-in;\n          -webkit-appearance: none;\n      }\n      .amexio-slider input::-webkit-slider-thumb {\n          background-color: black;\n          border: solid 12px black;\n          border-radius: 0;\n          height: 15px;\n          width: 15px;\n          border-radius: 50%;\n          -webkit-appearance: none;\n      }\n\n\n  "],
                providers: [CUSTOM_RANGE_INPUT_CONTROL_VALUE_ACCESSOR, BASE_IMPL_RANGE_INPUT],
            },] },
];
/**
 * @nocollapse
 */
AmexioSliderComponent.ctorParameters = function () { return []; };
AmexioSliderComponent.propDecorators = {
    'minValue': [{ type: _angular_core.Input },],
    'maxValue': [{ type: _angular_core.Input },],
    'stepValue': [{ type: _angular_core.Input },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Pratik Kelwalkar
 *
 */
var __extends$9 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var noop$10 = function () {
};
var CUSTOM_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return AmexioToggleComponent; }),
    multi: true
};
var BASE_IMPL_TOGGLE_INPUT = {
    provide: FormInputBase,
    useExisting: _angular_core.forwardRef(function () { return AmexioToggleComponent; })
};
var AmexioToggleComponent = (function (_super) {
    __extends$9(AmexioToggleComponent, _super);
    function AmexioToggleComponent() {
        var _this = _super.call(this) || this;
        _this.onChange = new _angular_core.EventEmitter();
        _this.innerValue = '';
        _this.onTouchedCallback = noop$10;
        _this.onChangeCallback = noop$10;
        return _this;
    }
    /**
     * @return {?}
     */
    AmexioToggleComponent.prototype.ngOnInit = function () {
        this.shape == '' || this.shape == null ? this.shape = 'round' : 0;
    };
    /**
     * @return {?}
     */
    AmexioToggleComponent.prototype.onToggle = function () {
        this.onChange.emit(this.value);
    };
    Object.defineProperty(AmexioToggleComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this.innerValue;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    /**
     * @return {?}
     */
    AmexioToggleComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AmexioToggleComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AmexioToggleComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AmexioToggleComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return AmexioToggleComponent;
}(FormInputBase));
AmexioToggleComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-toggle',
                template: "    \n    <label>{{fieldLabel}}</label>\n    <label class=\"amexio-toggle\">\n      <input type=\"checkbox\" checked\n             name=\"value\"\n             #rangeHndl\n             (blur)=\"onBlur()\"\n             [(ngModel)]=\"value\"\n             (change)=\"onToggle()\">\n      <span class=\"amexio-slider {{shape}}\"></span>\n    </label>\n  ",
                styles: ["\n    .amexio-toggle {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n  vertical-align: middle\n}\n\n.amexio-toggle input {display:none;}\n\n.amexio-slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.amexio-slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .amexio-slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .amexio-slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .amexio-slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.round {\n  border-radius: 34px;\n}\n\n.round:before {\n  border-radius: 50%;\n}\n\n\n   "],
                providers: [BASE_IMPL_TOGGLE_INPUT, CUSTOM_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR],
                encapsulation: _angular_core.ViewEncapsulation.None
            },] },
];
/**
 * @nocollapse
 */
AmexioToggleComponent.ctorParameters = function () { return []; };
AmexioToggleComponent.propDecorators = {
    'shape': [{ type: _angular_core.Input },],
    'onChange': [{ type: _angular_core.Output },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Pratik Kelwalkar
 *
 */
var AmexioPaginatorComponent = (function () {
    function AmexioPaginatorComponent() {
        this.pagesArray = [];
        this.activePageIndex = 0;
        this.onPageChange = new _angular_core.EventEmitter();
    }
    /**
     * @return {?}
     */
    AmexioPaginatorComponent.prototype.ngOnInit = function () {
        for (var /** @type {?} */ i = 0; i < this.pages; i++) {
            this.pagesArray.push(i + 1);
        }
        if (this.size == null || this.size == '')
            this.size = 'medium';
    };
    /**
     * @param {?} pageNumber
     * @param {?} index
     * @return {?}
     */
    AmexioPaginatorComponent.prototype.onPageClick = function (pageNumber, index) {
        this.activePageIndex = index;
        this.onPageChange.emit(pageNumber);
    };
    /**
     * @return {?}
     */
    AmexioPaginatorComponent.prototype.onPrevious = function () {
        if (this.activePageIndex != 0) {
            this.activePageIndex -= 1;
            this.onPageChange.emit(this.activePageIndex - 1);
        }
    };
    /**
     * @return {?}
     */
    AmexioPaginatorComponent.prototype.onNext = function () {
        if (this.activePageIndex != this.pagesArray.length - 1) {
            this.activePageIndex += 1;
            this.onPageChange.emit(this.activePageIndex + 1);
        }
    };
    /**
     * @return {?}
     */
    AmexioPaginatorComponent.prototype.onFirstClick = function () {
        this.activePageIndex = 0;
        this.onPageChange.emit(0);
    };
    /**
     * @return {?}
     */
    AmexioPaginatorComponent.prototype.onLastClick = function () {
        this.activePageIndex = this.pagesArray.length - 1;
        this.onPageChange.emit(this.pagesArray.length);
    };
    return AmexioPaginatorComponent;
}());
AmexioPaginatorComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-paginator',
                template: "\n   \n     <ul class=\"pagination justify-content-center\" [ngClass]=\"{'pagination-lg' : size =='large','pagination-md' : size =='medium','pagination-sm' : size =='small'}\" style=\"background-color: #d9d9d9;border: 1px solid #d9d9d9;\">\n       <li class=\"page-item \" (click)=\"onFirstClick()\">\n         <a class=\"page-link\" aria-label=\"Previous\">\n           <span aria-hidden=\"true\">&laquo;</span>\n           <span class=\"sr-only\">First</span>\n         </a>\n       </li>\n       <li class=\"page-item {{activePageIndex == 0 ? 'disabled' : ''}}\" (click)=\"onPrevious()\">\n         <a class=\"page-link\"  aria-label=\"Previous\">\n           <span aria-hidden=\"true\">&#x3C;</span>\n           <span class=\"sr-only\">Previous</span>\n         </a>\n       </li>\n       \n       <ng-container *ngFor=\"let page of pagesArray;let i = index\">\n         <li class=\"page-item\" style=\"cursor: pointer;\" [ngClass]=\"{'active' : activePageIndex == i  }\" (click)=\"onPageClick(page,i)\">\n           <a class=\"page-link\">{{page}}</a>\n         </li>\n       </ng-container>\n\n       <li class=\"page-item {{activePageIndex == pagesArray.length ? 'disabled' : ''}}\" (click)=\"onNext()\">\n         <a class=\"page-link\" aria-label=\"Next\">\n           <span aria-hidden=\"true\">&#x3E;</span>\n           <span class=\"sr-only\">Next</span>\n         </a>\n       </li>\n       <li class=\"page-item\" (click)=\"onLastClick()\">\n         <a class=\"page-link\" aria-label=\"Next\">\n           <span aria-hidden=\"true\">&raquo;</span>\n           <span class=\"sr-only\">Last</span>\n         </a>\n       </li>\n       \n     </ul>\n  \n \n "
            },] },
];
/**
 * @nocollapse
 */
AmexioPaginatorComponent.ctorParameters = function () { return []; };
AmexioPaginatorComponent.propDecorators = {
    'rows': [{ type: _angular_core.Input },],
    'pages': [{ type: _angular_core.Input },],
    'size': [{ type: _angular_core.Input },],
    'onPageChange': [{ type: _angular_core.Output },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author -  Pratik Kelwalkar
 *
 */
var __extends$10 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var noop$11 = function () {
};
var CUSTOM_TAG_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return TagInputComponent; }),
    multi: true
}; // TODO Support ngModel
// TODO Support ngModel
var BASE_IMPL_TAG_INPUT = {
    provide: FormInputBase,
    useExisting: _angular_core.forwardRef(function () { return TagInputComponent; })
};
var TagInputComponent = (function (_super) {
    __extends$10(TagInputComponent, _super);
    /**
     * @param {?} amxHttp
     */
    function TagInputComponent(amxHttp) {
        var _this = _super.call(this) || this;
        _this.amxHttp = amxHttp;
        _this.onChange = new _angular_core.EventEmitter();
        _this.filteredResult = [];
        _this.showDropDown = false;
        _this.selectedValues = [];
        _this.innerValue = '';
        _this.onTouchedCallback = noop$11;
        _this.onChangeCallback = noop$11;
        _this.elementId = 'tag-input-' + Math.floor(Math.random() * 90000) + 10000;
        return _this;
    }
    /**
     * @return {?}
     */
    TagInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.width) {
            this.width = '250px';
        }
        if (this.triggerChar == null) {
            this.triggerChar = 1;
        }
        if (this.httpMethod && this.httpUrl) {
            this.amxHttp.fetchData(this.httpUrl, this.httpMethod).subscribe(function (res) {
                _this.responseData = res.json();
            }, function (error) {
            }, function () {
                _this.setData(_this.responseData);
            });
        }
        else if (this.datalist) {
            this.setData(this.datalist);
        }
    };
    /**
     * @return {?}
     */
    TagInputComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @param {?} item
     * @return {?}
     */
    TagInputComponent.prototype.removePill = function (item) {
        var /** @type {?} */ indexToRemove = null;
        this.selectedValues.forEach(function (selectedVal, index) {
            if (selectedVal == item)
                indexToRemove = index;
        });
        this.selectedValues.splice(indexToRemove, 1);
        this.onChange.emit(this.selectedValues);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TagInputComponent.prototype.onKeyUp = function (event) {
        var _this = this;
        this.filteredResult = [];
        this.showDropDown = false;
        var /** @type {?} */ keyword = event.target.value;
        if (keyword != null && keyword != ' ' && keyword.length >= this.triggerChar) {
            var /** @type {?} */ search_term_1 = keyword.toLowerCase();
            this.data.forEach(function (item) {
                if (item != null) {
                    if (item[_this.key].toLowerCase().startsWith(search_term_1)) {
                        _this.filteredResult.push(item);
                    }
                }
            });
            if (this.filteredResult.length > 0)
                this.showOptions();
            else {
                this.showDropDown = false;
            }
        }
    };
    /**
     * @return {?}
     */
    TagInputComponent.prototype.showOptions = function () {
        this.showDropDown = true;
    };
    Object.defineProperty(TagInputComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this.innerValue;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    /**
     * @return {?}
     */
    TagInputComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TagInputComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TagInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TagInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TagInputComponent.prototype.setData = function (data) {
        var /** @type {?} */ autocompleteData = this.getResponseData(data);
        if (autocompleteData) {
            this.data = autocompleteData;
        }
    };
    /**
     * @param {?} value
     * @param {?} ref
     * @return {?}
     */
    TagInputComponent.prototype.setValue = function (value, ref) {
        this.inpHandle.nativeElement.value = '';
        this.selectedValues.push(value);
        this.onChange.emit(this.selectedValues);
        this.showDropDown = false;
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    TagInputComponent.prototype.getResponseData = function (httpResponse) {
        var /** @type {?} */ responsedata = httpResponse;
        if (this.dataReader != null) {
            var /** @type {?} */ dr = this.dataReader.split(".");
            for (var /** @type {?} */ ir = 0; ir < dr.length; ir++) {
                responsedata = responsedata[dr[ir]];
            }
        }
        else {
            responsedata = httpResponse;
        }
        return responsedata;
    };
    /**
     * @param {?} inp
     * @return {?}
     */
    TagInputComponent.prototype.clearResult = function (inp) {
        this.showDropDown = false;
        this.filteredResult = [];
        inp.value = null;
        this.value = null;
    };
    return TagInputComponent;
}(FormInputBase));
TagInputComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-tag-input',
                template: "\n      <div class=\"form-group amexio-tagsinput-dropdown\">\n          <ng-container *ngIf=\"fieldLabel\">\n              <label [attr.for]=\"elementId\">{{fieldLabel}}</label>\n          </ng-container>\n          <div data-toggle=\"dropdown\" [ngClass]=\"{'show': showDropDown}\">\n              <div class=\"amexio-tagsinput\" [ngStyle]=\"{width:width}\">\n                  <span *ngFor=\"let item of selectedValues\" style=\"padding-right: 2px;\" class=\"badge badge-pill badge-primary\">&nbsp; {{item[key]}} &nbsp;&nbsp;<i (click)=\"removePill(item)\" style=\"cursor: pointer\" class=\"fa fa-times\" aria-hidden=\"true\"></i>&nbsp;</span>\n                  <input type=\"text\" class=\"form-control\" [attr.aria-expanded]=\"showDropDown\"\n                         [attr.id]=\"elementId\"  (keyup)=\"onKeyUp($event)\" #inp>\n              </div>\n              <ul class=\"amexio-scrollable-options\" [ngStyle]=\"{width:width}\">\n                  <li *ngFor=\"let item of filteredResult\" (click)=\"setValue(item,inp)\" style=\"cursor: pointer;\">\n                      {{item[key]}}\n                  </li>\n              </ul>\n          </div>\n\n          <!--        <span [ngClass]=\"{'showIcon' : showDropDown,'hideIcon' : !showDropDown}\" (click)=\"clearResult(inp)\" class=\"glyphicon glyphicon-remove-circle searchIconPos\"></span>-->\n\n      </div>\n  ",
                providers: [CUSTOM_TAG_INPUT_CONTROL_VALUE_ACCESSOR, BASE_IMPL_TAG_INPUT, CommonHttpService],
                styles: [
                    "\n          .amexio-tagsinput-dropdown ul{\n              padding-left: 10px;\n              overflow: auto;\n          }\n          .amexio-tagsinput {\n              background-color: #fff;\n              border: 1px solid #ccc;\n              box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n              display: inline-block;\n              padding: 4px 6px;\n              color: #555;\n              vertical-align: middle;\n              border-radius: 4px;\n              max-width: 100%;\n              line-height: 22px;\n              cursor: text;\n          }\n          .amexio-tagsinput input {\n              border: none;\n              box-shadow: none;\n              outline: none;\n              background-color: transparent;\n              padding: 0 6px;\n              margin: 0;\n              width: auto;\n              max-width: inherit;\n          }\n          .amexio-tagsinput.form-control input::-moz-placeholder {\n              color: #777;\n              opacity: 1;\n          }\n          .amexio-tagsinput.form-control input:-ms-input-placeholder {\n              color: #777;\n          }\n          .amexio-tagsinput.form-control input::-webkit-input-placeholder {\n              color: #777;\n          }\n          .amexio-tagsinput input:focus {\n              border: none;\n              box-shadow: none;\n          }\n          .amexio-tagsinput .tag {\n              margin-right: 2px;\n              color: white;\n          }\n\n\n          .amexio-scrollable-options {\n              height: auto;\n              max-height: 200px;\n              overflow-x: hidden;\n              list-style: none;\n          }\n          /**\n       A Style Sheet for all form inputs common used classes\n       */\n\n          .has-feedback-custom label ~ .form-control-feedback-custom {\n              top: 32px;\n          }\n          .has-feedback-custom label.sr-only ~ .form-control-feedback-custom {\n              top: 0;\n          }\n    "
                ]
            },] },
];
/**
 * @nocollapse
 */
TagInputComponent.ctorParameters = function () { return [
    { type: CommonHttpService, },
]; };
TagInputComponent.propDecorators = {
    'httpUrl': [{ type: _angular_core.Input },],
    'httpMethod': [{ type: _angular_core.Input },],
    'dataReader': [{ type: _angular_core.Input },],
    'datalist': [{ type: _angular_core.Input },],
    'key': [{ type: _angular_core.Input },],
    'width': [{ type: _angular_core.Input },],
    'triggerChar': [{ type: _angular_core.Input },],
    'onChange': [{ type: _angular_core.Output },],
    'inpHandle': [{ type: _angular_core.ViewChild, args: ['inp',] },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Pratik Kelwalkar
 *
 */
var AmexioVideoPlayerComponent = (function () {
    function AmexioVideoPlayerComponent() {
        this.currentVolume = 1;
    }
    /**
     * @return {?}
     */
    AmexioVideoPlayerComponent.prototype.ngOnInit = function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    AmexioVideoPlayerComponent.prototype.onVolumeChange = function (event) {
        this.videoPlayer.nativeElement.volume = this.currentVolume = event.target.value;
    };
    /**
     * @return {?}
     */
    AmexioVideoPlayerComponent.prototype.updateMuteUI = function () {
        if (this.videoPlayer.nativeElement.muted)
            this.isMuted = true;
        else
            this.isMuted = false;
    };
    /**
     * @return {?}
     */
    AmexioVideoPlayerComponent.prototype.onPlay = function () {
        if (!this.isPlaying) {
            this.videoPlayer.nativeElement.play();
            this.isPlaying = true;
        }
        else {
            this.videoPlayer.nativeElement.pause();
            this.isPlaying = false;
        }
    };
    /**
     * @return {?}
     */
    AmexioVideoPlayerComponent.prototype.onTimeUpdate = function () {
        var /** @type {?} */ percentage = Math.floor((100 / this.videoPlayer.nativeElement.duration) * this.videoPlayer.nativeElement.currentTime);
        this.progressBar.nativeElement.value = percentage;
        // Update the progress bar's text (for browsers that don't support the progress element)
        this.progressBar.nativeElement.innerHTML = percentage + '% played';
        if (percentage == 100) {
            this.isPlaying = false;
        }
    };
    /**
     * @return {?}
     */
    AmexioVideoPlayerComponent.prototype.replayVideo = function () {
        this.resetPlayer();
        this.onPlay();
    };
    /**
     * @return {?}
     */
    AmexioVideoPlayerComponent.prototype.resetPlayer = function () {
        this.videoPlayer.nativeElement.pause();
        this.progressBar.nativeElement.value = 0;
        this.videoPlayer.nativeElement.currentTime = 0;
        this.isPlaying = false;
    };
    /**
     * @return {?}
     */
    AmexioVideoPlayerComponent.prototype.onFullScreen = function () {
        var /** @type {?} */ elem = this.videoPlayer.nativeElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
    };
    /**
     * @return {?}
     */
    AmexioVideoPlayerComponent.prototype.onMute = function () {
        if (!this.isMuted) {
            this.videoPlayer.nativeElement.muted = true;
            this.isMuted = true;
            this.volumebar.nativeElement.value = 0;
        }
        else {
            this.videoPlayer.nativeElement.muted = false;
            this.isMuted = false;
            this.volumebar.nativeElement.value = this.currentVolume;
        }
    };
    return AmexioVideoPlayerComponent;
}());
AmexioVideoPlayerComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-video-player',
                template: "\n   <div id='player'>\n     <video id='video-element' #videoRef (timeupdate)=\"onTimeUpdate()\" (volumechange)=\"updateMuteUI()\">\n       <source [attr.src]=\"path\">\n     </video>\n     <div id='controls'>\n       <progress id='progress-bar' min='0' max='100' value='0' #progressbar>0% played</progress>\n       <button id='btnReplay' style=\"vertical-align: middle\" class='replay' title='replay' accesskey=\"R\" (click)='replayVideo();'>Replay</button>\n       <button id='btnPlayPause' [ngClass]=\"{'play' : !isPlaying, 'pause' : isPlaying}\" style=\"vertical-align: middle\" (click)=\"onPlay()\">Play</button>\n       <button id='btnStop' class='stop' style=\"vertical-align: middle\" (click)=\"resetPlayer()\">Stop</button>\n       <input type=\"range\" id=\"volume-bar\"  min=\"0\" max=\"1\" step=\"0.1\" value=\"1\" (input)=\"onVolumeChange($event)\" #volumebar>\n       <button id='btnMute' (click)=\"onMute()\" [ngClass]=\"{'mute' : !isMuted,'unmute' : isMuted}\" title='mute' style=\"vertical-align: middle\">Mute</button>\n       <button id='btnFullScreen' class='fullscreen' title='toggle full screen' accesskey=\"T\" style=\"vertical-align: top\" (click)=\"onFullScreen()\">[&nbsp;&nbsp;]</button>\n     </div>\n   </div>\n   <div style=\"clear:both\"></div>\n ",
                styles: ["\n    body {\n      font-family: Verdana, Geneva, sans-serif;\n    back    body {\n      font-family: Verdana, Geneva, sans-serif;\n      background-color: lightgray;\n    }\n\n    p { font-size: 0.9em; }\n\n    h1 {\n      font-size:16px;\n      color:#333;\n    }\n\n    #player {\n      float:left;\n      padding:1em 1em .5em;\n      border-radius: 9px;\n    }\n\n    #controls {\n      width: 420px;\n      margin-left: auto;\n      margin-right: auto;\n      text-align: center;\n      margin-top: 10px;\n      padding-bottom: 1px;\n      border-radius: 7px;\n    }\n\n    video {\n      border:1px solid darkgreen;\n      width:420px;\n      height:231px;\n    }\n\n    button {\n      text-indent:-9999px;\n      width:16px;\n      height:16px;\n      border:none;\n      cursor:pointer;\n      background:transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAAAQCAYAAAAWNJ1eAAAAB3RJTUUH4AMQDS0aGLmsqwAAAAlwSFlzAAAOdAAADnQBaySz1gAAAvZJREFUeNrtmk2u0zAQxyele7gBZcOWcAJ8AKTXFVvKhnW5QbhBD4BEe4GnvgULdkaCNeUE5N2gbJGgeDJ26rhO4rFbKRX5P7mtP+YX2x1PHPdl4ErCa/W6UEmc1ACsVekGQjWyeKwrVWYN+bF63aqU99jsVJqryblvbTGyeKxrkoSPesxC/f3CosyaEBzso0DUvgL5JmZk8VhdoihXKLsnLLtLsYix1jkcf+VIU12wZUwI6LZo89xTN7J4rFOZLxxgxrjG+Vm0WNB27hlvXrWQICb6Im5IXqhU9lwi17Zuh13WS2juF/Dzq0TWW+tzLMvuj2ip47J480W8G5V+qnSwStfg+9KxDbW98V6Bw+qThGdA0WYBPQtmohu507rRYQ/ryg77RU8e9Vmlb1b+q0q3iawPqn+fEllmrF+qlDbGUDVtyRkwQs0YjFll4zpSHMsvikASyHnwVlwALbSV1aq+nU2gfRWGOJPoyaNw33VwyqYDYIXqkqwV0x5vK7sWWy6rSwUcHQgd5b1ebO+AIlvtQNh4GoSkx9RN5P0Vr/HbKTsw7P0sWT9ZxrBET5lMZNnqYs2Yvb7TNF/E4bGkM2/CelInZ0WtVPkPp90bZfvQOBAqzInS9MdTFutE52H5bl92mUxk2eKwhiOzB/L33nIgVJgTpT0tZE7+AcQ70XlY9ioU9TFHXJ9i7UglcOaU9j2FZRvPEidzyR33C9BONoGutYLOg7v99h2+7Mn79Bf8X3w4S9T26ayQ6boca8m0tw83l4msLu31u+hoY+r26ERrz1D7nMdo3ZNHPQWKGEa5LotnySrcThNZobocC/c4tP8oGYwS6AT87gysNm31+1I/6jdFZcZptyaUfwf+2cdOdfz08Gxk8VhNLm1Y3e1DzK0nhdU8kceotIJjFBVADmTq8omumMMxhIVoD8cdvKuRxWMdZTas4ed0l2HRzzNC9xudpQByIgmnj//34w+wQ2ANVf6fPfZ63IUZU+YxHOa/SfwPrCvVP/2nY6KBhDUMAAAAAElFTkSuQmCC') no-repeat 0 0; /* url('buttons.png') */\n    }\n\n    .pause { background-position:-19px 0; }\n    .stop { background-position:-38px 0; }\n\n    #volume-bar {\n      width: 50px;\n      vertical-align: middle;\n      padding:0px;\n    }\n    .mute { background-position:-95px 0; }\n    .unmute { background-position:-114px 0; }\n    .replay { background-position:-133px 0;\n      vertical-align: middle;\n    }\n    .fullscreen {\n      text-indent: 0px;\n      color: #00c600;\n      background-color: black;\n      background-image: none;\n      padding: 0px;\n      font-weight: bold;\n      padding-bottom: 3px;\n    }\n\n\n    progress {\n      color: green;\n      font-size: 12px;\n      width: 220px;\n      height: 16px;\n      border: none;\n      margin-right: 10px;\n      background: #434343;\n      border-radius: 9px;\n      vertical-align: middle;\n    }\n    progress::-moz-progress-bar {\n      color:green;\n      background:#434343;\n    }\n\n    progress[value]::-webkit-progress-bar {\n      background-color: #434343;\n      border-radius: 2px;\n      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;\n    }\n\n    progress[value]::-webkit-progress-value {\n      background-color: green;\n    }\n\n    input[type=range] {\n      -webkit-appearance: none;\n      width: 100%;\n      margin: 6.8px 0;\n    }\n    input[type=range]:focus {\n      outline: none;\n    }\n    input[type=range]::-webkit-slider-runnable-track {\n      width: 100%;\n      height: 4.4px;\n      cursor: pointer;\n      box-shadow: 0.9px 0.9px 1.7px #002200, 0px 0px 0.9px #003c00;\n      background: #205928;\n      border-radius: 1px;\n      border: 1.1px solid #18d501;\n    }\n    input[type=range]::-webkit-slider-thumb {\n      box-shadow: 2.6px 2.6px 3.7px #00aa00, 0px 0px 2.6px #00c300;\n      border: 2.5px solid #83e584;\n      height: 18px;\n      width: 9px;\n      border-radius: 3px;\n      background: #439643;\n      cursor: pointer;\n      -webkit-appearance: none;\n      margin-top: -7.9px;\n    }\n    input[type=range]:focus::-webkit-slider-runnable-track {\n      background: #276c30;\n    }\n    input[type=range]::-moz-range-track {\n      width: 100%;\n      height: 4.4px;\n      cursor: pointer;\n      box-shadow: 0.9px 0.9px 1.7px #002200, 0px 0px 0.9px #003c00;\n      background: #205928;\n      border-radius: 1px;\n      border: 1.1px solid #18d501;\n    }\n    input[type=range]::-moz-range-thumb {\n      box-shadow: 2.6px 2.6px 3.7px #00aa00, 0px 0px 2.6px #00c300;\n      border: 2.5px solid #83e584;\n      height: 18px;\n      width: 9px;\n      border-radius: 3px;\n      background: #439643;\n      cursor: pointer;\n    }\n    input[type=range]::-ms-track {\n      width: 100%;\n      height: 4.4px;\n      cursor: pointer;\n      background: transparent;\n      border-color: transparent;\n      color: transparent;\n    }\n    input[type=range]::-ms-fill-lower {\n      background: #194620;\n      border: 1.1px solid #18d501;\n      border-radius: 2px;\n      box-shadow: 0.9px 0.9px 1.7px #002200, 0px 0px 0.9px #003c00;\n    }\n    input[type=range]::-ms-fill-upper {\n      background: #205928;\n      border: 1.1px solid #18d501;\n      border-radius: 2px;\n      box-shadow: 0.9px 0.9px 1.7px #002200, 0px 0px 0.9px #003c00;\n    }\n    input[type=range]::-ms-thumb {\n      box-shadow: 2.6px 2.6px 3.7px #00aa00, 0px 0px 2.6px #00c300;\n      border: 2.5px solid #83e584;\n      height: 18px;\n      width: 9px;\n      border-radius: 3px;\n      background: #439643;\n      cursor: pointer;\n      height: 4.4px;\n    }\n    input[type=range]:focus::-ms-fill-lower {\n      background: #205928;\n    }\n    input[type=range]:focus::-ms-fill-upper {\n      background: #276c30;\n    }ground-color: lightgray;\n    }\n\n    p { font-size: 0.9em; }\n\n    h1 {\n      font-size:16px;\n      color:#333;\n    }\n\n    #player {\n      float:left;\n      padding:1em 1em .5em;\n      border:2px solid darkgreen;\n      border-radius: 9px;\n    }\n\n    #controls {\n      border: 1px solid darkgreen;\n      width: 420px;\n      margin-left: auto;\n      margin-right: auto;\n      text-align: center;\n      margin-top: 5px;\n      padding-bottom: 3px;\n      border-radius: 7px;\n    }\n\n    video {\n      border:1px solid darkgreen;\n      width:420px;\n      height:231px;\n      background:black;\n    }\n\n    button {\n      text-indent:-9999px;\n      width:16px;\n      height:16px;\n      border:none;\n      cursor:pointer;\n      background:transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAAAQCAYAAAAWNJ1eAAAAB3RJTUUH4AMQDS0aGLmsqwAAAAlwSFlzAAAOdAAADnQBaySz1gAAAvZJREFUeNrtmk2u0zAQxyele7gBZcOWcAJ8AKTXFVvKhnW5QbhBD4BEe4GnvgULdkaCNeUE5N2gbJGgeDJ26rhO4rFbKRX5P7mtP+YX2x1PHPdl4ErCa/W6UEmc1ACsVekGQjWyeKwrVWYN+bF63aqU99jsVJqryblvbTGyeKxrkoSPesxC/f3CosyaEBzso0DUvgL5JmZk8VhdoihXKLsnLLtLsYix1jkcf+VIU12wZUwI6LZo89xTN7J4rFOZLxxgxrjG+Vm0WNB27hlvXrWQICb6Im5IXqhU9lwi17Zuh13WS2juF/Dzq0TWW+tzLMvuj2ip47J480W8G5V+qnSwStfg+9KxDbW98V6Bw+qThGdA0WYBPQtmohu507rRYQ/ryg77RU8e9Vmlb1b+q0q3iawPqn+fEllmrF+qlDbGUDVtyRkwQs0YjFll4zpSHMsvikASyHnwVlwALbSV1aq+nU2gfRWGOJPoyaNw33VwyqYDYIXqkqwV0x5vK7sWWy6rSwUcHQgd5b1ebO+AIlvtQNh4GoSkx9RN5P0Vr/HbKTsw7P0sWT9ZxrBET5lMZNnqYs2Yvb7TNF/E4bGkM2/CelInZ0WtVPkPp90bZfvQOBAqzInS9MdTFutE52H5bl92mUxk2eKwhiOzB/L33nIgVJgTpT0tZE7+AcQ70XlY9ioU9TFHXJ9i7UglcOaU9j2FZRvPEidzyR33C9BONoGutYLOg7v99h2+7Mn79Bf8X3w4S9T26ayQ6boca8m0tw83l4msLu31u+hoY+r26ERrz1D7nMdo3ZNHPQWKGEa5LotnySrcThNZobocC/c4tP8oGYwS6AT87gysNm31+1I/6jdFZcZptyaUfwf+2cdOdfz08Gxk8VhNLm1Y3e1DzK0nhdU8kceotIJjFBVADmTq8omumMMxhIVoD8cdvKuRxWMdZTas4ed0l2HRzzNC9xudpQByIgmnj//34w+wQ2ANVf6fPfZ63IUZU+YxHOa/SfwPrCvVP/2nY6KBhDUMAAAAAElFTkSuQmCC') no-repeat 0 0; /* url('buttons.png') */\n    }\n\n    .pause { background-position:-19px 0; }\n    .stop { background-position:-38px 0; }\n\n    #volume-bar {\n      width: 50px;\n      vertical-align: middle;\n      padding:0px;\n    }\n    .mute { background-position:-95px 0; }\n    .unmute { background-position:-114px 0; }\n    .replay { background-position:-133px 0; }\n    .fullscreen {\n      text-indent: 0px;\n      color: #00c600;\n      background-image: none;\n      padding: 0px;\n      font-weight: bold;\n      padding-bottom: 3px;\n    }\n\n\n    progress {\n      color: green;\n      font-size: 12px;\n      width: 220px;\n      height: 16px;\n      border: none;\n      margin-right: 10px;\n      background: #434343;\n      border-radius: 9px;\n      vertical-align: middle;\n    }\n    progress::-moz-progress-bar {\n      color:green;\n      background:#434343;\n    }\n\n    progress[value]::-webkit-progress-bar {\n      background-color: #434343;\n      border-radius: 2px;\n      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;\n    }\n\n    progress[value]::-webkit-progress-value {\n      background-color: green;\n    }\n\n    input[type=range] {\n      -webkit-appearance: none;\n      width: 100%;\n      margin: 6.8px 0;\n    }\n    input[type=range]:focus {\n      outline: none;\n    }\n    input[type=range]::-webkit-slider-runnable-track {\n      width: 100%;\n      height: 4.4px;\n      cursor: pointer;\n      box-shadow: 0.9px 0.9px 1.7px #002200, 0px 0px 0.9px #003c00;\n      background: #205928;\n      border-radius: 1px;\n      border: 1.1px solid #18d501;\n    }\n    input[type=range]::-webkit-slider-thumb {\n      box-shadow: 2.6px 2.6px 3.7px #00aa00, 0px 0px 2.6px #00c300;\n      border: 2.5px solid #83e584;\n      height: 18px;\n      width: 9px;\n      border-radius: 3px;\n      background: #439643;\n      cursor: pointer;\n      -webkit-appearance: none;\n      margin-top: -7.9px;\n    }\n    input[type=range]:focus::-webkit-slider-runnable-track {\n      background: #276c30;\n    }\n    input[type=range]::-moz-range-track {\n      width: 100%;\n      height: 4.4px;\n      cursor: pointer;\n      box-shadow: 0.9px 0.9px 1.7px #002200, 0px 0px 0.9px #003c00;\n      background: #205928;\n      border-radius: 1px;\n      border: 1.1px solid #18d501;\n    }\n    input[type=range]::-moz-range-thumb {\n      box-shadow: 2.6px 2.6px 3.7px #00aa00, 0px 0px 2.6px #00c300;\n      border: 2.5px solid #83e584;\n      height: 18px;\n      width: 9px;\n      border-radius: 3px;\n      background: #439643;\n      cursor: pointer;\n    }\n    input[type=range]::-ms-track {\n      width: 100%;\n      height: 4.4px;\n      cursor: pointer;\n      background: transparent;\n      border-color: transparent;\n      color: transparent;\n    }\n    input[type=range]::-ms-fill-lower {\n      background: #194620;\n      border: 1.1px solid #18d501;\n      border-radius: 2px;\n      box-shadow: 0.9px 0.9px 1.7px #002200, 0px 0px 0.9px #003c00;\n    }\n    input[type=range]::-ms-fill-upper {\n      background: #205928;\n      border: 1.1px solid #18d501;\n      border-radius: 2px;\n      box-shadow: 0.9px 0.9px 1.7px #002200, 0px 0px 0.9px #003c00;\n    }\n    input[type=range]::-ms-thumb {\n      box-shadow: 2.6px 2.6px 3.7px #00aa00, 0px 0px 2.6px #00c300;\n      border: 2.5px solid #83e584;\n      height: 18px;\n      width: 9px;\n      border-radius: 3px;\n      background: #439643;\n      cursor: pointer;\n      height: 4.4px;\n    }\n    input[type=range]:focus::-ms-fill-lower {\n      background: #205928;\n    }\n    input[type=range]:focus::-ms-fill-upper {\n      background: #276c30;\n    }\n\n  "]
            },] },
];
/**
 * @nocollapse
 */
AmexioVideoPlayerComponent.ctorParameters = function () { return []; };
AmexioVideoPlayerComponent.propDecorators = {
    'path': [{ type: _angular_core.Input },],
    'extension': [{ type: _angular_core.Input },],
    'videoPlayer': [{ type: _angular_core.ViewChild, args: ['videoRef',] },],
    'progressBar': [{ type: _angular_core.ViewChild, args: ['progressbar',] },],
    'volumebar': [{ type: _angular_core.ViewChild, args: ['volumebar',] },],
};

var AmexioWidgetModule = (function () {
    function AmexioWidgetModule() {
    }
    return AmexioWidgetModule;
}());
AmexioWidgetModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _angular_common.CommonModule,
                    _angular_forms.FormsModule,
                    _angular_http.HttpModule
                ],
                declarations: [
                    AmexioSliderComponent,
                    AmexioToggleComponent,
                    AmexioPaginatorComponent,
                    ButtonComponent,
                    TextInputComponent,
                    ButtonDropdownComponent,
                    ButtonSplitDropdownComponent,
                    DropdownItemComponent,
                    ButtonGroupActionComponent,
                    ButtonGroupComponent,
                    CheckBoxGroup,
                    DateTimeComponent,
                    DropDownComponent,
                    EmailInputComponent,
                    NumberInputComponent,
                    PasswordInputComponent,
                    ProgressComponent,
                    RadioGroupComponent,
                    RatingInputComponent,
                    TextAreaComponent,
                    TypeAheadComponent,
                    TabPaneComponent,
                    TabComponent,
                    VerticalLeftTabPaneComponent,
                    VerticalRightTabPaneComponent,
                    DataTableComponent,
                    ColumnComponent,
                    FilterComponent,
                    CarouselComponent,
                    ItemSelectorComponent,
                    NavbarComponent,
                    NavbarSubMenuComponent,
                    SideNavBarComponent,
                    FilterTreeViewComponent,
                    TreeViewComponent,
                    TreeDataTableComponent,
                    PaneActionComponent,
                    PaneBodyComponent,
                    PaneHeaderComponent,
                    WindowPaneComponent,
                    DialogComponent,
                    CardComponent,
                    ListBoxComponent,
                    NotifyComponent,
                    FieldSetComponent,
                    FieldSetBodyComponent,
                    ImageComponent,
                    StepBlockComponent,
                    StepsComponent,
                    DockedBarToolComponent,
                    DockbarComponent,
                    FileuploadComponent,
                    TagInputComponent,
                    AmexioVideoPlayerComponent
                ],
                exports: [
                    AmexioSliderComponent,
                    AmexioToggleComponent,
                    AmexioPaginatorComponent,
                    ButtonComponent,
                    TextInputComponent,
                    ButtonDropdownComponent,
                    ButtonSplitDropdownComponent,
                    DropdownItemComponent,
                    ButtonGroupActionComponent,
                    ButtonGroupComponent,
                    CheckBoxGroup,
                    DateTimeComponent,
                    DropDownComponent,
                    EmailInputComponent,
                    NumberInputComponent,
                    PasswordInputComponent,
                    ProgressComponent,
                    RadioGroupComponent,
                    RatingInputComponent,
                    TextAreaComponent,
                    TypeAheadComponent,
                    TabPaneComponent,
                    TabComponent,
                    VerticalLeftTabPaneComponent,
                    VerticalRightTabPaneComponent,
                    DataTableComponent,
                    ColumnComponent,
                    FilterComponent,
                    CarouselComponent,
                    ItemSelectorComponent,
                    NavbarComponent,
                    NavbarSubMenuComponent,
                    SideNavBarComponent,
                    FilterTreeViewComponent,
                    TreeViewComponent,
                    TreeDataTableComponent,
                    PaneActionComponent,
                    PaneBodyComponent,
                    PaneHeaderComponent,
                    WindowPaneComponent,
                    DialogComponent,
                    CardComponent,
                    ListBoxComponent,
                    NotifyComponent,
                    FieldSetComponent,
                    FieldSetBodyComponent,
                    ImageComponent,
                    StepBlockComponent,
                    StepsComponent,
                    DockedBarToolComponent,
                    DockbarComponent,
                    FileuploadComponent,
                    TagInputComponent,
                    AmexioVideoPlayerComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
AmexioWidgetModule.ctorParameters = function () { return []; };

exports.AmexioWidgetModule = AmexioWidgetModule;
exports.ButtonComponent = ButtonComponent;
exports.CommonHttpService = CommonHttpService;
exports.CUSTOM_TEXT_INPUT_CONTROL_VALUE_ACCESSOR = CUSTOM_TEXT_INPUT_CONTROL_VALUE_ACCESSOR;
exports.BASE_IMPL_TEXT_INPUT = BASE_IMPL_TEXT_INPUT;
exports.TextInputComponent = TextInputComponent;
exports.FormInputBase = FormInputBase;
exports.CHECK_COLUMN_SIZE = CHECK_COLUMN_SIZE;
exports.CheckBoxGroup = CheckBoxGroup;
exports.CUSTOM_DATEPICKER_INPUT_CONTROL_VALUE_ACCESSOR = CUSTOM_DATEPICKER_INPUT_CONTROL_VALUE_ACCESSOR;
exports.BASE_IMPL_DATEPICKER_INPUT = BASE_IMPL_DATEPICKER_INPUT;
exports.DateTimeComponent = DateTimeComponent;
exports.CUSTOM_DROPDOWN_CONTROL_VALUE_ACCESSOR = CUSTOM_DROPDOWN_CONTROL_VALUE_ACCESSOR;
exports.BASE_IMPL_DROPDOWN_INPUT = BASE_IMPL_DROPDOWN_INPUT;
exports.DropDownComponent = DropDownComponent;
exports.CUSTOM_EMAIL_INPUT_CONTROL_VALUE_ACCESSOR = CUSTOM_EMAIL_INPUT_CONTROL_VALUE_ACCESSOR;
exports.BASE_IMPL_EMAIL_INPUT = BASE_IMPL_EMAIL_INPUT;
exports.EmailInputComponent = EmailInputComponent;
exports.CUSTOM_NUMBER_INPUT_CONTROL_VALUE_ACCESSOR = CUSTOM_NUMBER_INPUT_CONTROL_VALUE_ACCESSOR;
exports.BASE_IMPL_NUMBER_INPUT = BASE_IMPL_NUMBER_INPUT;
exports.NumberInputComponent = NumberInputComponent;
exports.CUSTOM_PASSWORD_INPUT_CONTROL_VALUE_ACCESSOR = CUSTOM_PASSWORD_INPUT_CONTROL_VALUE_ACCESSOR;
exports.BASE_IMPL_PASSWORD_INPUT = BASE_IMPL_PASSWORD_INPUT;
exports.PasswordInputComponent = PasswordInputComponent;
exports.ProgressComponent = ProgressComponent;
exports.COLUMN_SIZE = COLUMN_SIZE;
exports.RadioGroupComponent = RadioGroupComponent;
exports.RatingInputComponent = RatingInputComponent;
exports.CUSTOM_TEXT_AREA_INPUT_CONTROL_VALUE_ACCESSOR = CUSTOM_TEXT_AREA_INPUT_CONTROL_VALUE_ACCESSOR;
exports.BASE_IMPL_TEXTAREA_INPUT = BASE_IMPL_TEXTAREA_INPUT;
exports.TextAreaComponent = TextAreaComponent;
exports.CUSTOM_AUTO_COMPLETE_CONTROL_VALUE_ACCESSOR = CUSTOM_AUTO_COMPLETE_CONTROL_VALUE_ACCESSOR;
exports.BASE_IMPL_AUTO_COMPLETE = BASE_IMPL_AUTO_COMPLETE;
exports.TypeAheadComponent = TypeAheadComponent;
exports.StepBlockComponent = StepBlockComponent;
exports.StepsComponent = StepsComponent;
exports.DockedBarToolComponent = DockedBarToolComponent;
exports.DockbarComponent = DockbarComponent;
exports.ButtonGroupActionComponent = ButtonGroupActionComponent;
exports.ButtonGroupComponent = ButtonGroupComponent;
exports.DropdownItemComponent = DropdownItemComponent;
exports.ButtonDropdownComponent = ButtonDropdownComponent;
exports.ButtonSplitDropdownComponent = ButtonSplitDropdownComponent;
exports.TabComponent = TabComponent;
exports.TabPaneComponent = TabPaneComponent;
exports.VerticalLeftTabPaneComponent = VerticalLeftTabPaneComponent;
exports.VerticalRightTabPaneComponent = VerticalRightTabPaneComponent;
exports.FilterComponent = FilterComponent;
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR;
exports.DataTableComponent = DataTableComponent;
exports.ColumnComponent = ColumnComponent;
exports.CarouselComponent = CarouselComponent;
exports.ItemSelectorComponent = ItemSelectorComponent;
exports.SideNavBarComponent = SideNavBarComponent;
exports.NavbarSubMenuComponent = NavbarSubMenuComponent;
exports.NavbarComponent = NavbarComponent;
exports.FilterTreeViewComponent = FilterTreeViewComponent;
exports.TreeViewComponent = TreeViewComponent;
exports.TreeDataTableComponent = TreeDataTableComponent;
exports.PaneActionComponent = PaneActionComponent;
exports.PaneBodyComponent = PaneBodyComponent;
exports.PaneHeaderComponent = PaneHeaderComponent;
exports.WindowPaneComponent = WindowPaneComponent;
exports.DialogComponent = DialogComponent;
exports.CardComponent = CardComponent;
exports.ListBoxComponent = ListBoxComponent;
exports.NotifyComponent = NotifyComponent;
exports.FieldSetComponent = FieldSetComponent;
exports.FieldSetBodyComponent = FieldSetBodyComponent;
exports.ImageComponent = ImageComponent;
exports.BASE_IMPL_FILEUPLOAD_INPUT = BASE_IMPL_FILEUPLOAD_INPUT;
exports.FileuploadComponent = FileuploadComponent;
exports.CUSTOM_RANGE_INPUT_CONTROL_VALUE_ACCESSOR = CUSTOM_RANGE_INPUT_CONTROL_VALUE_ACCESSOR;
exports.BASE_IMPL_RANGE_INPUT = BASE_IMPL_RANGE_INPUT;
exports.AmexioSliderComponent = AmexioSliderComponent;
exports.CUSTOM_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR = CUSTOM_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR;
exports.BASE_IMPL_TOGGLE_INPUT = BASE_IMPL_TOGGLE_INPUT;
exports.AmexioToggleComponent = AmexioToggleComponent;
exports.AmexioPaginatorComponent = AmexioPaginatorComponent;
exports.CUSTOM_TAG_INPUT_CONTROL_VALUE_ACCESSOR = CUSTOM_TAG_INPUT_CONTROL_VALUE_ACCESSOR;
exports.BASE_IMPL_TAG_INPUT = BASE_IMPL_TAG_INPUT;
exports.TagInputComponent = TagInputComponent;
exports.AmexioVideoPlayerComponent = AmexioVideoPlayerComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
