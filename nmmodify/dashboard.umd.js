(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs/Observable')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'rxjs/Observable'], factory) :
	(factory((global.dashboard = {}),global._angular_core,global._angular_common,global.rxjs_Observable));
}(this, (function (exports,_angular_core,_angular_common,rxjs_Observable) { 'use strict';

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
var DashBoardTitle = (function () {
    function DashBoardTitle() {
    }
    /**
     * @return {?}
     */
    DashBoardTitle.prototype.ngOnInit = function () {
    };
    return DashBoardTitle;
}());
DashBoardTitle.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-dashboard-title',
                template: " "
            },] },
];
/**
 * @nocollapse
 */
DashBoardTitle.ctorParameters = function () { return []; };
DashBoardTitle.propDecorators = {
    'title': [{ type: _angular_core.Input },],
    'titlePosition': [{ type: _angular_core.Input },],
    'titleColor': [{ type: _angular_core.Input },],
    'titleFontName': [{ type: _angular_core.Input },],
    'titleFontSize': [{ type: _angular_core.Input },],
    'isTitleBold': [{ type: _angular_core.Input },],
    'isTitleItalic': [{ type: _angular_core.Input },],
};

/**
 * Created by pratik on 17/8/17.
 */
var DashboardLoaderService = (function () {
    function DashboardLoaderService() {
        this.chartPackage = {
            AreaChart: 'corechart',
            Bar: 'bar',
            BarChart: 'corechart',
            ColumnChart: 'corechart',
            PieChart: 'corechart',
            Gantt: 'gantt',
            Gauge: 'gauge',
            GeoChart: 'geochart',
            Histogram: 'corechart',
            Line: 'line',
            LineChart: 'corechart',
            Map: 'map',
            Timeline: 'timeline',
            BubbleChart: 'corechart',
            CandlestickChart: 'corechart',
            ComboChart: 'corechart',
            TreeMap: 'treemap'
        };
        this.googleScriptLoadingNotifier = new _angular_core.EventEmitter();
        this.isScriptLoading = false;
    }
    /**
     * @param {?} chartName
     * @return {?}
     */
    DashboardLoaderService.prototype.loadCharts = function (chartName) {
        var _this = this;
        return new rxjs_Observable.Observable(function (observer) {
            _this.loadScript().subscribe(function (val) { return console.log(); }, function (error) { return console.error(error); }, function () {
                _this.loadRequiredChart(observer, chartName);
            });
        });
    };
    /**
     * @return {?}
     */
    DashboardLoaderService.prototype.loadScript = function () {
        var _this = this;
        return new rxjs_Observable.Observable(function (observer) {
            if (!_this.isScriptLoading) {
                //check if previously its loaded
                if (typeof google !== 'undefined' && google.charts) {
                    //check if chart package has been loaded using chartPackagename ?
                    _this.loadBaseChart(observer);
                }
                else {
                    _this.isScriptLoading = true;
                    var /** @type {?} */ script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = 'https://www.gstatic.com/charts/loader.js';
                    script.async = true;
                    script.defer = true;
                    script.onload = function () {
                        _this.isScriptLoading = false;
                        _this.googleScriptLoadingNotifier.emit(true);
                        _this.loadBaseChart(observer);
                    };
                    script.onerror = function () {
                        observer.error('Could Not Load google Script');
                    };
                    document.getElementsByTagName('head')[0].appendChild(script);
                }
            }
            else {
                _this.googleScriptLoadingNotifier.subscribe(function (loaded) {
                    if (loaded) {
                        _this.loadBaseChart(observer);
                    }
                });
            }
        });
    };
    /**
     * Load Base Chart
     * @param {?} observer
     * @return {?}
     */
    DashboardLoaderService.prototype.loadBaseChart = function (observer) {
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            observer.complete();
        });
    };
    /**
     * Load the required charts
     * @param {?} observer
     * @param {?} chartName
     * @return {?}
     */
    DashboardLoaderService.prototype.loadRequiredChart = function (observer, chartName) {
        if (google.visualization.hasOwnProperty(chartName)) {
            observer.complete();
        }
        else {
            google.charts.load('current', { 'packages': [this.chartPackage[chartName]] });
            google.charts.setOnLoadCallback(function () {
                observer.complete();
            });
        }
    };
    return DashboardLoaderService;
}());
DashboardLoaderService.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
DashboardLoaderService.ctorParameters = function () { return []; };

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
var GaugeChartComponent = (function () {
    /**
     * @param {?} loader
     */
    function GaugeChartComponent(loader) {
        this.loader = loader;
        this.id = 'amexio-chart-gauge' + Math.floor(Math.random() * 90000) + 10000;
        this.width = '100%';
    }
    /**
     * @return {?}
     */
    GaugeChartComponent.prototype.drawChart = function () {
        this.gaugeData = google.visualization.arrayToDataTable(this.data);
        this.options = {
            width: this.width,
            height: this.height,
            redFrom: this.redColorFrom,
            redTo: this.redColorTo,
            yellowFrom: this.yellowColorFrom,
            yellowTo: this.yellowColorTo,
            minorTicks: this.minorTicks,
            max: this.redColorTo
        };
        this.chart = new google.visualization.Gauge(document.getElementById(this.id));
        this.hasLoaded = true;
        this.chart.draw(this.gaugeData, this.options);
    };
    /**
     * @return {?}
     */
    GaugeChartComponent.prototype.ngAfterContentInit = function () {
        this.chartTitleArray = this.chartTitleComp.toArray();
        //take first component
        if (this.chartTitleArray.length == 1) {
            this.chartTitleComponent = this.chartTitleArray.pop();
        }
    };
    /**
     * @return {?}
     */
    GaugeChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hasLoaded = false;
        this.loader.loadCharts('Gauge').subscribe(function (value) { return console.log(); }, function (errror) { return console.error(errror); }, function () {
            _this.drawChart();
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    GaugeChartComponent.prototype.onResize = function (event) {
        this.drawChart();
    };
    return GaugeChartComponent;
}());
GaugeChartComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-dashboard-gauge',
                template: "\n      <div [attr.id]=\"id\"\n           [style.width]=\"width\"\n           [style.height]=\"height\" (window:resize)=\"onResize($event)\" >\n        <div *ngIf=\"!hasLoaded\" class=\"lmask\">\n        </div>\n      </div>\n  ",
                styles: [".lmask {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: #000;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 0;\n    z-index: 9999;\n    opacity: 0.4;\n  }\n  .lmask.fixed {\n    position: fixed;\n  }\n  .lmask:before {\n    content: '';\n    background-color: transparent;\n    border: 5px solid rgba(0, 183, 229, 0.9);\n    opacity: .9;\n    border-right: 5px solid transparent;\n    border-left: 5px solid transparent;\n    border-radius: 50px;\n    box-shadow: 0 0 35px #2187e7;\n    width: 50px;\n    height: 50px;\n    -moz-animation: spinPulse 1s infinite ease-in-out;\n    -webkit-animation: spinPulse 1s infinite linear;\n    margin: -25px 0 0 -25px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n  }\n  .lmask:after {\n    content: '';\n    background-color: transparent;\n    border: 5px solid rgba(0, 183, 229, 0.9);\n    opacity: .9;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-radius: 50px;\n    box-shadow: 0 0 15px #2187e7;\n    width: 30px;\n    height: 30px;\n    -moz-animation: spinoffPulse 1s infinite linear;\n    -webkit-animation: spinoffPulse 1s infinite linear;\n    margin: -15px 0 0 -15px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n  }\n\n  @-moz-keyframes spinPulse {\n    0% {\n      -moz-transform: rotate(160deg);\n      opacity: 0;\n      box-shadow: 0 0 1px #2187e7;\n    }\n    50% {\n      -moz-transform: rotate(145deg);\n      opacity: 1;\n    }\n    100% {\n      -moz-transform: rotate(-320deg);\n      opacity: 0;\n    }\n  }\n  @-moz-keyframes spinoffPulse {\n    0% {\n      -moz-transform: rotate(0deg);\n    }\n    100% {\n      -moz-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spinPulse {\n    0% {\n      -webkit-transform: rotate(160deg);\n      opacity: 0;\n      box-shadow: 0 0 1px #2187e7;\n    }\n    50% {\n      -webkit-transform: rotate(145deg);\n      opacity: 1;\n    }\n    100% {\n      -webkit-transform: rotate(-320deg);\n      opacity: 0;\n    }\n  }\n  @-webkit-keyframes spinoffPulse {\n    0% {\n      -webkit-transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n\n  "]
            },] },
];
/**
 * @nocollapse
 */
