use wasm_bindgen::prelude::*;

// Expose the function to JavaScript
#[wasm_bindgen]
pub fn get_rlyeh_location() -> String {
    "The nightmare corpse-city of R'lyeh  47°9'S 126°43'W".to_string()
}

