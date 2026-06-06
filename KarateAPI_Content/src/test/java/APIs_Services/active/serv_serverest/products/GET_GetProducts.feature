Feature: Testing Method GET in /produtos Endpoint

  Background:
    * def header = read(paths.config + '/headers.yaml')


  Scenario: Verify GET products - CASE: successful || 200
    Given url serverest
    And path '/produtos'
    When method GET
    Then status 200 
    And match response != {} 
