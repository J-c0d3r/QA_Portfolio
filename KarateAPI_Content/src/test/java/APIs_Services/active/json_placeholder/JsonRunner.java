package APIs_Services.active.json_placeholder;

import com.intuit.karate.junit5.Karate;

class JsonRunner {

    @Karate.Test
    Karate json_placeholder() {
        return Karate.run("json_placeholder").relativeTo(getClass());
    }

}
