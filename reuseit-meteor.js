if (Meteor.isClient) {

  //Creation of Collection UnusedObjects
  UnusedObjects = new Meteor.Collection('uobjects')

  //Subscribing to published objects
  //TODO: here is where I should filter and get only those objects per user logged in.
  Meteor.subscribe("all-objects");

  //Injection of unused_objects list into template unusedobject.
  Template.unusedobject_list.unused_objects = function () {
    return UnusedObjects.find({});
  };

  //Catching Request/Forget events on the template
  Template.unusedobject_list.events({
    //forget button
    'click .btn-forget' : function () {
      if (typeof console !== 'undefined')
        console.log('User want to forget: ')
        console.log(this._id)
      },
    //request button
    'click .btn-request': function () {
      if (typeof console !== 'undefined')
        console.log('User want to request: ')
        console.log(this._id)
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

  UnusedObjects.remove({});

  UnusedObjects.insert({
    "date_cyrcles ": "2013-06-16",
    "date_public": "2013-06-16",
    "descr": "Camel in excellent conditions",
    "id": 1,
    "image": "objects_images/2.JPG",
    "name": "Camel",
    "resource_uri": "/api/object/7/"
  });

  UnusedObjects.insert({
    "date_cyrcles ": "2013-06-16",
    "date_public": "2013-06-16",
    "descr": "Ukelele Thenesis like new, good strings",
    "id": 2,
    "image": "objects_images/1.JPG",
    "name": "Ukelele",
    "resource_uri": "/api/object/7/"
  });

  UnusedObjects.insert({
    "date_cyrcles ": "2013-06-16",
    "date_public": "2013-06-16",
    "descr": "Turtle in excellent conditions",
    "id": 3,
    "image": "objects_images/3.JPG",
    "name": "Tortuga",
    "resource_uri": "/api/object/7/"
  });

  UnusedObjects.insert({
    "date_cyrcles ": "2013-06-16",
    "date_public": "2013-06-16",
    "descr": "Morris 79 with new engine",
    "id": 4,
    "image": "objects_images/4.JPG",
    "name": "Morris",
    "resource_uri": "/api/object/7/"
  });

  //Publishing all-objects for UnusedObjects collection.
  Meteor.publish("all-objects", function () {
    return UnusedObjects.find(); // everything
  });
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
