Feature: Learning about karate-config.js

  Background: 
    * url baseUrl
    * header Accept = 'application/json'

  Scenario: Printing Global Var
    Given print myGlobalVarName

  Scenario: Method GET using ConfigFile resource
    Given path '/users?page=2'
    When method GET
    Then status 200
    And print response
