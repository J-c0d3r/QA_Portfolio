Feature: Testando API StarWars

  Scenario: Testando retorno people/1
    Given url 'https://swapi.info/api/people/1/'
    When method get
    Then status 200
    And print response

  Scenario: Testando retorno people/1/ com informações inválidas
    Given url 'https://swapi.info/api/people/1/1234'
    When method get
    Then status 404
    And print response

  Scenario: Testando retorno planets mostrando o nome do planeta Tatooine
    Given url 'https://swapi.info/api/planets'
    When method get
    Then status 200
    And print response
    And print response[0]['name']
        