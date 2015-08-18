class NewTaskDialogController {
  constructor($modalInstance, Tasks) {
    'ngInject';

    this.Tasks = Tasks;
    this.$modalInstance = $modalInstance;

    this.task = {
      title: '',
      description: '',
      state: Tasks.states[0]
    };
  }

  ok() {
    this.Tasks[this.task.state].push(this.task);
    this.$modalInstance.close(this.task);
  }

  cancel() {
    this.$modalInstance.dismiss('cancel');
  }
}

class NewTaskDialog {
  constructor($modal) {
    this.$modal = $modal;
  }

  open() {
    return this.$modal.open({
      backdrop: 'static',
      controller: NewTaskDialogController,
      controllerAs: 'ctrl',
      bindToController: {},
      templateUrl: 'app/components/newTaskDialog/newTaskDialog.html'
    });
  }

  static activate($modal) {
    'ngInject';

    return new NewTaskDialog($modal);
  }
}

export default NewTaskDialog;
