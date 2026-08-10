{
  lib,
  rustPlatform,
  cargo-tauri,
  nodejs,
  pnpm_10,
  fetchPnpmDeps,
  pnpmConfigHook,
  pkg-config,
  wrapGAppsHook3,
  dbus,
  glib-networking,
  libsoup_3,
  openssl,
  webkitgtk_4_1,
  version ? (lib.importJSON ../package.json).version,
}:

rustPlatform.buildRustPackage (finalAttrs: {
  pname = "ctrlpad-desktop";
  inherit version;

  src = lib.fileset.toSource {
    root = ../.;
    fileset = lib.fileset.unions [
      ../components.json
      ../index.html
      ../package.json
      ../pnpm-lock.yaml
      ../README.md
      ../tsconfig.json
      ../tsconfig.node.json
      ../vite.config.ts
      ../public
      ../src
      (lib.fileset.difference ../src-tauri (
        lib.fileset.unions [
          (lib.fileset.maybeMissing ../src-tauri/target)
          (lib.fileset.maybeMissing ../src-tauri/gen/schemas)
        ]
      ))
    ];
  };

  pnpmDeps = fetchPnpmDeps {
    inherit (finalAttrs) pname version src;
    pnpm = pnpm_10;
    fetcherVersion = 4;
    hash = "sha256-LwtoO9lE83NIfJaI13ioLEKaN/xgQjcfKOJ1Y8AEk04=";
  };

  cargoRoot = "src-tauri";
  buildAndTestSubdir = finalAttrs.cargoRoot;
  cargoLock.lockFile = ../src-tauri/Cargo.lock;

  nativeBuildInputs = [
    cargo-tauri.hook
    nodejs
    pnpm_10
    pnpmConfigHook
    pkg-config
    wrapGAppsHook3
  ];

  buildInputs = [
    dbus 
    glib-networking
    libsoup_3
    openssl
    webkitgtk_4_1
  ];

  meta = {
    description = ''
      The desktop companion application for the CtrlPad. Connect to your device
      over Bluetooth to arrange the button layout, assign an action to every key
      and manage the rest of your device settings.
    '';
    homepage = "https://github.com/ctrlpad/desktop";
    license = lib.licenses.mit;
    mainProgram = "ctrlpad-desktop";
    platforms = lib.platforms.linux;
  };
})
