UnusedObjects = new Meteor.Collection('uobjects')

UnusedObjects.remove({});

var user_obj = Meteor.users.find( {} ).fetch()[0]

UnusedObjects.insert({
  "date_cyrcles ": "2013-06-16",
  "date_public": "2013-06-16",
  "descr": "TV Plasma 27\" Philips, works perfect, remote control" ,
  "image": "objects_images/1.jpg",
  "name": "TV Plasma",
  "user": user_obj._id,
  "likes":0,
  "dislikes":0,
  "spam":0,
  "voters":[],
  "requests":[]
});

UnusedObjects.insert({
  "date_cyrcles ": "2013-06-16",
  "date_public": "2013-06-16",
  "descr": "Bycicle. Frame from 80s, new wheels, works well",
  "image": "objects_images/2.jpg",
  "name": "80s Bike",
  "user": user_obj._id,
  "likes":0,
  "dislikes":0,
  "spam":0,
  "voters":[],
  "requests":[]
});

UnusedObjects.insert({
  "date_cyrcles ": "2013-06-16",
  "date_public": "2013-06-16",
  "descr": "Good weights for training hard, 40ks set. ",
  "image": "objects_images/3.jpg",
  "name": "Weights!",
  "user": user_obj._id,
  "likes":0,
  "dislikes":0,
  "spam":0,
  "voters":[],
  "requests":[]
});

UnusedObjects.insert({
  "date_cyrcles ": "2013-06-16",
  "date_public": "2013-06-16",
  "descr": "Table ideal for living, wood, excellent conditions.",
  "image": "objects_images/4.jpg",
  "name": "Small Table",
  "resource_uri": "/api/object/7/",
  "user": user_obj._id,
  "likes":0,
  "dislikes":0,
  "spam":0,
  "voters":[],
  "requests":[]
});

UnusedObjects.insert({
  "date_cyrcles ": "2013-06-16",
  "date_public": "2013-06-16",
  "descr": "Backpack Montagne, 60 litters. Used for 4 months. Comfortable.",
  "image": "objects_images/5.jpg",
  "name": "Backpack 60L",
  "user": user_obj._id,
  "likes":0,
  "dislikes":0,
  "spam":0,
  "voters":[],
  "requests":[]
});

UnusedObjects.insert({
  "date_cyrcles ": "2013-06-16",
  "date_public": "2013-06-16",
  "descr": "Climbing shoes La Sportiva, Cobra. size 40, good grip for edges.",
  "image": "objects_images/6.jpg",
  "name": "Climbing Shoes 40",
  "user": user_obj._id,
  "likes":0,
  "dislikes":0,
  "spam":0,
  "voters":[],
  "requests":[]
});



Meteor.methods({

  request: function (object_id) {

    check(object_id, String);

    if (! this.userId)
      throw new Meteor.Error(403, "You must be logged in to Request");

    var unusedobject = UnusedObjects.findOne(object_id);
    if (! unusedobject)
      throw new Meteor.Error(404, "No such object");


    if (Meteor.isServer) {
      UnusedObjects.update(
        { _id: object_id },
        { $push: { requests: this.userId } }
      );
    } else {
      // minimongo doesn't yet support $ in modifier. Lets try if same code works
      UnusedObjects.update(
        { _id: object_id },
        { $push: { requests: this.userId } }
      );
    }
  },

  likeit: function(object_id) {

    check(object_id, String);

    //TODO: may be not, can be a good idea like it anyone.
    if(! this.userId)
      throw new Meteor.Error(403, "You must be logged in to like it");

    // This query succeeds only if the voters array doesn't contain the user
    query = {'_id': object_id, 'voters': {'$ne': this.userId}}

    // Update to add the user to the array and increment the number of votes.
    update  = {'$push': {'voters': this.userId}, '$inc': {likes: 1}}

    var unusedobject = UnusedObjects.findOne(object_id);
    if (! unusedobject)
      throw new Meteor.Error(404, "No such object");

    if (Meteor.isServer) {
      UnusedObjects.update(query,update);
    }
  },

  dislikeit: function(object_id) {

    check(object_id, String);

    //TODO: may be not, can be a good idea like it anyone.
    if(! this.userId)
      throw new Meteor.Error(403, "You must be logged in to dislike it");

    // This query succeeds only if the voters array doesn't contain the user
    query = {'_id': object_id, 'voters': {'$ne': this.userId}};

    // Update to add the user to the array and increment the number of votes.
    update  = {'$push': {'voters': this.userId}, '$inc': {dislikes: 1}}

    var unusedobject = UnusedObjects.findOne(object_id);
    if (! unusedobject)
      throw new Meteor.Error(404, "No such object");

    if (Meteor.isServer) {
      UnusedObjects.update(query,update);
    }
  }


});
