// app/routes/bands.js
import Ember from 'ember';
import Band from '../models/band';
import Song from '../models/song';

// Moved into Models (above); 
// var Band = Ember.Object.extend({
//   name: '',
//   slug: Ember.computed('name', function() {
//     return this.get('name').dasherize();
//   }),
  // site: Ember.computed('slug', 'language', function() {
  //   	console.log('Recomputing site');
  //   return 'http://bands.com/' + this.get('slug') + '.' + this.get('language');
  // })
// });

// var Song = Ember.Object.extend({
//   title: '',
//   rating: 0,
//   band: ''
// });

var blackDog = Song.create({
  title: 'Black Dog',
  band: 'Led Zeppelin',
  rating: 3
});

var yellowLedbetter = Song.create({
  title: 'Yellow Ledbetter',
  band: 'Pearl Jam',
  rating: 4
});

var daughter = Song.create({
  title: 'Daughter',
  band: 'Pearl Jam',
  rating: 5
});

var pretender = Song.create({
  title: 'The Pretender',
  band: 'Foo Fighters',
  rating: 2
});

var BandsCollection = Ember.Object.extend({
  content: [],
  sortProperties: ['name:desc'],
  sortedContent: Ember.computed.sort('content', 'sortProperties'),
});

var ledZeppelin = Band.create({ name: 'Led Zeppelin', songs: [blackDog] });
var pearlJam = Band.create({ name: 'Pearl Jam', songs: [daughter, yellowLedbetter] });
var fooFighters = Band.create({ name: 'Foo Fighters', songs: [pretender] });

var bands = BandsCollection.create();
bands.get('content').pushObjects([ledZeppelin, pearlJam, fooFighters]);

export default Ember.Route.extend({
  model: function() {
    return bands;
  },
   actions: {
    createBand: function() {
      var name = this.get('controller').get('name');
      var band = Band.create({ name: name });
      bands.get('content').pushObject(band);
      this.get('controller').set('name', '');
    }
  }
});