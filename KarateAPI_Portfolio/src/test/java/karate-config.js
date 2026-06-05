function fn() {
  var env = karate.env; // get system property 'karate.env'

  // var
  karate.configure('ssl', true)
  var headers = { "cache-control": "no-cache" }
  var config = { env: env }
  if (!env) { env = 'qa'; } //choose your enviroment


  //config
  /* if (env == 'dev') {
    // customize
    // e.g. config.foo = 'bar';
  } else if (env == 'e2e') {
    // customize
  } */

  switch (env) {
    case 'uat':
      config = karate.read('classpath:API_Services/support/config/basicURL.yaml')['uat'] //UAT User Acceptance Testing
      break;
    case 'qa':
      config = karate.read('classpath:API_Services/support/config/basicURL.yaml')['qa']
      break;
    case 'des':
      config = karate.read('classpath:API_Services/support/config/basicURL.yaml')['dev']
      break;
    default:
  }


  //Config max time to each requesting - Performance Test
  karate.configure('connectTimeout', 15000);
  karate.configure('readTimeout', 15000)

  //
  karate.log('karate.env system property was:', env);
  karate.configure('headers', headers);
  karate.configure('retry', { count: 10, interval: 5000 })
  //

  return config;
}
