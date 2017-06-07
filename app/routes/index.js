import Ember from 'ember';

var contents= [{
  id: 1,
  headlines: "Uhuru Lauches Delivery.go.ke",
  author: "Victor Allen",
  image: "http://presidential-power.com/wp-content/uploads/2017/01/Kenya-Uhuru-Kenyatta.jpg"
}, {
  id: 2,
  headlines: "Real Madrid Wins",
  author: "CR7",
  image: "https://img.rt.com/files/2016.05/original/574a17e8c46188e7558b45d0.jpg"
}, {
  id: 3,
  headlines: "Latest Start Ups",
  author: "Tony",
  image: "http://www.thecareermuse.co.in/wp-content/uploads/2016/09/Startups.jpg"
}];

export default Ember.Route.extend({
  model() {
    return contents;
  },
});
