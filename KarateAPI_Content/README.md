# Karate API Automation Portfolio

API test automation portfolio using Karate DSL, JUnit 5 and Maven.

---

## 🚀 Main Technologies

* Karate DSL
* JUnit 5
* Maven
* Java
* GitHub Actions

---

## 📋 Prerequisites

Required software:

* Java JDK 11 or 17 — Runtime used to execute Karate tests.
* Maven — Dependency management and test execution.
* VS Code (optional) — Recommended IDE.

Verify the installations:

```bash
java -version
```

```bash
mvn -v
```

### Recommended VS Code Extensions

* Karate
* Karate Runner

---

## ▶️ Running the Project

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
mvn clean install
```

Run all tests:

```bash
mvn test
```

Run tests using a specific environment:

```bash
mvn test -Dkarate.env=qa
```

Run a specific runner:

```bash
mvn test -Dtest=ServerestTestRunner
```

---

## 🛠️ Useful Maven Commands

Install dependencies:

```bash
mvn clean install
```

Compile and execute tests:

```bash
mvn test
```

Execute a specific runner:

```bash
mvn test -Dtest=RunAllTests
```

Execute tests by tag:

```bash
mvn test -Dkarate.options="--tags @smoke"
```

Ignore a tag:

```bash
mvn test -Dkarate.options="--tags ~@ignore"
```

---

## 🏗️ Creating a New Karate Project

Generate a new Karate project:

```bash
mvn archetype:generate \
-DarchetypeGroupId=com.intuit.karate \
-DarchetypeArtifactId=karate-archetype \
-DarchetypeVersion=1.4.0 \
-DgroupId=com.example \
-DartifactId=karate-project
```

Enter the project folder:

```bash
cd karate-project
```

Install dependencies:

```bash
mvn clean install
```

Execute tests:

```bash
mvn test
```

---

## 📊 Reports

Karate automatically generates execution reports after test execution.

Report location:

```text
target/karate-reports/
```

The reports contain:

* Executed scenarios
* Request and response details
* Execution times
* Failure information

---

## 📝 Quick Reference

```text
.feature           -> Test scenarios
karate-config.js   -> Global configuration
RunAllTests.java   -> Test suite runner
pom.xml            -> Dependencies and build configuration
```
