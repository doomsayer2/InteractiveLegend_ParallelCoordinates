import 'bootstrap/dist/css/bootstrap.css';
import Swal from 'sweetalert2';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App';
import * as serviceWorker from './serviceWorker';

// Check screen size to be appropriate
if ( navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i) || (window.outerWidth < 1024 && window.outerHeight < 768)) {
    Swal.fire({
      title: 'Warning!',
      html:
        'In order to be valid for this test you should really use a screen which has at least a resolution of <b>1024 x 768</b>. Otherwise the results will not be appropriate and can not be used in the study. Thank you!',
      type: 'error',
      confirmButtonColor: '#C51B7D',
      confirmButtonText: 'Understood'
    });
} else {
  ReactDOM.render(<App/>, document.getElementById('root'));
}


serviceWorker.unregister();