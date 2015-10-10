Friends = new Mongo.Collection("friends");

var Schemas = {};

Schemas.Friends = new SimpleSchema({
  _id: {
      type: String,
      label: "user id"
  },
  location: {
    type: Object,
    label: "most recent latitude and longitude of user"
  },
  "location.lat": {
    type: Number,
    label: "most recent latitude"
  },
  "location.lon": {
    type: Number,
    label: "most recent longitude of user"
  },
  findableByUser: {
    type: [String],
    label: "user ids that this user has permission to lookup"
  },
  canFindUser: {
    type: [String],
    label: "user ids that that have permission to find user"
  }
});

Friends.attachSchema(Schemas.Friends);
