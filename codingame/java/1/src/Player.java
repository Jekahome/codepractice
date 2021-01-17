import java.util.*;
import java.io.*;
import java.math.*;

class Player {

    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        // game loop
        while (true) {
            String enemy1 = in.next(); // name of enemy 1
            int dist1 = in.nextInt(); // distance to enemy 1
            String enemy2 = in.next(); // name of enemy 2
            int dist2 = in.nextInt(); // distance to enemy 2

            if (dist1 < dist2){
                System.err.println("Debug "+enemy1);
                System.out.println(enemy1);
            }else{
                System.err.println("Debug "+enemy2);
                System.out.println(enemy2);
            }

        }
    }
}