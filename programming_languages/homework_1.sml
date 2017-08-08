fun is_older(early: int*int*int, late:int*int*int) =
  if #1 early < #1 late
  then true
  else if #1 early = #1 late andalso #2 early < #2 late
  then true
  else if #2 early = #2 late andalso #3 early < #3 late
  then true
  else false

fun number_in_month(dates: (int*int*int) list, month: int) =
  if null dates orelse (null (tl dates) andalso (#2 (hd dates)) <> month)
  then 0
  else
      let val tl_dates = number_in_month(tl dates, month)
      in
	  if #2 (hd dates) <> month
	  then 0 + tl_dates
	  else 1 + tl_dates
      end
	  
fun number_in_months(dates: (int*int*int) list, months: int list) =
  if null months
  then 0
  else number_in_month(dates, hd months) + number_in_months(dates, tl months);
  
fun dates_in_month(dates: (int*int*int) list, month: int) =
  if null dates
  then []
  else
      let val tl_dates = dates_in_month(tl dates, month)
      in
	  if number_in_month([hd dates], month) = 1
	  then hd dates :: tl_dates
	  else tl_dates
      end

fun dates_in_months(dates: (int*int*int) list, months: int list) =
  if null months
  then []
  else dates_in_month(dates, hd months) @ dates_in_months(dates, tl months);
		     
  
fun get_nth(text: string list, number: int) =
  if number = 1
  then hd text
  else get_nth(tl text, number - 1);

fun date_to_string(date: int*int*int) =
  let 
    val months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    fun fetch_month(index: int, month_list: string list) =
      if index = 1
      then hd month_list
      else fetch_month(index-1, tl month_list)
  in
      (fetch_month(#2 date, months)) ^ " " ^ Int.toString(#3 date) ^ ", " ^ Int.toString(#1 date)
  end

fun number_before_reaching_sum (sum: int, values: int list) = 
  if hd values >= sum
  then 0
  else 1 + number_before_reaching_sum(sum - hd values, tl values)

fun what_month (day: int) =
  let 
    val months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  in
    1 + number_before_reaching_sum(day, months)
  end