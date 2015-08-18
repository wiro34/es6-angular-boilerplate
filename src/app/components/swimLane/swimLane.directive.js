import _ from 'lodash';

class SwimLaneController {
  constructor(Tasks) {
    'ngInject';

    this.Tasks = Tasks;
  }

  tasks() {
    return this.Tasks[this.name];
  }

  removeTask(from, index) {
    from.splice(index, 1);
  }
}

class SwimLaneDirective {
  constructor() {
    this.restrict = 'E';
    this.require = '^SwimLaneContainer';
    this.templateUrl = 'app/components/swimLane/swimLane.html';
    this.scope = {};
    this.controller = SwimLaneController;
    this.controllerAs = 'ctrl';
    this.bindToController = {
      name: '@name'
    };
  }

  static activate() {
    'ngInject';

    return new SwimLaneDirective();
  }
}

export default SwimLaneDirective;
