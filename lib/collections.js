Friends = new Mongo.Collection("friends");

var Schemas = {};

Schemas.Friends = new SimpleSchema({
  _id: {
      type: String,
      label: "user id"
  },
  requests: {
    type: [Object],
    label: "requests from users for permission to find user"
  },
  location: {
    type: Object,
    label: "most recent latitude and longitude of user"
  },
  "location.lat": {
    type: Number,
    label: "most recent latitude"
  },
  "location.lng": {
    type: Number,
    label: "most recent longitude of user"
  },
  findableByUser: {
    type: [Object],
    label: "user ids that this user has permission to lookup"
  },
  canFindUser: {
    type: [Object],
    label: "user ids that that have permission to find user"
  }
});

Friends.attachSchema(Schemas.Friends);
