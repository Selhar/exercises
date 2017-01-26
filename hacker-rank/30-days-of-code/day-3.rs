fn read_int() -> i32{
    let reader = std::io::stdin();
    let mut input_text = String::new();

    reader.read_line(&mut input_text).ok().expect("failed to read line");

    let input_opt: Option<i32> = input_text.trim().parse::<i32>().ok();

    let input_int = match input_opt {
        Some(input_int) => input_int,
        None            => {
            println!("please input a number");
            return -1;
        }
    };

    input_int
}

fn main (){
    let input = read_int();

    if input % 2 == 1 || input % 2 == 0 && input >= 6 && input <= 20 {
        println!("Weird");
    } else {
        println!("Not weird")
    }

}
