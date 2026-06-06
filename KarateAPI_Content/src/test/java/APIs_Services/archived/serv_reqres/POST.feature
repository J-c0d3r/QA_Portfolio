Feature:Testing Post Method

  Background: 
    * url 'https://reqres.in/api'
    * header Accept = 'application/json'
    * def expectedOutput = read("response1.json")
    * def requestBody = read("userdata_request.json")
    * def projectPath = karate.properties['user.dir']    
    * def requestBodyPath = projectPath+'\\src\\test\\java\\reqres_test\\data\\userdataRequest.json'
    * def requestBodyPathJson = read('data/userdataRequest.json')

  Scenario: Post new user - Successful
    Given path '/users'
    And request {"name":"morpheus","job":"leader"}
    When method Post
    Then status 201
    And print response

  Scenario: Post new user with assertion - Successful
    Given path '/users'
    And request {"name":"morpheus","job":"leader"}
    When method Post
    Then status 201
    And print response
    And match response == {"createdAt":"#ignore","name":"morpheus","id":"#string","job":"leader"}
    And match $.name == "morpheus"
    And match $.job == "leader"

  Scenario: Post new user read response from file - Successful
    Given path '/users'
    And request {"name":"morpheus","job":"leader"}
    When method Post
    Then status 201    
    And match response == expectedOutput    
    And match $ == expectedOutput //use $ is the same of to use response, above line

  Scenario: Post new user read request body from file - Successful
    Given path '/users'
    And request requestBody
    When method Post
    Then status 201    
    And print response
    And match response == expectedOutput    
    And match $ == expectedOutput //use $ is the same of to use response, above line

  Scenario: Post new user read request body from file(in another package) - Successful
    Given path '/users'
    And request requestBodyPath
    When method Post
    Then status 201    
    And print response

  Scenario: Post new user read request body from file(in another package setting a new value) - Successful
    Given path '/users'
    And def reqBody = requestBodyPathJson
    And set reqBody.job = 'engineer'    
    And request reqBody
    When method Post
    Then status 201    
    And expectedOutput.job = 'engineer'
    And match response == expectedOutput    
    And match $ == expectedOutput
