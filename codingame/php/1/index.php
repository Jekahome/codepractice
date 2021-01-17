<?php
// game loop
while (TRUE)
{
    // $enemy1: name of enemy 1
    fscanf(STDIN, "%s", $enemy1);
    // $dist1: distance to enemy 1
    fscanf(STDIN, "%d", $dist1);
    // $enemy2: name of enemy 2
    fscanf(STDIN, "%s", $enemy2);
    // $dist2: distance to enemy 2
    fscanf(STDIN, "%d", $dist2);

    // Write an action using echo(). DON'T FORGET THE TRAILING \n
    // To debug: error_log(var_export($var, true)); (equivalent to var_dump)

    if ($dist1 < $dist2) {
        echo("$enemy1\n");
        error_log(var_export($enemy1, true));
    }else{
        echo("$enemy2\n");
        error_log(var_export($enemy2, true));
    }
    // You have to output a correct ship name to shoot ("Buzz", enemy1, enemy2, ...)

}
?>