GaugeChartComponent.ctorParameters = function () { return [
    { type: DashboardLoaderService, },
]; };
GaugeChartComponent.propDecorators = {
    'width': [{ type: _angular_core.Input },],
    'height': [{ type: _angular_core.Input },],
    'data': [{ type: _angular_core.Input },],
    'redColorFrom': [{ type: _angular_core.Input },],
    'redColorTo': [{ type: _angular_core.Input },],
    'yellowColorFrom': [{ type: _angular_core.Input },],
    'yellowColorTo': [{ type: _angular_core.Input },],
    'minorTicks': [{ type: _angular_core.Input },],
    'chartTitleComp': [{ type: _angular_core.ContentChildren, args: [DashBoardTitle,] },],
};

/**
 * Created by ketangote on 7/25/17.
 */
var DataPointCenterComponent = (function () {
    function DataPointCenterComponent() {
    }
    /**
     * @return {?}
     */
    DataPointCenterComponent.prototype.ngOnInit = function () {
    };
    return DataPointCenterComponent;
}());
DataPointCenterComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-center',
                template: "\n\n    <div [ngClass]=\"cClass\" [attr.align]=\"contentalign\" [style.background-color]=\"backgroundColor\" [style.color]=\"fontColor\" [style.width]=\"width\" [style.height]=\"height\">\n      <ng-content></ng-content>\n    </div>\n\n\n  "
            },] },
];
/**
 * @nocollapse
 */
