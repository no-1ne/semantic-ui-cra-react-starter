import React, { Component } from 'react'
import axios from 'axios';

export default class Home extends Component {
  componentDidMount(){
//axios.defaults.headers.common['Content-Type'] = 'application/json';
//axios.defaults.headers.common['x-api-key'] = '3ML7IIYKv3JQ65iOAr2JsjITHlozWQkCrMgqrT73';
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


/* axios.all([
        axios.get('https://mercury.postlight.com/parser?url=http://howtonode.org/really-simple-file-uploads'),
      ]).then((function (data) {
        console.log(data);
      }));*/
//let URL = 'https://mercury.postlight.com/parser?url=http://howtonode.org/really-simple-file-uploads';
/*let extractUrl= 'http://howtonode.org/really-simple-file-uploads'; 
axios.get('https://wt-710d67378ddb5f530cf27e5ef70c8d02-0.run.webtask.io/url_extractor?url='+extractUrl+'&post_id=58' )
  .then(function(response){
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  });  */
/*var instance = axios.create({
  baseURL: URL,
  headers: { 'Content-Type': 'application/json',
             'x-api-key':'3ML7IIYKv3JQ65iOAr2JsjITHlozWQkCrMgqrT73',
             'Access-Control-Allow-Origin':'https://mercury.postlight.com'
}
});
instance.get().then(response => {
console.log(response.data);
})
.catch((error) => {
console.log(error);
});*/
/*axios.post(URL, { 'headers': { 'Content-Type': 'application/json',
                              'x-api-key':'3ML7IIYKv3JQ65iOAr2JsjITHlozWQkCrMgqrT73',
                              'Access-Control-Allow-Origin':'*'
} })
.then(response => {
console.log(response.data);
})
.catch((error) => {
console.log(error);
});*/
   /* axios.get('https://mercury.postlight.com/parser/?url=http://howtonode.org/really-simple-file-uploads')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });*/
    
    /*axios.get('https://mercury.postlight.com/parser?url=http://howtonode.org/really-simple-file-uploads', {
    
      headers: {'Content-Type': 'application/json',
        'x-api-key': '3ML7IIYKv3JQ65iOAr2JsjITHlozWQkCrMgqrT73',
        "Access-Control-Allow-Origin": "*"
      }
  })
  .then(function (response) {
    debugger;
    console.log(response);
  })
  .catch(function (error) {
    debugger;
    console.log(error);
  });*/
  }
  render () {
    return (
      <div>
        Home. Not Protected. Anyone can see this.
      </div>
    )
  }
}