fun is_older(early: int*int*int, late:int*int*int) =
  if #1 early < #1 late
  then true
  else if #1 early = #1 late andalso #2 early < #2 late
  then true
  else if #2 early = #2 late andalso #3 early < #3 late
  then true
  else false

fun number_in_month(dates: (int * int * int) list, month: int) =
  if null dates
  then 0
  else if #2 (hd dates) = month
  then 1 + number_in_month(tl dates, month);