DataPointCenterComponent.ctorParameters = function () { return []; };
DataPointCenterComponent.propDecorators = {
    'contentalign': [{ type: _angular_core.Input },],
    'backgroundColor': [{ type: _angular_core.Input },],
    'fontColor': [{ type: _angular_core.Input },],
    'width': [{ type: _angular_core.Input },],
    'height': [{ type: _angular_core.Input },],
    'cClass': [{ type: _angular_core.Input },],
};

/**
 * Created by ketangote on 8/16/17.
 */
var DataPointsComponent = (function () {
    function DataPointsComponent() {
        this.colspan = 1;
    }
    /**
     * @return {?}
     */
    DataPointsComponent.prototype.ngOnInit = function () {
        if (this.west)
            this.colspan++;
        if (this.east)
            this.colspan++;
    };
    return DataPointsComponent;
}());
DataPointsComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-datapoints',
                template: "      \n      \n  <div  class=\"amexio-datapoints\">\n    <table width=\"100%\"  [style.background-color]=\"backgroundColor\" [style.color]=\"fontColor\">\n      <tr *ngIf=\"north\">\n        <td [attr.colspan]=\"colspan\">\n          <ng-content select=\"amexio-north\"></ng-content>\n        </td>\n      </tr>\n      <tr>\n        <td *ngIf=\"west\">\n          <ng-content select=\"amexio-west\"></ng-content>\n        </td>\n        <td *ngIf=\"center\">\n          <ng-content select=\"amexio-center\"></ng-content>\n        </td>\n        <td *ngIf=\"east\">\n          <ng-content select=\"amexio-east\"></ng-content>\n        </td>\n      </tr>\n      <tr  *ngIf=\"south\">\n        <td [attr.colspan]=\"colspan\">\n          <ng-content select=\"amexio-south\"></ng-content>\n        </td>\n      </tr>\n    </table>\n  </div>\n\n\n  ", styles: [
                    "\n      .amexio-datapoints{\n      \n      }\n    "
                ]
            },] },
];
/**
 * @nocollapse
 */
DataPointsComponent.ctorParameters = function () { return []; };
DataPointsComponent.propDecorators = {
    'north': [{ type: _angular_core.Input },],
    'south': [{ type: _angular_core.Input },],
    'west': [{ type: _angular_core.Input },],
    'center': [{ type: _angular_core.Input },],
    'east': [{ type: _angular_core.Input },],
    'backgroundColor': [{ type: _angular_core.Input },],
    'fontColor': [{ type: _angular_core.Input },],
};

/**
 * Created by ketangote on 7/25/17.
 */
var DataPointEastComponent = (function () {
    function DataPointEastComponent() {
    }
    /**
     * @return {?}
     */
    DataPointEastComponent.prototype.ngOnInit = function () {
    };
    return DataPointEastComponent;
}());
DataPointEastComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-east',
                template: "\n\n    <div [ngClass]=\"cClass\" [attr.align]=\"contentalign\" [style.background-color]=\"backgroundColor\" [style.color]=\"fontColor\" [style.width]=\"width\" [style.height]=\"height\">\n      <ng-content></ng-content>\n    </div>\n\n\n  "
            },] },
];
/**
 * @nocollapse
 */
DataPointEastComponent.ctorParameters = function () { return []; };
DataPointEastComponent.propDecorators = {
    'contentalign': [{ type: _angular_core.Input },],
    'backgroundColor': [{ type: _angular_core.Input },],
    'fontColor': [{ type: _angular_core.Input },],
    'width': [{ type: _angular_core.Input },],
    'height': [{ type: _angular_core.Input },],
    'cClass': [{ type: _angular_core.Input },],
};

/**
 * Created by ketangote on 7/25/17.
 */
var DataPointNorthComponent = (function () {
    function DataPointNorthComponent() {
    }
    /**
     * @return {?}
     */
    DataPointNorthComponent.prototype.ngOnInit = function () {
    };
    return DataPointNorthComponent;
}());
DataPointNorthComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-north',
                template: "\n\n    <div [ngClass]=\"cClass\" [attr.align]=\"contentalign\" [style.background-color]=\"backgroundColor\" [style.color]=\"fontColor\" [style.width]=\"width\" [style.height]=\"height\">\n      <ng-content></ng-content>\n    </div>\n    \n\n\n  "
            },] },
];
/**
 * @nocollapse
 */
