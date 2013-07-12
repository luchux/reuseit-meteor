
//Publish those unusedObjects that a user can request.
Meteor.publish('objects-others', function () {
  return UnusedObjects.find({ 'user': { $ne: this.userId }, 'requests': { $nin : [this.userId] }
   });
});

Meteor.startup(function () {
  // code to run on server at startup
});
