class NavbarController {
  constructor(NewTaskDialog) {
    'ngInject';

    this.newTaskDialog = NewTaskDialog;
  }

  openNewTaskDialog() {
    this.newTaskDialog.open();
  }
}

class NavbarDirective {
  constructor() {
    this.restrict = 'E';
    this.templateUrl = 'app/components/navbar/navbar.html';
    this.scope = {};
    this.controller = NavbarController;
    this.controllerAs = 'ctrl';
    this.bindToController = {};
  }

  static activate() {
    'ngInject';

    return new NavbarDirective();
  }
}

export default NavbarDirective;
