if (Meteor.isClient) {

  //Creation of DataStore
  UnusedObjects = new Meteor.Collection('uobjects')

  Template.unused_objects = function () {
    return UnusedObjects.find({}).fetch();
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  //Creation of DataStore
  UnusedObjects = new Meteor.Collection('uobjects')
  //Popoulate the db
  UnusedObjects.insert({
    "date_cyrcles ": "2013-06-16",
    "date_public": "2013-06-16",
    "descr": "testing",
    "id": 7,
    "image": "http://localhost:8000/media/images/None/SAM_2344.JPG",
    "name": "test",
    "resource_uri": "/api/object/7/"
  });

  Meteor.startup(function () {
    // code to run on server at startup
  });
}
