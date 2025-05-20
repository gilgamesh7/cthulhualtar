use wasm_bindgen::prelude::*;
use chrono::{Utc, Duration, TimeZone};

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[wasm_bindgen]
pub fn get_rlyeh_location() -> String {
    "The nightmare corpse-city of R'lyeh  47°9'S 126°43'W".to_string()
}

#[wasm_bindgen]
pub fn calculate_time_to_awaken() -> String {
    // let great_awakening_time = Utc
    // .with_ymd_and_hms(2025, 3, 25, 6, 6, 6)
    // .unwrap();
    let great_awakening_time = Utc
    .with_ymd_and_hms(2025, 7, 25, 6, 6, 6)
    .unwrap();

    let now = Utc::now();

    if now > great_awakening_time {
        return "The Great Awakening has already happened. If not, reset time of Great Awakening, O Great High Priest Castro !".to_string()
    }

    let remaining = great_awakening_time - now;
    let remaining_days = remaining.num_days();
    let remaining_hours = (remaining - Duration::days(remaining_days)).num_hours();
    let remaining_minutes = (remaining - Duration::days(remaining_days) - Duration::hours(remaining_hours)).num_minutes();
    let remaining_seconds = (remaining - Duration::days(remaining_days) - Duration::hours(remaining_hours) - Duration::minutes(remaining_minutes)).num_seconds();

    format!("Time to Great Cthulhu's Awakening on {} : {} days, {} hours, {} minutes, {} seconds",
                great_awakening_time,
                remaining_days, 
                remaining_hours, 
                remaining_minutes, 
                remaining_seconds)

}

