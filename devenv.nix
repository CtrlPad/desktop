{ pkgs, lib, config, inputs, devenv-zsh, ... }:

{
  imports = [ devenv-zsh.plugin ];
  zsh.enable = true;

  languages.rust.enable = true;
  packages = with pkgs; [
    wrapGAppsHook4
    gtk3
    glib
    webkitgtk_4_1
    libsoup_3
    pkg-config
    nodejs
    pnpm
    figlet
    lolcat
  ];

  scripts = {
    "tauri:dev".exec = "pnpm tauri dev";
    "tauri:build".exec = "pnpm tauri build";
    "tauri:info".exec = "pnpm tauri info";
  };

  enterShell = ''
    export XDG_DATA_DIRS="/run/current-system/sw/share:$GSETTINGS_SCHEMAS_PATH" 
    echo
    figlet -f slant "ctrlPad" | lolcat -p 1
    echo
  '';
}
