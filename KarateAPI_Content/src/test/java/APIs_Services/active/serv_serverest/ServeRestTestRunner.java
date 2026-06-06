package APIs_Services.active.serv_serverest;

import com.intuit.karate.junit5.Karate;

class ServeRestTestRunner {

    @Karate.Test
    Karate runServrestTest() {
        return Karate.run().relativeTo(getClass());
    }

}
