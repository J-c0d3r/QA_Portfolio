package API_Services;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
/* import com.intuit.karate.junit5.Karate; */
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class RunAllTests {

    @Test
    void runAllTest() {
        /* return Karate.run().relativeTo(getClass()); */
        Results results = Runner.path("classpath:API_Services/serv_serverest")
                .tags("~@ignore")
                // .outputCucumberJson(true)
                .parallel(3);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }
}
