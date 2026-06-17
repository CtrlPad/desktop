#[tauri::command]
fn get_xdg_data_dirs() -> String {
    std::env::var(String::from("XDG_DATA_DIRS")).unwrap_or(String::from(""))
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .invoke_handler(tauri::generate_handler![get_xdg_data_dirs])
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_blec::init())
        .plugin(tauri_plugin_opener::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
