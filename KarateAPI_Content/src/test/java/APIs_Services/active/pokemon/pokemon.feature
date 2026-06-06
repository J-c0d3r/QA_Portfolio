Feature: Testando API Pokemon

  Background: Executa antes de cada teste
    * def url_base = 'https://pokeapi.co/api/v2/'


    #### GET ####
  Scenario: Testando retorno 
    Given url 'https://pokeapi.co/api/v2/pokemon/pikachu'
    When method get
    Then status 200
    And print response

  Scenario: Trazendo todos os pokemons
    Given url url_base
    When method get
    Then status 200
    And print response

  Scenario: Dado que trouxe todos os pokemons, verificou se o sexto pokemon é o charizard, e o acessou, então traga suas habilidades
    Given url url_base
    And path 'pokemon'                
    When method get
    Then status 200
    And print response
    And match $.results[5] contains {name: "charizard"}

    Given path 'pokemon/6'                
    When method get
    Then status 200
    And print response["abilities"]

  Scenario: Testando retorno "pikachu/chocolate" com informações inválidas
    Given url 'https://pokeapi.co/api/v2/pokemon/pikachu/chocolate'
    When method get
    Then status 400
    And print response

  Scenario: Testando retorno pikachu e verificando o JSON
    Given url url_base
    And path '/pokemon/pikachu'
    When method get
    Then status 200
    And print response
    And match response.name == 'pikachu'
    And match response.id == 25

  Scenario: Testando retorno pokemon red entrando em um dos elementos do array de idiomas e testando retorno JSON
    Given url url_base
    And path '/version/1/'
    When method get
    Then status 200
    And print response
    And def idioma = $.names[5].language.url
    And print idioma
    And url idioma
    When method get
    Then status 200
    Then match response.name == 'es'
    And match response.id == 7

  Scenario: Tentativa de passar um path diferente do permitido
    Given url url_base
    And path 'Pokemon/Teste'                        
    When method get
    Then status 400
    And print response

  Scenario: Trazendo os 500 primeiros pokemons
    Given url url_base
    And path 'pokemon'     
    And param limit = "500"
    When method get
    Then status 200
    And print response
    And match $.results == '#[500]'

  Scenario: Verificando os tipos de campos no pokemon squirtle
    Given url url_base
    And path 'pokemon/squirtle'        
    When method get
    Then status 200
    And print response
    And match $ contains {abilities: '#[]', base_experience: '#number', forms: '#[]', game_indices: '#[]', height: '#number', is_default: '#boolean', location_area_encounters: '#string'}


    #### POST ####
  Scenario: Tentativa de fazer POST 
    Given url url_base
    And path 'pokemon'        
    And request {name: 'PokemonTeste'}
    When method post
    Then status 404
    And print response
    