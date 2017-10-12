import Component from '@ember/component';

export default Component.extend({
  currentStep: -1,

  actions: {
    changeStep(newStep) {
      this.set('currentStep', this.get('currentStep') === newStep ? -1 : newStep);
    }
  }
});
