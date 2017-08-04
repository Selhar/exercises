val a = 10

fun pow(x : int, y : int) =
  if y = 0
  then a
  else x * pow(x, y-1)

val b = pow(1, 2)
