Feature: Testing Method POST in /usuarios Endpoint

  Background:
    * def header = read(paths.config + '/headers.yaml')
    * def yaml = read(paths.serverestYaml + '/login.yaml')


    @register
  Scenario Outline: Verify POST on /usuarios CASE: Successful || <status_code>
    * def email = Utils.GenerateEmail()
    * def password = Utils.RandomNumEight()
    * def name = Utils.GenerateRandomName()
    * def adm = Utils.GenerateBoolean().toString()
    * def body = read(paths.serverestData + '/payload/' + env + '/register.json')
    Given url serverest
    And path '/usuarios'
    And headers header.headers_presentation
    And request body
    When method POST
    Then status <status_code>
    And match response contains { _id: "#string", "message": "Cadastro realizado com sucesso"}

    Examples:
      | status_code |
      | 201         |      


  Scenario: Verify POST on /usuarios CASE: Duplicated Email || 400
    * def registeredUser = call read(paths.serverest + '/users/POST_RegisterUser.feature@register')
    * def email = registeredUser.email
    * def password = registeredUser.password
    * def name = registeredUser.name
    * def adm = registeredUser.adm
    * def body = read(paths.serverestData + '/payload/' + env + '/register.json')
    Given url serverest
    And path '/usuarios'
    And headers header.headers_presentation
    And request body
    When method POST
    Then status 400    
    And match $.message == "Este email já está sendo usado"


  Scenario Outline: Verify POST on /usuarios CASE: <test_case> || <status_code>
    * def email = <email>
    * def password = <password>
    * def name = <name>
    * def adm = <adm>
    * def body = read(paths.serverestData + '/payload/' + env + '/register.json')
    Given url serverest
    And path '/usuarios'
    And headers header.headers_presentation
    And request body
    When method POST
    Then status <status_code>
    And match response != {}
    * print response

    Examples:
      | status_code | test_case     | email                 | password               | name                       | adm                                |
      | 201         | successful    | Utils.GenerateEmail() | Utils.RandomNumEight() | Utils.GenerateRandomName() | Utils.GenerateBoolean().toString() |
      | 400         | null email    | ""                    | Utils.RandomNumEight() | Utils.GenerateRandomName() | Utils.GenerateBoolean().toString() |
      | 400         | null password | Utils.GenerateEmail() | ""                     | Utils.GenerateRandomName() | Utils.GenerateBoolean().toString() |
      | 400         | null name     | Utils.GenerateEmail() | Utils.RandomNumEight() | ""                         | Utils.GenerateBoolean().toString() |
      | 400         | null adm      | Utils.GenerateEmail() | Utils.RandomNumEight() | Utils.GenerateRandomName() | ""                                 |
      | 400         | invalid email | "testestestsetse"     | Utils.RandomNumEight() | Utils.GenerateRandomName() | Utils.GenerateBoolean().toString() |


    Scenario: Verify POST on /usuarios CASE: invalid json resquest post || 400
    Given url serverest
    And path '/usuarios'
    And headers header.headers_presentation    
    And request {"test":"testNumber01"}    
    When method POST    
    Then status 400    
    And match response.test == "test não é permitido"
