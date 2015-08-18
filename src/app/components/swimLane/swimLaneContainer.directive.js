class SwimLaneContainerController {
  constructor(Tasks) {
    'ngInject';

    this.Tasks = Tasks;
  }
}

class SwimLaneContainerDirective {
  constructor() {
    this.restrict = 'E';
    this.templateUrl = 'app/components/swimLane/swimLaneContainer.html';
    this.scope = {};
    this.bindToController = {};
    this.controller = SwimLaneContainerController;
    this.controllerAs = 'ctrl';
  }

  static activate() {
    'ngInject';

    return new SwimLaneContainerDirective();
  }
}

export default SwimLaneContainerDirective;
