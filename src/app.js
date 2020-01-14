import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      countryURL: null,
      countries: [],
      seen: false
    },
    mounted() {
      this.fetchCountries();
    },
    methods: {
      fetchCountries: function (){
        fetch('https://restcountries.eu/rest/v2/all')
          .then(response => response.json())
          .then(data => this.countries = data)
      }
    }
  })
});
