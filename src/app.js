import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      countryURL: null,
      countries: [],
      flagURL: null,
      seen: false,
      selectedCountry: null
    },
    mounted() {
      this.fetchCountries();
    },
    methods: {
      fetchCountries: function (){
        fetch('https://restcountries.eu/rest/v2/all')
          .then(response => response.json())
          .then(data => this.countries = data)
      },
      fetchFlag: function(){
        fetch('https://restcountries.eu/rest/v2/all')
          .then(response => response.json())
          .then(data => this.flagURL = data.flag)
      },

    }
  })
});
