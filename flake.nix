{
  description = "CtrlPad desktop - Configuration app for the CtrlPad";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs =
    { self, nixpkgs }:
    let
      systems = [
        "x86_64-linux"
        "aarch64-linux"
      ];

      forAllSystems =
        f: nixpkgs.lib.genAttrs systems (system: f nixpkgs.legacyPackages.${system});
    in
    {
      packages = forAllSystems (pkgs: rec {
        ctrlpad-desktop = pkgs.callPackage ./nix/package.nix { };
        default = ctrlpad-desktop;
      });

      overlays.default = final: _prev: {
        ctrlpad-desktop = final.callPackage ./nix/package.nix { };
      };

      nixosModules = rec {
        ctrlpad-desktop = import ./nix/module.nix self;
        default = ctrlpad-desktop;
      };

      formatter = forAllSystems (pkgs: pkgs.nixfmt-tree);
    };
}
