function fn() {

  // Ambiente recebido via: mvn test -Dkarate.env=qa
  var env = karate.env || 'qa';

  var rootPath = 'classpath:APIs_Services';

  karate.log('karate.env system property was:', env);

  // Arquivo central com as URLs dos ambientes
  var urls = karate.read('classpath:APIs_Services/support/config/basesURL.yaml');

  // Configuração base
  var config = {
    env: env,

    paths: {
      root: rootPath,
      support: rootPath + '/support',
      config: rootPath + '/support/config',

      serverest: rootPath + '/active/serv_serverest',
      serverestData: rootPath + '/active/serv_serverest/data',
      serverestYaml: rootPath + '/active/serv_serverest/data/yaml/' + env
    },

    Utils: Java.type('APIs_Services.support.utils.Utils')

  };

  // Carrega dados do ambiente, se existir no YAML
  if (urls[env]) {
    var envConfig = urls[env];

    for (var key in envConfig) {
      karate.log(key);
      config[key] = envConfig[key];
    }

    config.env = env;
  } else {
    karate.log('Environment not found in basicURL.yaml:', env);
  }

  // Headers globais
  karate.configure('headers', {
    'cache-control': 'no-cache',
    'accept': 'application/json'
  });

  // Timeouts globais
  karate.configure('connectTimeout', 15000);
  karate.configure('readTimeout', 15000);

  // Retry global
  karate.configure('retry', {
    count: 3,
    interval: 3000
  });

  return config;
}