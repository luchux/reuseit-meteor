Meteor.subscribe("objects-others");

//Injection of unused_objects list into template unusedobject.
Template.unusedobject_list.unused_objects = function () {
  return UnusedObjects.find({});
};

//Catching Request/Forget events on the template
Template.unusedobject_list.events({

  //forget button
  'click .btn-forget' : function () {
    if (typeof console !== 'undefined')
      console.log(Meteor.userId() + ' wants to forget: ')
      console.log(this._id)
    },

  //request button
  'click .btn-request': function () {
    if (typeof console !== 'undefined')
      console.log('User want to request: ')
      console.log(this._id)

      //var user = Meteor.userId()
      Meteor.call('request',this._id)
      return false
    },

  //get profile button
  'click .btn-profile': function () {
    if (typeof console !== 'undefined')
      console.log('User want profile: ')
      console.log(this._id)
    },

  //get directions button
  'click .btn-direction': function () {
    if (typeof console !== 'undefined')
      console.log('User want directions: ')
      console.log(this._id)
    },

  //share button
  'click .btn-share': function () {
    if (typeof console !== 'undefined')
      console.log('User want to share: ')
      console.log(this._id)
    },

  //like it button
  'click .btn-likeit': function () {
    if (typeof console !== 'undefined')
      Meteor.call('likeit',this._id)
    },

  //dislike it button
  'click .btn-dislikeit': function () {
    if (typeof console !== 'undefined')
      Meteor.call('dislikeit',this._id)
    },

  //report spam button
  'click .btn-report': function () {
    if (typeof console !== 'undefined')
      console.log('User report spam: ')
      console.log(this._id)
    }
});
