Locations = new Mongo.Collection("locations");

var Schemas = {};

Schemas.Locations = new SimpleSchema({
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
    decimal: true,
    label: "most recent latitude"
  },
  "location.lng": {
    type: Number,
    decimal: true,
    label: "most recent longitude of user"
  }
});

Locations.attachSchema(Schemas.Locations);
