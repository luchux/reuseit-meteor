if (Meteor.isClient) {

  //Creation of Collection UnusedObjects
  UnusedObjects = new Meteor.Collection('uobjects')

  //Subscribing to published objects
  //TODO: here is where I should filter and get only those objects per user logged in.
  Meteor.subscribe("all-objects");

  //Injection of unused_objects list into template unusedobject.
  Template.unusedobject.unused_objects = function () {
    return UnusedObjects.find({});
  };

  //Catching Request/Forget events on the template
  Template.unusedobject.events({
    'click .request-buttons' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("button pressed");
    }
  });

  //intention of cleaning the databse
  function remove_database(){
    UnusedObjects.remove({})
  }
}

if (Meteor.isServer) {
  //Creation of Collection UnusedObjects.
  UnusedObjects = new Meteor.Collection('uobjects')

  //Popoulate the db
  //TODO: will comment cause added many elements already to mongo. Add quality data.
  /*
  UnusedObjects.insert({
    "date_cyrcles ": "2013-06-16",
    "date_public": "2013-06-16",
    "descr": "testing",
    "id": 7,
    "image": "http://localhost:8000/media/images/None/SAM_2344.JPG",
    "name": "test",
    "resource_uri": "/api/object/7/"
  });
  */

  //Publishing all-objects for UnusedObjects collection.
  Meteor.publish("all-objects", function () {
    return UnusedObjects.find(); // everything
  });
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
