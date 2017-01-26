fn read_float() -> f32{
    let reader = std::io::stdin();
    let mut input_text = String::new();

    reader.read_line(&mut input_text).ok().expect("failed to read line");

    let input_opt: Option<f32> = input_text.trim().parse::<f32>().ok();

    let input_float = match input_opt {
        Some(input_float) => input_float,
        None            => {
            println!("please input a number");
            return -1.0;
        }
    };

    input_float
}

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

fn main(){
    let meal_cost: f32 = read_float();
    let tip = read_int();
    let tax = read_int();

    let tip = meal_cost * (tip as f32 / 100 as f32);
    let tax = meal_cost * (tax as f32 / 100 as f32);

    let result = (meal_cost + tip + tax).round();

    println!("The total meal cost is {} dollars.", result);
}
