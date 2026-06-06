package APIs_Services.active.rick_morty;

import com.intuit.karate.junit5.Karate;

class Rick_MortyRunner {

    @Karate.Test
    Karate rickMorty() {
        return Karate.run("rick_morty").relativeTo(getClass());
    }

}
