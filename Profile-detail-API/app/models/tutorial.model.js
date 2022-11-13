module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      first: String,
      last: String,
      im: String,
      birth: String,
      email: String,
      confirm: String,
      location: String,
      pno: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
