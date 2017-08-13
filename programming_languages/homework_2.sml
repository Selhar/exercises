fun same_string(s1 : string, s2 : string) =
	s1 = s2

fun all_except_option input = 
	case input of
			(string, []) => []
		| (string, head::body) => 
				if same_string(string, head)
				then all_except_option(string, body)
				else head :: all_except_option(string, body)

