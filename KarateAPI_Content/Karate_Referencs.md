# KARATE_REFERENCE.md

# Karate DSL - Personal Reference

Quick notes and reminders for future maintenance and study.

---

# Runner Types

## Karate.run().relativeTo(getClass())

```java
@Karate.Test
Karate runTests() {
    return Karate.run().relativeTo(getClass());
}
```

Purpose:

* Executes all `.feature` files located in the same package as the Runner.
* Also executes features inside subfolders.

Example:

```text
serv_serverest
├── ServerestTestRunner.java
├── users
│   ├── GET_User.feature
│   └── POST_User.feature
└── products
    └── GET_Product.feature
```

All features inside `users` and `products` will be executed.

---

## Karate.run("FeatureName").relativeTo(getClass())

```java
@Karate.Test
Karate runTests() {
    return Karate.run("POST_RegisterUser")
            .relativeTo(getClass());
}
```

Purpose:

* Executes only the specified feature.
* Useful for debugging and development.

---

## Understanding relativeTo(getClass())

```java
Karate.run().relativeTo(getClass());
```

`getClass()` returns the current Runner class.

Example:

```java
class ServerestTestRunner {
}
```

returns:

```text
APIs_Services.active.serv_serverest.ServerestTestRunner
```

The Karate engine uses the location of this class as the starting point for searching features.

Think of it as:

```text
Run features relative to this Runner location.
```

---

## Runner.path()

```java
Results results = Runner.path("classpath:APIs_Services/active")
        .parallel(3);
```

Purpose:

* Executes an entire suite from a classpath location.
* Commonly used in CI/CD pipelines.

Example:

```text
APIs_Services
└── active
    ├── serv_serverest
    ├── serv_swapi
    └── serv_dummyjson
```

Everything under `active` will be executed.

---

# Parallel Execution

Sequential execution:

```java
.parallel(1)
```

Parallel execution:

```java
.parallel(3)
.parallel(5)
.parallel(10)
```

Notes:

* Use when tests are independent.
* Avoid excessive parallelism with public APIs.
* Dependent scenarios may fail due to timing issues.

---

# Environment Configuration

Current approach:

```bash
mvn test -Dkarate.env=qa
```

Examples:

```bash
mvn test -Dkarate.env=dev
mvn test -Dkarate.env=qa
mvn test -Dkarate.env=uat
```

Read inside:

```javascript
var env = karate.env;
```

Default:

```javascript
var env = karate.env || 'qa';
```

---

# YAML Configuration Files

Example:

```yaml
qa:
  reqres: https://reqres.in/api
  serverest: https://serverest.dev
```

Purpose:

* Centralize URLs.
* Avoid hardcoded URLs.
* Simplify maintenance.

Usage:

```gherkin
Given url serverest + '/usuarios'
```

instead of:

```gherkin
Given url 'https://serverest.dev/usuarios'
```

---

# Path Centralization

Centralize paths inside:

```javascript
karate-config.js
```

Example:

```javascript
paths: {
  config: rootPath + '/support/config',
  serverestYaml: rootPath + '/active/serv_serverest/data/yaml/' + env
}
```

Usage:

```gherkin
* def header = read(paths.config + '/headers.yaml')
* def yaml = read(paths.serverestYaml + '/login.yaml')
```

Benefits:

* Folder renames require changes in only one place.
* Easier maintenance.

---

# Java Utility Classes

Java classes can be exposed globally through:

```javascript
Utils: Java.type('APIs_Services.support.utils.Utils')
```

Usage:

```gherkin
* def email = Utils.GenerateEmail()
```

Notes:

* `Java.type()` expects a Java package name.
* It does NOT use classpath paths.

Correct:

```javascript
Java.type('APIs_Services.support.utils.Utils')
```

Wrong:

```javascript
Java.type('classpath:APIs_Services/support/utils.Utils')
```

---

# Retry Configuration

Example:

```javascript
karate.configure('retry', {
  count: 3,
  interval: 3000
});
```

Meaning:

* Retry up to 3 times.
* Wait 3 seconds between attempts.

Useful for:

* Temporary API instability.
* Intermittent network issues.

---

# Timeouts

Example:

```javascript
karate.configure('connectTimeout', 15000);
karate.configure('readTimeout', 15000);
```

Purpose:

* Prevent failures caused by slow APIs.
* Useful for public APIs and CI environments.

---

# JUnit 4 Legacy Note

Old projects used:

```java
@BeforeClass
public static void before() {
    System.setProperty("karate.env", "qa");
}
```

Purpose:

* Define the execution environment before tests.

Current approach:

```bash
mvn test -Dkarate.env=qa
```

Environment handling is now centralized in:

```text
karate-config.js
```

---

# Cucumber JSON Reports

Enable:

```java
.outputCucumberJson(true)
```

Purpose:

* Generate Cucumber JSON reports.

Useful for:

* Jenkins
* Allure
* ReportPortal
* External reporting tools

Not required for basic local execution or simple GitHub Actions workflows.

---

# Active vs Archived Tests

Suggested structure:

```text
APIs_Services
├── active
│   ├── serv_serverest
│   ├── serv_swapi
│   └── serv_dummyjson
│
└── archived
    └── serv_reqres
```

Runner:

```java
Runner.path("classpath:APIs_Services/active")
```

Benefits:

* CI executes only active suites.
* Archived studies remain available.
* No need to add @ignore tags everywhere.

---

# JavaScript Reminder

Inside `karate-config.js`:

```javascript
var config = {};
```

creates a JavaScript object.

Properties can be added dynamically:

```javascript
config.baseUrl = "https://serverest.dev";
```

This ADDS a property.

---

```javascript
config = anotherObject;
```

This REPLACES the entire object.

Important distinction when maintaining Karate configurations.
