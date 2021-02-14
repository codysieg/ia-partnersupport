function getLocale() {
    var lang =  window.location.href.split('/hc/')[1].split('/')[0];
    if(lang.indexOf('?') >= 0){
      lang = lang.split('?');
      return lang[0];
    }else{
      return lang;
    }
  }

  var lang = getLocale();