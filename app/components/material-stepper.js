import Component from '@ember/component';

export default Component.extend({
  currentStep: -1,

  actions: {
    changeStep(newStep) {
      if(this.get('currentStep') === newStep) {
        this.set('currentStep', -1);
      } else {
        this.set('currentStep', newStep);
      }

    }
  }
});
