self:
{
  config,
  lib,
  pkgs,
  ...
}:

let
  cfg = config.programs.ctrlpad-desktop;
in
{
  options.programs.ctrlpad-desktop = {
    enable = lib.mkEnableOption "the CtrlPad desktop configuration app";

    package = lib.mkPackageOption self.packages.${pkgs.stdenv.hostPlatform.system} "ctrlpad-desktop" {
      pkgsText = "the CtrlPad desktop flake";
    };
  };

  config = lib.mkIf cfg.enable {
    hardware.bluetooth.enable = lib.mkDefault true;

    environment.systemPackages = [ cfg.package ];
  };
}
