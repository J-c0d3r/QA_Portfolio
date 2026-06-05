Feature: Testing Method GET using ID in /usuarios Endpoint

  Background:
    * def header = read('classpath:API_Services/support/config/headers.yaml')


  Scenario Outline: Verify if user has been registered correctly || <status_code>
    * def register = call read('classpath:API_Services/serv_serverest/users/POST_RegisterUser.feature@register')
    Given url serverest
    And path '/usuarios/' + register.response._id
    When method GET
    Then status <status_code>    
    And match response contains { email : '#regex .*\\@test\\.com', nome: '#string'}

    Examples:
      | status_code |
      | 200         |


  Scenario: Verify GET user by ID - CASE: user not found
    Given url serverest
    And path '/usuarios/test123@'
    When method GET
    Then status 400 
    And print response
    And match response.id == "id deve ter exatamente 16 caracteres alfanuméricos" 
