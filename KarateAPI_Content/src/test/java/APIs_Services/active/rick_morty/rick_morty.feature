Feature: Testando resources da API Rick and Morty

  Background: Executa antes de cada teste
    * def url_base = 'https://rickandmortyapi.com/api'

  Scenario: Trazendo todos os personagens
    Given url url_base
    And path '/character'
    When method get
    Then status 200
    And print response
    And match $.results == '#[]'


  Scenario: Trazendo os personagens 1, 5, 7 e verificando se o personagem 1 é o Rick Sanchez
    Given url url_base
    And path '/character/1,5,7'
    When method get
    Then status 200
    And print response
    And match $.[0].name == 'Rick Sanchez'


  Scenario: Trazendo apenas uma localização e verificando se o campo id é inteiro, name é string e residents é array
    Given url url_base
    And path '/location/10'
    When method get
    Then status 200
    And print response
    And match $ contains {id: '#number', name: '#string', residents: '#[]'}


  Scenario: Trazendo a data quando o episódio 33 foi ao ar
    Given url url_base
    And path '/episode/33'
    When method get
    Then status 200
    And print response.air_date


  Scenario: Dado que o usuário deseja trazer todos os personagens que estão vivos, um filtro será aplicado
    Given url url_base
    And path '/character/'
    And param status = "Alive"
    When method get
    Then status 200
    And print response
    And match each $.results contains {status: "Alive"}


  Scenario: Tentando trazer filmes mas não tem 
    Given url url_base
    And path '/movies'
    When method get
    Then status 404
    And print response


  Scenario: Dado que o usuário deseja a localização cujo nome é "Citadel of Ricks"(/location/3) porém retorna outra localização, então a verificação é feita.
    Given url url_base
    And path '/location/5'
    When method get
    Then status 200
    And print response
    And match $.name != "Citadel of Ricks"


  Scenario: Dado que o usuário deseja trazer o Morty e passa o nome Morty na URL, então a verificação é feita
    Given url url_base
    And path '/character/Morty'        
    When method get
    Then status 500
    And print response        
