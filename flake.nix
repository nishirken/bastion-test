{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};

        packageName = "bastion-test";
      in {
        defaultPackage = self.packages.${system}.${packageName};

        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodePackages.typescript-language-server
            nodejs-16_x
          ];
          shellHook = ''
            ln -s ${pkgs.chromium} ./chromium
          '';
        };
      });
}

