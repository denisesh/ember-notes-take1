import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitNote: function() {
      var title = this.get('noteTitle'); //controller
      var body = this.get('noteContent');//extract data from form
      var note = this.store.createRecord('note', {title:title, body:body});
      note.save();
      console.log(note);

      this.set('noteTitle', '');
      this.set('noteContent', '');
      this.set('message', 'You created a note.');
    },

    deleteNote: function(note) {
      console.log(note);
      var _this = this;
      note.destroyRecord().then(function() {
        _this.set('message', 'You deleted the note');//uncaught reference error note is not defined
      });
    }
  }
});
