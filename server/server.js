if (Meteor.isServer) {
  //Creation of Collection UnusedObjects.
  UnusedObjects = new Meteor.Collection('uobjects')

  UnusedObjects.remove({});

  UnusedObjects.insert({
    "date_cyrcles ": "2013-06-16",
    "date_public": "2013-06-16",
    "descr": "TV Plasma 27\" Philips, works perfect, remote control" ,
    "id": 1,
    "image": "objects_images/1.jpg",
    "name": "TV Plasma",
    "resource_uri": "/api/object/7/"
  });

  UnusedObjects.insert({
    "date_cyrcles ": "2013-06-16",
    "date_public": "2013-06-16",
    "descr": "Bycicle. Frame from 80s, new wheels, works well",
    "id": 2,
    "image": "objects_images/2.jpg",
    "name": "80s Bike",
    "resource_uri": "/api/object/7/"
  });

  UnusedObjects.insert({
    "date_cyrcles ": "2013-06-16",
    "date_public": "2013-06-16",
    "descr": "Good weights for training hard, 40ks set. ",
    "id": 3,
    "image": "objects_images/3.jpg",
    "name": "Weights!",
    "resource_uri": "/api/object/7/"
  });

  UnusedObjects.insert({
    "date_cyrcles ": "2013-06-16",
    "date_public": "2013-06-16",
    "descr": "Table ideal for living, wood, excellent conditions.",
    "id": 4,
    "image": "objects_images/4.jpg",
    "name": "Small Table",
    "resource_uri": "/api/object/7/"
  });

  UnusedObjects.insert({
    "date_cyrcles ": "2013-06-16",
    "date_public": "2013-06-16",
    "descr": "Backpack Montagne, 60 litters. Used for 4 months. Comfortable.",
    "id": 5,
    "image": "objects_images/5.jpg",
    "name": "Backpack 60L",
    "resource_uri": "/api/object/7/"
  });

  UnusedObjects.insert({
    "date_cyrcles ": "2013-06-16",
    "date_public": "2013-06-16",
    "descr": "Climbing shoes La Sportiva, Cobra. size 40, good grip for edges.",
    "id": 6,
    "image": "objects_images/6.jpg",
    "name": "Climbing Shoes 40",
    "resource_uri": "/api/object/7/"
  });


  Meteor.startup(function () {
    // code to run on server at startup
  });
}