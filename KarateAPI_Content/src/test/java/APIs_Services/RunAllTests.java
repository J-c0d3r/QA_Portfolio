package APIs_Services;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class RunAllTests {

    @Test
    void runAllTest() {
        Results results = Runner.path("classpath:APIs_Services/active")
                .tags("~@ignore")
                .outputCucumberJson(true)
                .parallel(3);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }

}
