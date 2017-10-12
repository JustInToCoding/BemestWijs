import Controller from '@ember/controller';

export default Controller.extend({
  currentStep: -1,

  actions: {
    changeStep(newStep) {
      this.set('currentStep', this.get('currentStep') === newStep ? -1 : newStep);
    }
  }
});
