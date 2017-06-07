import Ember from 'ember';

var contents= [{
  id: 1,
  headlines: "Uhuru Lauches Delivery.go.ke",
  author: "Victor Allen",
  image: "http://www.kenyadigest.com/wp-content/uploads/2015/07/index5.jpg"
}, {
  id: 2,
  headlines: "Real Madrid Wins",
  author: "CR7",
  image: "http://stella9ja.com/wp-content/uploads/2016/05/CjkyBKzXAAEDr5m.jpgsmall.jpg"
}, {
  id: 3,
  headlines: "Latest Start Ups",
  author: "Tony",
  image: "http://www.transfirst.com/images/uploads/business-incubators-the-secret-weapon-for-startups-and-small-businesses.jpg"
}];

export default Ember.Route.extend({
  model() {
    return contents;
  },
});
