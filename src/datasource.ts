import {AppDynamicsSDK} from './appd_sdk';

export class AppDynamicsDatasource {

    appD: AppDynamicsSDK;

    constructor(instanceSettings, private $q, private backendSrv, private templateSrv) {

        this.appD = new AppDynamicsSDK(instanceSettings, backendSrv, templateSrv);
        this.templateSrv = templateSrv;

    }

    query(options) {
        return this.appD.query(options);
  }

    testDatasource() {
        return this.appD.testDatasource();

    }
    annotationQuery() {
        // TODO implement annotationQuery
    }

    metricFindQuery(query) {
        return this.appD.getApplicationNames('').then( (results) => {
            return results.map( (result) => {
                return {text: result.name};
            });
        });
    }
}
