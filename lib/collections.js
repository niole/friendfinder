Locations = new Mongo.Collection("locations");
ProfileInfo = new Mongo.Collection("profileinfo");

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

Schemas.ProfileInfo = new SimpleSchema({
  _id: {
      type: String,
      label: "user id"
  },
  email: {
      type: String,
      label: "user email"
  },
  name: {
      type: String,
      label: "user name"
  }
});

ProfileInfo.attachSchema(Schemas.ProfileInfo);
