Feature: Testing GET Method

  Background:
    * url 'https://reqres.in/api'
    * header Accept = 'application/json'

  Scenario: Test a Sample Get API
    Given url 'https://reqres.in/api/users?page=2'
    When method GET
    Then status 200

  Scenario: Verify if several responses exists when execute method GET
    Given url 'https://reqres.in/api/users?page=2'
    When method GET
    Then status 200
    And print response
    And print responseStatus
    And print responseTime
    And print responseHeaders
    And print responseCookies

  Scenario: Request using Background
    Given path '/users?page=2'
    When method GET
    Then status 200
    And print response

  Scenario: Request using path and params
    Given path '/users'
    And param page = 2
    When method GET
    Then status 200
    And print response

  Scenario: Request using assertion
    Given path '/users'
    And param page = 2
    When method GET
    Then status 200
    And print response
    And match response.data[0].first_name != null
    And assert response.data.length == 6
    And match $.data[3].id == 10 //use $ is the same as to use response
    And match $.data[4].last_name == "Edwards"
    