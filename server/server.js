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


  Meteor.startup(function () {
    // code to run on server at startup
  });
}