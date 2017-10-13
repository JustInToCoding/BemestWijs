import Controller from '@ember/controller';

export default Controller.extend({
  currentStep: -1,

  actions: {
    changeStep(setStep, newStep) {
      if(this.get('currentStep') === newStep) {
        this.set('currentStep', -1);
        setStep(-1);
      } else {
        this.set('currentStep', newStep);
        setStep(newStep);
      }
    }
  }
});
