Feature: Testing Method POST in /login Endpoint

  Background:
    * def header = read(paths.config + '/headers.yaml')
    * def yaml = read(paths.serverestYaml + '/login.yaml')


    @login
  Scenario Outline: Verify POST on /login CASE: Successful || <status_code>
    * def register = call read(paths.serverest + '/users/POST_RegisterUser.feature@register')
    * def email = <email>
    * def password = <password>
    * def body = read(paths.serverestData + '/payload/' + env + '/login.json')
    Given url serverest
    And path '/login'
    And headers header.headers_presentation
    And request body          
    When method POST
    Then status <status_code>       
    * match $.<subgroupJson> == <message>

    Examples:
      | status_code | email          | password          | type_password | subgroupJson | message                            |
      | 200         | register.email | register.password | normal        | message      | 'Login realizado com sucesso'      |

    
    Scenario Outline: Verify POST on /login CASE: password tests - type: <type_password> || <status_code>
      * def register = call read(paths.serverest + '/users/POST_RegisterUser.feature@register')
      * def email = <email>
      * def password = <password>
      * def body = read(paths.serverestData + '/payload/' + env + '/login.json')
      Given url serverest
      And path '/login'
      And headers header.headers_presentation
      And request body          
      When method POST
      Then status <status_code>       
      * match $.<subgroupJson> == <message>
  
      Examples:
        | status_code | email          | password                        | type_password | subgroupJson | message                            |
        | 400         | register.email | yaml.password.password_null     | null          | password     | 'password não pode ficar em branco'|
        | 401         | register.email | yaml.password.password_invalid  | invalid       | message      | 'Email e/ou senha inválidos'       |


    Scenario Outline: Verify POST on /login CASE: invalid emails - email: <email> || <status_code>
      * def register = call read(paths.serverest + '/users/POST_RegisterUser.feature@register')
      * def email = <email>
      * def password = register.password
      * def body = read(paths.serverestData + '/payload/' + env + '/login.json')
      Given url serverest
      And path '/login'
      And headers header.headers_presentation
      And request body          
      When method POST
      Then status <status_code>       
      * match $.email == <message>      
  
      Examples:
        | status_code | email              | type_email | message                          |
        | 400         | ""                 | invalid    | 'email não pode ficar em branco' |
        | 400         | "test"             | invalid    | 'email deve ser um email válido' |
        | 400         | "test@"            | invalid    | 'email deve ser um email válido' |
        | 400         | "@"                | invalid    | 'email deve ser um email válido' |
        | 400         | "@.com"            | invalid    | 'email deve ser um email válido' |
        | 400         | "@test.com.br"     | invalid    | 'email deve ser um email válido' |
        | 400         | "test@test01....." | invalid    | 'email deve ser um email válido' |      
        | 400         | "test@test01"      | invalid    | 'email deve ser um email válido' |
