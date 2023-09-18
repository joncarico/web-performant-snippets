console.log('effectiveType: ' + navigator.connection.effectiveType);
if (navigator.connection.effectiveType == "slow-2g" || navigator.connection.effectiveType == "2g") {
  console.log('skipping js libraries for detectable 2g (or slower) connections');
}
else {
  console.log('loading js libraries for all connections except detectable 2g (or slower)');
  function getScript(url) {
      e = document.createElement('script');
      e.setAttribute('defer', '');
      e.src = url;
      document.body.appendChild(e);
  }
  getScript('https://code.jquery.com/ui/1.13.2/jquery-ui.min.js');
  getScript('https://code.jquery.com/jquery-3.7.1.min.js');
}