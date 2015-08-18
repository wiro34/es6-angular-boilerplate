System.config({
  "baseURL": "./",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.4.3",
    "angular-animate": "github:angular/bower-angular-animate@1.4.3",
    "angular-bootstrap": "github:angular-ui/bootstrap-bower@0.13.3",
    "angular-cookies": "github:angular/bower-angular-cookies@1.4.3",
    "angular-mocks": "github:angular/bower-angular-mocks@1.4.3",
    "angular-resource": "github:angular/bower-angular-resource@1.4.3",
    "angular-sanitize": "github:angular/bower-angular-sanitize@1.4.3",
    "angular-touch": "github:angular/bower-angular-touch@1.4.3",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
    "babel": "npm:babel-core@5.8.21",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "bootstrap-sass": "github:twbs/bootstrap-sass@3.3.5",
    "core-js": "npm:core-js@0.9.18",
    "gsklee/ngStorage": "github:gsklee/ngStorage@0.3.7",
    "jquery": "github:components/jquery@2.1.4",
    "lodash": "npm:lodash@3.10.1",
    "marceljuenemann/angular-drag-and-drop-lists": "github:marceljuenemann/angular-drag-and-drop-lists@1.2.0",
    "process": "github:jspm/nodelibs-process@0.1.1",
    "github:angular-ui/ui-router@0.2.15": {
      "angular": "github:angular/bower-angular@1.4.3"
    },
    "github:angular/bower-angular-animate@1.4.3": {
      "angular": "github:angular/bower-angular@1.4.3"
    },
    "github:angular/bower-angular-cookies@1.4.3": {
      "angular": "github:angular/bower-angular@1.4.3"
    },
    "github:angular/bower-angular-mocks@1.4.3": {
      "angular": "github:angular/bower-angular@1.4.3"
    },
    "github:angular/bower-angular-sanitize@1.4.3": {
      "angular": "github:angular/bower-angular@1.4.3"
    },
    "github:angular/bower-angular-touch@1.4.3": {
      "angular": "github:angular/bower-angular@1.4.3"
    },
    "github:components/jqueryui@1.11.4": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

