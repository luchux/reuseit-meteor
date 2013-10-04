# MODEL definition
class @UnusedObject extends MiniModel
  @collectionName: "UnusedObjects"
  @validations: [
    {name: 'notEmpty'},
    {name: ['minLength', 5]},
    {name:
      rule:     ['maxLength', 50]
      message:  'Name can not be longer than 50 chars'
    }
    ###,
    {name:
      rule: (field) ->
        return false if _.indexOf(field, ".") == -1
        return true;
      message:  'Title must contain "."'
    }
    ###
  ]
  ###
  opened: ->
    !this.checked
  resolved: ->
    this.checked
  ###

# COLLECTION definition
@UnusedObjects = new Meteor.Collection "UnusedObjects",
  transform: (doc) ->
    new UnusedObject doc

# client code
if (Meteor.isClient)
  Meteor.subscribe "UnusedObjects"

###
  # LIST template
  Template.list.helpers
    hasTodos: ->
      Todos.find().count() > 0
    todos: ->
      Todos.find()

  # SHOW template
  Template.show.rendered = ->
    $.each(this.findAll("[data-toggle=tooltip]"), (key, tag) ->
      $(tag).tooltip()
    )

  Template.show.events =
    "keyup input": (event) ->
      this.title = $(event.target).val()
      this.save()
    "click a.check-link": (event) ->
      this.checked = !this.checked
      this.save()
    "click a.delete-link": (event) ->
      conf = confirm "Are you sure you want to delete '#{this.title}'?"
      this.destroy()  if conf

  # ADD template
  Template.add.helpers
    hasErrors: (field) ->
      Todo.hasErrors(field)
    getErrors: (field) ->
      Todo.getErrors(field)

  Template.add.events =
    "submit form": (event) ->
      todoData = {}
      $.each $(event.target).serializeArray(), ->
        todoData[this.name] = this.value
      todo = new Todo todoData
      if todo.save()
        $.each $(event.target).find("input"), ->
          $(this).val("")
          $(this).focus()
###
# server code
if (Meteor.isServer)
  Meteor.publish "UnusedObjects", ->
    UnusedObject.find()