DataPointNorthComponent.ctorParameters = function () { return []; };
DataPointNorthComponent.propDecorators = {
    'contentalign': [{ type: _angular_core.Input },],
    'backgroundColor': [{ type: _angular_core.Input },],
    'fontColor': [{ type: _angular_core.Input },],
    'width': [{ type: _angular_core.Input },],
    'height': [{ type: _angular_core.Input },],
    'cClass': [{ type: _angular_core.Input },],
};

/**
 * Created by ketangote on 7/25/17.
 */
var DataPointSouthComponent = (function () {
    function DataPointSouthComponent() {
    }
    /**
     * @return {?}
     */
    DataPointSouthComponent.prototype.ngOnInit = function () {
    };
    return DataPointSouthComponent;
}());
DataPointSouthComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-south',
                template: "\n\n    <div [ngClass]=\"cClass\" [attr.align]=\"contentalign\" [style.background-color]=\"backgroundColor\" [style.color]=\"fontColor\" [style.width]=\"width\" [style.height]=\"height\">\n      <ng-content></ng-content>\n    </div>\n\n\n  "
            },] },
];
/**
 * @nocollapse
 */
DataPointSouthComponent.ctorParameters = function () { return []; };
DataPointSouthComponent.propDecorators = {
    'contentalign': [{ type: _angular_core.Input },],
    'backgroundColor': [{ type: _angular_core.Input },],
    'fontColor': [{ type: _angular_core.Input },],
    'width': [{ type: _angular_core.Input },],
    'height': [{ type: _angular_core.Input },],
    'cClass': [{ type: _angular_core.Input },],
};

/**
 * Created by ketangote on 7/25/17.
 */
var DataPointWestComponent = (function () {
    function DataPointWestComponent() {
    }
    /**
     * @return {?}
     */
    DataPointWestComponent.prototype.ngOnInit = function () {
    };
    return DataPointWestComponent;
}());
DataPointWestComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'amexio-west',
                template: "\n\n    <div [ngClass]=\"cClass\" [attr.align]=\"contentalign\" [style.background-color]=\"backgroundColor\" [style.color]=\"fontColor\" [style.width]=\"width\" [style.height]=\"height\">\n      <ng-content></ng-content>\n    </div>\n\n\n  "
            },] },
];
/**
 * @nocollapse
 */
DataPointWestComponent.ctorParameters = function () { return []; };
DataPointWestComponent.propDecorators = {
    'contentalign': [{ type: _angular_core.Input },],
    'backgroundColor': [{ type: _angular_core.Input },],
    'fontColor': [{ type: _angular_core.Input },],
    'width': [{ type: _angular_core.Input },],
    'height': [{ type: _angular_core.Input },],
    'cClass': [{ type: _angular_core.Input },],
};

var AmexioDashboardModule = (function () {
    function AmexioDashboardModule() {
    }
    /**
     * @return {?}
     */
    AmexioDashboardModule.forRoot = function () {
        return {
            ngModule: AmexioDashboardModule,
            providers: [DashboardLoaderService]
        };
    };
    return AmexioDashboardModule;
}());
AmexioDashboardModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _angular_common.CommonModule
                ],
                declarations: [
                    DashBoardTitle,
                    GaugeChartComponent,
                    DataPointCenterComponent,
                    DataPointsComponent,
                    DataPointEastComponent,
                    DataPointNorthComponent,
                    DataPointSouthComponent,
                    DataPointWestComponent
                ],
                exports: [
                    DashBoardTitle,
                    GaugeChartComponent,
                    DataPointCenterComponent,
                    DataPointsComponent,
                    DataPointEastComponent,
                    DataPointNorthComponent,
                    DataPointSouthComponent,
                    DataPointWestComponent
                ],
                providers: [DashboardLoaderService]
            },] },
];
/**
 * @nocollapse
 */
AmexioDashboardModule.ctorParameters = function () { return []; };

exports.AmexioDashboardModule = AmexioDashboardModule;
exports.DashBoardTitle = DashBoardTitle;
exports.GaugeChartComponent = GaugeChartComponent;
exports.DataPointCenterComponent = DataPointCenterComponent;
exports.DataPointsComponent = DataPointsComponent;
exports.DataPointEastComponent = DataPointEastComponent;
exports.DataPointNorthComponent = DataPointNorthComponent;
exports.DataPointSouthComponent = DataPointSouthComponent;
exports.DataPointWestComponent = DataPointWestComponent;
exports.DashboardLoaderService = DashboardLoaderService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
