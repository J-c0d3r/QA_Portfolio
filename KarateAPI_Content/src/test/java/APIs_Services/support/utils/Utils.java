package APIs_Services.support.utils;

import java.security.SecureRandom;
import java.util.Random;

import org.apache.commons.lang3.RandomStringUtils;

public class Utils {

    public static String GenerateRandomName() {

        String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        SecureRandom RANDOM = new SecureRandom();

        StringBuilder name = new StringBuilder(10);
        for (int i = 0; i < 10; i++) {
            name.append(CHARACTERS.charAt(RANDOM.nextInt(CHARACTERS.length())));
        }

        return name.toString();
    }

    public static String GenerateEmail() {
        String email = RandomStringEight() + "@test.com";
        return email;
    }

    public static boolean GenerateBoolean() {
        Random RANDOM = new Random();
        return RANDOM.nextBoolean();
    }

    //// Random String
    public static String RandomStringOne() {
        String word = RandomStringUtils.randomAlphabetic(1);
        return word;
    }

    public static String RandomStringTwo() {
        String word = RandomStringUtils.randomAlphabetic(2);
        return word;
    }

    public static String RandomStringFour() {
        String word = RandomStringUtils.randomAlphabetic(4);
        return word;
    }

    public static String RandomStringEight() {
        String word = RandomStringUtils.randomAlphabetic(8);
        return word;
    }

    //// Random Number
    public static String RandomNumOne() {
        String num = RandomStringUtils.randomNumeric(1);
        return num;
    }

    public static String RandomNumTwo() {
        String num = RandomStringUtils.randomNumeric(2);
        return num;
    }

    public static String RandomNumFour() {
        String num = RandomStringUtils.randomNumeric(4);
        return num;
    }

    public static String RandomNumEight() {
        String num = RandomStringUtils.randomNumeric(8);
        return num;
    }

}
