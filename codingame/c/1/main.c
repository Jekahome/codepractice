#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <stdbool.h>

int main()
{

    // game loop
    while (1) {
        // name of enemy 1
        char enemy_1[257];
        scanf("%s", enemy_1);
        // distance to enemy 1
        int dist_1;
        scanf("%d", &dist_1);
        // name of enemy 2
        char enemy_2[257];
        scanf("%s", enemy_2);
        // distance to enemy 2
        int dist_2;
        scanf("%d", &dist_2);

        // Write an action using printf(). DON'T FORGET THE TRAILING \n
        // To debug: fprintf(stderr, "Debug messages...\n");

        if (dist_1 < dist_2) {
            printf("%s\n",enemy_1);
            fprintf(stderr, "Debug %s\n",enemy_1);
        }else{
            printf("%s\n",enemy_2);
            fprintf(stderr, "Debug %s\n", enemy_2);
        }
        // You have to output a correct ship name to shoot ("Buzz", enemy1, enemy2, ...)
        //printf("name of the enemy\n");
    }

    return 0;
}