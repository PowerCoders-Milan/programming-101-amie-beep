//Insert level 9 code below
moveForward();
turnLeft();
while (notDone()) {
  if (isPathForward()) {
    moveForward();
  } else {
    if (isPathLeft()) {
      turnLeft();
    }
  }
}