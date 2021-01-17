# game loop
while true; do
    # enemy1: name of enemy 1
    read -r enemy1
    # dist1: distance to enemy 1
    read -r dist1
    # enemy2: name of enemy 2
    read -r enemy2
    # dist2: distance to enemy 2
    read -r dist2

    # Write an action using echo
    # To debug: echo "Debug messages..." >&2

    if (( "$dist1" < "$dist2" )); then
        echo $enemy1
        echo "Debug $enemy2" >&2
    else
         echo $enemy2
        echo "Debug $enemy1" >&2
    fi

    # You have to output a correct ship name to shoot ("Buzz", enemy1, enemy2, ...)
    # echo "name of the enemy"
done