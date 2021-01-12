import Ember from 'ember';

export default Ember.Controller.extend({
  items: [
    {
      src: 'https://picsum.photos/1024/768?image=42',
      w: 1024,
      h: 768,
    },
    {
      src: 'https://picsum.photos/768/1024?image=80',
      w: 768,
      h: 1024,
    },
    {
      src: 'https://picsum.photos/768/768?image=108',
      w: 768,
      h: 768,
    },
  ]
});