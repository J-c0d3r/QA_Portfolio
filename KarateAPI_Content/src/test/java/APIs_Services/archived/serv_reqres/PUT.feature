Feature: Testing PUT Method

  Background:
    * url 'https://reqres.in/api'
    * header Accept = 'application/json'
    
  Scenario: PUT - Update job user
    Given path '/users/2'
    And request {"name":"morpheus","job":"zion resident"}
    When method PUT
    Then status 200
    And print response
    And match $.job == 'zion resident'
    