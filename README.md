# cthulhualtar
A virtual altar for the Great God Cthulhu !

# Installation
## Development
### React frontend
- npm install -g yarn
- yarn create react-app cthulhualtar
- After the Rust WASM pkg is created, integrate into React using
  - cd cthulhualtar
  - yarn add file:../rust_wasm_functions/pkg
### Rust WASM
- Install Rust : curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
- Install wasm-pack : cargo install wasm-pack
- Create new project : cargo new rust_wasm_functions
- Add dependencies :
    - cargo add wasm-bindgen
- Update Cargo.toml :
    [lib]
    crate-type = ["cdylib", "rlib"]
- Compile to web : wasm-pack build --target web
    - This will result in a pkg folder with a wasm file
- Comment out or remove .gitignore in pkg directory, so the pkg will get loaded to github (rust_wasm_functions/pkg/.gitignore)

## Maintenance
TODO

# Run
## On MacOS
- yarn start
- 
