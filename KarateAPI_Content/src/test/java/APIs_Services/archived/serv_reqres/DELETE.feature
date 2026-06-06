Feature: Testing Delete Method

  Background:
    * url 'https://reqres.in/api'
    * header Accept = 'application/json'

  Scenario: Deleting a user
    Given path '/users/2'
    When method DELETE
    Then status 204
    And print response
    And print responseStatus
    And match responseStatus == 204
