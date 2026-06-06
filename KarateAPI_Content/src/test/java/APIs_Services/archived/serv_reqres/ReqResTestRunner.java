package APIs_Services.archived.serv_reqres;

import com.intuit.karate.junit5.Karate;
/* import org.junit.BeforeClass; */ //Dep

class ReqResTestRunner {

    /*
     * @BeforeClass
     * public static void before() {
     * System.setProperty("karate.env", "qa");
     * }
     */
    // Legacy note:
    // JUnit 4 used @BeforeClass to set karate.env.
    // Current project uses JUnit 5 and environment is passed via:
    // mvn test -Dkarate.env=qa
    // then loaded by karate-config.js.

    @Karate.Test
    Karate runRRTest() {
        return Karate.run().relativeTo(getClass());
    }

}
