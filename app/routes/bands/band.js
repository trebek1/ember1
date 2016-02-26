// app/routes/bands/band.js
export default Ember.Route.extend({
  model: function(params) {
    var bands = this.modelFor('bands');
    return bands.get('content').findBy('slug', params.slug); // params.slug is now 'pearl-jam'
  }
});