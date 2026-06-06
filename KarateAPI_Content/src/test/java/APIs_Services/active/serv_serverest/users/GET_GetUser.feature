Feature: Testing Method GET in /usuarios Endpoint

  Background:
    * def header = read(paths.config + '/headers.yaml')


  Scenario: Verify GET user - CASE: successful || 200
    Given url serverest
    And path '/usuarios'
    When method GET
    Then status 200 
    And match response != {} 
