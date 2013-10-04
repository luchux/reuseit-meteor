UnusedObjects = new Meteor.Collection('uobjects')
WantedObjects = new Meteor.Collection('wobjects')

Meteor.subscribe("objects-others");
Meteor.subscribe("wanted-objects")


//Template wantedObjects show objects that the user wants.

Template.wantedObjects.wantedObjects = function () {
  if (Meteor.userId() !== 'undefined') {
    var a = WantedObjects.find({user: Meteor.userId()})
    console.log(a.fetch())
    return a
  }
  else{
    console.log("empty")
    return []
  }
}

//Injection of unused_objects list into template unusedobject.
Template.objectList.unused_objects = function () {
  return UnusedObjects.find({});
};

Template.object.rendered = function () {

  latlon = new google.maps.LatLng(this.data.lat, this.data.lng)

  var mapOptions = {
        center: latlon,
        zoom: 15,
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  this.el = this.find('.map')
  map = new google.maps.Map(this.el, mapOptions);
  map.setCenter(latlon);

  var marker = new google.maps.Marker({
    position: latlon,
    title:this.data.address,
    icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
  });
  marker.setMap(map);
}

//Catching Request/Forget events on the template
Template.object.events({

  //request button
  'click .btn-request': function () {
    if (typeof console !== 'undefined')
      console.log('User want to request: ')
      console.log(this._id)

      //var user = Meteor.userId()
      Meteor.call('request',this._id)
      return false
    },

    //forget button
  'click .btn-forget' : function () {
    if (typeof console !== 'undefined')
      console.log(Meteor.userId() + ' wants to forget: ')
      console.log(this._id)

      Meteor.call('forget',this._id)
      return false
    },

  //get profile button
  'click .btn-profile': function () {
    if (typeof console !== 'undefined')
      console.log('User want profile: ')
      console.log(this._id)
    },

  //get directions button
  'click .btn-direction': function (evt, template) {
    $(template.el).toggle()
    if (typeof console !== 'undefined')
      console.log('User want directions: ')
      console.log(this._id)
      console.log(this.el)
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

