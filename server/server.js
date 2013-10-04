
//Publish those unusedObjects that a user can request.
Meteor.publish('objects-others', function () {
  return UnusedObjects.find({ 'user': { $ne: this.userId }, 'requests': { $nin :[this.userId] }, 'forgets': { $nin: [this.userId] }
   });
});


//Publish those unusedObjects that a user can request.
Meteor.publish('objects-requested', function () {
  return UnusedObjects.find({ 'user': { $e: this.userId }, 'requests.1': {$exists: 1}
  });
});

Meteor.startup(function () {
  // code to run on server at startup
});
